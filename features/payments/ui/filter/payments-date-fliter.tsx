"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/shared/ui/select";

interface PaymentsDateFilterProps {
  onValueChange?: (value: string) => void;
  defaultValue?: string;
}

export default function PaymentsDateFilter({
  onValueChange,
  defaultValue = "all"
}: PaymentsDateFilterProps) {
  const values = [
    { label: "전체", value: "all" },
    { label: "오늘", value: "today" },
    { label: "최근 7일", value: "last7days" },
    { label: "최근 30일", value: "last30days" }
  ];

  return (
    <Select onValueChange={onValueChange} defaultValue={defaultValue}>
      <SelectTrigger>
        <SelectValue placeholder="기간 선택" />
      </SelectTrigger>
      <SelectContent>
        {values.map(({ label, value }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
