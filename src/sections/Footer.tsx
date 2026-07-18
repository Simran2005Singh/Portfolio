export default function Footer({ isDark }: { isDark: boolean }) {
  return (
    <footer className={`py-12 border-t font-sans ${
      isDark ? 'border-zinc-900 bg-[#09090B] text-[#A1A1AA]' : 'border-gray-200 bg-[#FFFFFF] text-gray-500'
    }`}>
      <div className="max-w-4xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
        <p>
          Designed &amp; Developed by <span className={isDark ? 'text-[#F8FAFC]' : 'text-zinc-900'}>Simran Singh</span>
        </p>
        <p>
          &copy; {new Date().getFullYear()} Simran Singh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
