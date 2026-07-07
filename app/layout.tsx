import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ねこひろば | ボランティアが育てた子猫の譲渡サイト",
  description:
    "ボランティアの皆さんが大切に育てた子猫たちを紹介しています。新しい家族を探している子猫たちに、温かいおうちを見つけてあげませんか？",
  openGraph: {
    title: "ねこひろば | 子猫譲渡サイト",
    description: "ボランティアが育てた子猫の新しい家族を探しています",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
