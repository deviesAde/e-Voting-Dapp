import { AdminSidebar } from "@/components/admin/sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-hidden flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="flex-1 p-4 md:p-6">{children}</div>
      </div>
    </div>
  );
}