import { getMonthCanceledOrdersAmount } from "@/api/dashboard/get-month-canceled-orders.amount";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { useQuery } from "react-query";

export function MonthCanceledOrdersAmountCard(){
    const { data: monthCanceledOrdersAmount } = useQuery({
        queryFn: getMonthCanceledOrdersAmount,
        queryKey: ["metrics", "month-canceled-orders-amount"],
      });
    
 
 return( <Card>
    <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
       <CardTitle className="text-base font-semibold">Cancelamentos (mês) </CardTitle>
       <DollarSign className="h-4 w-4 text-muted-foreground"></DollarSign>
    </CardHeader>
    <CardContent className="space-y-1">
    {monthCanceledOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount.toLocaleString("pt-BR")}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledOrdersAmount.diffFromLastMonth < 0 ? (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthCanceledOrdersAmount.diffFromLastMonth}
                  </span>{" "}
                  em realção ao mês passado
                </>
              ) : (
                <>
                  <span className="text-rose-500 dark:text-rose-400">
                    +{monthCanceledOrdersAmount.diffFromLastMonth}
                  </span>{" "}
                  em realção ao mês passado
                </>
              )}
            </p>
          </>
        )}
    </CardContent>

</Card>);
};