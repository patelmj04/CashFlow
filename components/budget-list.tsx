import { Coffee, Car, Film, Gift, Home, Zap } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const budgets = [
  {
    id: "1",
    category: "Food & Dining",
    icon: Coffee,
    spent: 420,
    total: 500,
    percentage: 84,
  },
  {
    id: "2",
    category: "Transportation",
    icon: Car,
    spent: 180,
    total: 300,
    percentage: 60,
  },
  {
    id: "3",
    category: "Entertainment",
    icon: Film,
    spent: 250,
    total: 200,
    percentage: 125,
  },
  {
    id: "4",
    category: "Shopping",
    icon: Gift,
    spent: 150,
    total: 400,
    percentage: 37.5,
  },
  {
    id: "5",
    category: "Housing",
    icon: Home,
    spent: 1200,
    total: 1500,
    percentage: 80,
  },
  {
    id: "6",
    category: "Utilities",
    icon: Zap,
    spent: 120,
    total: 200,
    percentage: 60,
  },
]

export function BudgetList() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {budgets.map((budget) => (
        <Card key={budget.id}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{budget.category}</CardTitle>
            <budget.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              ${budget.spent.toFixed(2)}{" "}
              <span className="text-sm font-normal text-muted-foreground">/ ${budget.total.toFixed(2)}</span>
            </div>
            <Progress
              value={budget.percentage}
              max={100}
              className={cn("mt-4", budget.percentage > 100 ? "bg-rose-100 dark:bg-rose-950" : "")}
            />
            <div className="mt-2 flex items-center justify-between text-xs text-muted-foreground">
              <span>{budget.percentage}% used</span>
              <span>${(budget.total - budget.spent).toFixed(2)} remaining</span>
            </div>
            <div className="mt-4 flex justify-end">
              <Button variant="outline" size="sm">
                Edit
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

