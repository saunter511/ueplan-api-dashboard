import { groupByDay } from "./datetime";
import { format } from "date-fns";
import { Dictionary } from "lodash";

export const getDistinct = (arr: any[]) => {
    const ids = arr.map((d: any) => {
        return d[1]
    });
    return new Set(ids).size
}


export const calculateData = (data: Dictionary<any>) => {
    const grouped = Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, v.length])
    );
    const objectArray = Object.entries(grouped).map(([k, v]) => ({ [k]: v }));
  
    const uniqueDaily = Object.fromEntries(
      Object.entries(data).map(([k, v]) => [k, getDistinct(v)])
    );
  
    const uniqueDailyArray = Object.entries(uniqueDaily).map(([k, v]) => ({
      [k]: v,
    }));
  
    const uniqueData = uniqueDailyArray.map((o: any, index: number) => {
      return {
        x: format(Date.parse(Object.keys(o)[0] as string), "yyyy-MM-dd"),
        y: Object.values(o)[0] as number,
      };
    });
  
    const totalData = objectArray.map((o: any, index: number) => {
      return {
        x: format(Date.parse(Object.keys(o)[0] as string), "yyyy-MM-dd"),
        y: Object.values(o)[0] as number,
      };
    });
    return { totalData, uniqueData };
  };