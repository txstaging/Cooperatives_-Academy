import { programs } from "@/data/academy";

export function ProgramsSection() {
  return (
    <section
      className="section programs-section"
      id="programs"
      aria-labelledby="programs-heading"
    >
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">المسارات التدريبية المقترحة</div>
            <h2 id="programs-heading">
              احتياجات مختلفة.
              <br />
              برنامج يجمع ما يلزمك.
            </h2>
          </div>
          <p>
            اختر مجالًا لاستكشاف الجمهور والمحتوى والتطبيق. نحدد المسارات
            المناسبة معك؛ ولا يحتاج كل موظف إلى دراسة جميع المجالات.
          </p>
        </div>
        {programs.map((program) => (
          <details
            className="program"
            id={`program-${program.number}`}
            key={program.number}
          >
            <summary>
              <span className="pnum">{program.number}</span>
              <span>
                <h3>{program.title}</h3>
                <p>{program.subtitle}</p>
              </span>
              <span className="plus" aria-hidden="true">
                +
              </span>
            </summary>
            <div className="programbody">
              <div>
                <span className="smalllabel">لمن صُمم؟</span>
                <p>{program.audience}</p>
                <p>{program.description}</p>
                <div className="tags">
                  {program.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <aside>
                <span className="smalllabel">ما الذي سيطبقه المشارك؟</span>
                <p>{program.application}</p>
                <a href="#contact">ناقش هذا المسار ←</a>
              </aside>
            </div>
          </details>
        ))}
        <p className="footnote">
          تُحدد المدة والأدوات ومتطلبات الإتمام في خطة كل برنامج وفق نطاق الحلول
          المتاحة للجمعية.
        </p>
      </div>
    </section>
  );
}
