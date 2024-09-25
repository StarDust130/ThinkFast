import Sidebar from "@/components/elements/Sidebar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen ">
      {/* Sidebar (starts below the header) */}
      <aside className="z-10 sticky">
        <Sidebar />
      </aside>

      {/* Main content area (scrollable) */}
      <div className="flex-grow mx-16 mb-20 pt-4">{children}</div>
    </div>
  );
}
