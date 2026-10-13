"use client";

import { useRef, useState } from "react";
import { Brand } from "./brand";

const navigation = [
  ["#approach", "عن الأكاديمية"],
  ["#programs", "المسارات"],
  ["#roles", "حسب وظيفتك"],
  ["#experience", "تجربة التعلم"],
  ["#faq", "الأسئلة الشائعة"],
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header className="topbar">
      <nav
        className="wrap nav"
        aria-label="التنقل الرئيسي"
        onKeyDown={(event) => {
          if (event.key === "Escape" && menuOpen) {
            setMenuOpen(false);
            menuButton.current?.focus();
          }
        }}
      >
        <Brand />
        <div className={`navlinks${menuOpen ? " open" : ""}`} id="navlinks">
          {navigation.map(([href, label]) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </div>
        <a className="btn small" href="#contact">
          صمّم برنامج جمعيتك <span aria-hidden="true">↗</span>
        </a>
        <button
          ref={menuButton}
          className="menubtn"
          type="button"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
          aria-controls="navlinks"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </nav>
    </header>
  );
}
