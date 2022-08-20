import moment from 'moment'

export const setWeek = (dateType, selectedDate) => {
  if (dateType === 'week') {
    const arr = []
    const startWeek = moment(selectedDate).startOf('week').format()
    for (let i = 0; i < 7; i += 1) {
      arr.push(moment(startWeek).add(i, 'days').format())
    }
    return arr
  }
  return []
}
