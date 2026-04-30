import type { Body } from '../types';

interface Props {
  body: Body;
  onClick?: () => void;
}

const scaleColors: Record<string, string> = {
  '12分': 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  '8分': 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
  '6分': 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  '4分': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  '3分': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300',
  '叔': 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  '2分': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
};

const popColors: Record<string, string> = {
  '火爆': 'text-red-500',
  '热门': 'text-orange-500',
  '常见': 'text-gray-500',
  '冷门': 'text-blue-500',
};

export default function BodyCard({ body, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700
        p-4 hover:shadow-lg hover:border-pink-300 dark:hover:border-pink-500 transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-sm">{body.name}</h3>
          <p className="text-xs text-gray-500">{body.brand} ({body.brandCountry})</p>
        </div>
        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${scaleColors[body.scale] || 'bg-gray-100'}`}>
          {body.scale}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 text-xs mb-3">
        <div><span className="text-gray-400">身高</span> <span className="font-medium">{body.height}cm</span></div>
        <div><span className="text-gray-400">胸围</span> <span className="font-medium">{body.chest}cm</span></div>
        <div><span className="text-gray-400">腰围</span> <span className="font-medium">{body.waist}cm</span></div>
      </div>

      <div className="flex flex-wrap gap-1 mb-3">
        {body.tags.slice(0, 3).map((t) => (
          <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs">
        <span className={`font-medium ${popColors[body.popularity] || ''}`}>{body.popularity}</span>
        <span className="text-gray-500">{body.priceRange}</span>
      </div>
    </div>
  );
}
