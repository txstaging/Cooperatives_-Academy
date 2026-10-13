import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footerinner">
        <Brand />
        <div className="footerlinks">
          <a href="#programs">المسارات</a>
          <a href="#contact">تواصل معنا</a>
          <a href="#home">العودة للأعلى ↑</a>
        </div>
        <small>© 2026 ترانسفورمكس · التحول الرقمي والذكاء الاصطناعي</small>
      </div>
    </footer>
  );
}
