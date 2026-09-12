import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import stanfordSeal from './assets/stanford_seal.png';
import myArt from '../assets/pics/myart.jpeg';

const InlineLink = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-900 underline-offset-[3px] transition-colors"
  >
    {children}
  </a>
);

const navItems = [
  { to: '/works', label: 'works' },
];

const socialLinks = [
  { href: 'https://github.com/batu-el', label: 'github' },
  { href: 'https://www.linkedin.com/in/batu-el/', label: 'linkedin' },
  { href: 'https://twitter.com/elb4tu', label: 'x' },
  { href: 'https://scholar.google.com/citations?user=fuY9Zc8AAAAJ&hl=en', label: 'scholar' },
];

const Layout = () => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white text-neutral-900">
      {/* Sidebar */}
      <aside className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-[320px] xl:w-[360px] lg:overflow-y-auto no-scrollbar border-b lg:border-b-0 lg:border-r border-neutral-200/80 bg-white">
        <div className="px-10 pt-14 pb-20 flex flex-col h-full">
          {/* Portrait */}
          <div className="flex justify-center mb-10">
            <div className="w-[200px] h-[240px] rounded-md overflow-hidden">
              <img
                src={myArt}
                alt="Batu El — artwork"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          </div>

          {/* Name */}
          <div className="mb-5">
            <h1 className="text-[22px] font-medium leading-none tracking-tight text-neutral-900">
              batu el
            </h1>
            <p className="font-mono text-[10.5px] text-neutral-400 mt-2">
              batuel [at] stanford [dot] edu
            </p>
          </div>

          {/* Bio */}
          <p className="text-[13.5px] text-neutral-600 leading-[1.7] mb-6">
            phd student in computational and mathematical engineering at stanford,
            working on ai agents, advised by{' '}
            <InlineLink href="https://www.james-zou.com/">james zou</InlineLink>.
            knight-hennessy scholar. previously, president of the{' '}
            <InlineLink href="https://stanford-turkish-student-association.github.io/home/">stanford turkish student association</InlineLink>,
            director at{' '}
            <InlineLink href="https://www.cstf.dev/">cognitive security task force</InlineLink>,
            mphil in advanced computer science at cambridge with{' '}
            <InlineLink href="https://andreasvlachos.github.io/">andreas vlachos</InlineLink>,
            consultant for central banks at the world bank,
            and undergraduate in mathematics, computer science, and economics at{' '}
            <InlineLink href="https://college.tulane.edu/newcomb-tulane-college-announces-class-2022-william-wallace-peery-society">tulane</InlineLink>.
          </p>

          {/* Socials */}
          <div className="flex gap-4 items-baseline text-[13.5px]">
            {socialLinks.map((link) => (
              <InlineLink key={link.label} href={link.href}>
                {link.label}
              </InlineLink>
            ))}
          </div>

        </div>
      </aside>

      {/* Main panel */}
      <main className="flex-1 lg:ml-[320px] xl:ml-[360px]">
        {/* Top nav */}
        <div className="sticky top-0 z-30 bg-white/85 backdrop-blur-md border-b border-neutral-200/80">
          <nav className="max-w-2xl mx-auto px-10 sm:px-14 py-5 flex items-center justify-between gap-4">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `text-[13.5px] tracking-tight transition-colors duration-150 underline-offset-[4px] ${
                        isActive
                          ? 'text-neutral-900 font-medium underline decoration-neutral-900'
                          : 'text-neutral-500 hover:text-neutral-900 underline decoration-neutral-200 hover:decoration-neutral-900'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <img
              src={stanfordSeal}
              alt="Stanford University"
              className="w-10 h-10 opacity-80 shrink-0"
              title="Stanford University"
            />
          </nav>
        </div>

        {/* Page content */}
        <div className="max-w-2xl mx-auto px-10 sm:px-14 py-16" key={location.pathname}>
          <div className="page-fade">
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
