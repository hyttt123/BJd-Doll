export interface Body {
  id: string;
  name: string;
  brand: string;
  brandCountry: string;
  /** 分属: '12分' | '8分' | '6分' | '4分' | '3分' | '叔' | '2分' */
  scale: string;
  /** 全套身高 cm */
  height: number;
  /** 适合的性别风格: 'male' | 'female' | 'unisex' */
  gender: string;
  /** 胸围 cm */
  chest: number;
  /** 腰围 cm */
  waist: number;
  /** 臀围 cm */
  hip: number;
  /** 肩宽 cm */
  shoulderWidth: number;
  /** 臂长 cm */
  armLength: number;
  /** 手长 cm */
  handLength: number | null;
  /** 腿长 cm */
  legLength: number | null;
  /** 大腿围 cm */
  thighGirth: number | null;
  /** 脚长 cm */
  footLength: number | null;
  /** 头围 cm */
  headCirc: number | null;
  /** 颈围 cm */
  neckCirc: number | null;
  /** 体重参考 */
  weight: string;
  /** 材质 */
  material: string;
  /** 风格标签 */
  tags: string[];
  /** 眼珠尺寸 */
  eyeSize: string;
  /** 优点 */
  pros: string;
  /** 缺点 */
  cons: string;
  /** 适合什么样的角色 */
  bestFor: string;
  /** 人气: '火爆' | '热门' | '常见' | '冷门' */
  popularity: string;
  /** 参考价格区间 */
  priceRange: string;
}

export interface Head {
  id: string;
  name: string;
  brand: string;
  /** 头围 cm */
  headCirc: number;
  /** 颈孔直径 mm */
  neckHole: number | null;
  /** 适配眼珠尺寸 */
  eyeSize: string;
  /** 风格标签 */
  tags: string[];
  /** 适配体型 ID 列表 */
  compatibleBodyIds: string[];
  /** 适合年龄感 */
  ageStyle: string;
  /** 脸型描述 */
  faceShape: string;
  /** 人气 */
  popularity: string;
}

export interface GlossaryTerm {
  term: string;
  aliases: string[];
  category: string;
  definition: string;
}

export interface GuideStep {
  step: number;
  title: string;
  content: string;
  tips: string[];
}

export interface Combination {
  id: string;
  bodyId: string;
  headId: string;
  style: string;
  characterType: string;
  description: string;
  /** 适合的性别: 'male' | 'female' | 'unisex' */
  gender: string;
  /** 适合的年龄感 */
  ageStyle: string;
}
