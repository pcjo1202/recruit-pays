interface PageContentMainProps {
  children: React.ReactNode;
}

export default function PageContentMain({ children }: PageContentMainProps) {
  return <main className="flex-1 mt-6 flex flex-col gap-6">{children}</main>;
}
