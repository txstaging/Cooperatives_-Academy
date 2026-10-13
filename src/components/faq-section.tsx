import { faqs } from "@/data/academy";

export function FaqSection() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-heading">
      <div className="wrap faqwrap">
        <div className="faqtitle">
          <div className="eyebrow">قبل أن نبدأ</div>
          <h2 id="faq-heading">أسئلتك، بإجابات واضحة.</h2>
        </div>
        {faqs.map((faq) => (
          <details className="faq" key={faq.question}>
            <summary>
              {faq.question}
              <span aria-hidden="true">+</span>
            </summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
