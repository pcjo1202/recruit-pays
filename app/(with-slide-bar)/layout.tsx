import Sidebar from "@/widgets/layout/sidebar";

interface WithSlideBarLayoutProps {
  children: React.ReactNode;
}

export default function WithSlideBarLayout({
  children
}: WithSlideBarLayoutProps) {
  return (
    <div className="flex bg-amber-100 h-dvh">
      <div className="basis-1/5 bg-neutral-100">
        <Sidebar />
      </div>
      <main className="flex-1 bg-white">{children}</main>
    </div>
  );
}
