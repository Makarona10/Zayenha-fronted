interface Product {
  id: string;
  name: string;
  offer_price: number;
  price: number;
  main_image: string;
  second_image: string;
  short_description?: string;
  description?: string;
  isFavorite: boolean;
}

export const products: Array<Product> = [
  {
    main_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    second_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    name: "زهرية فخمة",
    description: "زهرية زجاجية مصممة بأناقة لتزيين المنزل.",
    price: 150.0,
    offer_price: 120.0,
    isFavorite: false,
    id: "1",
  },
  {
    main_image:
      "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg",
    second_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    name: "وسادة ديكورية",
    description: "وسادة مزخرفة تضيف لمسة دافئة لأريكتك.",
    price: 80.0,
    offer_price: 65.0,
    isFavorite: true,
    id: "2",
  },
  {
    main_image:
      "https://images.pexels.com/photos/7113360/pexels-photo-7113360.jpeg",
    second_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    name: "مصباح طاولة",
    description: "مصباح عصري بإضاءة ناعمة للجو العام.",
    price: 220.0,
    offer_price: 200.0,
    isFavorite: false,
    id: "3",
  },
  {
    main_image:
      "https://images.pexels.com/photos/2249959/pexels-photo-2249959.jpeg",
    second_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    name: "ساعة حائط",
    description: "ساعة حائط بتصميم كلاسيكي يناسب كل الديكورات.",
    price: 120.0,
    offer_price: 95.0,
    isFavorite: true,
    id: "4",
  },
  {
    main_image:
      "https://images.pexels.com/photos/7193632/pexels-photo-7193632.jpeg",
    second_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    name: "سجادة صغيرة",
    description: "سجادة ناعمة تضيف دفئًا لأرضية غرفتك.",
    price: 300.0,
    offer_price: 250.0,
    isFavorite: false,
    id: "5",
  },
  {
    main_image:
      "https://images.pexels.com/photos/8989352/pexels-photo-8989352.jpeg",
    second_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    name: "شمعة عطرية",
    description: "شمعة عطرية طويلة الأمد بأجواء مريحة.",
    price: 45.0,
    offer_price: 45.0,
    isFavorite: false,
    id: "6",
  },
  {
    main_image:
      "https://images.pexels.com/photos/12956902/pexels-photo-12956902.jpeg",
    second_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    name: "إطار صورة",
    description: "إطار خشبي أنيق لعرض صورك الجميلة.",
    price: 70.0,
    offer_price: 55.0,
    isFavorite: true,
    id: "7",
  },
  {
    main_image:
      "https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg",
    second_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    name: "نبتة زينة",
    description: "نبتة داخلية تضيف لمسة خضراء للمنزل.",
    price: 90.0,
    offer_price: 75.0,
    isFavorite: false,
    id: "8",
  },
  {
    main_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    second_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    name: "ستارة نافذة",
    description: "ستارة خفيفة تتحكم في إضاءة الغرفة.",
    price: 180.0,
    offer_price: 150.0,
    isFavorite: true,
    id: "9",
  },
  {
    main_image:
      "https://images.pexels.com/photos/462235/pexels-photo-462235.jpeg",
    second_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    name: "مرآة ديكور",
    description: "مرآة مستديرة تضيف أناقة للحائط.",
    price: 130.0,
    offer_price: 130.0,
    isFavorite: false,
    id: "10",
  },
  {
    main_image:
      "https://images.pexels.com/photos/12956902/pexels-photo-12956902.jpeg",
    second_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    name: "إطار صورة",
    description: "إطار خشبي أنيق لعرض صورك الجميلة.",
    price: 70.0,
    offer_price: 55.0,
    isFavorite: true,
    id: "11",
  },
  {
    main_image:
      "https://images.pexels.com/photos/7193632/pexels-photo-7193632.jpeg",
    second_image:
      "https://images.pexels.com/photos/604575/pexels-photo-604575.jpeg",
    name: "سجادة صغيرة",
    description: "سجادة ناعمة تضيف دفئًا لأرضية غرفتك.",
    price: 300.0,
    offer_price: 250.0,
    isFavorite: false,
    id: "12",
  },
];
