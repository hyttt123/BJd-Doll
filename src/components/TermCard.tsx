import type { GlossaryTerm } from '../types';

interface Props {
  term: GlossaryTerm;
}

const categoryColors: Record<string, string> = {
  '基础称呼': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  '尺寸相关': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  '皮肤颜色': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  '妆面类型': 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
  '技法材料': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  '送妆流程': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  '配件相关': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
  '圈内用语': 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
};

export default function TermCard({ term }: Props) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-bold text-sm">{term.term}</h3>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColors[term.category] || 'bg-gray-100'}`}>
          {term.category}
        </span>
      </div>
      {term.aliases.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-2">
          {term.aliases.map((a) => (
            <span key={a} className="text-xs text-gray-400">AKA: {a}</span>
          ))}
        </div>
      )}
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{term.definition}</p>
    </div>
  );
}
