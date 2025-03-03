import type { Department } from "@/types/departments"
import {  Building2,
  Phone,
  Users,
  Flame,
  Heart,
  Trash2,
  HandIcon as PrayingHands,
  Droplet,
  BriefcaseBusiness,
  Receipt,
  Wallet,
  Calculator,
  PiggyBank,
  ShoppingCart,
  FileText,
  ClipboardList,
  MapPin,
  Wrench,
  Zap,
  Home,
  Tv2,
  Newspaper,
  Tv,
  Car,
  Volleyball,
  Venus, } from "lucide-react"

// export interface NavItem {
//   id: string
//   title: string
// }

// export interface NavSection {
//   id: string
//   title: string
//   items: NavItem[]
// }

// export const navigationData: Department[] = [
//   {
//     id: "xafiiska-ggb",
//     title: "Xafiiska GGB ahna Duqa Magaaladda",
//     items: [
//       {
//         id: "guddoomiyaha",
//         title: "Xafiiska Guddoomiyaha Gobolka Ahna Duqa Magaalada",
//       },
//       {
//         id: "isgaarsiinta",
//         title: "Isgaarsiinta iyo Tiknolojiyada",
//       },
//     ],
//   },
//   {
//     id: "arimaha-bulshada",
//     title: "Waaxda Arimaha Bulshada iyo wacyigelinta",
//     items: [
//       {
//         id: "waxbarashada",
//         title: "Waxbarshada",
//       },
//       {
//         id: "dabdemiska",
//         title: "Dabdemiska iyo Gargaarka degdega",
//       },
//       {
//         id: "caafimaadka",
//         title: "Caafimaadka",
//       },
//       {
//         id: "nadaafadda",
//         title: "Nadaafadda iyo biilic soocelinta",
//       },
//       {
//         id: "diinta",
//         title: "Diinta iyo Awqaafta",
//       },
//       {
//         id: "biyaha",
//         title: "Biyaha iyo Degaanka",
//       },
//       {
//         id: "kaluumaysiga",
//         title: "Kaluumaysiga",
//       },
//     ],
//   },
//   {
//     id: "maamulka-maaliyadda",
//     title: "Waaxda Maamulka iyo Maaliyadda",
//     items: [
//       {
//         id: "shaqada",
//         title: "Shaqadda iyo Shaqaalaha",
//       },
//       {
//         id: "daqliyadda",
//         title: "Daqliyadda iyo Ganaaxyadda",
//       },
//       {
//         id: "maamulka-maaliyadda",
//         title: "Maamulka maaliyadda",
//       },
//       {
//         id: "canshuuraha",
//         title: "Canshuuraha",
//       },
//       {
//         id: "qasnadda",
//         title: "Qasnadda",
//       },
//       {
//         id: "adeegyada",
//         title: "Adeeguada",
//       },
//     ],
//   },
//   {
//     id: "amniga-siyaasadda",
//     title: "Waaxda Amniga iyo Siyaasadda",
//     items: [
//       {
//         id: "amniga",
//         title: "Amniga iyo deriseynta",
//       },
//       {
//         id: "isgaarsiinta-amniga",
//         title: "Isgaarsiinta iyo Tiknolojiyada",
//       },
//       {
//         id: "siyaasada",
//         title: "Siyaasada iyo Dimoqraadiyada",
//       },
//       {
//         id: "warfaafinta",
//         title: "Warfaafinta",
//       },
//       {
//         id: "idaacada",
//         title: "Idaacada",
//       },
//     ],
//   },
  
//   {
//     id: "howlaha-guud",
//     title: "Waaxda Howlaha guud",
//     items: [
//       {
//         id: "maamulka-dhulka",
//         title: "Maamulka Dhulka",
//       },
//       {
//         id: "biyomareenada",
//         title: "Biyomareenada iyo Jidadka",
//       },
//       {
//         id: "korontada",
//         title: "Korontada iyo Solarka",
//       },
//       {
//         id: "farsamada",
//         title: "Farsamada",
//       },
//     ],
//   },
//   {
//     id: "ururada",
//     title: "Ururadda",
//     items: [
//       {
//         id: "dhalinyarada",
//         title: "Dhalinyarada",
//       },
//       {
//         id: "haweenka",
//         title: "Haweenka",
//       },
//     ],
//   },
// ]

// updated {all deparments}
export const navigationData: Department[] = [
  {
    id: "xafiiska-ggb",
    title: "Xafiiska GGB ahna Duqa Magaaladda",
    items: [
      {
        id: "guddoomiyaha",
        title: "Xafiiska Guddoomiyaha Gobolka Ahna Duqa Magaalada",
        icon: Building2,
      },
      {
        id: "isgaarsiinta",
        title: "Isgaarsiinta iyo Tiknolojiyada",
        icon: Phone,
      },
    ],
  },
  {
    id: "arimaha-bulshada",
    title: "Waaxda Arimaha Bulshada iyo wacyigelinta",
    items: [
      {
        id: "waxbarashada",
        title: "Waxbarshada",
        icon: Users,
      },
      {
        id: "dabdemiska",
        title: "Dabdemiska iyo Gargaarka degdega",
        icon: Flame,
      },
      {
        id: "caafimaadka",
        title: "Caafimaadka",
        icon: Heart,
      },
      {
        id: "nadaafadda",
        title: "Nadaafadda iyo biilic soocelinta",
        icon: Trash2,
      },
      {
        id: "diinta",
        title: "Diinta iyo Awqaafta",
        icon: PrayingHands,
      },
      {
        id: "biyaha",
        title: "Biyaha iyo Degaanka",
        icon: Droplet,
      },
      // {
      //   id: "kaluumaysiga",
      //   title: "Kaluumaysiga",
      // },
      // {
      //   id: "beeraha",
      //   title: "Beeraha iyo jardiinooyinka",
      // },
      // {
      //   id: "baahiyaha",
      //   title: "Baahiyaha gaarka",
      // },
      // {
      //   id: "xiriirka",
      //   title: "Xiriirka Dadweynaha",
      // },
      // {
      //   id: "daddhlgista",
      //   title: "Daddhlgista",
      // },
      // {
      //   id: "xaquuqul-insaanka",
      //   title: "Xaquuqul insaanka",
      // },
      // {
      //   id: "fanka",
      //   title: "Fanka iyo Suugaanta",
      // },
    ],
  },
  {
    id: "maamulka-maaliyada",
    title: "Waaxda Maamulka iyo Maaliyadda",
    items: [
      {
        id: "shaqada",
        title: "Shaqadda iyo Shaqaalaha",
        icon: BriefcaseBusiness,
      },
      {
        id: "daqliyada",
        title: "Daqliyadda iyo Ganaaxyadda",
        icon: Receipt,
      },
      {
        id: "maamulka-maaliyada",
        title: "Maamulka iyo Maaliyadaa",
        icon: Wallet,
      },
      {
        id: "canshuuraha",
        title: "Canshuuraha",
        icon: Calculator,
      },
      {
        id: "bangiyada",
        title: "Bangiyada",
        icon: PiggyBank,
      },
      {
        id: "adeegyada",
        title: "Adeegyada",
        icon: ShoppingCart,
      },
    ],
  },
  {
    id: "amniga-siyaasada",
    title: "Waaxda Amniga iyo Siyaasada",
    items: [
      {
        id: "amniga",
        title: "Amniga iyo deriseynta",
      },
      {
        id: "isgaarsiinta-amniga",
        title: "Isgaarsiinta iyo Tiknolojiyada",
      },
      {
        id: "siyaasada",
        title: "Siyaasada iyo Dimoqraadiyada",
      },
      {
        id: "warfaafinta",
        title: "Warfaafinta",
      },
      {
        id: "idaacada",
        title: "Idaacada",
      },
    ],
  },
  {
    id: "xogheynta-guud",
    title: "Xogheynta Guud",
    items: [
      {
        id: "keydka-xogta",
        title: "Keyda xogta",
        icon: FileText,
      },
      {
        id: "qorsheynta",
        title: "Qorsheynta iyo kormeerka",
        icon: ClipboardList,
      },
    ],
  },
  {
    id: "howlaha-guud",
    title: "Waaxda Howlaha guud",
    items: [
      {
        id: "maamulka-dhulka",
        title: "Maamulka Dhulka",
        icon: MapPin,
      },
      {
        id: "farsamada",
        title: "Farsamada",
        icon: Wrench,
      },
      {
        id: "korontada",
        title: "Korontada iyo Solarka",
        icon: Zap,
      },
      {
        id: "dhismaha",
        title: "Dhismaha Wadaaga",
        icon: Home,
      },
      {
        id: "biyomareenada",
        title: "Biyomareenada iyo Jidadka",
        icon: Droplet
      },
      {
        id: "gaadiidka",
        title: "Gaadiidka",
        icon: Car
      },
    ],
  },
  {
    id: "ururada",
    title: "Ururadda",
    items: [
      {
        id: "dhalinyarada",
        title: "Dhalinyarada",
        icon: Users
      },
      {
        id: "haweenka",
        title: "Haweenka",
        icon: Venus
      },
      {
        id: "ciyaaraha",
        title: "Ciyaaraha",
        icon: Volleyball
      },
    ],
  },
  {
    id: "wararka",
    title: "Wararka",
    items: [
      {
        id: "tv-ga",
        title: "TV-ga",
        icon: Tv2,
      },
      {
        id: "idaacada",
        title: "Idaacada",
        icon: Newspaper,
      },
      {
        id: "wararka-kale",
        title: "Wararka kale",
        icon: Tv,
      },
    ],
  },
];


