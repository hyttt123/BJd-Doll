import { useState, useMemo } from 'react';
import { glossaryTerms, glossaryCategories } from '../data/glossary';
import TermCard from '../components/TermCard';

export default function GlossaryPage() {
  const [category, setCategory] = useState('全部');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return glossaryTerms.filter((t) => {
      if (category !== '全部' && t.category !== category) return false;
      if (search) {
        const q = search.toLowerCase();
        return t.term.includes(q) || t.aliases.some((a) => a.includes(q)) || t.definition.includes(q);
      }
      return true;
    });
  }, [category, search]);

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold">📖 黑话词典</h1>
        <p className="text-sm text-gray-500 mt-1">BJD圈术语一网打尽，从"壮士"到"吃色"全解释</p>
      </div>

      {/* 搜索 */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="搜索术语..."
        className="w-full max-w-md px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-pink-400"
      />

      {/* 分类筛选 */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setCategory('全部')}
          className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
            category === '全部'
              ? 'bg-pink-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
          }`}
        >
          全部 ({glossaryTerms.length})
        </button>
        {glossaryCategories.map((c) => {
          const count = glossaryTerms.filter((t) => t.category === c).length;
          return (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`text-sm px-3 py-1.5 rounded-full transition-colors ${
                category === c
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
              }`}
            >
              {c} ({count})
            </button>
          );
        })}
      </div>

      <p className="text-sm text-gray-500">共 {filtered.length} 个术语</p>

      {/* 术语卡片 */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((t) => (
          <TermCard key={t.term} term={t} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">没有匹配的术语</div>
      )}
    </div>
  );
}
