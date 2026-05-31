# 清华大学电子系学生会联络中心资源服务平台

这是一个面向同学的静态网站原型，采用 Devstarter 风格的暗色科技感视觉：黑色背景、霓虹绿色强调、终端面板、硬边框卡片和清晰的开发者产品气质。

## 技术栈

- Next.js / React
- TypeScript
- Tailwind CSS
- lucide-react 图标
- 本地 mock data，方便后续接入数据库

## 运行方式

```bash
cd contact-center-platform
npm install
npm run dev
```
![1780160220076](image/README/1780160220076.jpg)![1780160221120](image/README/1780160221120.jpg)![1780160239714](image/README/1780160239714.jpg)![1780160250575](image/README/1780160250575.png)
打开浏览器访问：

```text
http://localhost:3000
```

## 页面模块

- `/` 首页 Hero 与数据卡片
- `/freshman/` 新生服务
- `/company-visit/` 名企微体验
- `/graduation/` 毕业生服务与二手交易静态卡片
- `/cooperation/` 企业交流与合作
- `/resources/` 资源展示墙
- `/activities/` 活动档案与工作记录
- `/about/` 关于联络中心

## 静态导出

项目已配置 `output: "export"` 和 `trailingSlash: true`，运行构建后会生成目录式静态站点：

```bash
npm run build
```

输出目录：

```text
out/
```

## 数据位置

所有展示数据集中在：

```text
src/data/mock.ts
```

后续接入真实后端时，可以优先替换这里的数据结构，再逐步改为 API 请求。
