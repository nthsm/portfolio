'use client'
import Link from 'next/link'
import { useState, useRef, ReactNode, useId, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SOCIAL_LINKS } from '@/app/data'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon, X } from 'lucide-react'
import useClickOutside from '@/hooks/useClickOutside'
import { ScrollProgress } from '@/components/ui/scroll-progress'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { BackToTopButton } from './back-to-top-button'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const NavLink = ({
  href,
  children,
  onClose,
  isHeaderTransparent,
}: {
  href: string
  children: React.ReactNode
  onClose?: () => void
  isHeaderTransparent?: boolean
}) => {
  const pathname = usePathname()
  const router = useRouter();
  const isHomePage = pathname === '/';
  const isWorkLinkOnHomePage = href === '/' && isHomePage;
  const isAnchorLink = href.startsWith('/#');
  const isActive = !isAnchorLink && !isWorkLinkOnHomePage && pathname === href && !isHeaderTransparent

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isWorkLinkOnHomePage) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    else if (isAnchorLink && isHomePage) {
      e.preventDefault()
      const targetId = href.substring(2)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' })
         history.pushState(null, '', href);
      }
    }

    if (onClose) {
      onClose()
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={cn(
        'transition-colors duration-200',
        isHeaderTransparent
          ? 'text-zinc-900 hover:text-zinc-700'
          : 'hover:text-zinc-900 dark:hover:text-zinc-100',
        isActive
          ? 'font-semibold text-zinc-900 dark:text-zinc-100'
          : isHeaderTransparent
            ? 'font-medium'
            : 'text-zinc-600 dark:text-zinc-400',
      )}
    >
      {children}
    </Link>
  )
}

const ThemeToggle = ({ variant = 'default', isHeaderTransparent }: { variant?: 'default' | 'icon', isHeaderTransparent?: boolean }) => {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const baseClasses = "relative flex items-center justify-center overflow-hidden transition-colors duration-200 focus:outline-none";

  const solidBgClasses = {
      default: "bg-zinc-200 text-zinc-600 hover:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700",
      icon: "text-zinc-500 hover:text-black dark:text-zinc-400 dark:hover:text-white"
  };

  const transparentBgClasses = {
      default: "rounded-lg bg-black/10 text-zinc-900 hover:bg-black/20 hover:text-zinc-700",
      icon: "text-zinc-900 hover:text-zinc-700"
  };

  const currentClasses = isHeaderTransparent ? transparentBgClasses[variant] : solidBgClasses[variant];
  const sizeClasses = variant === 'default' ? "h-8 w-8 rounded-lg" : "h-8 w-8";

  const buttonContent = (
      <AnimatePresence initial={false} mode="wait">
        {theme === 'dark' ? (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0, rotate: -90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: 20, opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute"
          >
            <SunIcon className="h-[18px] w-[18px]" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ y: 20, opacity: 0, rotate: 90 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            exit={{ y: -20, opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute"
          >
            <MoonIcon className="h-[18px] w-[18px]" />
          </motion.div>
        )}
      </AnimatePresence>
  );

  return (
      <button
        onClick={toggleTheme}
        className={cn(baseClasses, sizeClasses, currentClasses)}
        aria-label="Toggle theme"
        suppressHydrationWarning
      >
        {buttonContent}
      </button>
  )
}

const MobileNavMenu = ({ onClose }: { onClose?: () => void }) => (
    <div className="bg-zinc-100/80 dark:bg-zinc-900/80 backdrop-blur-md p-6 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-800">
      <nav className="flex flex-col space-y-4">
        <NavLink href="/" onClose={onClose}>Work</NavLink>
        <NavLink href="/#about-section" onClose={onClose}>About</NavLink>
        <NavLink href="/#blog-section" onClose={onClose}>Blog</NavLink>
      </nav>
    </div>
);

const Footer = () => (
    <footer className="w-full bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto py-6 px-4 flex flex-row justify-between items-center text-sm text-zinc-500 dark:text-zinc-400">
            <p>
                &copy; {new Date().getFullYear()} Nathan Smith
            </p>
            <div className="flex flex-row flex-wrap items-center justify-end gap-x-6 gap-y-2">
                <a href="mailto:nathan@nthsm.com" className="hover:text-zinc-900 dark:hover:text-zinc-100 whitespace-nowrap">
                    nathan@nthsm.com
                </a>
                <div className="flex items-center gap-4">
                    {SOCIAL_LINKS.map((social) => (
                        <a
                            key={social.label}
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className="p-1 hover:text-zinc-900 dark:hover:text-zinc-100"
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    </footer>
);

const LogoComponent = ({ className, onClose }: { className?: string; onClose?: () => void }) => (
    <Link href="/" className={cn('block h-7', className)} onClick={onClose}>
        <Image
            src="/ns.svg"
            alt="Nathan Smith Logo"
            width={28}
            height={28}
            priority={true}
            className="w-7 h-7"
        />
    </Link>
)

export default function SiteLayout({
  children,
  showProgressBar = false,
  fullWidth = false,
}: {
  children: React.ReactNode
  showProgressBar?: boolean
  fullWidth?: boolean
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname();
  const isImonPage = pathname === '/its-meow-or-never';

  const [isHeaderTransparent, setIsHeaderTransparent] = useState(isImonPage);

  useClickOutside(menuRef, () => {
    if (isMenuOpen) setIsMenuOpen(false)
  })

  useEffect(() => {
    if (!isImonPage) {
        setIsHeaderTransparent(false); // Ensure it's not transparent on other pages
        return;
    }

    const handleScroll = () => {
      let makeOpaque = false;
      if (window.innerWidth > 768) {
        // Desktop: Use full viewport height threshold
        makeOpaque = window.scrollY > window.innerHeight;
      } else {
        // Mobile: Use 50vh threshold (matching CSS min-height)
        makeOpaque = window.scrollY > (window.innerHeight * 0.5);
      }

      setIsHeaderTransparent(!makeOpaque); // Set transparent if NOT opaque
    };

    handleScroll(); // Check initial position on load/navigation
    window.addEventListener('scroll', handleScroll);
    return () => { // Cleanup listener
      window.removeEventListener('scroll', handleScroll);
    };
    // Depend on pathname and isImonPage to re-evaluate when navigating
  }, [pathname, isImonPage]);

  const mainMinHeight = 'min-h-[calc(100vh_-_4rem)]'

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 flex flex-col">
      <div className={cn(
          "sticky top-0 z-30 transition-colors duration-300 ease-in-out",
          isHeaderTransparent
            ? "bg-transparent"
            : "bg-zinc-50 dark:bg-zinc-950 shadow-sm dark:shadow-zinc-800/50"
      )}>
        <header className="flex items-center justify-between p-4 max-w-7xl mx-auto">
          <LogoComponent className="h-6" />
          <div className="hidden lg:flex items-center gap-6">
            <NavLink href="/" isHeaderTransparent={isHeaderTransparent}>Work</NavLink>
            <NavLink href="/#about-section" isHeaderTransparent={isHeaderTransparent}>About</NavLink>
            <NavLink href="/#blog-section" isHeaderTransparent={isHeaderTransparent}>Blog</NavLink>
            <ThemeToggle isHeaderTransparent={isHeaderTransparent} />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle variant="icon" isHeaderTransparent={isHeaderTransparent} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                  "z-50 -mr-2 p-2 transition-colors duration-200",
                  isHeaderTransparent
                    ? "text-zinc-900 hover:text-zinc-700"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100",
              )}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                 <X className="h-6 w-6" />
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>
        {showProgressBar && (
          <ScrollProgress
            className={cn(
              "h-0.5",
              isImonPage
                ? "bg-red-500 dark:bg-red-400"
                : "bg-zinc-800 dark:bg-zinc-600"
            )}
            springOptions={{ bounce: 0 }}
          />
        )}
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-xs lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20, transition: { duration: 0.15 } }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-20 right-4 z-50 origin-top-right lg:hidden"
            >
              <MobileNavMenu onClose={() => setIsMenuOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <main className={cn(
          "flex-1 w-full",
          !isImonPage && (fullWidth ? "pt-0" : "p-4 pt-16 lg:p-8 lg:pt-24"),
          isImonPage && "pt-0",
          !fullWidth && "max-w-7xl mx-auto"
        )}>
        {children}
      </main>

      <BackToTopButton isMenuOpen={isMenuOpen} />
      <Footer />
    </div>
  )
}
