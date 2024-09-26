import Header from "@/components/elements/Header";
import ScrollToTop from "@/components/elements/ScrollToTop";
import Sidebar from "@/components/elements/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      {/* Sidebar (fixed on the left) */}

      <Sidebar />

      <div className="flex-grow  min-h-screen">
        {/* Header (fixed on top) */}

        <Header />

        {/* Main content area (scrollable, adjusts for header height) */}
        <div className="pt-16 md:pl-20  overflow-y-auto">{children}</div>
        <ScrollToTop />
      </div>
    </div>
  );
}
