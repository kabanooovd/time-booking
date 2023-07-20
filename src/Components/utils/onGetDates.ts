export const onGetDates = (days: number): string[] => {
    const list = []
    const currentDate = new Date()
    for (let i = 0; i < days; i++) {
        list.push(new Date(currentDate).toISOString())
        currentDate.setDate(currentDate.getDate() + 1)
    }
    return list
}