import { Card } from "@/shared/ui";
import { CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

interface SummaryCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

export default function SummaryCard({ title, value, icon }: SummaryCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle className="font-normal">{title}</CardTitle>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-xl font-bold">{value}</p>
      </CardContent>
    </Card>
  );
}
