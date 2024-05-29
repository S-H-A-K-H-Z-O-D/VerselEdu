import card1 from "@/assets/images/home/card1.png"
import card2 from "@/assets/images/home/card2.png"
import card3 from "@/assets/images/home/card3.png"
// actives
import first_place from "@/assets/images/actives/1st-place.png"
import second_place from "@/assets/images/actives/2nd-place.png"
import third_place from "@/assets/images/actives/3rd-place.png"
// plan detail
import video1 from "@/assets/images/innre-pages/video1.png"
import video2 from "@/assets/images/innre-pages/video2.png"
import video3 from "@/assets/images/innre-pages/video3.png"
import video4 from "@/assets/images/innre-pages/video4.png"
import video5 from "@/assets/images/innre-pages/video5.png"
import video6 from "@/assets/images/innre-pages/video6.png"
import video7 from "@/assets/images/innre-pages/video7.png"
import video8 from "@/assets/images/innre-pages/video8.png"
import PlanDetail from "@/views/inner-pages/course-plan/PlanDetail.tsx"
import banner1 from "@/assets/images/innre-pages/image 68.png"
import banner2 from "@/assets/images/innre-pages/image 69.png"
// Comments
import user from "@/assets/images/innre-pages/user.png"
import admin from "@/assets/images/innre-pages/admin.png"
import user3 from "@/assets/images/innre-pages/user3.png"
import user4 from "@/assets/images/innre-pages/user4.png"
import user5 from "@/assets/images/innre-pages/user5.png"
// payment
import uzkardhumo from "@/assets/images/payment/UzcardHumo.png"
import mastervisa from "@/assets/images/payment/MasterVisaCard.png"
import uzumclickpayme from "@/assets/images/payment/UzumClickPayme.png"
export const FamousCourses_data = [
  {
    img: card1,
    title: "Dizayn Framework’lar va UX Researchlar",
    video: "43",
    test: "12",
    price: "150.000",
  },
  {
    img: card2,
    title: "SAT – kursi imtixonigacha tayyorlov",
    video: "43",
    test: "12",
    price: "1.780.000",
  },
  {
    img: card3,
    title: "3D smax – Modelling (Boshlovchilar uchun)...",
    video: "43",
    test: "12",
    price: "9.550.000",
  },
]

export const ModalCourses_data = [
  {
    img: card1,
    title: "Dizayn Framework’lar va UX Researchlar",
    video: "43",
    test: "12",
    price: "150.000",
  },
  {
    img: card2,
    title: "SAT – kursi imtixonigacha tayyorlov",
    video: "43",
    test: "12",
    price: "1.780.000",
  },
  {
    img: card3,
    title: "3D smax – Modelling (Boshlovchilar uchun)...",
    video: "43",
    test: "12",
    price: "9.550.000",
  },
  {
    img: card2,
    title: "SAT – kursi imtixonigacha tayyorlov",
    video: "43",
    test: "12",
    price: "1.780.000",
  },
  {
    img: card3,
    title: "3D smax – Modelling (Boshlovchilar uchun)...",
    video: "43",
    test: "12",
    price: "9.550.000",
  },
]

export const courses_inProgress_data = [
  {
    img: card2,
    title: "UX/UI dizayn",
    video: "7/43",
    test: "12",
    progress: 33,
    play: "4.4 Amaliyot",
  },
  {
    img: card2,
    title: "SAT – kursi imtixonigacha tayyorlov",
    video: "7/65",
    test: "23",
    progress: 74,
    play: "4.4 Amaliyot",
  },
  {
    img: card3,
    title: "Storytelling - Notiqlik san‘ati (to‘liq kurs)",
    video: "7/43",
    test: "12",
    progress: 0,
    play: "4.4 Amaliyot",
  },
]

export const actives_data = [
  { img: first_place, title: "1-O'RIN EGASI", name: "Barat Qamraboyev" },
  { img: second_place, title: "2-O'RIN EGASI", name: "Baxtjon Chapaev" },
  { img: third_place, title: "3-O'RIN EGASI", name: "Eshaboy Toshmatov" },
]

export const course_plan = [
  { title: "Kirish", inProgress: false, content: <div>Yesss</div> },
  { title: "Figma", inProgress: true, content: <PlanDetail /> },
  { title: "Photoshop", inProgress: false, content: <div>Yesss</div> },
  { title: "UX qonunlari", inProgress: false, content: <div>Yesss</div> },
  { title: "UI asoslari", inProgress: false, content: <div>Yesss</div> },
  { title: "UX/UI praktikum", inProgress: false, content: <div>Yesss</div> },
  { title: "UX/UI dizayner uchun muvaffaqiyatli karyera", inProgress: false, content: <div>Yesss</div> },
  { title: "Diplom ishi", inProgress: false, content: <div>Yesss</div> },
]

export const plan_detail = [
  { isPlaying: false, img: video1, title: "2.1 Figma dasturini o'rnatish va dastur interfeysi bilan tanishish" },
  { isPlaying: true, img: video2, title: "2.2 Figma dasturini o'rnatish va dastur interfeysi bilan tanishish" },
  { isPlaying: false, img: video3, title: "2.3 Figma dasturini o’rnatish va dastur interfeysi bilan tanishish" },
  { isPlaying: false, img: video4, title: "2.4 Figma ishchi oynasi va top panel instrumentlari" },
  { isPlaying: false, img: video5, title: "2.5 Figma top instrumentlari 2-qism" },
  { isPlaying: false, img: video6, title: "2.6 Fayllar paneli Alignment bilan ishlash" },
  { isPlaying: false, img: video7, title: "2.7 Fayllar paneli guruhlar bilan ishlash" },
  { isPlaying: false, img: video8, title: "2.8 Maska bilan ishlash" },
]

export const videoDescriptionData = {
  title: "Figma dasturini o'rnatish va dastur interfeysi bilan tanishish",
  steps: [
    "Konsolga oddiy kodlarni bajarish, natijani ko'rish mumkin.",
    "Konsolga oddiy kodlarni bajarish, natijani ko'rish mumkin.",
    "Kirish – ma'lumotlarni qabul qilish.",
    "Chiqish – ma'lumotlarni chiqarish.",
    "Matnli ma'lumotlar bilan ishlash.",
    "O'zgaruvchi dasturida turli vazifalarni (masalan, matn yoki fayllarni) bajarish uchun.",
  ],
  codeExamples: [banner1, banner2],
  explanation:
    "Konsolda qishga kodlarni bajaring, natijasi ko'rinish mumkin. Misol uchun oddiy arifmetik amallarni bajarib ko'ring:",
  codeSnippet: 'print("Hello World")',
  codeExplanation:
    "print() bu Python'dagi mahsus funksiyadir bo'lib, u ichiga berilgan matn yoki ifodalarni ekranga (konsolga) chiqarishni amalga oshiradi.",
  mainMessage: "Endi sizlarni berilgan kodlarni albatta o'zlaringiz ham bajarib, Bu juda muhim!",
  organizerDescription:
    "O'zgaruvchi – kompyuter xotirasidan muayyan bir qiymatni saqlash uchun foydalaniladigan joy. Sodda qilib tushuntirsak, O'zgaruvchi - bu oddiy holda ma'lum bir nom berilgan katakcha bo'lib, unga turli qiymatlarni (masalan, son, matn, yoki boshqa ko'rinishdagi ma'lumotlarni) saqlash uchun ishlatiladi.",
  organizerRules: [
    "O'zgaruvchi nomi harf yoki pastki chiziq (_) bilan boshlanishi kerak\n",
    "O'zgaruvchi nomi raqam bilan boshlanishi mumkin emas",
    "O'zgaruvchi nomida faqatgina lotin alifbosi harflari (A-z), raqamlar (0-9) va pastki chiziq (_) qatnashishi mumkin\n",
    "O'zgaruvchi nomida bo'shliq (пробел) bo'lishi mumkin emas\n",
    "O'zgaruvchi nomida katta-kichik harflar turlicha talqin qilinadi (ism, ISM, va Ism uchta turli o'zgaruvchi)",
  ],
  organizerExamples: [
    "O'zgaruvchi nomini kichik harflar bilan yozing",
    "O'zgaruvchi nomida 2 va undan ortiq so'z qatnashsa ularning orasini pastki chiziq (_) bilan ajrating (ism_sharif=\"Anvar Narzullaev\")",
    'O\'zgaruvchiga tushunarli nom bering (y=20 emas yosh=20, d="Korea" emas davlat = "Korea" va hokazo)',
    "Shuningdek o'zgaruvchilarga Pythonda ishlatiladigan funktsiyalar va maxsus kalit so'zlarning (keywords) nomini bermang. Kalit so'zlar ro'yhatini ko'rish uchun Spyder konsolida avval help() deb yozing va Enter tugmasini bosing. Keyin esa keywords deb kiritib, yana Enter bosing. Marhamat, ekraningizda Pythondagi maxsus kalit so'zlar ro'yhatini ko'ryapsiz:",
  ],
  closingMessage:
    "O'zgaruvchilarni chaqirish (yoki ulardan foydalanish) uchun ularning nomini yozish kifoya, masalan: print(matn), ekranga Python'dagi qiymatlarni chiqarishni amalga oshiradi. Mana endi siz ham O'zgaruvchi`lardan foydalanib, yangi dastur tuzib, ishni davom ettirishingiz mumkin.",
}

export const comment_data = [
  {
    img: user3,
    name: "Javlon Shodmonov",
    time: "23.48",
    day: "09.01.2024",
    comment:
      "Assalomu alaykum. Oldindan iltimos:m aynan cybersecurity yoki linux " +
      "administration bo'yicha ko'proq darslar tayyorlasangiz. Bu savol emas," +
      " iltimos tariqasida",
  },
  {
    img: user,
    name: "Javlon Shodmonov",
    time: "23.48",
    day: "09.01.2024",
    comment:
      "Ha siz orqali xudo xohlasa xalqimizning ilmiy salohiyati ham o'sib boradi, ishlarizga omad rahmat kattakon",
  },
  {
    img: user4,
    name: "Javlon Shodmonov",
    time: "23.48",
    day: "09.01.2024",
    comment: "Nima uchun mening videoim qotib qoldi?",
    reply: [
      {
        img: admin,
        admin: "Gudge",
        time: "23.48",
        day: "09.01.2024",
        comment: "Internetingizda muammo",
      },
    ],
  },
  {
    img: user5,
    name: "Javlon Shodmonov",
    time: "23.48",
    day: "09.01.2024",
    comment: "Qanday qilib reaktda use effecgt hook holatiga tushadi ?",
    reply: [
      {
        img: admin,
        admin: "Gudge",
        time: "23.48",
        day: "09.01.2024",
        comment: "Savolingiz biroz tushunarsiz!",
      },
      {
        img: admin,
        admin: "Gudge",
        time: "23.48",
        day: "09.01.2024",
        comment: "Savolingiz biroz tushunarsiz!",
      },
    ],
  },
]

export const paymentTypes_data = [
  { id: 1, title: "O’zimizning plastik kartalar orqali to’lov qilish", img: uzkardhumo },
  { id: 2, title: "Chet plastik kartalar orqali to’lov qilish", img: mastervisa },
  { id: 3, title: "Kursni elektron to’lov orqali amalga oshiring", img: uzumclickpayme },
  { id: 4, title: "Kursni bo’lib to’lash imkoniyati", img: null },
]

export const payment_history = [
  {
    name: "Kiberxavfsizlik: Pentesting",
    date: "08.03.2024",
    price: "1 200 000 so'm",
    payment_type: "Uzkard",
    status: "To'langan",
  },
  { name: "English for IT", date: "08.03.2024", price: "1 200 000 so'm", payment_type: "Payme", status: "To'langan" },
  {
    name: "Data Science va Sun'iy Intellekt",
    date: "08.03.2024",
    price: "1 200 000 so'm",
    payment_type: "Visa",
    status: "To'langan",
  },
  {
    name: "Sunʼiy intellekt - NLP (nutq bilan ishlash)",
    date: "08.03.2024",
    price: "1 200 000 so'm",
    payment_type: "Click",
    status: "To'langan",
  },
  {
    name: "No-Code: Kod yozmasdan sayt tuzish",
    date: "08.03.2024",
    price: "1 200 000 so'm",
    payment_type: "Humo",
    status: "To'langan",
  },
  {
    name: "QA - тестировщик",
    date: "08.03.2024",
    price: "1 200 000 so'm",
    payment_type: "MasterCard",
    status: "To'langan",
  },
  {
    name: "Project Management",
    date: "08.03.2024",
    price: "1 200 000 so'm",
    payment_type: "Payme",
    status: "To'langan",
  },
  {
    name: "Android & Kotlin dasturlash",
    date: "08.03.2024",
    price: "1 200 000 so'm",
    payment_type: "Visa",
    status: "To'langan",
  },
  {
    name: "PHP & Yii dasturlash",
    date: "08.03.2024",
    price: "1 200 000 so'm",
    payment_type: "Uzum bank",
    status: "To'langan",
  },
  {
    name: "PHP & Yii dasturlash",
    date: "08.03.2024",
    price: "1 200 000 so'm",
    payment_type: "Payme",
    status: "To'langan",
  },
]

export const regions = [
  { value: 1, label: "Toshkent" },
  { value: 2, label: "Xorazm" },
  { value: 3, label: "Buxoro" },
  { value: 4, label: "Samarqand" },
]

export const countries = [
  { value: 1, label: "O'zbekiston" },
  { value: 2, label: "Qazaqiston" },
  { value: 3, label: "Tozikiston" },
  { value: 4, label: "Rossiya" },
]

export const sexOptions = [
  { value: 1, label: "Erkak" },
  { value: 2, label: "Ayol" },
]
