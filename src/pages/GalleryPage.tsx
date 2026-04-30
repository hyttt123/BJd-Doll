import { useState } from 'react';
import { Link } from 'react-router-dom';
import { combinations } from '../data/combinations';
import { bodies } from '../data/bodies';
import { heads } from '../data/heads';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { combinationImages } from '../data/images';

const genders = ['全部', 'male', 'female', 'unisex'];
const ageStyles = ['全部', '成年', '少年', '少女', '幼儿'];

export default function GalleryPage() {
  const [gender, setGender] = useState('全部');
  const [age, setAge] = useState('全部');

  const filtered = combinations.filter((c) => {
    if (gender !== '全部' && c.gender !== gender) return false;
    if (age !== '全部' && c.ageStyle !== age) return false;
    return true;
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold">🖼️ 搭配图鉴</h1>
        <p className="text-sm text-gray-500 mt-1">不同体型 + 头型的组合展示，直观感受搭配效果</p>
        <p className="text-xs text-gray-400 mt-1">💡 将你的图片放入 public/images/gallery/ 目录即可替换占位图</p>
      </div>

      <div className="flex gap-2">
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="text-sm px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        >
          {genders.map((g) => (
            <option key={g} value={g}>{g === '全部' ? '全部性别' : g === 'male' ? '男' : g === 'female' ? '女' : '中性'}</option>
          ))}
        </select>
        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="text-sm px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        >
          {ageStyles.map((a) => (
            <option key={a} value={a}>{a === '全部' ? '全部年龄' : a}</option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((combo) => {
          const body = bodies.find((b) => b.id === combo.bodyId);
          const head = heads.find((h) => h.id === combo.headId);
          const img = combinationImages[combo.id];

          return (
            <div
              key={combo.id}
              id={combo.id}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
            >
              {img ? (
                <img src={img} alt={combo.style} className="w-full aspect-[4/3] object-cover" />
              ) : (
                <ImagePlaceholder
                  label={`${body?.scale || '?'} / ${combo.style}`}
                  className="w-full aspect-[4/3]"
                />
              )}

              <div className="p-4 space-y-2">
                <div className="flex items-start justify-between">
                  <h3 className="font-bold">{combo.style}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    combo.gender === 'male' ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300' :
                    combo.gender === 'female' ? 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300' :
                    'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300'
                  }`}>
                    {combo.gender === 'male' ? '男' : combo.gender === 'female' ? '女' : '中性'}
                  </span>
                </div>

                <p className="text-sm text-gray-500">{combo.description}</p>
                <p className="text-xs text-gray-400">角色类型：{combo.characterType}</p>

                <div className="flex gap-3 pt-2 border-t border-gray-100 dark:border-gray-700">
                  {body && (
                    <Link to={`/bodies/${body.id}`} className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                      📐 {body.name}
                    </Link>
                  )}
                  {head && (
                    <Link to={`/heads/${head.id}`} className="text-xs text-green-600 dark:text-green-400 hover:underline">
                      👤 {head.name}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">没有匹配的搭配方案</div>
      )}
    </div>
  );
}
