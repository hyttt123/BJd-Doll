import { useState, useEffect, useRef } from 'react';
import { bodies } from '../data/bodies';
import { heads } from '../data/heads';
import { glossaryTerms } from '../data/glossary';
import { useNavigate } from 'react-router-dom';

interface SearchResult {
  type: 'body' | 'head' | 'term';
  label: string;
  desc: string;
  path: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    if (query.length < 1) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    const r: SearchResult[] = [
      ...bodies
        .filter((b) => b.name.toLowerCase().includes(q) || b.brand.toLowerCase().includes(q) || b.scale.includes(q) || b.tags.some((t) => t.includes(q)))
        .slice(0, 5)
        .map((b) => ({ type: 'body' as const, label: `${b.name} (${b.brand})`, desc: `${b.scale} | 身高${b.height}cm | ${b.gender === 'male' ? '男' : b.gender === 'female' ? '女' : '中性'}`, path: `/bodies/${b.id}` })),
      ...heads
        .filter((h) => h.name.toLowerCase().includes(q) || h.brand.toLowerCase().includes(q) || h.tags.some((t) => t.includes(q)))
        .slice(0, 4)
        .map((h) => ({ type: 'head' as const, label: `${h.name} (${h.brand})`, desc: `头围${h.headCirc}cm | 眼珠${h.eyeSize} | ${h.ageStyle}`, path: `/heads/${h.id}` })),
      ...glossaryTerms
        .filter((t) => t.term.includes(q) || t.aliases.some((a) => a.includes(q)) || t.definition.includes(q))
        .slice(0, 4)
        .map((t) => ({ type: 'term' as const, label: t.term, desc: t.definition.slice(0, 50) + '...', path: '/glossary' })),
    ];
    setResults(r);
  }, [query]);

  return (
    <div ref={ref} className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => { setQuery(e.target.value); setOpen(true); }}
        onFocus={() => setOpen(true)}
        placeholder="搜索体型、头型、术语..."
        className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-700 text-sm
          focus:ring-2 focus:ring-pink-400 focus:border-transparent outline-none
          placeholder-gray-400 dark:placeholder-gray-500"
      />
      {open && query.length >= 1 && (
        <div className="absolute top-full mt-1 w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 max-h-80 overflow-y-auto z-50">
          {results.length === 0 ? (
            <div className="p-3 text-sm text-gray-400">未找到结果</div>
          ) : (
            results.map((r, i) => (
              <button
                key={i}
                onClick={() => { navigate(r.path); setOpen(false); setQuery(''); }}
                className="w-full text-left px-4 py-2.5 hover:bg-pink-50 dark:hover:bg-pink-900/20 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-1.5 py-0.5 rounded ${
                    r.type === 'body' ? 'bg-blue-100 text-blue-700' :
                    r.type === 'head' ? 'bg-green-100 text-green-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>
                    {r.type === 'body' ? '体型' : r.type === 'head' ? '头型' : '术语'}
                  </span>
                  <span className="text-sm font-medium">{r.label}</span>
                </div>
                <div className="text-xs text-gray-500 mt-0.5 ml-1">{r.desc}</div>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
