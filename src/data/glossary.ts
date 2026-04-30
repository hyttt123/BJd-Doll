import type { GlossaryTerm } from '../types';

export const glossaryTerms: GlossaryTerm[] = [
  // ======== 基础称呼 ========
  { term: 'BJD', aliases: ['球关节娃娃', 'Ball-Jointed Doll'], category: '基础称呼', definition: '球关节娃娃的缩写。全身关节由皮筋/S钩/棉绳串联，可自由摆姿势的树脂人形。' },
  { term: '娃娘/娃爹', aliases: ['娃妈', '娃爸'], category: '基础称呼', definition: '养BJD的玩家，女性称娃娘，男性称娃爹。' },
  { term: '养娃', aliases: ['养'], category: '基础称呼', definition: '拥有和照料BJD的过程，包括买衣服、化妆、拍照等。"我养了三只娃"。' },
  { term: '接娃', aliases: ['接', '入'], category: '基础称呼', definition: '购买BJD。"我接了一只四分女娃"=我买了一只四分尺寸的女性BJD。' },
  { term: '壮士', aliases: ['妆娘', '妆师', '太太'], category: '基础称呼', definition: '给BJD化妆的人。"壮士"是"妆师"的谐音，圈内最通用的称呼。技术好的尊称"太太"。' },
  { term: '人形师', aliases: [], category: '基础称呼', definition: '设计、雕刻BJD原型的人，相当于娃娃的"生父/生母"。知名人形师的作品价格更高。' },
  { term: '素头 / 白煮蛋', aliases: [], category: '基础称呼', definition: '没有妆面的原始娃头。因是单色树脂看起来像剥了壳的鸡蛋而得名。' },
  { term: '官配', aliases: [], category: '基础称呼', definition: '娃娃官方出厂时搭配的妆面、假发、眼珠、衣服等全套配置。' },
  { term: '裸娃', aliases: [], category: '基础称呼', definition: '只有素体+素头，不含妆面、假发、眼珠、衣服等配件。价格最低。' },
  { term: '证箱', aliases: [], category: '基础称呼', definition: '官方证书(证)+官方包装盒(箱)。二手收娃时证箱是证明正版身份的重要凭证。' },
  { term: 'D娃 / Z娃', aliases: ['D版', 'Z版'], category: '基础称呼', definition: 'D=盗版(D版)，Z=正版(Z版)。圈内严厉抵制D娃，大多数壮士拒绝为D娃化妆。' },

  // ======== 尺寸相关 ========
  { term: '分', aliases: [], category: '尺寸相关', definition: 'BJD尺寸的计算方式：180cm ÷ 分数 = 娃的大致身高。如"3分"约60cm，"4分"约45cm，"6分"约30cm。' },
  { term: '叔', aliases: ['叔叔', '70叔', '75叔', '80叔'], category: '尺寸相关', definition: '身高70cm以上的大型BJD，体型为成熟男性。按身高分70叔、75叔、80叔等。' },
  { term: 'SD', aliases: ['Super Dollfie', '3分'], category: '尺寸相关', definition: 'Volks公司的BJD品牌名，也是1/3尺寸（约60cm）的代称。SD10/SD13/SD16/SD17等数字越大体型越高。' },
  { term: 'MSD', aliases: ['Mini Super Dollfie', '4分'], category: '尺寸相关', definition: '4分尺寸（约42-45cm），少年少女体型。人气最高的尺寸，新手首选。' },
  { term: 'YOSD', aliases: ['Yo-SD', '6分'], category: '尺寸相关', definition: '6分尺寸（约26-30cm），幼儿体型。小巧可爱，方便携带。' },

  // ======== 皮肤/颜色 ========
  { term: '普肌', aliases: ['普黄', '正常肌'], category: '皮肤颜色', definition: '最自然百搭的肤色，接近真人肤色。新手建议首选普肌。' },
  { term: '白肌', aliases: [], category: '皮肤颜色', definition: '偏白的肤色，适合日系/韩系风格，比较"仙"。但长时间可能黄化更明显。' },
  { term: '粉普肌', aliases: [], category: '皮肤颜色', definition: '介于白肌和普肌之间带粉色调的肤色，看起来气色好，粉嫩可爱。' },
  { term: '日烧肌', aliases: ['日焼け肌', 'tan肌'], category: '皮肤颜色', definition: '小麦色/古铜色肤色，模拟日晒效果。适合运动系、狂野系角色。' },
  { term: '黄化', aliases: [], category: '皮肤颜色', definition: '树脂随时间氧化变黄。所有树脂BJD都会黄化，只是速度快慢问题。白肌黄化最明显。' },

  // ======== 妆面类型 ========
  { term: '自由妆', aliases: [], category: '妆面类型', definition: '壮士按自己风格自由发挥。你只能提极少要求（≤3条，如冷暖色系、攻受属性）。价格相对低，壮士普遍更愿意接。' },
  { term: '指定妆', aliases: [], category: '妆面类型', definition: '你对妆面有具体要求（眉形、眼妆浓淡、唇色等），壮士按你的描述画。价格更高，要求必须写清楚。' },
  { term: '脑洞妆 / 主题妆', aliases: [], category: '妆面类型', definition: '有特殊设定的妆面，如白化、断眉、精灵、恶魔、吸血鬼等主题。价格视复杂度而定。' },
  { term: '仿妆 / COS妆', aliases: [], category: '妆面类型', definition: '仿制某个动漫/游戏角色的妆面。价格通常是普通妆的2-3倍。需提供清晰参考图。' },
  { term: '官妆', aliases: [], category: '妆面类型', definition: '娃社官方出的妆面。优点是方便省事，缺点是风格固定、不够个性化。' },
  { term: '成本妆', aliases: [], category: '妆面类型', definition: '只收材料成本费的平价妆，多为新人壮士练手积累作品。价格30-100元不等。' },
  { term: '补妆', aliases: [], category: '妆面类型', definition: '在原有妆面上做小幅修补（如补眉毛缺角）。多数壮士不接补妆，因为补不好会越弄越糟。' },

  // ======== 技法材料 ========
  { term: '粉彩妆', aliases: [], category: '技法材料', definition: '用色粉（如申内利尔粉彩）上色，效果柔和自然。最常见的妆面类型。' },
  { term: '丙烯妆 / 线条妆', aliases: [], category: '技法材料', definition: '用丙烯颜料绘制，线条更锐利清晰。适合需要精细线条的风格。' },
  { term: '喷笔妆', aliases: [], category: '技法材料', definition: '用喷笔上妆，妆面均匀细腻，过渡自然。设备成本高，价格偏贵。' },
  { term: '肌理', aliases: [], category: '技法材料', definition: '模拟真人皮肤的质感效果，如毛孔、血管、皮肤纹理。属于进阶技法，加价项目。' },
  { term: '消光', aliases: ['消光漆'], category: '技法材料', definition: '妆前打底+妆后定妆的喷涂工序。必须在晴天操作（湿度低），所以壮士工期以"晴天工作日"计算。' },
  { term: '光油 / 光釉', aliases: [], category: '技法材料', definition: '涂在嘴唇、眼角等局部形成光泽效果的材料。让嘴唇看起来水润，眼睛有神。' },
  { term: '面纹 / 图腾', aliases: [], category: '技法材料', definition: '脸上的花纹、刺青图案。如精灵纹身、部落图腾。属于加价项目，按复杂度收费80-850元。' },
  { term: '吃色 / 染色', aliases: [], category: '技法材料', definition: '长时间带妆或用深色假发导致树脂被染色，难以去除。防吃色需在戴假发前给娃头套上"头套"（硅胶套）。' },
  { term: '卸妆', aliases: ['稀释', '洗妆'], category: '技法材料', definition: '用稀释液将旧妆面洗掉，恢复素头状态。费用约30-100元。' },

  // ======== 送妆流程 ========
  { term: '送妆', aliases: [], category: '送妆流程', definition: '把娃头寄给壮士，让壮士化妆的整个过程。' },
  { term: '接妆', aliases: [], category: '送妆流程', definition: '壮士接受并绘制妆面的行为。"XX太太最近开妆了，快去投"。' },
  { term: '投妆', aliases: [], category: '送妆流程', definition: '向壮士提交送妆申请/订单。通常需要填写小纸条或电子问卷。' },
  { term: '妆则', aliases: [], category: '送妆流程', definition: '壮士的接妆规则说明书。内容包括价格、接妆类型、工期、禁忌、联系方式等。不按妆则投妆，壮士通常不予回复。' },
  { term: '小纸条', aliases: [], category: '送妆流程', definition: '送妆时写给壮士的说明纸。需包含：娃社+官名+肤色、妆面类型、具体要求、禁忌、是否加睫毛、回寄地址等。' },
  { term: '排单', aliases: ['排队'], category: '送妆流程', definition: '壮士的订单排队。热门壮士排单可能长达半年甚至一年以上。' },
  { term: '定妆照', aliases: [], category: '送妆流程', definition: '壮士画好后发给你的确认照片。此时只可做"加法"修改（加深颜色等），不可大改。' },
  { term: '面罩', aliases: [], category: '送妆流程', definition: '保护娃脸的透明塑料罩。送妆寄快递时必须有面罩，否则壮士可能拒收。价格约5元。' },
  { term: '工期', aliases: [], category: '送妆流程', definition: '壮士完成妆面的时间。普通妆1-6周，热门壮士3-12个月不等。通常以"晴天工作日"计算。' },
  { term: '加急', aliases: [], category: '送妆流程', definition: '额外付费加快排单速度。加急费通常50-160元。' },
  { term: '跑单', aliases: [], category: '送妆流程', definition: '确认排单后反悔取消订单。定金不退，且可能被壮士拉黑。' },

  // ======== 配件相关 ========
  { term: '假发', aliases: ['毛', '假毛'], category: '配件相关', definition: 'BJD的假发。按头围选尺寸（英寸），常见材质有高温丝、马海毛、仿马海毛。价格100-500元。' },
  { term: '高温丝', aliases: [], category: '配件相关', definition: '最常见的假发材质，耐热可造型，价格亲民。缺点是光泽偏强、不够自然。' },
  { term: '马海毛', aliases: ['mohair'], category: '配件相关', definition: '用安哥拉山羊毛制成的假发，质感最自然逼真。价格偏高（300-500元+）。' },
  { term: '眼珠', aliases: ['眼睛', '眼球'], category: '配件相关', definition: 'BJD的眼珠。玻璃/亚克力材质，按mm选尺寸。Pabol等品牌是热门之选。价格10-200元。' },
  { term: '眼泥', aliases: [], category: '配件相关', definition: '固定眼珠的软胶泥。也用来调整头颈连接处的松紧度。' },
  { term: '娃衣', aliases: [], category: '配件相关', definition: 'BJD的衣服。必须按体型买对尺寸，各社"四分"可能相差很大。淘宝有大量娃衣店。' },
  { term: '体妆', aliases: [], category: '配件相关', definition: '给娃身体上妆，包括锁骨阴影、膝盖红晕、指节细节等。加价项目，通常200元起。' },
  { term: '磨改', aliases: [], category: '配件相关', definition: '用打磨工具修改娃头或身体的形态。如改唇形、修鼻子、打磨颈孔。费用500元起，风险较高。' },

  // ======== 圈内用语 ========
  { term: '私养', aliases: [], category: '圈内用语', definition: '玩家给娃娃设定的名字+性格+背景故事。每只娃都是独一无二的角色。"我家儿子的私养设定是..."。' },
  { term: '出生', aliases: [], category: '圈内用语', definition: '娃娃到达你手中的那天。玩家通常会发"出生贴"纪念，相当于娃的生日。' },
  { term: '外拍', aliases: [], category: '圈内用语', definition: '带娃出门拍照。需要一定的心理素质（路人眼神），但出片效果好。' },
  { term: '黑箱', aliases: [], category: '圈内用语', definition: '二手交易中的骗局，指发空包裹或货不对板。收二手务必走平台并索要实时视频。' },
  { term: '拼单/拼团', aliases: [], category: '圈内用语', definition: '多人合买以分担国际运费或达到批发折扣。常见于代购韩社娃。' },
  { term: '头牌', aliases: [], category: '圈内用语', definition: '娃娃后脑勺内侧的雕刻印记，是辨别正版的重要依据。' },
  { term: '拉筋', aliases: [], category: '圈内用语', definition: '调整/更换娃娃体内的皮筋。时间久了皮筋会松，需要重新拉紧或更换。' },
  { term: '穿铝', aliases: [], category: '圈内用语', definition: '在皮筋外套上铝线，让关节更紧、承重更好。常用于大型娃（叔/二分）。' },
];

export const glossaryCategories = [
  '基础称呼',
  '尺寸相关',
  '皮肤颜色',
  '妆面类型',
  '技法材料',
  '送妆流程',
  '配件相关',
  '圈内用语',
];
