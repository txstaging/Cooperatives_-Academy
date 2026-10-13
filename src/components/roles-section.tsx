"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { roles } from "@/data/academy";

export function RolesSection() {
  const [selectedRole, setSelectedRole] = useState(0);
  const tabs = useRef<Array<HTMLButtonElement | null>>([]);
  const role = roles[selectedRole];

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) {
    let next: number;
    switch (event.key) {
      case "ArrowDown":
        next = (index + 1) % roles.length;
        break;
      case "ArrowUp":
        next = (index + roles.length - 1) % roles.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = roles.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    setSelectedRole(next);
    tabs.current[next]?.focus();
  }

  return (
    <section className="section" id="roles" aria-labelledby="roles-heading">
      <div className="wrap roles">
        <div>
          <div className="eyebrow">اختر دورك</div>
          <h2 id="roles-heading">
            ماذا يتعلم
            <br />
            كل عضو في الفريق؟
          </h2>
          <div
            className="rolebuttons"
            role="tablist"
            aria-label="المسارات حسب الوظيفة"
            aria-orientation="vertical"
          >
            {roles.map((item, index) => (
              <button
                key={item.title}
                ref={(element) => {
                  tabs.current[index] = element;
                }}
                type="button"
                role="tab"
                id={`role-${index}`}
                aria-controls="rolepanel"
                aria-selected={selectedRole === index}
                tabIndex={selectedRole === index ? 0 : -1}
                onClick={() => setSelectedRole(index)}
                onKeyDown={(event) => handleKeyDown(event, index)}
              >
                {item.title} <span aria-hidden="true">←</span>
              </button>
            ))}
          </div>
        </div>
        <div
          className="rolepanel"
          id="rolepanel"
          role="tabpanel"
          aria-labelledby={`role-${selectedRole}`}
          tabIndex={0}
        >
          <span className="smalllabel">مسار وظيفي مقترح</span>
          <h3 id="roleTitle">{role.title}</h3>
          <p id="roleDescription">{role.description}</p>
          <ul id="roleList">
            {role.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="role-example">
            <span className="smalllabel">تطبيق فردي ومشترك</span>
            <p id="roleExample">{role.example}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
