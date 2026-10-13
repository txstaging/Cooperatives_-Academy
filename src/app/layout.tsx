import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const title = "أكاديمية TX للتعاونيات | تدريب التحول الرقمي والذكاء الاصطناعي";
const description =
  "برامج مخصصة للجمعيات التعاونية في تشغيل الأنظمة وإدارة المستثمرين والأسهم واستخدام الذكاء الاصطناعي للحوكمة والامتثال، مع مسارات حسب الوظيفة.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "أكاديمية TX للتعاونيات",
  openGraph: {
    title: "أكاديمية TX للتعاونيات — برنامج لجمعيتك ومسار لكل وظيفة",
    description:
      "تدريب عملي على الحلول الرقمية والذكاء الاصطناعي، يبدأ من مهام فريقك.",
    type: "website",
    locale: "ar_SA",
  },
};

export const viewport = { themeColor: "#102f40" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
