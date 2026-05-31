import {
  Archive,
  Anchor,
  BadgeCheck,
  Building2,
  CalendarDays,
  Camera,
  ChartNoAxesCombined,
  Dumbbell,
  GalleryHorizontalEnd,
  Handshake,
  Landmark,
  Mic2,
  Music4,
  PartyPopper,
  RadioTower,
  School,
  Trophy,
  UsersRound
} from "lucide-react";

export const siteName = "EE Student Union";
export const officialStudentUnionUrl = "https://www.ee.tsinghua.edu.cn/info/1437/3419.htm";
export const oldLiaisonSiteUrl = "https://leftseinem.github.io/EELL/";

export const sourceNotes = [
  {
    title: "电子系学生会-清华大学电子工程系",
    url: officialStudentUnionUrl,
    note: "官网页面发布于 2026-04-16，介绍电子系学生会及体育、文艺、联络、权益发展四个活动中心。"
  },
  {
    title: "本科生学生组织目录-清华大学电子工程系",
    url: "https://www.ee.tsinghua.edu.cn/xsfz/xszz/bks.htm",
    note: "电子系官网学生组织目录，列出电子系学生会、学生科协、学生新媒体宣传中心、电子系团委等。"
  },
  {
    title: "清华大学电子工程系本科生画册",
    url: "https://www.ee.tsinghua.edu.cn/wjml/dzgcxbkshc.pdf",
    note: "招生宣传资料中展示学生节、马约翰杯、系庆晚会等电子系第二课堂画面。"
  }
];

export const unionStats = [
  { label: "四个大家庭", value: "4", hint: "文艺、体育、联络、权发" },
  { label: "记录维度", value: "7", hint: "舞台、赛事、交流、成长、实践、学代会、荣誉" },
  { label: "资料来源", value: "3", hint: "官网页面、组织目录、宣传资料" },
  { label: "专题主页", value: "2", hint: "EELL 联络专题与扬帆计划主页" }
];

export const unionCenters = [
  {
    title: "Student Arts Center",
    zhTitle: "学生文艺中心",
    href: "/arts",
    icon: Music4,
    image: "/activities/freshman-ball.webp",
    summary: "围绕学生节、系歌赛、新生舞会、毕业舞会和摄影赛事，持续搭建电子系的文艺舞台与共同记忆。",
    tags: ["学生节", "系歌赛", "新生舞会", "摄影赛事"]
  },
  {
    title: "Student Sports Center",
    zhTitle: "学生体育中心",
    href: "/sports",
    icon: Trophy,
    image: "/activities/graduation-fair.webp",
    summary: "负责系内体育活动与校级赛事对接，记录运动风采，让体育传统贯穿电子人的全年生活。",
    tags: ["大无限杯", "马约翰杯", "代表队", "赛事后勤"]
  },
  {
    title: "Student Liaison Center",
    zhTitle: "学生联络中心",
    href: "/liaison",
    icon: Handshake,
    image: "/activities/festival-roadshow.webp",
    summary: "承担学生会内部联络、外部交流、企业合作、生活福利和学代会协助筹办等工作。",
    tags: ["名企微体验", "期末福袋", "微沙龙", "学代会"]
  },
  {
    title: "Rights & Development Center",
    zhTitle: "学生权发中心",
    href: "/development",
    icon: ChartNoAxesCombined,
    image: "/activities/festival-group.webp",
    summary: "关注同学全面发展、权益反馈、成长支持和师生沟通，补全学生会服务同学的另一侧记录。",
    tags: ["全面发展", "权益反馈", "成长支持", "师生沟通"]
  }
];

export const featureStories = [
  {
    title: "学生节",
    type: "文艺中心",
    icon: Mic2,
    image: "/activities/festival-roadshow.webp",
    description: "以校园生活为主题，通过歌舞、DV 剧、舞台剧等形式呈现电子系同学自己的叙事。",
    sourceCaption: "官网配图包含电子系第27届学生节“掠影”和学生节原创节目舞台照。"
  },
  {
    title: "系歌赛与舞会",
    type: "文艺中心",
    icon: Music4,
    image: "/activities/freshman-ball.webp",
    description: "系歌赛为热爱音乐的电子人提供展示和交流场域，新生舞会帮助新生破冰融入集体。",
    sourceCaption: "官网提到 Deepsing 系歌赛、新生舞会、毕业舞会和摄影赛事。"
  },
  {
    title: "马约翰杯与大无限杯",
    type: "体育中心",
    icon: Dumbbell,
    image: "/activities/graduation-fair.webp",
    description: "体育中心对接校级赛事与院系代表队，也组织贯穿学年的系内赛事。",
    sourceCaption: "官网配图含 2025 马杯蝉联二甲大合影。"
  },
  {
    title: "名企微体验",
    type: "联络中心",
    icon: Building2,
    image: "/activities/festival-group.webp",
    description: "联络中心带领同学走进企业，了解行业动态、专业前沿和真实工作场景。",
    sourceCaption: "官网配图含名企微体验活动。"
  },
  {
    title: "扬帆计划",
    type: "联络中心",
    icon: Anchor,
    image: "/yangfan/optimized/yangfan-icebreaking.jpg",
    description: "面向电子系学生骨干的长期培养项目，从社工启蒙、社会认知到实践锻炼，记录一代代同学共同成长的航迹。",
    sourceCaption: "素材来自《扬帆十一期总结》PPT，包含发展历程、培养方案、十一期活动回顾和实践数据。"
  },
  {
    title: "期末福袋与生活福利",
    type: "联络中心",
    icon: PartyPopper,
    image: "/activities/freshman-ball.webp",
    description: "通过考试周暖心福袋、毕业季活动和外部资源合作，为同学提供有温度的支持。",
    sourceCaption: "官网配图含为同学们准备期末惊喜福袋。"
  },
  {
    title: "学生代表大会",
    type: "联络中心",
    icon: Landmark,
    image: "/activities/festival-roadshow.webp",
    description: "联络中心协助筹办学生代表大会，服务代表建言献策和学生会换届流程。",
    sourceCaption: "官网配图含清华大学电子工程系学生代表大会。"
  }
];

export const yangfanStats = [
  { label: "发展期数", value: "11", hint: "从 2015 年扬帆一期到第十一期" },
  { label: "启航年份", value: "2015", hint: "建立骨干培养框架" },
  { label: "实践支队", value: "9", hint: "乡村振兴、产业认知、志愿支教" },
  { label: "培养维度", value: "7", hint: "社工启蒙、社会认知、个性发展、通识素养、团队建设、社工实践、社工能力" }
];

export const yangfanTimeline = [
  { time: "2015", title: "扬帆一期", description: "建立培养框架，强调学生骨干属性。" },
  { time: "2017", title: "学生小导", description: "设立学生小导机制，加强传承、陪伴和反馈。" },
  { time: "2018", title: "计划组成立", description: "设立扬帆计划组，推动招募、培养和活动组织规范化。" },
  { time: "2022", title: "规范结业", description: "加强学生组织合作，面向优秀社工人才和学生骨干培养。" },
  { time: "2025", title: "十期革新", description: "轻量化、优质化革新，加强团队凝聚力。" },
  { time: "2026", title: "十一期收束", description: "围绕真实需求、实践锻炼和长期成长完成阶段总结。" }
];

export const yangfanActivities = [
  { title: "团队建设", detail: "奥森破冰会、扬帆小队、男生节与女生节活动，让学员在共同经历中建立连接。" },
  { title: "社工培养", detail: "例会旁听、例餐交流、社工经历分享和社工技能分享，帮助同学理解学生工作的真实现场。" },
  { title: "实践锻炼", detail: "暑期“微光”实践、实践微沙龙、实践科研分享和实践收获交流会，把能力训练落到行动里。" },
  { title: "成长表达", detail: "中期总结交流、寒假实践交流、年会和结业展示，沉淀每位同学的反思与荣誉。" }
];

export const yangfanGallery = [
  { src: "/yangfan/optimized/yangfan-logo.jpg", title: "扬帆计划视觉标识", caption: "以帆船、浪花和电子元素构成的项目记忆点。" },
  { src: "/yangfan/optimized/yangfan-shirt.jpg", title: "扬帆纪念衫", caption: "把项目视觉落到可穿戴的集体纪念物上。" },
  { src: "/yangfan/optimized/yangfan-icebreaking.jpg", title: "奥森破冰会", caption: "第十一期学员在春天完成第一次集体亮相。" },
  { src: "/yangfan/optimized/yangfan-classroom.jpg", title: "例餐与交流", caption: "围绕社工经历、真实需求和反馈机制持续交流。" },
  { src: "/yangfan/optimized/yangfan-dinner.jpg", title: "扬帆例餐", caption: "小规模、高密度的交流场景，让经验在饭桌边传递。" },
  { src: "/yangfan/optimized/yangfan-sharing.jpg", title: "分享现场", caption: "实践、科研和社工经验在同伴之间被讲述和继承。" },
  { src: "/yangfan/optimized/yangfan-workshop.jpg", title: "工作坊合影", caption: "阶段性培训和专题讨论后的集体记录。" },
  { src: "/yangfan/optimized/yangfan-cohort.jpg", title: "学员合照", caption: "把一整期扬帆同学的相遇与同行存进档案。" },
  { src: "/yangfan/optimized/yangfan-sunshine-room.jpg", title: "阳光同行", caption: "班团活动空间里的团队建设和主题交流。" },
  { src: "/yangfan/optimized/yangfan-seminar.jpg", title: "专题研讨", caption: "围绕培养方案、技术工具和学生工作经验展开讨论。" },
  { src: "/yangfan/optimized/yangfan-practice.jpg", title: "微光实践", caption: "扬帆计划赴安徽金寨支教支队的实践合影。" },
  { src: "/yangfan/optimized/yangfan-micro-salon.jpg", title: "实践微沙龙", caption: "行前、行后交流把实践经验转化为可传承的方法。" },
  { src: "/yangfan/optimized/yangfan-team-night.jpg", title: "扬帆小队", caption: "小队活动增强凝聚力，也保留轻松真诚的集体瞬间。" }
];

export const artsHighlights = [
  "建设电子系文艺氛围，形成共同文化记忆。",
  "学生节、系歌赛、新生舞会、毕业舞会、摄影赛事构成长期品牌。",
  "舞台剧、DV 剧、歌舞、摄影等形式都服务于同学表达。"
];

export const sportsHighlights = [
  "组织系内体育活动，并对接校级体育赛事。",
  "大无限杯为同学提供贯穿学年的运动渠道。",
  "马约翰杯中负责代表队、运动员、赛程赛果与后勤支持。"
];

export const liaisonHighlights = [
  "内部联络与部门协调，提升学生会整体运转效率。",
  "外部联络、企业合作、活动赞助和生活福利支持。",
  "名企微体验、春游、路演、微沙龙、学代会协助筹办等。"
];

export const developmentHighlights = [
  "关注同学的全面发展，把学习生活、成长体验和公共反馈纳入学生会记录。",
  "承接权益反馈、课程研讨、师生沟通等工作，让学生声音被看见、被回应、被留下。",
  "作为四个大家庭之一，权发中心补足荣誉展示墙中关于权益、成长、服务和长期建设的维度。"
];

export const archiveTimeline = [
  { time: "Stage", title: "文艺舞台", description: "学生节、系歌赛和舞会把电子系同学的故事带到舞台中央。", icon: GalleryHorizontalEnd },
  { time: "Field", title: "体育赛场", description: "从系内赛事到马约翰杯，体育中心持续记录运动风采。", icon: Trophy },
  { time: "Link", title: "联络现场", description: "企业参访、福利支持和学代会筹办构成联络中心的工作底色。", icon: RadioTower },
  { time: "Rights", title: "权发成长", description: "权益反馈、成长支持与师生沟通补全学生会的服务闭环。", icon: ChartNoAxesCombined }
];

export const oldArchiveCards = [
  {
    title: "原 EELL 联络中心站",
    href: oldLiaisonSiteUrl,
    icon: Archive,
    description: "保留原先制作的联络中心资源服务平台，作为新主站下级专题的外部归档。"
  },
  {
    title: "站内联络中心摘要",
    href: "/liaison",
    icon: CalendarDays,
    description: "在新站里重新整理联络中心的信息、活动记录和下一步素材入口。"
  },
  {
    title: "素材继续补充",
    href: "/sources",
    icon: Camera,
    description: "后续可把无线之声公众号文章链接、图片授权说明和更多活动照片补进来源库。"
  }
];
