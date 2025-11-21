"use client";

import { Button } from "@/shared/ui";
import { Input } from "@/shared/ui/input";
import { SearchIcon } from "lucide-react";
import { useState } from "react";

interface PaymentsSearchInputProps {
  onSearch?: (value: string) => void;
}

export default function PaymentsSearchInput({
  onSearch
}: PaymentsSearchInputProps) {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    onSearch?.(searchValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center gap-2 relative basis-1/4">
      <Input
        type="text"
        placeholder="Search"
        className="w-full"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-0 cursor-pointer"
        onClick={handleSearch}
      >
        <SearchIcon className="size-4 text-muted-foreground" />
      </Button>
    </div>
  );
}
