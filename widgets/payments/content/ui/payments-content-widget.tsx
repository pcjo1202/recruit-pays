"use client";

import {
  PaymentStatus,
  PaymentStatusCodeType,
  PaymentType,
  PaymentTypeName
} from "@/entities/common/model";
import { Payments } from "@/entities/payments/model";
import PaymentsList from "@/features/payments/ui/payments-list";
import PaymentsListToolbar from "@/features/payments/ui/payments-list-toolbar";
import PaymentsPagination from "@/features/payments/ui/payments-pagination";
import { Card } from "@/shared/ui";
import { CardContent } from "@/shared/ui/card";
import { useMemo, useState } from "react";

interface PaymentsContentWidgetProps {
  paymentsData: Payments[];
  paymentTypes: PaymentType[];
  paymentStatuses: PaymentStatus[];
}

const ITEMS_PER_PAGE = 10;

export default function PaymentsContentWidget({
  paymentsData,
  paymentTypes,
  paymentStatuses
}: PaymentsContentWidgetProps) {
  // 필터링된 데이터를 관리하는 state
  const [filteredData, setFilteredData] = useState<Payments[]>(paymentsData);

  // 페이지네이션 state
  const [currentPage, setCurrentPage] = useState(1);

  // 현재 필터 조건을 관리하는 state
  const [filters, setFilters] = useState({
    date: "all",
    status: "all" as PaymentStatusCodeType | "all",
    type: "all" as PaymentTypeName | "all",
    search: ""
  });

  // 필터링 로직
  const applyFilters = (newFilters: typeof filters) => {
    const filtered = paymentsData.filter((payment) => {
      // 날짜 필터
      const matchesDate =
        newFilters.date === "all" ||
        payment.paymentAt.startsWith(newFilters.date);

      // 상태 필터
      const matchesStatus =
        newFilters.status === "all" || payment.status === newFilters.status;

      // 타입 필터
      const matchesType =
        newFilters.type === "all" || payment.payType === newFilters.type;

      // 검색 필터
      const matchesSearch =
        newFilters.search === "" ||
        payment.paymentCode
          .toLowerCase()
          .includes(newFilters.search.toLowerCase()) ||
        payment.mchtCode
          .toLowerCase()
          .includes(newFilters.search.toLowerCase());

      return matchesDate && matchesStatus && matchesType && matchesSearch;
    });

    setFilteredData(filtered);
    setCurrentPage(1); // 필터 변경 시 첫 페이지로 이동
  };

  // 페이지네이션 계산
  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentPageData = useMemo(
    () => filteredData.slice(startIndex, endIndex),
    [filteredData, startIndex, endIndex]
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 각 필터 변경 핸들러
  const handleDateChange = (value: string) => {
    const newFilters = { ...filters, date: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleStatusChange = (value: PaymentStatusCodeType | "all") => {
    const newFilters = { ...filters, status: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleTypeChange = (value: PaymentTypeName | "all") => {
    const newFilters = { ...filters, type: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const handleSearch = (value: string) => {
    const newFilters = { ...filters, search: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  return (
    <div className="flex flex-col gap-4">
      <PaymentsListToolbar
        paymentTypes={paymentTypes}
        paymentStatuses={paymentStatuses}
        onSearch={handleSearch}
        onDateChange={handleDateChange}
        onTypeChange={handleTypeChange}
        onStatusChange={handleStatusChange}
      />
      <Card>
        <CardContent>
          <PaymentsList paymentsData={currentPageData} />
          {filteredData.length === 0 && (
            <div className="py-10 text-center text-gray-500">
              필터 조건에 맞는 거래 내역이 없습니다.
            </div>
          )}
        </CardContent>
      </Card>

      {/* 페이지네이션 */}
      {filteredData.length > 0 && totalPages > 1 && (
        <PaymentsPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
}
