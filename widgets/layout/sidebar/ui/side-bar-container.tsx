interface SideBarContainerProps {
  children: React.ReactNode;
}

export default function SideBarContainer({ children }: SideBarContainerProps) {
  return <div className="px-4 flex flex-col h-full w-full">{children}</div>;
}
