export default function Footer() {
  return (
    <footer className="w-full px-6 py-8 md:px-12 flex flex-col md:flex-row justify-between items-center md:items-end border-t border-white/10">
      <div className="text-xs text-gray-500 mb-4 md:mb-0 space-y-2">
        <div className="tracking-widest uppercase">
          &copy; 2026 NaidenovART
        </div>
        <div className="normal-case tracking-normal">
          Уебсайтът е създаден от{" "}
          <a
            href="https://www.hmwspro.com/bg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-blue-400 transition-colors underline"
          >
            H&M Website Provisioning
          </a>
        </div>
      </div>
      <div className="flex space-x-8">
        <a
          href="https://www.instagram.com/naidenov_art/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-blue-400 transition-colors transform hover:-translate-y-1 duration-300"
        >
          <span className="sr-only">Instagram</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61573373319939"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-blue-400 transition-colors transform hover:-translate-y-1 duration-300"
        >
          <span className="sr-only">Facebook</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}

