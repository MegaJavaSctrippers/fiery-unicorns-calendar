/* eslint-disable prettier/prettier */
import moment from 'moment'

const data = {
  hours: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
  repeat: ['Не повторять', 'Ежедневно', 'По будням', 'Еженедельно', 'Ежемесячно (2ой день)', 'Ежемесячно (1ая среда)', 'Ежегодно'],
  events: [
    {
      id: 1,
      name: 'Romantic meeting with my first girlfriend',
      date: moment('2022-07-08').format('YYYY-MM-DD'),
      hours: '10:00',
    },
    {
      id: 2,
      name: 'Romantic meeting with my second girlfriend',
      date: moment('2022-07-08').format('YYYY-MM-DD'),
      hours: '13:00',
    },
    {
      id: 3,
      name: 'Romantic meeting with my fourth girlfriend',
      date: moment('2022-07-08').format('YYYY-MM-DD'),
      hours: '14:00',
    },
    {
      id: 4,
      name: 'Romantic meeting with my fives girlfriend',
      date: moment('2022-07-08').format('YYYY-MM-DD'),
      hours: '16:00',
    },
    {
      id: 5,
      name: 'Romantic meeting with my third girlfriend',
      date: moment('2022-07-12').format('YYYY-MM-DD'),
      hours: '11:00',
    },
    {
      id: 6,
      name: 'Meetup with a team',
      date: moment('2022-07-20').format('YYYY-MM-DD'),
      hours: '11:00',
    },
    {
      id: 7,
      name: 'Conference with fiery unicorns team',
      date: moment('2022-07-16').format('YYYY-MM-DD'),
      hours: '10:00',
    },
    {
      id: 8,
      name: 'Megalab team',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '12:00',
    },
    {
      id: 9,
      name: 'Megalab meetup',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '13:00',
    },
    {
      id: 10,
      name: 'Megalab mountain',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '15:00',
    },
    {
      id: 11,
      name: 'Football with friends',
      date: moment('2022-07-18').format('YYYY-MM-DD'),
      hours: '10:00',
    },
  ],
}

export default data
