import { Suspense } from "react"
import type { Metadata } from "next"

import DashboardLayout from "@/components/dashboard-layout"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { TransactionList } from "@/components/transaction-list"
import { TransactionFilters } from "@/components/transaction-filters"
import { AddTransactionButton } from "@/components/add-transaction-button"
import { TransactionSkeleton } from "@/components/skeletons"

export const metadata: Metadata = {
  title: "Transactions | Personal Expense Tracker",
  description: "View and manage your transactions",
}

export default function TransactionsPage() {
  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader heading="Transactions" text="View and manage all your transactions.">
          <AddTransactionButton />
        </DashboardHeader>
        <div className="space-y-4">
          <TransactionFilters />
          <Suspense fallback={<TransactionSkeleton />}>
            <TransactionList />
          </Suspense>
        </div>
      </DashboardShell>
    </DashboardLayout>
  )
}

