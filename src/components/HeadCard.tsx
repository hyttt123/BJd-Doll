import type { Head } from '../types';

interface Props {
  head: Head;
  onClick?: () => void;
}

const popColors: Record<string, string> = {
  '火爆': 'text-red-500',
  '热门': 'text-orange-500',
  '常见': 'text-gray-500',
  '冷门': 'text-blue-500',
};

export default function HeadCard({ head, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700
        p-4 hover:shadow-lg hover:border-green-300 dark:hover:border-green-500 transition-all cursor-pointer"
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="font-bold text-sm">{head.name}</h3>
          <p className="text-xs text-gray-500">{head.brand}</p>
        </div>
        <span className="text-xs px-2 py-0.5 rounded-full font-medium bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
          {head.ageStyle}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
        <div><span className="text-gray-400">头围</span> <span className="font-medium">{head.headCirc}cm</span></div>
        <div><span className="text-gray-400">眼珠</span> <span className="font-medium">{head.eyeSize}</span></div>
        <div><span className="text-gray-400">颈孔</span> <span className="font-medium">{head.neckHole ?? '?'}mm</span></div>
        <div><span className="text-gray-400">适配数量</span> <span className="font-medium">{head.compatibleBodyIds.length}个体型</span></div>
      </div>

      <div className="flex flex-wrap gap-1 mb-3">
        {head.tags.slice(0, 3).map((t) => (
          <span key={t} className="text-xs px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between text-xs">
        <span className="text-gray-500">{head.faceShape}</span>
        <span className={`font-medium ${popColors[head.popularity] || ''}`}>{head.popularity}</span>
      </div>
    </div>
  );
}
