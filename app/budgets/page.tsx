import { Suspense } from "react"
import type { Metadata } from "next"

import DashboardLayout from "@/components/dashboard-layout"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { BudgetList } from "@/components/budget-list"
import { AddBudgetButton } from "@/components/add-budget-button"
import { BudgetSkeleton } from "@/components/skeletons"

export const metadata: Metadata = {
  title: "Budgets | Personal Expense Tracker",
  description: "Set and manage your budget goals",
}

export default function BudgetsPage() {
  return (
    <DashboardLayout>
      <DashboardShell>
        <DashboardHeader heading="Budgets" text="Set and track your budget goals.">
          <AddBudgetButton />
        </DashboardHeader>
        <div className="space-y-4">
          <Suspense fallback={<BudgetSkeleton />}>
            <BudgetList />
          </Suspense>
        </div>
      </DashboardShell>
    </DashboardLayout>
  )
}

