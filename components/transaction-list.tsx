"use client"

import { useState } from "react"
import { ArrowUpIcon, ShoppingBag, Coffee, Car, Film, Gift, MoreHorizontal } from "lucide-react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

const transactions = [
  {
    id: "1",
    description: "Grocery Store",
    amount: -85.32,
    date: "2023-07-01",
    category: "Food & Dining",
    icon: ShoppingBag,
  },
  {
    id: "2",
    description: "Salary Deposit",
    amount: 2400.0,
    date: "2023-06-30",
    category: "Income",
    icon: ArrowUpIcon,
  },
  {
    id: "3",
    description: "Coffee Shop",
    amount: -4.5,
    date: "2023-06-30",
    category: "Food & Dining",
    icon: Coffee,
  },
  {
    id: "4",
    description: "Gas Station",
    amount: -45.0,
    date: "2023-06-29",
    category: "Transportation",
    icon: Car,
  },
  {
    id: "5",
    description: "Movie Tickets",
    amount: -24.0,
    date: "2023-06-28",
    category: "Entertainment",
    icon: Film,
  },
  {
    id: "6",
    description: "Online Shopping",
    amount: -67.99,
    date: "2023-06-27",
    category: "Shopping",
    icon: Gift,
  },
  {
    id: "7",
    description: "Freelance Payment",
    amount: 350.0,
    date: "2023-06-25",
    category: "Income",
    icon: ArrowUpIcon,
  },
  {
    id: "8",
    description: "Restaurant Dinner",
    amount: -78.5,
    date: "2023-06-24",
    category: "Food & Dining",
    icon: Coffee,
  },
]

export function TransactionList() {
  const [sortColumn, setSortColumn] = useState<string | null>(null)
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("desc")
    }
  }

  const sortedTransactions = [...transactions].sort((a, b) => {
    if (!sortColumn) return 0

    let valueA, valueB

    switch (sortColumn) {
      case "date":
        valueA = new Date(a.date).getTime()
        valueB = new Date(b.date).getTime()
        break
      case "amount":
        valueA = a.amount
        valueB = b.amount
        break
      case "description":
        valueA = a.description
        valueB = b.description
        break
      case "category":
        valueA = a.category
        valueB = b.category
        break
      default:
        return 0
    }

    if (sortDirection === "asc") {
      return valueA > valueB ? 1 : -1
    } else {
      return valueA < valueB ? 1 : -1
    }
  })

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="cursor-pointer" onClick={() => handleSort("description")}>
              Description
              {sortColumn === "description" && <span className="ml-2">{sortDirection === "asc" ? "↑" : "↓"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("amount")}>
              Amount
              {sortColumn === "amount" && <span className="ml-2">{sortDirection === "asc" ? "↑" : "↓"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("date")}>
              Date
              {sortColumn === "date" && <span className="ml-2">{sortDirection === "asc" ? "↑" : "↓"}</span>}
            </TableHead>
            <TableHead className="cursor-pointer" onClick={() => handleSort("category")}>
              Category
              {sortColumn === "category" && <span className="ml-2">{sortDirection === "asc" ? "↑" : "↓"}</span>}
            </TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-full",
                      transaction.amount > 0
                        ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300"
                        : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300",
                    )}
                  >
                    <transaction.icon className="h-4 w-4" />
                  </div>
                  {transaction.description}
                </div>
              </TableCell>
              <TableCell
                className={cn(
                  "font-medium",
                  transaction.amount > 0 ? "text-emerald-600 dark:text-emerald-400" : "text-gray-900 dark:text-gray-50",
                )}
              >
                {transaction.amount > 0 ? "+" : ""}
                {transaction.amount.toFixed(2)}
              </TableCell>
              <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
              <TableCell>
                <Badge variant="outline">{transaction.category}</Badge>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                      <span className="sr-only">Actions</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

