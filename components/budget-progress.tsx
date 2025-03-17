"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

interface BudgetProgressProps extends React.HTMLAttributes<HTMLDivElement> {}

const budgets = [
  {
    category: "Food & Dining",
    spent: 420,
    total: 500,
    percentage: 84,
  },
  {
    category: "Transportation",
    spent: 180,
    total: 300,
    percentage: 60,
  },
  {
    category: "Entertainment",
    spent: 250,
    total: 200,
    percentage: 125,
  },
  {
    category: "Shopping",
    spent: 150,
    total: 400,
    percentage: 37.5,
  },
]

export function BudgetProgress({ className, ...props }: BudgetProgressProps) {
  return (
    <Card className={className} {...props}>
      <CardHeader className="pb-3">
        <CardTitle>Budget Progress</CardTitle>
        <CardDescription>Your spending against budget goals</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {budgets.map((budget) => (
            <div key={budget.category} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">{budget.category}</div>
                <div className="text-sm text-muted-foreground">
                  ${budget.spent} / ${budget.total}
                </div>
              </div>
              <Progress
                value={budget.percentage}
                max={100}
                className={
                  budget.percentage > 100 ? "bg-expense/20" : budget.percentage > 75 ? "bg-primary/20" : "bg-income/20"
                }
                indicatorClassName={
                  budget.percentage > 100 ? "bg-expense" : budget.percentage > 75 ? "bg-primary" : "bg-income"
                }
              />
              <div className="flex justify-end text-xs text-muted-foreground">{budget.percentage}%</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

