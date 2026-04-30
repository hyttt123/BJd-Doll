import { guideSteps } from '../data/guide';

export default function GuidePage() {
  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold">🚀 新手指南</h1>
        <p className="text-sm text-gray-500 mt-1">从零开始，6步成为BJD入门玩家</p>
      </div>

      <div className="space-y-6">
        {guideSteps.map((step) => (
          <div
            key={step.step}
            className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold text-lg">
                {step.step}
              </div>
              <h2 className="font-bold text-lg">{step.title}</h2>
            </div>

            <div className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {step.content}
            </div>

            {step.tips.length > 0 && (
              <div className="mt-4 p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900/30">
                <div className="text-xs font-medium text-yellow-700 dark:text-yellow-300 mb-2">💡 小贴士</div>
                <ul className="space-y-1">
                  {step.tips.map((tip, i) => (
                    <li key={i} className="text-sm text-yellow-800 dark:text-yellow-200 flex gap-2">
                      <span>•</span>
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-pink-50 dark:bg-pink-900/20 rounded-xl p-6 text-center">
        <p className="text-lg font-bold text-pink-600 dark:text-pink-400">🎉 恭喜你完成了BJD入门学习！</p>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
          现在可以自信地开始你的BJD之旅了。记住：先找到你喜欢的那只娃，其他都是次要的。
        </p>
      </div>
    </div>
  );
}
