// Google Apps Script URL設定
const GAS_URL = 'https://script.google.com/macros/s/AKfycbzllhZ0Gix1ECRt6BhlrdUjikShzTNqZIlIoFA8AMnYeuLQd99MbWU1o19o0jlmxMpT/exec';

// 時間帯設定
const TIMESLOT_CONFIG = {
  'day1_performance1': {
    id: 'day1_performance1',
    label: '1日目 第1公演',
    time: '10:25',
    day: 1,
    performance: 1
  },
  'day1_performance2': {
    id: 'day1_performance2',
    label: '1日目 第2公演',
    time: '12:25',
    day: 1,
    performance: 2
  },
  'day1_performance3': {
    id: 'day1_performance3',
    label: '1日目 第3公演',
    time: '14:25',
    day: 1,
    performance: 3
  },
  'day2_performance1': {
    id: 'day2_performance1',
    label: '2日目 第1公演',
    time: '9:15',
    day: 2,
    performance: 1
  },
  'day2_performance2': {
    id: 'day2_performance2',
    label: '2日目 第2公演',
    time: '11:15',
    day: 2,
    performance: 2
  },
  'day2_performance3': {
    id: 'day2_performance3',
    label: '2日目 第3公演',
    time: '13:25',
    day: 2,
    performance: 3
  }
};
