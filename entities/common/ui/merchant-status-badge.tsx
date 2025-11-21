import { Badge } from "@/shared/ui";

export default function MerchantStatusBadge({ text }: { text: string }) {
  return <Badge variant="outline">{text}</Badge>;
}
