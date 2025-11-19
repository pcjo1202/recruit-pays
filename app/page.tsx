import { Button } from "@/shared/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-3xl font-bold">올페이즈 과제</h1>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/dashboard">대시보드 페이지 (/dashboard)</Link>
        </Button>
        <Button asChild>
          <Link href="/payments">거래 내역 페이지 (/payments)</Link>
        </Button>
        <Button asChild>
          <Link href="/merchants">가맹점 페이지 (/merchants)</Link>
        </Button>
      </div>
    </div>
  );
}
