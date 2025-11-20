interface PageContentContainerProps {
  children: React.ReactNode;
}

export default function PageContentContainer({
  children
}: PageContentContainerProps) {
  return (
    <main className="px-6 py-6 mb-6 flex flex-col h-full w-full overflow-scroll">
      {children}
    </main>
  );
}
