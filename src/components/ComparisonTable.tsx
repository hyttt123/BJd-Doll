import type { Body } from '../types';

interface Props {
  bodies: Body[];
  selected: string[];
  onToggle: (id: string) => void;
}

export default function ComparisonTable({ bodies, selected, onToggle }: Props) {
  const selectedBodies = bodies.filter((b) => selected.includes(b.id));

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-sm">体型对比（最多选3个）</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {bodies.map((b) => (
            <button
              key={b.id}
              onClick={() => onToggle(b.id)}
              disabled={selected.length >= 3 && !selected.includes(b.id)}
              className={`text-xs px-2 py-1 rounded-full transition-colors ${
                selected.includes(b.id)
                  ? 'bg-pink-500 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 disabled:opacity-40'
              }`}
            >
              {b.name}
            </button>
          ))}
        </div>
      </div>

      {selectedBodies.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-700/50">
                <th className="text-left px-4 py-2 text-xs text-gray-500 w-24">参数</th>
                {selectedBodies.map((b) => (
                  <th key={b.id} className="px-4 py-2 text-center font-bold">{b.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['品牌', 'brand'],
                ['尺寸', 'scale'],
                ['身高', 'height', 'cm'],
                ['胸围', 'chest', 'cm'],
                ['腰围', 'waist', 'cm'],
                ['臀围', 'hip', 'cm'],
                ['肩宽', 'shoulderWidth', 'cm'],
                ['臂长', 'armLength', 'cm'],
                ['腿长', 'legLength', 'cm'],
                ['脚长', 'footLength', 'cm'],
                ['头围', 'headCirc', 'cm'],
                ['体重', 'weight'],
                ['材质', 'material'],
                ['眼珠', 'eyeSize'],
                ['人气', 'popularity'],
                ['价格', 'priceRange'],
              ].map((row, i) => (
                <tr key={i} className="border-t border-gray-100 dark:border-gray-700">
                  <td className="px-4 py-2 text-gray-500 text-xs font-medium">{row[0]}</td>
                  {selectedBodies.map((b) => (
                    <td key={b.id} className="px-4 py-2 text-center">
                      {row[2] ? `${b[row[1] as keyof Body]}${row[2]}` : String(b[row[1] as keyof Body] ?? '-')}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
