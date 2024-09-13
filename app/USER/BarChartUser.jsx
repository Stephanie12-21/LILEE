"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { month: "Janvier", annonces: 186, gains: 80, transactions:74 },
  { month: "Février", annonces: 305, gains: 200, transactions:34 },
  { month: "Mars", annonces: 237, gains: 120 , transactions:147 },
  { month: "Avril", annonces: 73, gains: 190, transactions:10  },
  { month: "Mai", annonces: 209, gains: 130 , transactions:56 },
  { month: "Juin", annonces: 214, gains: 140, transactions:250  },
]

const chartConfig = {
  annonces: {
    label: "annonces",
    color: "#d3a422",
  },
  gains: {
    label: "gains",
    color: "#14a52d",
  },
  transactions: {
    label: "transactions",
    color: "#414e6e",
  },
}

export function BarChartUser() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="annonces" fill="var(--color-annonces)" radius={4} />
        <Bar dataKey="gains" fill="var(--color-gains)" radius={4} />
        <Bar dataKey="transactions" fill="var(--color-transactions)" radius={4} />
      </BarChart>
    </ChartContainer>
  )
}
