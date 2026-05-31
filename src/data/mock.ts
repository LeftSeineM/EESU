import {
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Camera,
  CircuitBoard,
  CalendarDays,
  GraduationCap,
  Handshake,
  Landmark,
  MapPinned,
  Mic2,
  Music4,
  PackageOpen,
  PartyPopper,
  RefreshCw,
  School,
  Sparkles,
  UsersRound
} from "lucide-react";

export const navItems = [
  { label: "首页", href: "/" },
  { label: "新生服务", href: "/freshman" },
  { label: "名企微体验", href: "/company-visit" },
  { label: "毕业生服务", href: "/graduation" },
  { label: "企业交流", href: "/cooperation" },
  { label: "资源展示墙", href: "/resources" },
  { label: "活动档案", href: "/activities" },
  { label: "关于我们", href: "/about" }
];

export const stats = [
  { label: "已沉淀资源", value: "86+", hint: "场地、经验、企业与活动支持" },
  { label: "覆盖活动", value: "32+", hint: "学生节、讲座、微体验与班级服务" },
  { label: "服务同学", value: "1200+", hint: "覆盖新生、毕业年级与全系同学" },
  { label: "合作方向", value: "12+", hint: "AI、芯片、互联网、消费电子等" }
];

export const heroEntrances = [
  { title: "新生服务", href: "/freshman", icon: School, description: "班长对接、新生指南、活动同步" },
  { title: "毕业生服务", href: "/graduation", icon: GraduationCap, description: "毕业拍摄、Party、二手交易" },
  { title: "企业交流", href: "/cooperation", icon: Handshake, description: "校企交流、讲座、赞助与走访" },
  { title: "资源展示墙", href: "/resources", icon: PackageOpen, description: "联络中心可调用资源一站浏览" },
  { title: "活动档案", href: "/activities", icon: CalendarDays, description: "学生节、舞会、游园会与讲座记录" }
];

export const freshmanServices = [
  {
    title: "班长对接",
    icon: UsersRound,
    description: "为新生班级负责人同步活动安排、常用材料和联络中心支持事项。",
    tags: ["班级负责人", "材料入口", "事项同步"]
  },
  {
    title: "新生指南",
    icon: BookOpen,
    description: "沉淀入学适应、选课节奏、校园资源和电子系学习生活 Tips。",
    tags: ["学习生活", "校园资源", "常见问题"]
  },
  {
    title: "名企微体验报名",
    icon: Building2,
    description: "发布企业参访、技术交流和职业路径分享活动的报名与回顾信息。",
    tags: ["企业参访", "报名入口", "活动回顾"]
  },
  {
    title: "学生会活动同步",
    icon: Sparkles,
    description: "把学生会活动信息更稳定地传达到班级和同学侧，减少信息差。",
    tags: ["活动通知", "班级触达", "同学服务"]
  }
];

export const classConnections = [
  {
    className: "无 30 班",
    leader: "班级负责人 A",
    tasks: "新生材料同步、班级活动需求收集",
    materials: "新生指南 / 场地申请说明 / 活动报名表"
  },
  {
    className: "无 31 班",
    leader: "班级负责人 B",
    tasks: "名企微体验报名提醒、班委沟通",
    materials: "企业参访 FAQ / 活动海报模板"
  },
  {
    className: "无 32 班",
    leader: "班级负责人 C",
    tasks: "学生会活动信息同步、资源需求反馈",
    materials: "活动排期 / 资源申请入口"
  }
];

export const companyVisits = {
  intro:
    "名企微体验旨在带领电子系同学走近优秀企业，了解行业发展、技术应用和职业路径，帮助同学拓展视野、建立对未来方向的真实感知。",
  companies: ["示例 AI 企业", "示例芯片设计公司", "示例互联网平台", "示例消费电子品牌"],
  flow: ["发布预告", "开放报名", "名单确认", "企业参访", "反馈沉淀"],
  feedback: [
    "第一次把课堂里的技术和真实产品线连起来，方向感更明确了。",
    "企业工程师分享很具体，对低年级同学也很友好。",
    "希望之后可以增加更多芯片和 AI Infra 方向的走访。"
  ],
  photos: ["企业展厅", "技术交流", "同学合影"]
};

export const graduationServices = [
  {
    title: "毕业摄影师推荐",
    icon: Camera,
    description: "整理可预约摄影师、样片风格、价格区间和拍摄注意事项。"
  },
  {
    title: "毕业拍摄攻略",
    icon: MapPinned,
    description: "沉淀清华校园拍摄路线、时间建议、服装准备和多人合照经验。"
  },
  {
    title: "毕业 Party 信息",
    icon: PartyPopper,
    description: "同步毕业季活动安排、报名信息和场地物料支持。"
  },
  {
    title: "二手交易平台",
    icon: RefreshCw,
    description: "毕业季闲置物品信息展示，后续可接入发布和审核流程。"
  }
];

export const secondHandItems = [
  { name: "显示器 27 寸", category: "电子产品", status: "可预约", price: "¥520", date: "05-18" },
  { name: "折叠收纳箱", category: "宿舍用品", status: "待取走", price: "¥25", date: "05-20" },
  { name: "信号与系统资料包", category: "学习资料", status: "可交换", price: "免费", date: "05-22" },
  { name: "台灯与插排套装", category: "生活用品", status: "可预约", price: "¥40", date: "05-24" }
];

export const companyCategories = [
  { category: "人工智能", companies: ["示例智能科技", "示例大模型实验室", "示例机器人公司"] },
  { category: "集成电路", companies: ["示例芯片设计", "示例半导体设备", "示例 EDA 平台"] },
  { category: "消费电子", companies: ["示例终端品牌", "示例智能硬件", "示例影像科技"] },
  { category: "互联网", companies: ["示例云平台", "示例内容平台", "示例开发者工具"] },
  { category: "快消品牌", companies: ["示例饮品品牌", "示例生活方式品牌"] }
];

export const cooperationWork = [
  { title: "学生节赞助", icon: BadgeCheck, description: "连接品牌资源，为大型活动提供物料、经费和互动支持。" },
  { title: "企业讲座", icon: BriefcaseBusiness, description: "邀请行业嘉宾面向同学分享技术趋势、岗位画像和成长路径。" },
  { title: "校企交流", icon: Handshake, description: "为企业和同学搭建更具体、更轻量的沟通场景。" },
  { title: "名企微体验", icon: Building2, description: "组织同学进入真实企业场景，近距离理解行业和产品。" }
];

export const resourceWallItems = [
  {
    name: "院系活动场地清单",
    type: "校内活动场地",
    description: "整理常用报告厅、教室、讨论空间的适用规模和申请提示。",
    scenario: "班级活动、讲座、分享会"
  },
  {
    name: "学生节物料经验包",
    type: "校内活动资源",
    description: "沉淀摊位物料、赞助沟通、现场执行和复盘模板。",
    scenario: "大型活动筹备"
  },
  {
    name: "校外团建场所索引",
    type: "校外活动场所",
    description: "记录适合班级团建、部门建设和毕业季活动的场所信息。",
    scenario: "班级团建、毕业聚会"
  },
  {
    name: "电子系学习资料导航",
    type: "学习资料",
    description: "以课程与年级为线索，整理公开可分享的资料入口。",
    scenario: "复习、选课参考"
  },
  {
    name: "校园生活 Tips",
    type: "生活 Tips",
    description: "收集低成本提升校园生活效率的小技巧和服务入口。",
    scenario: "新生适应、日常生活"
  },
  {
    name: "活动经验复盘库",
    type: "活动经验",
    description: "沉淀从策划、外联、宣传到执行复盘的一套经验模板。",
    scenario: "学生组织活动筹备"
  },
  {
    name: "联络中心项目档案",
    type: "项目档案",
    description: "展示联络中心长期项目的阶段成果和可复用方法。",
    scenario: "部门传承、成果展示"
  }
];

export const centerProjects = [
  {
    title: "资源连接",
    description: "连接企业、校友、班级和校园资源，让同学需要帮助时有清晰入口。",
    icon: CircuitBoard
  },
  {
    title: "活动支持",
    description: "支持学生节、讲座、参访、毕业季等活动的资源协调和流程沉淀。",
    icon: Sparkles
  },
  {
    title: "同学服务",
    description: "围绕新生、毕业生和班级负责人，提供轻量、可信、可持续的服务。",
    icon: UsersRound
  }
];

export const activityRecords = [
  {
    title: "新生舞会",
    type: "新生活动",
    season: "Autumn",
    icon: Music4,
    image: "/activities/freshman-ball.webp",
    description: "面向新生的轻社交活动，帮助同学更快熟悉班级、院系和校园生活氛围。",
    highlights: ["场地协调", "活动流程设计", "班级触达", "照片与反馈收集"],
    outcomes: "形成新生活动筹备检查表和班级宣传同步机制。"
  },
  {
    title: "毕业游园会",
    type: "毕业季服务",
    season: "Summer",
    icon: PartyPopper,
    image: "/activities/graduation-fair.webp",
    description: "为毕业年级同学设计的毕业季活动场景，结合拍照、互动、纪念物料和同学交流。",
    highlights: ["毕业季物料", "互动点位", "摄影资源", "现场执行"],
    outcomes: "沉淀毕业季活动路线、物料清单和志愿者分工经验。"
  },
  {
    title: "学生节路演",
    type: "大型院系活动",
    season: "Spring",
    icon: Mic2,
    image: "/activities/festival-roadshow.webp",
    description: "学生节前期路演是活动预热和同学动员的重要环节，联络中心参与宣传触达、流程支持和现场协同。",
    highlights: ["活动预热", "现场展示", "同学动员", "宣传素材沉淀"],
    outcomes: "沉淀学生节路演流程、现场分工和宣传节奏经验。"
  },
  {
    title: "学生节现场合照",
    type: "大型院系活动",
    season: "Spring",
    icon: Landmark,
    image: "/activities/festival-group.webp",
    description: "学生节现场记录了联络中心与活动伙伴在大型活动执行中的协作成果。",
    highlights: ["现场执行", "摊位支持", "物料协调", "成果记录"],
    outcomes: "沉淀大型活动外联流程、预算沟通话术和现场资源清单。"
  }
];

export const activityTimeline = [
  { time: "筹备期", title: "需求确认", description: "明确服务对象、活动规模、资源缺口和联络中心支持边界。" },
  { time: "执行前", title: "资源协调", description: "推进场地、企业、物料、宣传和班级触达等事项。" },
  { time: "活动中", title: "现场支持", description: "配合签到、引导、物料分发、互动记录和突发问题处理。" },
  { time: "复盘期", title: "经验沉淀", description: "整理照片、反馈、预算、联系人占位和可复用流程。" }
];
