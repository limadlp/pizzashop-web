//import { useState } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

import colors from "tailwindcss/colors";

const data = [
  { product: "Pepperoni", amount: 40 },
  { product: "Mussarela", amount: 30 },
  { product: "Marguerita", amount: 50 },
  { product: "4 Queijos", amount: 16 },
  { product: "Calabresa", amount: 26 },
];

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
];

export function ProductsPieChart() {

  //const [percent, setPercent] = useState("");


  return (
    <div>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart style={{ fontSize: 12 }}>
          <Pie
            data={data}
            dataKey="amount"
            nameKey="product"
            cx="50%"
            cy="50%"
            outerRadius={86}
            innerRadius={64}
            strokeWidth={8}
            labelLine={false}
            label={({
              cx,
              cy,
              midAngle,
              innerRadius,
              outerRadius,
              value,
              index,
            }) => {
              const RADIAN = Math.PI / 180;
              const radius = 12 + innerRadius + (outerRadius - innerRadius);
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text
                  x={x}
                  y={y}
                  className="fill-muted-foreground text-xs"
                  textAnchor={x > cx ? "start" : "end"}
                  dominantBaseline="central"
                >
                  {data[index].product.length > 12
                    ? data[index].product.substring(0, 12).concat("...")
                    : data[index].product}{" "}
                  ({value})
                </text>
              );
            }}
          >
            {data.map((_, index) => {
              return (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index]}
                  className="stroke-background hover:opacity-80 "
                //   onMouseEnter={()=>setPercent(item.amount.toString())}
                //   onMouseLeave={()=>setPercent("")}
                />
              );
            })}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
        {/* {percent} */}
      </div>
    </div>
  );
}


