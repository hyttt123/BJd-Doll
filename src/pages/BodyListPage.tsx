import { useState, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { bodies } from '../data/bodies';
import BodyCard from '../components/BodyCard';
import ComparisonTable from '../components/ComparisonTable';

const scales = ['全部', '12分', '8分', '6分', '4分', '3分', '叔', '2分'];
const brands = ['全部', 'Volks', 'Luts', '龙魂', 'DollZone', '云猜', 'UF Doll', 'Piccodo'];
const genders = [
  { value: '全部', label: '全部' },
  { value: 'male', label: '男体' },
  { value: 'female', label: '女体' },
  { value: 'unisex', label: '中性' },
];

export default function BodyListPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [scale, setScale] = useState(searchParams.get('scale') || '全部');
  const [brand, setBrand] = useState('全部');
  const [gender, setGender] = useState('全部');
  const [compare, setCompare] = useState<string[]>([]);
  const [showCompare, setShowCompare] = useState(false);

  const filtered = useMemo(() => {
    return bodies.filter((b) => {
      if (scale !== '全部' && b.scale !== scale) return false;
      if (brand !== '全部' && b.brand !== brand) return false;
      if (gender !== '全部' && b.gender !== gender) return false;
      return true;
    });
  }, [scale, brand, gender]);

  const toggleCompare = (id: string) => {
    setCompare((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id].slice(0, 3)
    );
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      <div>
        <h1 className="text-2xl font-bold">📐 体型百科</h1>
        <p className="text-sm text-gray-500 mt-1">不同尺寸、品牌的BJD体型参数全对比</p>
      </div>

      {/* 筛选 + 对比按钮 */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex-1 flex flex-wrap gap-2">
          {/* 尺寸 */}
          <select
            value={scale}
            onChange={(e) => setScale(e.target.value)}
            className="text-sm px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          >
            {scales.map((s) => (
              <option key={s} value={s}>{s === '全部' ? '全部尺寸' : s}</option>
            ))}
          </select>

          {/* 品牌 */}
          <select
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="text-sm px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          >
            {brands.map((b) => (
              <option key={b} value={b}>{b === '全部' ? '全部品牌' : b}</option>
            ))}
          </select>

          {/* 性别 */}
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="text-sm px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800"
          >
            {genders.map((g) => (
              <option key={g.value} value={g.value}>{g.label}</option>
            ))}
          </select>
        </div>

        <button
          onClick={() => setShowCompare(!showCompare)}
          className={`text-sm px-4 py-1.5 rounded-lg font-medium transition-colors ${
            showCompare
              ? 'bg-pink-500 text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200'
          }`}
        >
          体型对比 {compare.length > 0 && `(${compare.length})`}
        </button>
      </div>

      {/* 结果计数 */}
      <p className="text-sm text-gray-500">共 {filtered.length} 个体型</p>

      {/* 对比表 */}
      {showCompare && (
        <ComparisonTable bodies={filtered} selected={compare} onToggle={toggleCompare} />
      )}

      {/* 体型列表 */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((b) => (
          <BodyCard
            key={b.id}
            body={b}
            onClick={() => navigate(`/bodies/${b.id}`)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-gray-400">没有匹配的结果</div>
      )}
    </div>
  );
}
