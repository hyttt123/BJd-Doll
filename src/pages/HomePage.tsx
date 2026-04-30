import { Link } from 'react-router-dom';
import { guideSteps } from '../data/guide';

const quickLinks = [
  { path: '/bodies', title: '📐 体型百科', desc: '不同尺寸、品牌体型参数全对比，找到最适合你的素体', color: 'from-blue-500 to-cyan-500' },
  { path: '/heads', title: '👤 头型百科', desc: '热门头型+适配体型关系，头身搭配不再纠结', color: 'from-green-500 to-emerald-500' },
  { path: '/gallery', title: '🖼️ 搭配图鉴', desc: '各种体×头组合效果展示，直观感受搭配风格', color: 'from-purple-500 to-pink-500' },
  { path: '/glossary', title: '📖 黑话词典', desc: 'BJD圈术语一网打尽，从"壮士"到"妆则"全解释', color: 'from-orange-500 to-red-500' },
  { path: '/guide', title: '🚀 新手指南', desc: '从零开始6步走，选娃→购买→配件→送妆→养护', color: 'from-teal-500 to-green-500' },
];

const scaleCards = [
  { scale: '12分', height: '~15cm', desc: '掌心大小，花费最低', icon: '🫳', link: '/bodies?scale=12分' },
  { scale: '6分', height: '~30cm', desc: '儿童体型，可爱便携', icon: '👶', link: '/bodies?scale=6分' },
  { scale: '4分', height: '~45cm', desc: '⭐新手首选，配件最多', icon: '⭐', link: '/bodies?scale=4分' },
  { scale: '3分', height: '~60cm', desc: '成人比例，气场十足', icon: '🧍', link: '/bodies?scale=3分' },
  { scale: '叔', height: '70cm+', desc: '成熟男性，霸气外露', icon: '💪', link: '/bodies?scale=叔' },
];

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-12">
      {/* Hero */}
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold mb-3">
          <span className="text-pink-600 dark:text-pink-400">BJD</span> 入坑一站式 Wiki
        </h1>
        <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
          从什么都不懂的新人，到自信入坑的新手。<br />
          把所有信息差拉回同一水平。
        </p>
      </div>

      {/* 尺寸速览 */}
      <div>
        <h2 className="font-bold text-lg mb-3">📏 尺寸速览 —— 选对大小第一步</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {scaleCards.map((s) => (
            <Link
              key={s.scale}
              to={s.link}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 text-center hover:shadow-lg hover:border-pink-300 dark:hover:border-pink-500 transition-all"
            >
              <div className="text-2xl mb-2">{s.icon}</div>
              <div className="font-bold text-sm">{s.scale}</div>
              <div className="text-xs text-gray-500">{s.height}</div>
              <div className="text-xs text-gray-400 mt-1">{s.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* 功能导航 */}
      <div>
        <h2 className="font-bold text-lg mb-3">🗺️ 功能导航</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`bg-gradient-to-r ${link.color} text-white rounded-xl p-5
                hover:shadow-lg hover:scale-[1.02] transition-all`}
            >
              <h3 className="font-bold text-lg mb-1">{link.title}</h3>
              <p className="text-sm text-white/80">{link.desc}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* 新手第一步 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="font-bold text-lg mb-4">🎯 新手第一步看这里</h2>
        <div className="space-y-3">
          {guideSteps.slice(0, 4).map((step) => (
            <div key={step.step} className="flex gap-3">
              <div className="flex-shrink-0 w-7 h-7 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>
              <div>
                <h4 className="font-medium text-sm">{step.title}</h4>
                <p className="text-xs text-gray-500 line-clamp-2">{step.content}</p>
              </div>
            </div>
          ))}
        </div>
        <Link
          to="/guide"
          className="inline-block mt-4 text-sm text-pink-600 dark:text-pink-400 font-medium hover:underline"
        >
          查看完整指南 →
        </Link>
      </div>

      {/* 常用黑话速查 */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-lg">💬 常用黑话速查</h2>
          <Link to="/glossary" className="text-sm text-pink-600 dark:text-pink-400 hover:underline">
            全部词典 →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-2 text-sm">
          <div><span className="font-medium text-pink-600">BJD</span> — 球关节娃娃</div>
          <div><span className="font-medium text-pink-600">壮士</span> — 化妆师（妆师谐音）</div>
          <div><span className="font-medium text-pink-600">素头</span> — 无妆面的原始娃头</div>
          <div><span className="font-medium text-pink-600">送妆</span> — 寄娃头给壮士化妆</div>
          <div><span className="font-medium text-pink-600">自由妆</span> — 壮士自由发挥的妆面</div>
          <div><span className="font-medium text-pink-600">妆则</span> — 壮士的接妆规则书</div>
          <div><span className="font-medium text-pink-600">分</span> — 尺寸单位，180÷分=身高</div>
          <div><span className="font-medium text-pink-600">普肌</span> — 最自然的肤色</div>
        </div>
      </div>
    </div>
  );
}
