interface SideBarContainerProps {
  children: React.ReactNode;
}

export default function SideBarContainer({ children }: SideBarContainerProps) {
  return (
    <div className="basis-1/5 px-4 flex flex-col h-full bg-neutral-100">
      {children}
    </div>
  );
}
