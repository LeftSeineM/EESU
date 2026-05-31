import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EE Student Union",
  description: "清华大学电子系学生会活动记录与展示网站。"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
