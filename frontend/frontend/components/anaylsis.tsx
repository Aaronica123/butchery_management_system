"use client";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Card } from "@radix-ui/themes/dist/cjs/index.js";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { Child_text1,Header,Child_text } from "@/components/text";
import { Badge, Text } from "@radix-ui/themes";
import { ArrowDownRight, ArrowRight, ArrowRightFromLine, ArrowUpRight, FaceNeutral, Waves, WavesArrowUp, WavesVertical } from "lucide-react";
const chartConfig = {
  total: {
    label: "Total",
    color: "pink",
  },
} satisfies ChartConfig;

type Row = { created: string; total: number };
const data={
  created:"",
  total:0
}
export function Fetch({ row,d1 }: { row: Row[]|null,d1: Row[]|null }) {
   const sorted = [...(row ?? [])].sort(
    (a, b) => new Date(a.created).getTime() - new Date(b.created).getTime()
  )

  // Trend value: change from first to last point
  const first = Number(row?.[0]?.total) || 0
  const last = Number(row?.[row.length - 1]?.total) || 0
  const trend = (last - first)/100

   const first1 = Number(d1?.[0]?.total) || 0
  const last1 = Number(d1?.[d1.length - 1]?.total) || 0
  const trend1 = (last1 - first1)/100
  console.log(sorted)
  console.log("Trend:", trend)
  return (
    <>
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",gap:"3px"}}>
     
    <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"3px"}}>
            <Header>Analysis</Header>
            <Child_text>View the analysis of the various business features below</Child_text>
            </div> 
             
            
    <div style={{width:"100%",height:"fit-content",marginTop:"5px",display:"flex",flexDirection:"row",gap:"5px"}}>
    <Card size={"2"} style={{width:"100%",height:"100%"}}>
       <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"row",gap:"3px"}}>
    <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"3px",marginBottom:"5px"}}>
      <Text size={"4"} weight={"light"} style={{fontFamily:"Inter"}}>Sales</Text>
      <Child_text>The following is analysis of recent sales flow over the past week</Child_text>
    </div>
    <div style={{width:"fit-content",height:"fit-content",display:"flex",flexDirection:"column",gap:"3px"}}>
              <Badge size={"3"} color={trend>50?"green":trend<=50&&trend>0?"orange":"red"}>
                <Text size={"3"}>{trend}%</Text>
               {trend>50?<ArrowUpRight></ArrowUpRight>
               :trend<=50&&trend>0?<ArrowRight></ArrowRight>:
               <ArrowDownRight></ArrowDownRight>}
               
                </Badge>
             </div>
         </div>    
    <ChartContainer config={chartConfig} className="h-[100%] w-full">
      <AreaChart
        accessibilityLayer
        data={row?row:[data]}
        margin={{ left: 12, right: 12 }}
        style={{padding:"5px",marginTop:"10px"}}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="created"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) =>
            new Date(value).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
          }
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          
        //  domain={["dataMin - 10", "dataMax + 10"]}
        />
        <ChartTooltip
          cursor={false}
          
          content={<ChartTooltipContent indicator="dot" hideLabel />}
        />
        <Area
          dataKey="total"
          type="linear"
          fill="var(--color-total)"
          fillOpacity={0.4}
          stroke="var(--color-total)"
          strokeWidth={2}
          
        />
      </AreaChart>
    </ChartContainer>
    </Card>
    <Card size={"2"} style={{width:"100%",height:"100%"}}>
  <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"row",gap:"3px"}}>
    <div style={{width:"100%",height:"fit-content",display:"flex",flexDirection:"column",gap:"3px",marginBottom:"5px"}}>
      <Text size={"4"} weight={"light"} style={{fontFamily:"Inter"}}>Expenses</Text>
      <Child_text>The following is analysis of recent expenses flow over the past week</Child_text>
    </div>
    <div style={{width:"fit-content",height:"fit-content",display:"flex",flexDirection:"column",gap:"3px"}}>
              <Badge size={"3"} color={trend1>50?"red":trend1<50&&trend1>0?"orange":"green"}>
                <Text size={"3"}>{trend1}%</Text>
               
                {trend1>50?
                <ArrowDownRight></ArrowDownRight>
               :trend1<=50&&trend1>0?<ArrowRight></ArrowRight>:
               <ArrowUpRight></ArrowUpRight>
               }
                
                </Badge>
             </div>
         </div>   
    <ChartContainer config={chartConfig} className="h-[100%] w-full">
      <AreaChart
        accessibilityLayer
        data={d1?d1:[data]}
        margin={{ left: 12, right: 12 }}
        style={{padding:"5px"}}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="created"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) =>
            new Date(value).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })
          }
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          
         domain={["dataMin - 10", "dataMax + 10"]}
        />
        <ChartTooltip
          cursor={false}
          
          content={<ChartTooltipContent indicator="dot" hideLabel />}
        />
        <Area
          dataKey="total"
          type="linear"
          fill="var(--color-total)"
          fillOpacity={0.4}
          stroke="var(--color-total)"
          strokeWidth={2}
          
        />
      </AreaChart>
    </ChartContainer>
    </Card>
    </div>
    </div>
    </>
  );
}