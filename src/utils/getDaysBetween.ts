export const getDaysBetween = (iday: string, eday: string, days: number): boolean => {
    const initialDate = new Date(iday).getTime();
    const endDate = new Date(eday).getTime();
    return ((endDate - initialDate)/(1000*60*60*24)) === days
}
