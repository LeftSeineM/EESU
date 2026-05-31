import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "清华大学电子系学生会联络中心资源服务平台",
  description: "连接资源，服务同学，展示联络中心工作成果。"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
