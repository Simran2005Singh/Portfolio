export default function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer className={`py-12 border-t font-sans ${
      isDark ? 'border-zinc-900 bg-zinc-950/40 text-zinc-500' : 'border-zinc-200 bg-zinc-50/40 text-zinc-400'
    }`}>
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
        <p>
          Designed &amp; Developed by <span className={isDark ? 'text-zinc-400' : 'text-zinc-700'}>Simran Singh</span>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Simran Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
