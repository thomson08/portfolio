import Image from "next/image";

// A phone frame. `src` optional — falls back to a labeled placeholder.
export function Phone({
  src,
  alt,
  className = "",
  dark = false,
}: {
  src?: string;
  alt?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[9/19.3] w-full rounded-[1.55rem] bg-[#0a0a0c] p-[3px] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] ${
        dark ? "ring-1 ring-white/10" : "ring-1 ring-black/5"
      } ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.4rem] bg-paper-dim">
        {/* dynamic island — placeholders only (real screenshots render their own top UI) */}
        {!src && (
          <div className="absolute left-1/2 top-[6px] z-10 h-[13px] w-[32%] -translate-x-1/2 rounded-full bg-black" />
        )}
        {src ? (
          <Image src={src} alt={alt ?? ""} fill className="object-cover" sizes="240px" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-black/[0.04] to-black/[0.12] text-[10px] uppercase tracking-[0.2em] text-ink/30">
            screen
          </div>
        )}
      </div>
    </div>
  );
}

// A browser / desktop frame.
export function Browser({
  src,
  alt,
  className = "",
  dark = false,
}: {
  src?: string;
  alt?: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border ${
        dark ? "border-white/10" : "border-ink/10"
      } bg-paper-dim shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)] ${className}`}
    >
      <div
        className={`flex h-8 items-center gap-2 px-4 ${
          dark ? "bg-white/5" : "bg-black/5"
        }`}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
        <span className="h-2.5 w-2.5 rounded-full bg-black/20" />
      </div>
      <div className="relative aspect-[1.872] w-full">
        {src ? (
          <Image src={src} alt={alt ?? ""} fill className="object-cover object-top" sizes="720px" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-black/[0.04] to-black/[0.12] text-[10px] uppercase tracking-[0.2em] text-ink/30">
            dashboard
          </div>
        )}
      </div>
    </div>
  );
}
