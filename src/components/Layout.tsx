import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import SearchBar from './SearchBar';

const navItems = [
  { path: '/', label: '🏠 首页', icon: 'home' },
  { path: '/bodies', label: '📐 体型百科', icon: 'body' },
  { path: '/heads', label: '👤 头型百科', icon: 'head' },
  { path: '/gallery', label: '🖼️ 搭配图鉴', icon: 'gallery' },
  { path: '/glossary', label: '📖 黑话词典', icon: 'book' },
  { path: '/guide', label: '🚀 新手指南', icon: 'guide' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* 移动端遮罩 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* 侧边栏 */}
      <aside
        className={`
          fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white dark:bg-gray-800
          border-r border-gray-200 dark:border-gray-700 flex flex-col
          transition-transform duration-200 lg:translate-x-0
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-lg font-bold text-pink-600 dark:text-pink-400">
            BJD 入坑 Wiki
          </h1>
          <p className="text-xs text-gray-500 mt-1">从零开始的球关节娃娃指南</p>
        </div>
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map((item) => {
            const active = location.pathname === item.path
              || (item.path !== '/' && location.pathname.startsWith(item.path));
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex items-center gap-3 px-4 py-3 mx-2 rounded-lg text-sm
                  transition-colors
                  ${active
                    ? 'bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 font-medium'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }
                `}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-xs text-gray-400">
          BJD Wiki v1.0 — 让入坑不再困难
        </div>
      </aside>

      {/* 主内容区 */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 顶部栏 */}
        <header className="h-14 border-b border-gray-200 dark:border-gray-700 flex items-center gap-3 px-4 bg-white dark:bg-gray-800">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400 hidden sm:block">
            {navItems.find((i) => {
              if (i.path === '/') return location.pathname === '/';
              return location.pathname.startsWith(i.path);
            })?.label || ''}
          </span>
          <div className="flex-1 flex justify-center sm:justify-end">
            <SearchBar />
          </div>
        </header>

        {/* 页面内容 */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
