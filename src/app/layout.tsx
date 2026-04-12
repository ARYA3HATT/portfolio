import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Priyanshu Bajpai — AI & ML Engineer",
  description: "Final year CSE student specializing in Cybersecurity & Digital Forensics at DIT Dehradun. Deep passion for AI & ML. Open to internships and full-time roles.",
  keywords: ["AI","ML","Machine Learning","Data Science","Cybersecurity","Python","Portfolio"],
  authors: [{ name:"Priyanshu Bajpai" }],
  openGraph: { title:"Priyanshu Bajpai — AI & ML Engineer", description:"Final year CSE at DIT Dehradun. AI/ML enthusiast open to roles and internships.", type:"website" },
  twitter: { card:"summary_large_image", title:"Priyanshu Bajpai — AI & ML Engineer" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Preload critical fonts to eliminate FOUT */}
        <link rel="preload" href="https://fonts.gstatic.com/s/syne/v22/8vIS7w4qzmVxsWxjEKc.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
