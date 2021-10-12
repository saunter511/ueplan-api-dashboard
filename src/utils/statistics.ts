export const getDistinct = (arr: any[]) => {
    const ids = arr.map((d: any) => {
        return d[1]
    });
    return new Set(ids).size
}