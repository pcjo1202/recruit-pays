import Sidebar from "@/widgets/layout/sidebar";

interface WithSlideBarLayoutProps {
  children: React.ReactNode;
}

export default function WithSlideBarLayout({
  children
}: WithSlideBarLayoutProps) {
  return (
    <div className="flex h-dvh">
      <Sidebar />
      <div className="flex-1 bg-white">{children}</div>
    </div>
  );
}
