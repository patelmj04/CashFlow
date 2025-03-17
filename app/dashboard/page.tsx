import { Suspense } from "react"
import type { Metadata } from "next"

import DashboardLayout from "@/components/dashboard-layout"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { RecentTransactions } from "@/components/recent-transactions"
import { DashboardCards } from "@/components/dashboard-cards"
import { SpendingChart } from "@/components/spending-chart"
import { BudgetProgress } from "@/components/budget-progress"
import { TransactionSkeleton } from "@/components/skeletons"

export const metadata: Metadata = {
  title: "Dashboard | Personal Expense Tracker",
  description: "View and manage your personal finances",
}

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader heading="Dashboard" text="Overview of your financial status and recent activity." />
        <div className="grid gap-4 md:gap-8">
          <DashboardCards />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <SpendingChart className="col-span-4" />
            <BudgetProgress className="col-span-3" />
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
            <Suspense fallback={<TransactionSkeleton />}>
              <RecentTransactions />
            </Suspense>
          </div>
        </div>
      </DashboardShell>
    </DashboardLayout>
  )
}

