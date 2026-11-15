import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  ArrowUp,
  Bot,
  Check,
  ChevronDown,
  CircleHelp,
  Loader2,
  Mail,
  MessageCircle,
  Minus,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ChatMessage = { role: "user" | "assistant"; content: string };

const starters = [
  "What can Gad build for my business?",
  "Show me some of Gad's projects",
  "What technologies does he use?",
];

const PortfolioAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hey there! 👋 I'm Gad's AI assistant. Ask me about his projects, skills, experience, or how he could help with your next idea.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [contact, setContact] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isThinking, showContact]);

  useEffect(() => {
    if (isOpen && !showContact) {
      const timer = window.setTimeout(() => inputRef.current?.focus(), 180);
      return () => window.clearTimeout(timer);
    }
  }, [isOpen, showContact]);

  const sendMessage = async (text = input) => {
    const trimmed = text.trim();
    if (!trimmed || isThinking) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setIsThinking(true);
    setError("");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages.slice(-12) }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data?.error || "Unable to get a response.");
      setMessages((current) => [...current, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsThinking(false);
    }
  };

  const sendContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSending) return;
    setIsSending(true);
    setError("");

    try {
      await emailjs.send(
        "service_foacfph",
        "template_dtdb3uu",
        {
          name: contact.name,
          email: contact.email,
          title: contact.subject,
          message: contact.message,
          time: new Date().toLocaleString(),
        },
        "HcLU1Z-K2aPhEu8i8"
      );
      setSent(true);
      setContact({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Assistant contact form error:", err);
      setError("Couldn't send your message. Please try again or email Gad directly.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-5 right-5 z-[70] flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
        {isOpen && (
          <section
            aria-label="Chat with Gad's AI assistant"
            className="portfolio-chat-panel flex h-[min(680px,calc(100dvh-112px))] w-[min(410px,calc(100vw-28px))] flex-col overflow-hidden rounded-[26px] border border-border/70 bg-card shadow-[0_24px_90px_rgba(0,0,0,0.24)]"
          >
            <header className="relative overflow-hidden bg-[#171717] px-5 pb-5 pt-5 text-white">
              <div className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative grid h-11 w-11 place-items-center rounded-2xl border border-amber-300/30 bg-white/10 text-amber-300">
                    <Bot className="h-6 w-6" />
                    <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#171717] bg-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold tracking-tight">Gad's AI Assistant</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs text-white/65">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Here to help • Portfolio guide
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  aria-label="Minimize chat"
                  onClick={() => setIsOpen(false)}
                  className="rounded-full p-2 text-white/65 transition hover:bg-white/10 hover:text-white"
                >
                  <Minus className="h-4 w-4" />
                </button>
              </div>
              <div className="relative mt-4 flex items-center gap-2 text-[11px] text-white/55">
                <Sparkles className="h-3.5 w-3.5 text-amber-300" />
                Ask about projects, skills, experience or collaboration
              </div>
            </header>

            {showContact ? (
              <div className="flex min-h-0 flex-1 flex-col">
                <div className="flex items-center gap-2 border-b border-border/70 px-5 py-3">
                  <button type="button" onClick={() => { setShowContact(false); setSent(false); setError(""); }} className="text-sm font-medium text-muted-foreground transition hover:text-foreground">
                    <span aria-hidden="true">←</span> Back to chat
                  </button>
                  <span className="ml-auto text-xs text-muted-foreground">Direct message to Gad</span>
                </div>
                {sent ? (
                  <div className="flex flex-1 flex-col items-center justify-center px-7 text-center">
                    <div className="mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-600">
                      <Check className="h-7 w-7" />
                    </div>
                    <h3 className="text-lg font-semibold">Message sent!</h3>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">Thanks for reaching out. Your message has been delivered to Gad's inbox.</p>
                    <Button className="mt-6 rounded-xl" onClick={() => { setShowContact(false); setSent(false); }}>Back to assistant</Button>
                  </div>
                ) : (
                  <form onSubmit={sendContact} className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-5">
                    <div>
                      <h3 className="text-lg font-semibold">Let's talk about your idea.</h3>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">Send Gad a message directly. He'll be able to reply to your email.</p>
                    </div>
                    <label className="space-y-1.5 text-xs font-medium">
                      Your name
                      <Input required autoComplete="name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} placeholder="Your name" className="h-10 rounded-xl bg-background text-sm" />
                    </label>
                    <label className="space-y-1.5 text-xs font-medium">
                      Email address
                      <Input required type="email" autoComplete="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} placeholder="you@example.com" className="h-10 rounded-xl bg-background text-sm" />
                    </label>
                    <label className="space-y-1.5 text-xs font-medium">
                      Subject
                      <Input required value={contact.subject} onChange={(e) => setContact({ ...contact, subject: e.target.value })} placeholder="Project inquiry, collaboration..." className="h-10 rounded-xl bg-background text-sm" />
                    </label>
                    <label className="space-y-1.5 text-xs font-medium">
                      Message
                      <Textarea required rows={4} value={contact.message} onChange={(e) => setContact({ ...contact, message: e.target.value })} placeholder="Tell Gad a little about what you have in mind..." className="min-h-24 resize-y rounded-xl bg-background text-sm" />
                    </label>
                    {error && <p role="alert" className="text-xs text-destructive">{error}</p>}
                    <Button type="submit" disabled={isSending} className="mt-auto h-11 rounded-xl font-semibold">
                      {isSending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</> : <><Send className="mr-2 h-4 w-4" /> Send message to Gad</>}
                    </Button>
                    <p className="text-center text-[10px] text-muted-foreground">Your details are used only to respond to your enquiry.</p>
                  </form>
                )}
              </div>
            ) : (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto bg-background/65 px-4 py-5">
                  <div className="flex items-center justify-center">
                    <span className="rounded-full border border-border/70 bg-card px-3 py-1 text-[10px] text-muted-foreground">A little about Gad</span>
                  </div>
                  {messages.map((message, index) => (
                    <div key={index} className={`flex items-end gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                      {message.role === "assistant" && (
                        <span className="mb-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-[#171717] text-amber-300">
                          <Sparkles className="h-3.5 w-3.5" />
                        </span>
                      )}
                      <div className={`max-w-[84%] whitespace-pre-wrap break-words rounded-2xl px-3.5 py-3 text-[13px] leading-[1.65] shadow-sm ${message.role === "user" ? "rounded-br-md bg-primary text-primary-foreground" : "rounded-bl-md border border-border/70 bg-card text-card-foreground"}`}>
                        {message.content.split(/(https?:\/\/[^\s]+)/g).map((part, partIndex) =>
                          /^https?:\/\//.test(part) ? (
                            <a key={partIndex} href={part} target="_blank" rel="noreferrer" className="underline underline-offset-2">{part}</a>
                          ) : part
                        )}
                      </div>
                      {message.role === "user" && (
                        <span className="mb-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-xl bg-secondary text-muted-foreground">
                          <User className="h-3.5 w-3.5" />
                        </span>
                      )}
                    </div>
                  ))}
                  {isThinking && (
                    <div className="flex items-end gap-2">
                      <span className="grid h-7 w-7 place-items-center rounded-xl bg-[#171717] text-amber-300"><Sparkles className="h-3.5 w-3.5" /></span>
                      <div className="flex items-center gap-1 rounded-2xl rounded-bl-md border border-border/70 bg-card px-4 py-3">
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.2s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.1s]" />
                        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                      </div>
                    </div>
                  )}
                  {error && !showContact && (
                    <div role="alert" className="ml-9 rounded-xl border border-destructive/20 bg-destructive/5 px-3 py-2 text-xs text-destructive">
                      {error}
                      {error.toLowerCase().includes("not configured") && <p className="mt-1">You can still <button type="button" className="underline underline-offset-2" onClick={() => { setShowContact(true); setError(""); }}>send Gad a message</button>.</p>}
                    </div>
                  )}
                  {messages.length === 1 && (
                    <div className="ml-9 flex flex-wrap gap-2 pt-1">
                      {starters.map((starter) => (
                        <button key={starter} type="button" onClick={() => sendMessage(starter)} className="rounded-full border border-border bg-card px-3 py-2 text-left text-[11px] leading-4 text-muted-foreground transition hover:border-primary/40 hover:text-foreground">
                          {starter}
                        </button>
                      ))}
                    </div>
                  )}
                  <div ref={endRef} />
                </div>
                <div className="border-t border-border/70 bg-card px-3 pb-3 pt-3">
                  <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex items-center gap-2 rounded-2xl border border-border bg-background p-1.5 pl-3 transition focus-within:border-primary/50 focus-within:ring-2 focus-within:ring-primary/10">
                    <input
                      ref={inputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Ask me anything about Gad..."
                      aria-label="Your question"
                      maxLength={1200}
                      className="min-w-0 flex-1 bg-transparent py-2 text-[13px] outline-none placeholder:text-muted-foreground"
                      disabled={isThinking}
                    />
                    <button type="submit" aria-label="Send message" disabled={!input.trim() || isThinking} className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40">
                      <ArrowUp className="h-4 w-4" />
                    </button>
                  </form>
                  <div className="mt-2 flex items-center justify-between px-1">
                    <span className="text-[10px] text-muted-foreground">AI-generated answers • May make mistakes</span>
                    <button type="button" onClick={() => { setShowContact(true); setError(""); }} className="flex items-center gap-1 text-[11px] font-semibold text-foreground transition hover:text-primary">
                      <Mail className="h-3 w-3" /> Contact Gad
                    </button>
                  </div>
                </div>
              </>
            )}
          </section>
        )}

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? "Close AI assistant" : "Chat with Gad's AI assistant"}
          className={`group relative flex items-center gap-2.5 rounded-full border border-amber-300/40 bg-[#171717] px-4 py-3 text-white shadow-[0_10px_35px_rgba(0,0,0,0.28)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_42px_rgba(0,0,0,0.34)] ${isOpen ? "scale-95" : ""}`}
        >
          <span className="absolute inset-0 rounded-full bg-amber-300/10 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
          <span className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-amber-200 to-amber-500 text-[#241707]">
            {isOpen ? <X className="h-4 w-4" /> : <MessageCircle className="h-4 w-4" />}
          </span>
          <span className="relative pr-1 text-left">
            <span className="block text-[13px] font-semibold leading-4">{isOpen ? "Close assistant" : "Ask my AI"}</span>
            <span className="block text-[10px] leading-4 text-white/60">{isOpen ? "Talk soon" : "Curious about my work?"}</span>
          </span>
          {!isOpen && <span className="relative ml-1 grid h-6 w-6 place-items-center rounded-full bg-white/10"><ArrowUp className="h-3.5 w-3.5 rotate-45" /></span>}
        </button>
      </div>
      <style>{`
        @keyframes portfolio-chat-enter {
          from { opacity: 0; transform: translateY(12px) scale(.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .portfolio-chat-panel { animation: portfolio-chat-enter .22s cubic-bezier(.2,.8,.2,1) both; transform-origin: bottom right; }
        @media (prefers-reduced-motion: reduce) {
          .portfolio-chat-panel { animation: none; }
        }
      `}</style>
    </>
  );
};

export default PortfolioAssistant;
