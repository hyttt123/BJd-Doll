import { useParams, Link } from 'react-router-dom';
import { bodies } from '../data/bodies';
import { heads } from '../data/heads';
import { combinations } from '../data/combinations';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { bodyImages } from '../data/images';

export default function BodyDetailPage() {
  const { id } = useParams<{ id: string }>();
  const body = bodies.find((b) => b.id === id);

  if (!body) {
    return (
      <div className="text-center py-20">
        <p className="text-gray-400 text-lg">体型未找到</p>
        <Link to="/bodies" className="text-pink-500 hover:underline mt-2 inline-block">返回体型百科</Link>
      </div>
    );
  }

  const compatibleHeads = heads.filter((h) => h.compatibleBodyIds.includes(body.id));
  const relatedCombos = combinations.filter((c) => c.bodyId === body.id);
  const img = bodyImages[body.id];

  const popLabel: Record<string, string> = { '火爆': '🔥 火爆', '热门': '⭐ 热门', '常见': '📋 常见', '冷门': '❄️ 冷门' };

  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-12">
      {/* 面包屑 */}
      <div className="text-sm text-gray-500">
        <Link to="/bodies" className="hover:text-pink-500">体型百科</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-800 dark:text-gray-200">{body.name}</span>
      </div>

      {/* 头部信息 */}
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          {img ? (
            <img src={img} alt={body.name} className="w-full rounded-xl object-cover" />
          ) : (
            <ImagePlaceholder label={`${body.scale} / ${body.height}cm`} className="w-full aspect-square" />
          )}
        </div>
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold">{body.name}</h1>
            <p className="text-gray-500">{body.brand} ({body.brandCountry})</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 text-sm font-medium">{body.scale}</span>
            <span className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm">{body.gender === 'male' ? '男体' : body.gender === 'female' ? '女体' : '中性'}</span>
            <span className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-sm">{popLabel[body.popularity] || body.popularity}</span>
          </div>
          <div className="text-sm space-y-1">
            <p className="text-green-600 dark:text-green-400">✅ {body.pros}</p>
            <p className="text-red-500 dark:text-red-400">⚠️ {body.cons}</p>
          </div>
          <p className="text-sm text-gray-500">💰 参考价格：{body.priceRange}</p>
        </div>
      </div>

      {/* 详细参数 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="font-bold text-lg mb-4">📏 详细参数</h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 text-sm">
          {[
            ['身高', `${body.height} cm`],
            ['胸围', `${body.chest} cm`],
            ['腰围', `${body.waist} cm`],
            ['臀围', `${body.hip} cm`],
            ['肩宽', `${body.shoulderWidth} cm`],
            ['臂长', `${body.armLength} cm`],
            ['手长', body.handLength ? `${body.handLength} cm` : '-'],
            ['腿长', `${body.legLength} cm`],
            ['大腿围', body.thighGirth ? `${body.thighGirth} cm` : '-'],
            ['脚长', `${body.footLength} cm`],
            ['头围', body.headCirc ? `${body.headCirc} cm` : '-'],
            ['颈围', body.neckCirc ? `${body.neckCirc} cm` : '-'],
            ['眼珠', body.eyeSize],
            ['体重', body.weight],
            ['材质', body.material],
            ['适合角色', body.bestFor],
          ].map(([label, value]) => (
            <div key={label} className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-3 text-center">
              <div className="text-xs text-gray-500 mb-1">{label}</div>
              <div className="font-bold">{value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 适配头型 */}
      {compatibleHeads.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="font-bold text-lg mb-4">🔗 适配头型</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {compatibleHeads.map((h) => (
              <Link
                key={h.id}
                to={`/heads/${h.id}`}
                className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
              >
                <div className="flex-1">
                  <div className="font-medium text-sm">{h.name}</div>
                  <div className="text-xs text-gray-500">头围 {h.headCirc}cm | 眼珠 {h.eyeSize}</div>
                </div>
                <span className="text-xs text-gray-400">{h.brand}</span>
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
              const head = heads.find((h) => h.id === c.headId);
              return (
                <Link
                  key={c.id}
                  to={`/gallery#${c.id}`}
                  className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                >
                  <div className="font-medium text-sm">{c.style}</div>
                  <div className="text-xs text-gray-500">{c.description.slice(0, 60)}...</div>
                  {head && <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">+ {head.name}</div>}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
