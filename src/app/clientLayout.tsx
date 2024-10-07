'use client';

import { Sidebar } from '@/components/Sidebar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PageProvider } from '@/app/context/PageContext';
import { useToggle } from '@/hooks/useToggle';

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSidebar, toggleSidebar] = useToggle(false);

  return (
    <div className="container">
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />

      <div className="main-area">
        <PageProvider>
          <Header toggleSidebar={toggleSidebar} />
          <main className="content">{children}</main>
          <Footer />
        </PageProvider>
      </div>
    </div>
  );
}
