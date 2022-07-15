import moment from 'moment'

const data = {
  hours: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'],
  repeat: [
    'Не повторят',
    'Ежедневно',
    'По будням (Пн-Пт)',
    'Еженедельно (среда)',
    'Ежемесячно (1ая среда)',
    'Ежегодно (2 сент.)',
  ],
  events: [
    {
      name: 'Romantic meeting with my first girlfriend',
      date: moment('2022-07-08').format('YYYY-MM-DD'),
      hours: '10:00',
    },
    {
      name: 'Romantic meeting with my second girlfriend',
      date: moment('2022-07-08').format('YYYY-MM-DD'),
      hours: '13:00',
    },
    {
      name: 'Romantic meeting with my fourth girlfriend',
      date: moment('2022-07-08').format('YYYY-MM-DD'),
      hours: '14:00',
    },
    {
      name: 'Romantic meeting with my fives girlfriend',
      date: moment('2022-07-08').format('YYYY-MM-DD'),
      hours: '16:00',
    },
    {
      name: 'Romantic meeting with my third girlfriend',
      date: moment('2022-07-12').format('YYYY-MM-DD'),
      hours: '11:00',
    },
    {
      name: 'Meetup with a team',
      date: moment('2022-07-20').format('YYYY-MM-DD'),
      hours: '11:00',
    },
    {
      name: 'Conference with fiery unicorns team',
      date: moment('2022-07-16').format('YYYY-MM-DD'),
      hours: '10:00',
    },
    {
      name: 'Megalab team',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '12:00',
    },
    {
      name: 'Megalab meetup',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '13:00',
    },
    {
      name: 'Megalab mountain',
      date: moment('2022-07-04').format('YYYY-MM-DD'),
      hours: '15:00',
    },
    {
      name: 'Football with friends',
      date: moment('2022-07-18').format('YYYY-MM-DD'),
      hours: '10:00',
    },
  ],
}

export default data
