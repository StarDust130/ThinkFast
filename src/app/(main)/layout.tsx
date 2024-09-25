import Sidebar from "@/components/elements/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        {/* Sidebar (fixed, starts below the header) */}
        <aside className="z-10 absplute top-0">
          <Sidebar />
        </aside>

        {/* Main content area (scrollable) */}
        <div className="flex-grow  mx-16 pt-4">{children}</div>
      </div>
    </div>
  );
}
