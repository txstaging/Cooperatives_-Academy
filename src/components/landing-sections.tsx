import { RequestForm } from "./request-form";

export function HeroSection() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="wrap hero-grid">
        <div>
          <div className="eyebrow">أكاديمية TX للتعاونيات</div>
          <h1 id="hero-heading">
            برنامج لجمعيتك.
            <br />
            <em>ومسار لكل وظيفة.</em>
          </h1>
          <p className="lead">
            التحول الرقمي يبدأ بفريق يجيد استخدامه. أهّل موظفي جمعيتك على
            الأنظمة والذكاء الاصطناعي، واربط التعلم بمهامهم ونتائج عملهم.
          </p>
          <div className="actions">
            <a className="btn" href="#contact">
              اطلب برنامجًا لجمعيتك <span>←</span>
            </a>
            <a className="btn secondary" href="#programs">
              استكشف المسارات
            </a>
          </div>
          <div className="hero-note">
            <span>تدريب هجين</span>
            <span>تطبيق حسب الوظيفة</span>
            <span>تقييم عملي</span>
          </div>
        </div>
        <div className="visual" aria-label="تصور توضيحي لمسار تعلم موظف">
          <div className="visual-label">
            <span>هكذا نربط التعلم بالعمل</span>
            <span>تصور توضيحي</span>
          </div>
          <div className="learning-window">
            <div className="windowbar">
              <span>مساحة تعلّم الجمعية</span>
              <div className="dots">
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
            <div className="windowbody">
              <span className="micro">نموذج مسار وظيفي</span>
              <h3>مسؤول شؤون المستثمرين</h3>
              <div className="journey-lines">
                <div className="journey-row">
                  <span className="tile">01</span>
                  <div>
                    <strong>تعرّف على النظام وملف المستثمر</strong>
                    <small>درس مسجل ومرجع مختصر</small>
                  </div>
                  <span className="status">تعلّم</span>
                </div>
                <div className="journey-row">
                  <span className="tile">02</span>
                  <div>
                    <strong>راجع الأسهم وسجّل طلب خدمة</strong>
                    <small>مهمة فردية ببيانات تدريبية</small>
                  </div>
                  <span className="status">طبّق</span>
                </div>
                <div className="journey-row">
                  <span className="tile">03</span>
                  <div>
                    <strong>أنجز الطلب بالتعاون مع فريقك</strong>
                    <small>نشاط مشترك بين الوظائف</small>
                  </div>
                  <span className="status">تعاون</span>
                </div>
                <div className="journey-row">
                  <span className="tile">04</span>
                  <div>
                    <strong>تحقّق من إتقان المهمة</strong>
                    <small>تقييم عملي وملاحظات للتحسين</small>
                  </div>
                  <span className="status">أتقن</span>
                </div>
              </div>
            </div>
          </div>
          <div className="float-card">
            <span className="float-icon">↗</span>
            <div>
              <strong>المعرفة تبقى داخل الجمعية</strong>مسار للموظف الجديد،
              ومرجع للفريق الحالي.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function BenefitsStrip() {
  return (
    <div className="strip">
      <div className="wrap stripinner">
        <div>
          <strong>حلول متعددة</strong>
          <small>برامج أعمال وتطبيقات خاصة ووكلاء ذكاء اصطناعي</small>
        </div>
        <div>
          <strong>تخصيص حسب الجمعية</strong>
          <small>نشاطك وإجراءاتك وصلاحيات فريقك</small>
        </div>
        <div>
          <strong>تعلّم يستمر أثره</strong>
          <small>ممارسة ومتابعة وتطوير للمحتوى</small>
        </div>
      </div>
    </div>
  );
}

export function ApproachSection() {
  return (
    <section
      className="section"
      id="approach"
      aria-labelledby="approach-heading"
    >
      <div className="wrap">
        <div className="two">
          <div>
            <div className="eyebrow">من التكنولوجيا إلى الاستخدام الفعلي</div>
            <h2 id="approach-heading">
              أنظمة تتطور.
              <br />
              وفريق يتطور معها.
            </h2>
          </div>
          <div className="introcopy">
            <p>
              قد تبقى بعض إمكانات النظام دون استخدام، أو تتكرر الأسئلة نفسها، أو
              ترتبط المعرفة بشخص واحد. وعند انضمام موظف جديد، تبدأ رحلة الشرح من
              جديد.
            </p>
            <p>
              أكاديمية TX للتعاونيات تحول المهام إلى مسارات قابلة للتعلم
              والممارسة. نبدأ باحتياجات التعاونيات السعودية، ونصمم لكل جمعية
              برنامجًا يناسب نشاطها والحلول المقدمة لها.
            </p>
          </div>
        </div>
        <div className="two" style={{ marginTop: "25px" }}>
          <div className="listline">
            <b>01</b>
            <div>
              <h3>تعلّم على ما تستخدمه</h3>
              <p>
                شرح للتطبيقات والإعدادات والإجراءات الفعلية، مع أمثلة مناسبة
                لعمل الجمعية.
              </p>
            </div>
          </div>
          <div className="listline">
            <b>02</b>
            <div>
              <h3>تابع ما يستطيع فريقك إنجازه</h3>
              <p>
                مهام وتقييمات توضح الإتقان واحتياجات المتابعة، وتتجاوز مجرد
                إتمام المشاهدة.
              </p>
            </div>
          </div>
        </div>
        <div className="techband">
          <p>
            يشمل التدريب حلول ترانسفورمكس الخاصة، ومنصات مثل أودو وزوهو ضمن الحل
            المقدم، وأدوات الذكاء الاصطناعي الجاهزة أو المصممة للجمعية، والحلول
            المقدمة بعلامتها التجارية.
          </p>
          <div className="techlabels">
            <span>حلول TX</span>
            <span>أنظمة ERP</span>
            <span>AI Agents</span>
            <span>تكامل وأتمتة</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section
      className="section journey-section"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">تجربة التعلم</div>
            <h2 id="experience-heading">
              شاهد. طبّق. تعاون.
              <br />
              ثم أثبت إتقانك.
            </h2>
          </div>
          <p>
            نجمع التعلم المسجل مع لقاءات مباشرة عبر الإنترنت أو حضوريًا، ونخصص
            اللقاءات للممارسة والأسئلة والحالات التي تحتاج إلى تفاعل.
          </p>
        </div>
        <div className="steps">
          <div className="step">
            <span className="number">01</span>
            <h3>مسار واضح</h3>
            <p>نحدد المستوى والمهام والأدوات المناسبة لدورك.</p>
          </div>
          <div className="step">
            <span className="number">02</span>
            <h3>تعلّم وممارسة</h3>
            <p>فيديوهات وأدلة مختصرة وتمارين ببيانات تدريبية.</p>
          </div>
          <div className="step">
            <span className="number">03</span>
            <h3>عمل جماعي</h3>
            <p>أنشطة تربط الوظائف ودورات العمل بين الأقسام.</p>
          </div>
          <div className="step">
            <span className="number">04</span>
            <h3>تقييم ومتابعة</h3>
            <p>تقييم فردي وملاحظات وتقارير وخطة لاستكمال المهارات.</p>
          </div>
        </div>
        <div className="teamwork">
          <b>مثال تطبيقي</b>
          <p>
            طلب خدمة من مستثمر، يراجعه الموظف المختص، ويتعاون مع المالية، ثم
            يُغلق الطلب وتظهر نتيجته في تقرير. لكل مشارك مهمة يمكن تقييمها.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ContinuingLearningSection() {
  return (
    <section className="section" aria-labelledby="continuinglearning-heading">
      <div className="wrap two">
        <div>
          <div className="eyebrow">قيمة تستمر بعد التدريب</div>
          <h2 id="continuinglearning-heading">
            موظف جديد؟
            <br />
            المسار جاهز للانطلاق.
          </h2>
          <p className="lead">
            يجد الموظف الجديد ما يحتاجه لبدء تعلم مهامه، ويعود الموظف الحالي إلى
            الشرح وقت الحاجة.
          </p>
          <p style={{ color: "var(--muted)" }}>
            نراجع الأسئلة والواجبات ونتائج التطبيق لتحسين المحتوى. وعند تغير حل
            أو إجراء، نحدث المواد المعنية ضمن النطاق المتفق عليه.
          </p>
        </div>
        <div className="deliver">
          <h3>ما الذي يتضمنه برنامج الجمعية؟</h3>
          <ul>
            <li>خريطة مسارات حسب الوظائف</li>
            <li>محتوى مشترك ومواد خاصة بإجراءات الجمعية</li>
            <li>مساحة للمواد والتكليفات والنتائج بصلاحيات مناسبة</li>
            <li>لقاءات وتقييمات وتقارير تقدم</li>
            <li>متابعة لاستكمال المهارات وتأهيل الموظفين الجدد</li>
          </ul>
          <p className="footnote">
            يُثبت نطاق الخدمة والجلسات والوصول والتحديث في خطة البرنامج.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ResourcesSection() {
  return (
    <section
      className="section programs-section"
      id="resources"
      aria-labelledby="resources-heading"
    >
      <div className="wrap">
        <div className="section-head">
          <div>
            <div className="eyebrow">مساحات المحتوى القادمة</div>
            <h2 id="resources-heading">
              شاهد التجربة.
              <br />
              وتعرّف على من يقودها.
            </h2>
          </div>
          <p>مساحات محجوزة لاستكمال الصفحة بالمحتوى الحقيقي عند جاهزيته.</p>
        </div>
        <div className="reserved-grid">
          <div className="reserved">
            <span className="outlineicon">▤</span>
            <span className="smalllabel">مساحة محجوزة — بطاقات البرامج</span>
            <h3>تفاصيل برامجك</h3>
            <p>
              الجمهور والمستوى والأدوات والمدة والمخرجات ومتطلبات الإتمام وحالة
              التسجيل.
            </p>
          </div>
          <div className="reserved">
            <span className="outlineicon">▷</span>
            <span className="smalllabel">مساحة محجوزة — نموذج تجربة تعلم</span>
            <h3>جرّب قبل أن تبدأ</h3>
            <p>درس قصير، وواجب تطبيقي، ومعايير تقييم، ونموذج تقرير تقدم.</p>
          </div>
          <div className="reserved">
            <span className="outlineicon">◎</span>
            <span className="smalllabel">مساحة محجوزة — خبرات الفريق</span>
            <h3>الخبراء والمدربون</h3>
            <p>
              ملفات المدربين والمراجعين، وخبرات موثقة، وعينات أعمال مصرح بنشرها.
            </p>
          </div>
        </div>
        <p className="editor-note">
          هذه المساحات ظاهرة في نسخة المعاينة لتحديد مواضع المحتوى، وتُستبدل
          بالمواد المعتمدة قبل الإطلاق العام.
        </p>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section
      className="section contact"
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className="wrap contactgrid">
        <div className="contacttext">
          <div className="eyebrow">الخطوة التالية</div>
          <h2 id="contact-heading">
            ما المهمة التي يحتاج
            <br />
            فريقك إلى إتقانها؟
          </h2>
          <p>
            أخبرنا عن جمعيتك والحلول المستخدمة والوظائف المستهدفة. نبدأ من
            احتياج واضح، ونحدد معك برنامجًا قابلًا للتطبيق والمتابعة.
          </p>
          <div className="listline">
            <b>01</b>
            <div>
              <h3>نفهم الاحتياج</h3>
              <p>النشاط والأنظمة والوظائف والمهارات المطلوبة.</p>
            </div>
          </div>
          <div className="listline">
            <b>02</b>
            <div>
              <h3>نحدد البرنامج</h3>
              <p>مسارات وجلسات وتكليفات ومعايير إتقان واضحة.</p>
            </div>
          </div>
          <a className="email" href="mailto:info@thetransformix.com">
            info@thetransformix.com ↗
          </a>
        </div>
        <RequestForm />
      </div>
    </section>
  );
}
