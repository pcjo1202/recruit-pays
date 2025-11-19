interface PageContentMainProps {
  children: React.ReactNode;
}

export default function PageContentMain({ children }: PageContentMainProps) {
  return <main className="flex-1 mt-6">{children}</main>;
}
