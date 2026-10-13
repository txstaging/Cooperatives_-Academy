"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { programs, contactEmail } from "@/data/academy";

type PreparedRequest = { message: string; mailto: string };

export function RequestForm() {
  const [request, setRequest] = useState<PreparedRequest | null>(null);
  const [copyStatus, setCopyStatus] = useState("");
  const result = useRef<HTMLDivElement>(null);
  const messageField = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (request) {
      result.current?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "center",
      });
      messageField.current?.focus({ preventScroll: true });
    }
  }, [request]);

  function prepareRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    const message = [
      "طلب برنامج تدريبي لأكاديمية TX للتعاونيات",
      "",
      `اسم الجمعية: ${field("association")}`,
      `النشاط: ${field("activity")}`,
      `المسؤول: ${field("person")}`,
      `البريد: ${field("email")}`,
      `مجال الاهتمام: ${field("interest")}`,
      `الحلول والوظائف المستهدفة: ${field("needs")}`,
    ].join("\n");
    const subject = `طلب برنامج تدريبي — ${field("association")}`;
    setRequest({
      message,
      mailto: `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`,
    });
    setCopyStatus("");
  }

  async function copyMessage() {
    if (!request) return;
    try {
      await navigator.clipboard.writeText(request.message);
      setCopyStatus("تم نسخ الرسالة");
    } catch {
      messageField.current?.focus();
      messageField.current?.select();
      setCopyStatus("حدد النص وانسخه من الحقل");
    }
  }

  return (
    <form className="form" id="requestForm" onSubmit={prepareRequest}>
      <div className="fields">
        <div className="field">
          <label htmlFor="association">اسم الجمعية *</label>
          <input
            id="association"
            name="association"
            required
            autoComplete="organization"
          />
        </div>
        <div className="field">
          <label htmlFor="activity">طبيعة النشاط</label>
          <input
            id="activity"
            name="activity"
            placeholder="زراعي، استهلاكي، إنتاجي..."
          />
        </div>
        <div className="field">
          <label htmlFor="person">اسم المسؤول *</label>
          <input id="person" name="person" required autoComplete="name" />
        </div>
        <div className="field">
          <label htmlFor="email">البريد الإلكتروني *</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            autoComplete="email"
            dir="ltr"
          />
        </div>
        <div className="field full">
          <label htmlFor="interest">مجال التدريب محل الاهتمام</label>
          <select
            id="interest"
            name="interest"
            defaultValue="أحتاج المساعدة في تحديد المسارات"
          >
            <option>أحتاج المساعدة في تحديد المسارات</option>
            {programs.map((program) => (
              <option key={program.number}>{program.title}</option>
            ))}
          </select>
        </div>
        <div className="field full">
          <label htmlFor="needs">
            الحلول المستخدمة والوظائف المطلوب تدريبها
          </label>
          <textarea
            id="needs"
            name="needs"
            placeholder="حدثنا باختصار عن احتياج فريقك"
          />
        </div>
      </div>
      <button className="btn" type="submit">
        جهّز طلب البرنامج <span aria-hidden="true">←</span>
      </button>
      <p className="form-note">
        يجهز النموذج رسالة يمكنك إرسالها من بريدك. لا تُرسل البيانات ولا تُحفظ
        على خادم من خلال هذه الصفحة.
      </p>
      <div
        className="formresult"
        id="formResult"
        ref={result}
        hidden={!request}
        aria-live="polite"
      >
        {request && (
          <>
            <p>
              <strong>طلبك جاهز للمراجعة.</strong> لم يُرسل بعد. افتح تطبيق
              بريدك أو انسخ الرسالة وأرسلها إلى عنواننا.
            </p>
            <textarea
              id="messageText"
              ref={messageField}
              value={request.message}
              readOnly
              aria-label="نص الطلب الجاهز"
            />
            <a className="btn" id="mailLink" href={request.mailto}>
              افتح البريد لإرسال الطلب ↗
            </a>
            <button
              className="copybutton"
              type="button"
              id="copyMessage"
              onClick={copyMessage}
            >
              نسخ الرسالة
            </button>
            <span className="micro" id="copyStatus" role="status">
              {copyStatus}
            </span>
          </>
        )}
      </div>
    </form>
  );
}
