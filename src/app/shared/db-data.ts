export const BANNERS = [
  { image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019224.jpg&w=1920&q=75' },
  { image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019169.jpeg&w=1920&q=75' },
  { image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019278.jpg&w=1920&q=75' },
  { image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018249.png&w=1920&q=75' },
  { image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0018986.jpg&w=1920&q=75' },
  { image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FBanner%2F0019278.jpg&w=1920&q=75' }
];


export const CINEMAS = [
  { id: 1, name: 'Phòng chiếu số 10', rows: ['A','B','C','D','E','F','G','H','I'], cols: 14 },
  { id: 2, name: 'Phòng chiếu số 8', rows: ['A','B','C','D','E','F','G'], cols: 12 }
];


export const MOVIES = [
  {
    id: 1,
    title: 'Mộ Đom Đóm',
    date: '2025-11-07',
    endDate: '2025-11-13',
    genre: 'Hoạt hình, Chiến tranh',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Mộ Đom Đóm – K (Phụ đề)',
    actors: 'Tsutomu Tatsumi, Ayano Shiraishi, Yoshiko Shinohara, Akemi Yamaguchi',
    duration: '89 phút',
    director: 'Isao Takahata',
    showtimes: [
      { id: 1, time: '10:00', cinemaId: 1 },
      { id: 2, time: '11:40', cinemaId: 2 },
      { id: 3, time: '15:00', cinemaId: 1 },
      { id: 4, time: '18:20', cinemaId: 2 },
      { id: 5, time: '20:00', cinemaId: 1 }
    ],
    warning: 'K - Phim được phổ biến đến người xem dưới 13 tuổi trở lên và có người bảo hộ kèm',
    origin: 'Nhật Bản'
  },
  {
    id: 2,
    title: 'Trái Tim Què Quặt',
    date: '2025-11-07',
    endDate: '2025-11-20',
    genre: 'Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Trái Tim Què Quặt – T18',
    actors: 'Kawee Tanjararak, Ploy Sornarin, Witaya Wasukraipaisarn, Ratchanok Suwannaket',
    duration: '98 phút',
    director: 'Chalerm Wongpim',
    showtimes: [
      { id: 1, time: '10:20', cinemaId: 1 },
      { id: 2, time: '16:00', cinemaId: 2 },
      { id: 3, time: '21:20', cinemaId: 1 }
    ],
    warning: 'T18 - Phim được phổ biến đến người xem từ đủ 18 tuổi trở lên (18+)',
    origin: 'Thái Lan'
  },
  {
    id: 3,
    title: 'Quái Thú Vô Hình: Vùng Đất Chết Chóc',
    date: '2025-11-07',
    endDate: '2025-11-27',
    genre: 'Hành động, Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Quái Thú Vô Hình: Vùng Đất Chết Chóc – T16 (2D)',
    actors: 'Milla Jovovich, Tony Jaa, Ron Perlman, Meagan Good, Diego Boneta',
    duration: '95 phút',
    director: 'Paul W.S. Anderson',
    showtimes: [
      { id: 1, time: '10:15', cinemaId: 1 },
      { id: 2, time: '12:15', cinemaId: 2 },
      { id: 3, time: '16:15', cinemaId: 1 },
      { id: 4, time: '18:15', cinemaId: 2 },
      { id: 5, time: '22:05', cinemaId: 1 }
    ],
    warning: 'T16 - Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên (16+)',
    origin: 'Mỹ'
  },
  {
    id: 4,
    title: 'Tình Người Duyên Ma: Nhắm Mak Yêu Luôn',
    date: '2025-11-07',
    endDate: '2025-12-04',
    genre: 'Hài, Tâm lý, Tình cảm',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Tình Người Duyên Ma: Nhắm Mak Yêu Luôn – T13 (Phụ đề)',
    actors: 'Baifern Pimchanok, March Chutavuth, Nychaa Nuttanicha, Witthawat Rattanaboonbaramee',
    duration: '118 phút',
    director: 'Banjong Pisanthanakun',
    showtimes: [
      { id: 1, time: '10:00', cinemaId: 1 },
      { id: 2, time: '11:55', cinemaId: 2 },
      { id: 3, time: '13:50', cinemaId: 1 },
      { id: 4, time: '15:45', cinemaId: 2 },
      { id: 5, time: '17:40', cinemaId: 1 },
      { id: 6, time: '18:35', cinemaId: 2 },
      { id: 7, time: '19:35', cinemaId: 1 },
      { id: 8, time: '20:30', cinemaId: 2 },
      { id: 9, time: '21:30', cinemaId: 1 },
      { id: 10, time: '22:25', cinemaId: 2 },
      { id: 11, time: '23:25', cinemaId: 1 }
    ],
    warning: 'T13 - Phim được phổ biến đến người xem từ đủ 13 tuổi trở lên (13+)',
    origin: 'Thái Lan'
  },
  {
    id: 5,
    title: 'Thái Chiêu Tài',
    date: '2025-11-07',
    endDate: '2025-11-13',
    genre: 'Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Thái Chiêu Tài – T18',
    actors: 'Rima Thanh Vy, Hoàng Phúc, Thúy Hạnh, Avin Lu, Kim Hải, Lâm Thanh Nhã',
    duration: '102 phút',
    director: 'Trần Hữu Tấn',
    showtimes: [
      { id: 1, time: '11:20', cinemaId: 1 },
      { id: 2, time: '15:15', cinemaId: 2 },
      { id: 3, time: '19:10', cinemaId: 1 },
      { id: 4, time: '23:05', cinemaId: 2 }
    ],
    warning: 'T18 - Phim được phổ biến đến người xem từ đủ 18 tuổi trở lên (18+)',
    origin: 'Việt Nam'
  },
  {
    id: 6,
    title: 'Godzilla Minus One',
    date: '2025-11-07',
    endDate: '2025-11-20',
    genre: 'Hành động',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Godzilla Minus One – T13',
    actors: 'Ryunosuke Kamiki, Minami Hamabe, Yuki Yamada, Sakura Ando, Kuranosuke Sasaki',
    duration: '125 phút',
    director: 'Takashi Yamazaki',
    showtimes: [
      { id: 1, time: '09:30', cinemaId: 1 },
      { id: 2, time: '11:45', cinemaId: 2 },
      { id: 3, time: '14:00', cinemaId: 1 },
      { id: 4, time: '16:15', cinemaId: 2 },
      { id: 5, time: '18:30', cinemaId: 1 },
      { id: 6, time: '20:00', cinemaId: 2 },
      { id: 7, time: '20:45', cinemaId: 1 },
      { id: 8, time: '22:15', cinemaId: 2 },
      { id: 9, time: '22:55', cinemaId: 1 },
      { id: 10, time: '23:20', cinemaId: 2 }
    ],
    warning: 'T13 - Phim được phổ biến đến người xem từ đủ 13 tuổi trở lên (13+)',
    origin: 'Nhật Bản'
  },
  {
    id: 7,
    title: 'Lọ Lem Chơi Ngải',
    date: '2025-11-07',
    endDate: '2025-11-13',
    genre: 'Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Lọ Lem Chơi Ngải – T18',
    actors: 'Nadia Brian, Jirayu La-ongmanee, Thongpoom Siripipat, Ratchanok Suwannaket',
    duration: '97 phút',
    director: 'Poj Arnon',
    showtimes: [
      { id: 1, time: '12:30', cinemaId: 1 },
      { id: 2, time: '17:50', cinemaId: 2 },
      { id: 3, time: '22:15', cinemaId: 1 }
    ],
    warning: 'T18 - Phim được phổ biến đến người xem từ đủ 18 tuổi trở lên (18+)',
    origin: 'Thái Lan'
  },
  {
    id: 8,
    title: 'Flow',
    date: '2025-10-07',
    endDate: '2025-11-13',
    genre: 'Hoạt hình, Lạc Trôi',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Flow – P – LHP TÌNH YÊU',
    actors: 'Không có diễn viên lồng tiếng nổi bật',
    duration: '84 phút',
    director: 'Gints Zilbalodis',
    showtimes: [
      { id: 1, time: '19:30', cinemaId: 1 }
    ],
    warning: 'Phim phổ biến cho mọi độ tuổi',
    origin: 'Latvia'
  },
  {
    id: 9,
    title: 'Quái Thú Vô Hình: Vùng Đất Chết Chóc (3D)',
    date: '2025-10-07',
    endDate: '2025-11-20',
    genre: 'Hành động, Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Quái Thú Vô Hình: Vùng Đất Chết Chóc – T16 (3D)',
    actors: 'Milla Jovovich, Tony Jaa, Ron Perlman, Meagan Good, Diego Boneta',
    duration: '95 phút',
    director: 'Paul W.S. Anderson',
    showtimes: [
      { id: 1, time: '14:15', cinemaId: 1 },
      { id: 2, time: '20:15', cinemaId: 2 }
    ],
    warning: 'T16 - Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên (16+)',
    origin: 'Mỹ'
  },
  {
    id: 10,
    title: 'Phá Đám Sinh Nhật Mẹ',
    date: '2025-10-31',
    endDate: '2025-11-13',
    genre: 'Tâm lý, Tình cảm',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Phá Đám Sinh Nhật Mẹ – T16',
    actors: 'Trấn Thành, Hari Won, Ngô Kiến Huy, Khả Như, Lê Giang',
    duration: '105 phút',
    director: 'Trấn Thành',
    showtimes: [
      { id: 1, time: '13:20', cinemaId: 1 },
      { id: 2, time: '16:40', cinemaId: 2 },
      { id: 3, time: '21:40', cinemaId: 1 }
    ],
    warning: 'T16 - Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên (16+)',
    origin: 'Việt Nam'
  },
  {
    id: 11,
    title: 'Cái Má',
    date: '2025-10-31',
    endDate: '2025-11-20',
    genre: 'Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Cái Má – T16',
    actors: 'Rima Thanh Vy, Hoàng Phúc, Thúy Hạnh, Avin Lu, Kim Hải, Lâm Thanh Nhã, Kiều Trinh, Hoàng Mèo, Kim Long',
    duration: '115 phút',
    director: 'Thắng Vũ',
    showtimes: [
      { id: 1, time: '09:20', cinemaId: 1 },
      { id: 2, time: '13:40', cinemaId: 2 },
      { id: 3, time: '17:55', cinemaId: 1 },
      { id: 4, time: '19:05', cinemaId: 2 },
      { id: 5, time: '21:10', cinemaId: 1 },
      { id: 6, time: '23:15', cinemaId: 2 }
    ],
    warning: 'T16 - Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên (16+)',
    origin: 'Việt Nam'
  },
  {
    id: 12,
    title: 'Bí Mật Bất Nai',
    date: '2025-10-31',
    endDate: '2025-11-13',
    genre: 'Tâm lý, Tình cảm',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Bí Mật Bất Nai – T18',
    actors: 'Lý Hải, Minh Hà, Mạc Văn Khoa, Hoàng Mèo, Lê Giang, Huỳnh Đông',
    duration: '110 phút',
    director: 'Lý Hải',
    showtimes: [
      { id: 1, time: '14:20', cinemaId: 1 },
      { id: 2, time: '19:40', cinemaId: 2 }
    ],
    warning: 'T18 - PHIM ĐƯỢC PHỔ BIẾN ĐẾN NGƯỜI XEM TỪ ĐỦ 18 TUỔI TRỞ LÊN (18+)',
    origin: 'Việt Nam'
  },
  {
    id: 13,
    title: 'Tha Raẹ, Mục Sư, Thây Đóng Và Con Quỷ Ám Trì',
    date: '2025-10-31',
    endDate: '2025-11-13',
    genre: 'Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Tha Raẹ, Mục Sư, Thây Đóng Và Con Quỷ Ám Trì – T18',
    actors: 'Mario Maurer, Davika Hoorne, Narilya Gulmongkolpech, Sahajak Boonthanakit',
    duration: '108 phút',
    director: 'Banjong Pisanthanakun',
    showtimes: [
      { id: 1, time: '13:15', cinemaId: 1 },
      { id: 2, time: '17:10', cinemaId: 2 },
      { id: 3, time: '21:05', cinemaId: 1 }
    ],
    warning: 'Phim phổ biến đến người xem từ đủ 18 tuổi trở lên',
    origin: 'Thái Lan'
  },
  {
    id: 14,
    title: 'Nhà Ma Xó',
    date: '2025-10-22',
    endDate: '2025-11-13',
    genre: 'Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Nhà Ma Xó – T16',
    actors: 'Trúc Anh, Khả Như, Lê Giang, Quang Tuấn, Huỳnh Đông',
    duration: '98 phút',
    director: 'Trần Hữu Tấn',
    showtimes: [
      { id: 1, time: '16:50', cinemaId: 1 },
      { id: 2, time: '23:10', cinemaId: 2 }
    ],
    warning: 'T16 - Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên (16+)',
    origin: 'Việt Nam'
  },
  {
    id: 15,
    title: 'Điện Thoại Đen 2',
    date: '2025-10-17',
    endDate: '2025-11-13',
    genre: 'Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Điện Thoại Đen 2 – T18',
    actors: 'Park Shin-hye, Jeon Jong-seo, Kim Sung-ryung, Lee El',
    duration: '114 phút',
    director: 'Lee Chung-hyun',
    showtimes: [
      { id: 1, time: '14:45', cinemaId: 1 }
    ],
    warning: 'T18 - Phim được phổ biến đến người xem từ đủ 18 tuổi trở lên (18+)',
    origin: 'Hàn Quốc'
  },
  {
    id: 16,
    title: 'Cúc Vang Cửa Ngõai',
    date: '2025-10-17',
    endDate: '2025-11-20',
    genre: 'Tâm lý, Tình cảm',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Cúc Vang Cửa Ngõai – T13',
    actors: 'Hồng Ánh, Lê Công Hoàng, Mai Cát Vi, Võ Điền Đan Thy',
    duration: '100 phút',
    director: 'Nguyễn Quang Dũng',
    showtimes: [
      { id: 1, time: '12:35', cinemaId: 1 },
      { id: 2, time: '15:45', cinemaId: 2 },
      { id: 3, time: '20:00', cinemaId: 1 },
      { id: 4, time: '22:10', cinemaId: 2 }
    ],
    warning: 'T13 - Phim được phổ biến đến người xem từ đủ 13 tuổi trở lên (13+)',
    origin: 'Việt Nam'
  },
  {
    id: 17,
    title: 'Quỷ Ăn Tạng 3',
    date: '2025-10-10',
    endDate: '2025-11-13',
    genre: 'Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Quỷ Ăn Tạng 3 – T16',
    actors: 'Chantavit Dhanasevi, Nittha Jirayungyurn, Thongpoom Siripipat, Ratchanok Suwannaket',
    duration: '96 phút',
    director: 'Poj Arnon',
    showtimes: [
      { id: 1, time: '21:45', cinemaId: 1 }
    ],
    warning: 'T16 - Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên (16+)',
    origin: 'Thái Lan'
  },
  {
    id: 18,
    title: 'Cậu Bé Cá Heo & Bí Mật 7 Đại Dương',
    date: '2025-10-03',
    endDate: '2025-11-13',
    genre: 'Hoạt hình',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Cậu Bé Cá Heo & Bí Mật 7 Đại Dương – P (Lồng tiếng)',
    actors: 'Lồng tiếng: Nguyễn Kim Luân, Võ Hạ Trâm, BB Trần, Trấn Thành',
    duration: '85 phút',
    director: 'Mohamed Kamel',
    showtimes: [
      { id: 1, time: '20:00', cinemaId: 1 }
    ],
    warning: 'P - PHIM ĐƯỢC PHÉP PHỔ BIẾN ĐẾN NGƯỜI XEM Ở MỌI ĐỘ TUỔI',
    origin: 'United Arab Emirates'
  },
  {
    id: 19,
    title: 'Tử Chiến Trên Không',
    date: '2025-09-19',
    endDate: '2025-11-13',
    genre: 'Hành động',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'đang chiếu',
    description: 'Tử Chiến Trên Không – T16',
    actors: 'Lý Liên Kiệt, Chân Tử Đan, Cổ Thiên Lạc, Trương Hàm Dư',
    duration: '120 phút',
    director: 'Lý Nhân Cảng',
    showtimes: [
      { id: 1, time: '12:10', cinemaId: 1 },
      { id: 2, time: '14:20', cinemaId: 2 },
      { id: 3, time: '16:30', cinemaId: 1 },
      { id: 4, time: '19:00', cinemaId: 2 },
      { id: 5, time: '21:10', cinemaId: 1 }
    ],
    warning: 'T16 - Phim được phổ biến đến người xem từ đủ 16 tuổi trở lên (16+)',
    origin: 'Trung Quốc'
  },
  // === PHIM SẮP CHIẾU (giữ trống actors, duration, director) ===
  {
    id: 20,
    title: 'Không Bóng Tuyết Nào Trong Sách',
    date: '2025-11-14',
    endDate: '2025-12-11',
    genre: 'Tâm lý, Tình cảm',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'sắp chiếu',
    description: 'Không Bóng Tuyết Nào Trong Sách – Phim tâm lý tình cảm',
    actors: '',
    duration: '',
    director: '',
    showtimes: [],
    warning: '',
    origin: 'Việt Nam'
  },
  {
    id: 21,
    title: 'Bảy Tiên',
    date: '2025-11-21',
    endDate: '2025-12-18',
    genre: 'Tâm lý, Tình cảm',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'sắp chiếu',
    description: 'Bảy Tiên – Phim tâm lý tình cảm',
    actors: '',
    duration: '',
    director: '',
    showtimes: [],
    warning: '',
    origin: 'Việt Nam'
  },
  {
    id: 22,
    title: 'Wicked: Phần 2',
    date: '2025-11-21',
    endDate: '2025-12-25',
    genre: 'Ca nhạc, Fantasy',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'sắp chiếu',
    description: 'Wicked: Phần 2 – Phim ca nhạc',
    actors: '',
    duration: '',
    director: '',
    showtimes: [],
    warning: '',
    origin: 'Mỹ'
  },
  {
    id: 23,
    title: 'Cưới Vợ Cho Cha',
    date: '2025-11-21',
    endDate: '2025-12-18',
    genre: 'Hài, Tâm lý, Tình cảm',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'sắp chiếu',
    description: 'Cưới Vợ Cho Cha – Phim hài tình cảm gia đình',
    actors: '',
    duration: '',
    director: '',
    showtimes: [],
    warning: '',
    origin: 'Việt Nam'
  },
  {
    id: 24,
    title: 'Phong Trọ Ma Bấu',
    date: '2025-11-28',
    endDate: '2025-12-25',
    genre: 'Tâm lý, Tình cảm',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'sắp chiếu',
    description: 'Phong Trọ Ma Bấu – Phim tâm lý tình cảm',
    actors: '',
    duration: '',
    director: '',
    showtimes: [],
    warning: '',
    origin: 'Việt Nam'
  },
  {
    id: 25,
    title: 'Hoàng Tử Quỷ',
    date: '2025-11-29',
    endDate: '2025-12-26',
    genre: 'Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'sắp chiếu',
    description: 'Hoàng Tử Quỷ – Phim kinh dị',
    actors: '',
    duration: '',
    director: '',
    showtimes: [],
    warning: '',
    origin: 'Việt Nam'
  },
  {
    id: 26,
    title: 'Năm Bém Kinh Hoàng 2',
    date: '2025-12-05',
    endDate: '2026-01-02',
    genre: 'Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'sắp chiếu',
    description: 'Năm Bém Kinh Hoàng 2 – Phim kinh dị',
    actors: '',
    duration: '',
    director: '',
    showtimes: [],
    warning: '',
    origin: 'Mỹ'
  },
  {
    id: 27,
    title: 'Nhà Hai Chủ',
    date: '2025-12-05',
    endDate: '2026-01-02',
    genre: 'Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'sắp chiếu',
    description: 'Nhà Hai Chủ – Phim kinh dị',
    actors: '',
    duration: '',
    director: '',
    showtimes: [],
    warning: '',
    origin: 'Việt Nam'
  },
  {
    id: 28,
    title: 'G-Dragon in Cinema [Übermensch]',
    date: '2025-11-11',
    endDate: '2025-11-17',
    genre: 'Ca nhạc',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'sắp chiếu',
    description: 'G-Dragon in Cinema [Übermensch] – Phim ca nhạc',
    actors: '',
    duration: '',
    director: '',
    showtimes: [],
    warning: '',
    origin: 'Hàn Quốc'
  },
  {
    id: 29,
    title: 'Oán Hồn Trong Vali',
    date: '2025-11-14',
    endDate: '2025-12-11',
    genre: 'Kinh dị',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'sắp chiếu',
    description: 'Oán Hồn Trong Vali – Phim kinh dị',
    actors: '',
    duration: '',
    director: '',
    showtimes: [],
    warning: '',
    origin: 'Thái Lan'
  },
  {
    id: 30,
    title: 'Trốn Chạy Tử Thần',
    date: '2025-11-14',
    endDate: '2025-12-11',
    genre: 'Hành động, Phiêu lưu',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'sắp chiếu',
    description: 'Trốn Chạy Tử Thần – Phim hành động',
    actors: '',
    duration: '',
    director: '',
    showtimes: [],
    warning: '',
    origin: 'Mỹ'
  },
  {
    id: 31,
    title: 'Truy Tìm Long Điền Hương',
    date: '2025-11-14',
    endDate: '2025-12-11',
    genre: 'Hài',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=https%3A%2F%2Fapi.chieuphimquocgia.com.vn%2FContent%2FImages%2F0018944_0.jpg&w=256&q=75',
    state: 'sắp chiếu',
    description: 'Truy Tìm Long Điền Hương – Phim hài',
    actors: '',
    duration: '',
    director: '',
    showtimes: [],
    warning: '',
    origin: 'Việt Nam'
  }
];
export const NEWS = [
  {
    title: 'Tuần Lễ Phim Châu Âu 2025',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=384&q=75',
    description: 'Sự kiện thường niên giới thiệu các bộ phim đặc sắc đến từ châu Âu.',
    date: '2025-11-01'
  },
  {
    title: 'Đêm Phim Kinh Dị Halloween',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=384&q=75',
    description: 'Một đêm đầy rùng rợn với các bộ phim kinh dị nổi tiếng.',
    date: '2025-10-31'
  },
  {
    title: 'Liên Hoan Phim Sinh Viên Việt Nam',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=384&q=75',
    description: 'Tôn vinh tài năng trẻ và những tác phẩm điện ảnh độc đáo của sinh viên.',
    date: '2025-11-05'
  },
  {
    title: 'Ngày Hội Marvel Fan',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=384&q=75',
    description: 'Cơ hội gặp gỡ cộng đồng fan Marvel, cosplay và chiếu phim đặc biệt.',
    date: '2025-11-10'
  },
  {
    title: 'Lễ Trao Giải Điện Ảnh Quốc Gia',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=384&q=75',
    description: 'Sự kiện tôn vinh những thành tựu điện ảnh nổi bật trong năm.',
    date: '2025-12-01'
  },
  {
    title: 'Tuần Lễ Phim Hoạt Hình Nhật Bản',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=384&q=75',
    description: 'Trình chiếu các tác phẩm anime đình đám và giao lưu cùng fan.',
    date: '2025-11-15'
  },
  {
    title: 'Chiếu Phim Ngoài Trời - Mùa Thu',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=384&q=75',
    description: 'Xem phim giữa không gian ngoài trời mát mẻ, lãng mạn.',
    date: '2025-11-08'
  },
  {
    title: 'Workshop Làm Phim Ngắn',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=384&q=75',
    description: 'Học cách viết kịch bản, quay phim và dựng phim cùng chuyên gia.',
    date: '2025-11-20'
  },
  {
    title: 'Ngày Hội Cosplay Toàn Quốc',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=384&q=75',
    description: 'Sân chơi cho giới trẻ thể hiện đam mê cosplay điện ảnh.',
    date: '2025-11-25'
  },
  {
    title: 'Chiếu Lại Phim Kinh Điển',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=384&q=75',
    description: 'Trở lại với những kiệt tác điện ảnh bất hủ.',
    date: '2025-11-30'
  },
  {
    title: 'Triển Lãm Poster Phim Quốc Tế',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0017410.jpg&w=384&q=75',
    description: 'Chiêm ngưỡng hơn 200 poster phim từ khắp nơi trên thế giới.',
    date: '2025-12-05'
  },
  {
    title: 'Tuần Lễ Giáng Sinh Điện Ảnh',
    image: 'https://chieuphimquocgia.com.vn/_next/image?url=http%3A%2F%2Fapiv2.chieuphimquocgia.com.vn%2FContent%2FImages%2FThumbs%2F0013153.png&w=384&q=75',
    description: 'Các bộ phim ấm áp, vui tươi dành cho cả gia đình mùa Giáng Sinh.',
    date: '2025-12-20'
  }
];

