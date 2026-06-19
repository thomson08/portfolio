"use client";

import { useState } from "react";

// Get a free access key at https://web3forms.com (enter qninh@chapman.edu).
// It's a public client-side key — safe to commit.
const WEB3FORMS_ACCESS_KEY = "c1bd667d-5aa8-4939-9e9e-db89c26ac176";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", "New message from thomasninh.com");
    data.append("from_name", "Portfolio — thomasninh.com");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[18rem] flex-col items-start justify-center rounded-2xl border border-ink/15 bg-ink/[0.04] p-8">
        <p className="text-2xl font-semibold tracking-tight">Message sent ✦</p>
        <p className="mt-2 text-sm text-ink/70">
          Thanks for reaching out — I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium underline underline-offset-4"
        >
          Send another
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full rounded-xl border border-ink/15 bg-paper/80 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink/40 focus:border-ink";

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3">
      {/* honeypot for spam */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <input name="name" required placeholder="Your name" className={inputCls} />
        <input
          name="email"
          type="email"
          required
          placeholder="Your email"
          className={inputCls}
        />
      </div>
      <textarea
        name="message"
        required
        rows={4}
        placeholder="What's on your mind?"
        className={`${inputCls} resize-none`}
      />
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-transform duration-300 hover:-translate-y-0.5 disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send message ↗"}
        </button>
        {status === "error" && (
          <p className="text-sm text-ink/80">
            Something went wrong — email me at qninh@chapman.edu
          </p>
        )}
      </div>
    </form>
  );
}
