import { Card } from "@/shared/ui";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/shared/ui/card";

interface ChartCardProps {
  title: string;
  description: string;
  chart: React.ReactNode;
}

export default function ChartCard({
  title,
  description,
  chart
}: ChartCardProps) {
  return (
    <Card className="aspect-square">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-full flex justify-center items-center">
        {chart}
      </CardContent>
    </Card>
  );
}
