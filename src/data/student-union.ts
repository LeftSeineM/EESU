import {
  Archive,
  BadgeCheck,
  Building2,
  CalendarDays,
  Camera,
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
  { label: "活动中心", value: "4", hint: "体育、文艺、联络、权益发展" },
  { label: "记录维度", value: "6", hint: "舞台、赛事、交流、福利、学代会、权益" },
  { label: "资料来源", value: "3", hint: "官网页面、组织目录、宣传资料" },
  { label: "旧站保留", value: "1", hint: "EELL 联络中心专题归档" }
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
    zhTitle: "学生权益发展中心",
    href: "/activities",
    icon: BadgeCheck,
    image: "/activities/festival-group.webp",
    summary: "关注学习生活权益、课程反馈、生活资讯和师生沟通，补全学生会服务同学的另一侧记录。",
    tags: ["课程研讨", "意见反馈", "MAX", "系主任下午茶"]
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

export const archiveTimeline = [
  { time: "Stage", title: "文艺舞台", description: "学生节、系歌赛和舞会把电子系同学的故事带到舞台中央。", icon: GalleryHorizontalEnd },
  { time: "Field", title: "体育赛场", description: "从系内赛事到马约翰杯，体育中心持续记录运动风采。", icon: Trophy },
  { time: "Link", title: "联络现场", description: "企业参访、福利支持和学代会筹办构成联络中心的工作底色。", icon: RadioTower },
  { time: "Voice", title: "权益声音", description: "课程研讨、生活反馈与师生沟通补全学生会的服务闭环。", icon: UsersRound }
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
