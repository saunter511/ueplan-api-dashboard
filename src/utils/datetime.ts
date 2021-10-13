// @ts-ignore
import _, { Dictionary } from "lodash";
import { getDistinct } from "./statistics";
import moment from "moment";


export const groupByDay = (data: any) => {
    let groupedResults = _.groupBy(data, (result: any) =>
    moment(result[2].split(" ")[0], "YYYY/MM/DD").startOf("day")
  );
  return groupedResults
}


export const getDailyStats = (groupedResults: Dictionary<any>) => {
  const grouped = Object.fromEntries(
    Object.entries(groupedResults).map(([k, v]) => [k, v.length])
  );

  const uniqueDaily = Object.fromEntries(
    Object.entries(groupedResults).map(([k, v]) => [k, getDistinct(v)])
  );


  const objectArray = Object.entries(grouped).map(([k, v]) => ({ 
    date : k,
    length: v }));

  const objectUniqueArray = Object.entries(uniqueDaily).map(([k, v]) => ({ 
      date : k,
      length: v }));

  const today = objectArray[objectArray.length-1]
  const yesterday = objectArray[objectArray.length-2]
  const todayUnique = objectUniqueArray[objectUniqueArray.length-1]
  const yesterdayUnique = objectUniqueArray[objectUniqueArray.length-2]


  return {today, yesterday, todayUnique, yesterdayUnique}
}