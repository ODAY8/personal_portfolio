"use client";

import React, { useState } from "react";
import {
  AlertCircle,
  ArrowUpRight,
  Check,
  Copy,
  FileText,
  Github,
  Linkedin,
  Mail,
  Send,
} from "lucide-react";
import { IDENTITY } from "@/data/experience";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "submitting" | "configured_success" | "unconfigured_notice" | "error"
  >("idle");

  const contactEndpoint =
    process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ||
    IDENTITY.contact.formspreeEndpoint;

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(IDENTITY.contact.emailPlaceholder);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      // Ignore clipboard failures in restricted environments
    }
  };

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!values.name.trim() || values.name.trim().length < 2) {
      nextErrors.name = "Please enter your name (at least 2 characters).";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!values.email.trim() || !emailRegex.test(values.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!values.subject.trim() || values.subject.trim().length < 3) {
      nextErrors.subject = "Please provide a clear subject line.";
    }
    if (!values.message.trim() || values.message.trim().length < 10) {
      nextErrors.message =
        "Please write a message of at least 10 characters.";
    }
    return nextErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitStatus !== "idle") {
      setSubmitStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitStatus("submitting");

    if (!contactEndpoint) {
      setSubmitStatus("unconfigured_notice");
      return;
    }

    try {
      const response = await fetch(contactEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setSubmitStatus("configured_success");
        setValues({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    }
  };

  const handleCopyFormattedDraft = async () => {
    const formatted = `From: ${values.name} (${values.email})\nSubject: ${values.subject}\n\n${values.message}`;
    try {
      await navigator.clipboard.writeText(formatted);
      setCopiedMessage(true);
      setTimeout(() => setCopiedMessage(false), 2500);
    } catch {
      // ignore
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="editorial-wrap py-24 md:py-36"
    >
      {/* Top Editorial Contact Header */}
      <div>
        <p className="eyebrow-line m-0 text-[#1f2124]">
          07 / HAVE AN IDEA OR OPPORTUNITY?
        </p>
        <h2
          id="contact-heading"
          className="mt-6 mb-6 max-w-[980px] text-[clamp(44px,6.8vw,96px)] leading-[0.88] font-semibold tracking-[-0.06em] text-[#1f2124]"
        >
          Let&apos;s build{" "}
          <em className="font-serif-editorial font-normal italic text-[#2b5464]">
            something meaningful.
          </em>
        </h2>
        <p className="max-w-[580px] text-[16px] leading-[1.7] text-[#52565c] md:text-[18px]">
          I&apos;m always interested in connecting with developers, founders,
          researchers, and people who enjoy building useful technology.
        </p>
      </div>

      {/* Main Contact Grid: Left Direct Channels, Right Validated Form */}
      <div className="mt-14 grid grid-cols-1 gap-12 border-t border-[#1f2124] pt-12 lg:grid-cols-12 lg:gap-14">
        {/* Left 5 Cols: Direct Channels & Copy Email Interaction */}
        <div className="flex flex-col justify-between gap-8 lg:col-span-5">
          <div className="space-y-6">
            {/* Email Card with Direct Mailto & Copy Interaction */}
            <div className="border border-[#1f2124]/25 bg-[#eee9df] p-6">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-[#52565c]">
                  <Mail className="h-3.5 w-3.5 text-[#2b5464]" />
                  Direct Email
                </span>
                <span className="font-mono-tech bg-[#2b5464] px-2 py-0.5 text-[9px] uppercase text-[#eee9df]">
                  Verified
                </span>
              </div>

              <a
                href={`mailto:${IDENTITY.contact.emailPlaceholder}`}
                className="font-mono-tech mt-3 block break-all text-[16px] font-medium text-[#1f2124] underline decoration-[#1f2124]/30 underline-offset-4 transition-colors hover:text-[#2b5464]"
              >
                {IDENTITY.contact.emailPlaceholder}
              </a>

              <div className="mt-5 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="font-mono-tech inline-flex min-h-[42px] items-center gap-2.5 border border-[#1f2124] bg-[#1f2124] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-[#eee9df] transition-colors hover:border-[#2b5464] hover:bg-[#2b5464] cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#9ec0ce]" />
                      <span>Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy Email Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${IDENTITY.contact.emailPlaceholder}`}
                  className="font-mono-tech inline-flex min-h-[42px] items-center gap-2 border border-[#1f2124] bg-transparent px-4 py-2 text-[10px] font-medium uppercase tracking-[0.08em] text-[#1f2124] transition-colors hover:bg-[#1f2124] hover:text-[#eee9df]"
                >
                  <span>Email Directly</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Social & Professional Profiles */}
            <div className="divide-y divide-[#1f2124]/15 border-t border-b border-[#1f2124]/15">
              <a
                href={IDENTITY.contact.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-4 transition-colors hover:text-[#2b5464]"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-[#1f2124]" />
                  <div>
                    <span className="font-mono-tech block text-[10px] uppercase tracking-[0.1em] text-[#52565c]">
                      GitHub Profile
                    </span>
                    <span className="font-mono-tech text-[13px] font-medium text-[#1f2124]">
                      {IDENTITY.contact.githubLabel}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={IDENTITY.contact.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-4 transition-colors hover:text-[#2b5464]"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-[#1f2124]" />
                  <div>
                    <span className="font-mono-tech block text-[10px] uppercase tracking-[0.1em] text-[#52565c]">
                      LinkedIn
                    </span>
                    <span className="font-mono-tech text-[13px] font-medium text-[#1f2124]">
                      {IDENTITY.contact.linkedinLabel}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={IDENTITY.contact.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-4 transition-colors hover:text-[#2b5464]"
              >
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-[#1f2124]" />
                  <div>
                    <span className="font-mono-tech block text-[10px] uppercase tracking-[0.1em] text-[#52565c]">
                      Curriculum Vitae
                    </span>
                    <span className="font-mono-tech text-[13px] font-medium text-[#1f2124]">
                      View Resume (PDF)
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          <div className="border-l-2 border-[#2b5464] pl-4">
            <p className="font-mono-tech text-[11px] uppercase tracking-[0.08em] text-[#1f2124]">
              Location: {IDENTITY.location}
            </p>
            <p className="mt-1 text-[13px] leading-[1.6] text-[#52565c]">
              Open to software engineering internships, AI developer roles,
              research collaborations, and product engineering opportunities.
            </p>
          </div>
        </div>

        {/* Right 7 Cols: Validated Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            noValidate
            aria-label="Contact form"
            className="border border-[#1f2124]/25 bg-[#eee9df] p-6 sm:p-10"
          >
            <div className="mb-6 flex items-center justify-between border-b border-[#1f2124]/15 pb-4">
              <span className="font-mono-tech text-[11px] font-medium uppercase tracking-[0.12em] text-[#1f2124]">
                Send a Message
              </span>
              <span className="font-mono-tech text-[10px] uppercase text-[#52565c]">
                All fields required
              </span>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="font-mono-tech mb-2 block text-[10px] font-medium uppercase tracking-[0.1em] text-[#1f2124]"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "error-name" : undefined}
                  className="w-full border border-[#1f2124]/30 bg-[#e6e0d4] px-4 py-3 text-[14px] text-[#1f2124] placeholder:text-[#52565c]/65 focus:border-[#2b5464] focus:outline-none"
                />
                {errors.name && (
                  <p
                    id="error-name"
                    role="alert"
                    className="font-mono-tech mt-1.5 text-[11px] text-[#8c4a27]"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="font-mono-tech mb-2 block text-[10px] font-medium uppercase tracking-[0.1em] text-[#1f2124]"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "error-email" : undefined}
                  className="w-full border border-[#1f2124]/30 bg-[#e6e0d4] px-4 py-3 text-[14px] text-[#1f2124] placeholder:text-[#52565c]/65 focus:border-[#2b5464] focus:outline-none"
                />
                {errors.email && (
                  <p
                    id="error-email"
                    role="alert"
                    className="font-mono-tech mt-1.5 text-[11px] text-[#8c4a27]"
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="font-mono-tech mb-2 block text-[10px] font-medium uppercase tracking-[0.1em] text-[#1f2124]"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                value={values.subject}
                onChange={handleChange}
                placeholder="Project collaboration, engineering role, or inquiry"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? "error-subject" : undefined}
                className="w-full border border-[#1f2124]/30 bg-[#e6e0d4] px-4 py-3 text-[14px] text-[#1f2124] placeholder:text-[#52565c]/65 focus:border-[#2b5464] focus:outline-none"
              />
              {errors.subject && (
                <p
                  id="error-subject"
                  role="alert"
                  className="font-mono-tech mt-1.5 text-[11px] text-[#8c4a27]"
                >
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="font-mono-tech mb-2 block text-[10px] font-medium uppercase tracking-[0.1em] text-[#1f2124]"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                placeholder="Tell me about what you are building or how we can work together..."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "error-message" : undefined}
                className="w-full resize-y border border-[#1f2124]/30 bg-[#e6e0d4] px-4 py-3 text-[14px] text-[#1f2124] placeholder:text-[#52565c]/65 focus:border-[#2b5464] focus:outline-none"
              />
              {errors.message && (
                <p
                  id="error-message"
                  role="alert"
                  className="font-mono-tech mt-1.5 text-[11px] text-[#8c4a27]"
                >
                  {errors.message}
                </p>
              )}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={submitStatus === "submitting"}
                className="font-mono-tech inline-flex min-h-[54px] w-full items-center justify-between border border-[#1f2124] bg-[#1f2124] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] text-[#eee9df] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2b5464] hover:bg-[#2b5464] disabled:opacity-60 sm:w-auto sm:min-w-[260px] cursor-pointer"
              >
                <span>
                  {submitStatus === "submitting"
                    ? "Sending..."
                    : "Send Message"}
                </span>
                <Send className="ml-6 h-4 w-4" />
              </button>
            </div>

            {submitStatus === "unconfigured_notice" && (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 border border-[#1f2124] bg-[#e6e0d4] p-5"
              >
                <div className="flex items-start gap-3">
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#2b5464]" />
                  <div>
                    <p className="font-mono-tech m-0 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#1f2124]">
                      Email Service Configuration Required
                    </p>
                    <p className="mt-1.5 text-[13.5px] leading-[1.65] text-[#2c3035]">
                      Your message passed validation, but an endpoint is not
                      configured. You can copy your formatted message below or
                      email directly.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={handleCopyFormattedDraft}
                        className="font-mono-tech inline-flex items-center gap-2 border border-[#1f2124] bg-[#1f2124] px-4 py-2 text-[10px] uppercase text-[#eee9df] hover:bg-[#2b5464] cursor-pointer"
                      >
                        {copiedMessage ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-[#9ec0ce]" />
                            <span>Formatted Message Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3.5 w-3.5" />
                            <span>Copy Formatted Message</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {submitStatus === "configured_success" && (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 border-l-4 border-[#2e6f40] bg-[#e6e0d4] p-4 text-[#1f2124]"
              >
                <p className="font-mono-tech m-0 text-[11px] font-semibold uppercase">
                  Message sent. Thank you for reaching out!
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div
                role="alert"
                className="mt-6 border border-[#8c4a27] bg-[#e6e0d4] p-4 text-[#8c4a27]"
              >
                <p className="font-mono-tech m-0 text-[11px] font-semibold uppercase">
                  Unable to deliver message at the moment. Please email{" "}
                  {IDENTITY.contact.emailPlaceholder} directly.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
