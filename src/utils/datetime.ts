// @ts-ignore
import _ from "lodash";
import moment from "moment";


export const groupByDay = (data: any) => {
    let groupedResults = _.groupBy(data, (result: any) =>
    moment(result[2].split(" ")[0], "YYYY/MM/DD").startOf("day")
  );
  return groupedResults
}