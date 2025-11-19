import {
  BarChartIcon,
  ListIcon,
  StoreIcon,
  type LucideIcon
} from "lucide-react";

export interface MenuItem {
  label: string;
  icon: LucideIcon;
  href: string;
}

const menuItems: MenuItem[] = [
  {
    label: "대시보드",
    icon: BarChartIcon,
    href: "/dashboard"
  },
  {
    label: "거래 내역",
    icon: ListIcon,
    href: "/payments"
  },
  {
    label: "가맹점",
    icon: StoreIcon,
    href: "/merchants"
  }
];

export default menuItems;
