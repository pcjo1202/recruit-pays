interface PageContentTitleProps {
  title: string;
  description?: string;
}

export default function PageContentTitle({
  title,
  description
}: PageContentTitleProps) {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold">{title}</h1>
      {description && (
        <p className="text-base text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
