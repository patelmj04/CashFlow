import { ArrowUpIcon, ShoppingBag, Coffee, Car, Film } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const transactions = [
  {
    id: "1",
    description: "Grocery Store",
    amount: -85.32,
    date: "Today",
    category: "Food & Dining",
    icon: ShoppingBag,
  },
  {
    id: "2",
    description: "Salary Deposit",
    amount: 2400.0,
    date: "Yesterday",
    category: "Income",
    icon: ArrowUpIcon,
  },
  {
    id: "3",
    description: "Coffee Shop",
    amount: -4.5,
    date: "Yesterday",
    category: "Food & Dining",
    icon: Coffee,
  },
  {
    id: "4",
    description: "Gas Station",
    amount: -45.0,
    date: "2 days ago",
    category: "Transportation",
    icon: Car,
  },
  {
    id: "5",
    description: "Movie Tickets",
    amount: -24.0,
    date: "3 days ago",
    category: "Entertainment",
    icon: Film,
  },
]

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <Card
          key={transaction.id}
          className="border-2 border-primary/5 shadow-sm hover:border-primary/20 transition-colors"
        >
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full",
                    transaction.amount > 0 ? "bg-income/10 text-income" : "bg-expense/10 text-expense",
                  )}
                >
                  <transaction.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-medium">{transaction.description}</div>
                  <div className="text-sm text-muted-foreground">{transaction.date}</div>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <div className={cn("font-medium", transaction.amount > 0 ? "text-income" : "text-expense")}>
                  {transaction.amount > 0 ? "+" : ""}
                  {transaction.amount.toFixed(2)}
                </div>
                <Badge
                  variant="outline"
                  className={cn("mt-1", transaction.amount > 0 ? "border-income/20 bg-income/10 text-income" : "")}
                >
                  {transaction.category}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

