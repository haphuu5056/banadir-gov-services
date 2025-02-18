import type { Department } from "@/types/departments"

export interface NavItem {
  id: string
  title: string
}

export interface NavSection {
  id: string
  title: string
  items: NavItem[]
}

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
      },
      {
        id: "isgaarsiinta",
        title: "Isgaarsiinta iyo Tiknolojiyada",
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
      },
      {
        id: "dabdemiska",
        title: "Dabdemiska iyo Gargaarka degdega",
      },
      {
        id: "caafimaadka",
        title: "Caafimaadka",
      },
      {
        id: "nadaafadda",
        title: "Nadaafadda iyo bilic soocelinta",
      },
      {
        id: "diinta",
        title: "Diinta iyo Awqaafta",
      },
      {
        id: "biyaha",
        title: "Biyaha iyo Degaanka",
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
    id: "maamulka-maaliyadda",
    title: "Waaxda Maamulka iyo Maaliyadda",
    items: [
      {
        id: "shaqada",
        title: "Shaqadda iyo Shaqaalaha",
      },
      {
        id: "daqliyadda",
        title: "Daqliyadda iyo Ganaaxyadda",
      },
      {
        id: "maamulka-maaliyadda",
        title: "Maamulka maaliyadda",
      },
      {
        id: "canshuuraha",
        title: "Canshuuraha",
      },
      {
        id: "adeegyada",
        title: "Adeegyada",
      },
      {
        id: "qasnadda",
        title: "Qasnadda",
      },
    ],
  },
  {
    id: "amniga-siyaasadda",
    title: "Waaxda Amniga iyo Siyaasadda",
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
        id: "keyda-xogta",
        title: "Keyda xogta",
      },
      {
        id: "qorsheynta",
        title: "Qorsheynta iyo kormeerka",
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
      },
      {
        id: "biyomareenada",
        title: "Biyomareenada iyo Jidadka",
      },
      {
        id: "korontada",
        title: "Korontada iyo Solarka",
      },
      {
        id: "farsamada",
        title: "Farsamada",
      },
      {
        id: "gaadiidka",
        title: "Gaadiidka",
      },
      {
        id: "dhisma-wadaaga",
        title: "Dhisma Wadaaga",
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
      },
      {
        id: "haweenka",
        title: "Haweenka",
      },
      {
        id: "ciyaaraha",
        title: "Ciyaaraha",
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
      },
      {
        id: "idaacada",
        title: "Idaacada",
      },
      {
        id: "wararka-kale",
        title: "Wararka kale",
      },
    ],
  },
];


