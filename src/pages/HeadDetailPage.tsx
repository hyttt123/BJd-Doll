import { useParams, Link } from 'react-router-dom';
import { heads } from '../data/heads';
import { bodies } from '../data/bodies';
import { combinations } from '../data/combinations';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { headImages } from '../data/images';

export default function HeadDetailPage() {
  const { id } = useParams<{ id: string }>();
  const head = heads.find((h) => h.id === id);

  if (!head) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-lg">头型未找到</p>
        <Link to="/heads" className="text-pink-500 hover:underline mt-2 inline-block">返回头型百科</Link>
      </div>
    );
  }

  const compatibleBodies = bodies.filter((b) => head.compatibleBodyIds.includes(b.id));
  const relatedCombos = combinations.filter((c) => c.headId === head.id);
  const img = headImages[head.id];
  const popLabel: Record<string, string> = { '火爆': '🔥 火爆', '热门': '⭐ 热门', '常见': '📋 常见', '冷门': '❄️ 冷门' };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      <div className="text-sm text-gray-500">
        <Link to="/heads" className="hover:text-pink-500">头型百科</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 dark:text-gray-200">{head.name}</span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          {img ? (
            <img src={img} alt={head.name} className="w-full rounded-xl object-cover" />
          ) : (
            <ImagePlaceholder label={`${head.ageStyle} / ${head.headCirc}cm`} className="w-full aspect-square" />
          )}
        </div>
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold">{head.name}</h1>
            <p className="text-gray-500">{head.brand}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm font-medium">{head.ageStyle}</span>
            <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm">{popLabel[head.popularity] || head.popularity}</span>
          </div>
          <p className="text-sm text-gray-500">{head.faceShape}</p>
        </div>
      </div>

      {/* 头型参数 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="font-bold text-lg mb-4">📏 头型参数</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-sm">
          {[
            ['头围', `${head.headCirc} cm`],
            ['颈孔直径', head.neckHole ? `${head.neckHole} mm` : '-'],
            ['适配眼珠', head.eyeSize],
            ['脸型', head.faceShape],
            ['适合年龄', head.ageStyle],
          ].map(([label, value]) => (
            <div key={label} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">{label}</div>
              <div className="font-bold">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 适配体型 */}
      {compatibleBodies.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="font-bold text-lg mb-4">🔗 适配体型</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {compatibleBodies.map((b) => (
              <Link
                key={b.id}
                to={`/bodies/${b.id}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                <div className="flex-1">
                  <div className="font-medium text-sm">{b.name}</div>
                  <div className="text-xs text-gray-500">{b.scale} | 身高 {b.height}cm | 胸{b.chest} 腰{b.waist}</div>
                </div>
                <span className="text-xs text-gray-400">{b.brand}</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* 搭配推荐 */}
      {relatedCombos.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="font-bold text-lg mb-4">✨ 搭配推荐</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {relatedCombos.map((c) => {
              const body = bodies.find((b) => b.id === c.bodyId);
              return (
                <Link
                  key={c.id}
                  to={`/gallery#${c.id}`}
                  className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                >
                  <div className="font-medium text-sm">{c.style}</div>
                  <div className="text-xs text-gray-500">{c.description.slice(0, 60)}...</div>
                  {body && <div className="text-xs text-blue-600 dark:text-blue-400 mt-1">+ {body.name}</div>}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
