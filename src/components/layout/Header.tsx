/* eslint-disable react-hooks/set-state-in-effect */
// ─────────────────────────────────────────────
// Header — site-wide navigation
// Shows logo, horizontal line (desktop), and nav links
// with numbered prefixes. Hamburger on mobile.
// ─────────────────────────────────────────────

import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Home', num: '00', path: '/' },
  { label: 'Destination', num: '01', path: '/destination' },
  { label: 'Crew', num: '02', path: '/crew' },
  { label: 'Technology', num: '03', path: '/technology' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
    document.body.classList.remove('mobile-nav-open');
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      document.body.classList.toggle('mobile-nav-open', !prev);
      return !prev;
    });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-0 pt-6 md:pt-0">
      {/* ── Logo ── */}
      <NavLink to="/" className="lg:ml-13.75 z-50">
        <img src="/assets/shared/logo.svg" alt="Space Tourism logo" className="w-10 h-10 md:w-12 md:h-12" />
      </NavLink>

      {/* ── Decorative horizontal rule (desktop only) ── */}
      <div className="hidden lg:block flex-1 h-px bg-white/20 relative z-10 mx-8" />

      {/* ── Desktop Navigation ── */}
      <nav className="hidden md:block">
        <ul className="flex backdrop-blur-2xl bg-white/5 h-24 px-12 lg:px-20 gap-8 lg:gap-10 items-center">
          {navLinks.map(({ label, num, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  [
                    'relative flex items-center gap-2.5 h-full py-8 text-[14px] tracking-[2.7px] uppercase font-sans-condensed transition-colors duration-200',
                    'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.75 after:transition-all after:duration-200',
                    isActive
                      ? 'text-white after:bg-white'
                      : 'text-[#D0D6F9] hover:after:bg-white/50 after:bg-transparent',
                  ].join(' ')
                }
              >
                <span className="font-bold hidden lg:inline">{num}</span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* ── Mobile Hamburger ── */}
      <button
        className="md:hidden z-50 w-6 h-5 flex flex-col justify-between"
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? (
          <img src="/assets/shared/icon-close.svg" alt="" className="w-6 h-6" />
        ) : (
          <img src="/assets/shared/icon-hamburger.svg" alt="" className="w-6 h-5" />
        )}
      </button>

      {/* ── Mobile Slide-In Nav ── */}
      <div
        className={[
          'fixed inset-y-0 right-0 w-[67vw] backdrop-blur-2xl bg-white/5 z-40 pt-28 px-8',
          'transition-transform duration-300 md:hidden',
          menuOpen ? 'translate-x-0' : 'translate-x-full',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-8">
          {navLinks.map(({ label, num, path }) => (
            <li key={label}>
              <NavLink
                to={path}
                end={path === '/'}
                className={({ isActive }) =>
                  [
                    'flex items-center gap-2.5 text-[16px] tracking-[2.7px] uppercase font-sans-condensed',
                    'relative py-2',
                    'after:absolute after:right-0 after:top-0 after:bottom-0 after:w-0.75 after:transition-all after:duration-200',
                    isActive
                      ? 'text-white after:bg-white'
                      : 'text-[#D0D6F9] hover:after:bg-white/50 after:bg-transparent',
                  ].join(' ')
                }
              >
                <span className="font-bold">{num}</span>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile overlay backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          onClick={toggleMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
