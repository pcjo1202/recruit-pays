import PageContentContainer from "./ui/page-content-container";
import PageContentMain from "./ui/page-content-main";
import PageContentTitle from "./ui/page-content-title";

interface PageContentLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export default function PageContentLayout({
  children,
  title,
  description
}: PageContentLayoutProps) {
  return (
    <PageContentContainer>
      <PageContentTitle title={title} description={description} />
      <PageContentMain>{children}</PageContentMain>
    </PageContentContainer>
  );
}
