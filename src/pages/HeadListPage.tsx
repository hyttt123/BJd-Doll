import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { heads } from '../data/heads';
import HeadCard from '../components/HeadCard';

const ageStyles = ['全部', '幼儿', '少年', '少女', '成年'];

export default function HeadListPage() {
  const navigate = useNavigate();
  const [age, setAge] = useState('全部');
  const [brand, setBrand] = useState('全部');

  const brands = useMemo(() => {
    const bs = [...new Set(heads.map((h) => h.brand))];
    return ['全部', ...bs];
  }, []);

  const filtered = useMemo(() => {
    return heads.filter((h) => {
      if (age !== '全部' && h.ageStyle !== age) return false;
      if (brand !== '全部' && h.brand !== brand) return false;
      return true;
    });
  }, [age, brand]);

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold">👤 头型百科</h1>
        <p className="text-sm text-gray-500 mt-1">各品牌热门头型 + 适配体型关系</p>
      </div>

      <div className="flex gap-2">
        <select
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="text-sm px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        >
          {ageStyles.map((a) => (
            <option key={a} value={a}>{a === '全部' ? '全部年龄' : a}</option>
          ))}
        </select>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="text-sm px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
        >
          {brands.map((b) => (
            <option key={b} value={b}>{b === '全部' ? '全部品牌' : b}</option>
          ))}
        </select>
      </div>

      <p className="text-sm text-gray-500">共 {filtered.length} 个头型</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((h) => (
          <HeadCard
            key={h.id}
            head={h}
            onClick={() => navigate(`/heads/${h.id}`)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">没有匹配的结果</div>
      )}
    </div>
  );
}
