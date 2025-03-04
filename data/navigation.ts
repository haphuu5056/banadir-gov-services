import type { Department } from "@/types/departments";
import {
  Building2,
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
  Venus,
  ShoppingBag,
  CalculatorIcon,
  PiggyBankIcon,
  EqualSquareIcon,
  BadgeDollarSign,
  UserPlus,
  DollarSign,
} from "lucide-react";

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
    id: "amniga-siyaasada",
    title: " Amniga iyo Siyaasada",
    items: [
      {
        id: "amniga",
        title: "Amniga iyo deriseynta",
      },
      {
        id: "siyaasada",
        title: "Siyaasada iyo Dimoqraadiyada",
      },
      {
        id: "warfaafinta",
        title: "Warfaafinta",
      },
    ],
    quickLinks: [
      { label: "Warbixinta Amniga", href: "#" },
      { label: "Xeerarka Dowlada", href: "#" },
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

  {
    id: "arimaha-bulshada",
    title: "Arimaha Bulshada iyo Wacyigelinta",
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
    title: " Maamulka iyo Maaliyadda",
    items: [
      {
        id: "shaqada",
        title: "Shaqadda iyo Shaqaalaha",
        description: "Waaxda Shaqaalaha iyo Shaqooyinka",

        icon: BriefcaseBusiness,
        services: [
          {
            id: "shaqo-codsiga",
            title: "Shaqo Codsiga",
            icon: UserPlus,
            description:
              "Apply for job positions within the Banadir Regional Administration.",
            howToApply:
              "Submit your application online through our official portal or in person at our HR office located in the Banadir Regional Administration headquarters.",
            requirements: [
              "Completed application form",
              "Updated CV/Resume",
              "Copies of educational certificates and transcripts",
              "Valid government-issued ID card",
              "Two passport-sized photographs",
              "Any relevant work experience certificates",
            ],
            processingTime:
              "2-4 weeks, depending on the position and number of applicants",
            fees: "No fee for application submission",
          },
          {
            id: "mushaharka-baarista",
            title: "Mushaharka Baarista",
            icon: DollarSign,
            description:
              "Access and review your salary information and payment history.",
            howToApply:
              "Log in to the secure employee portal using your employee credentials or visit the HR office in person with proper identification.",
            requirements: [
              "Valid employee ID number",
              "Government-issued photo ID for in-person requests",
              "Personal login credentials for online access",
            ],
            processingTime:
              "Immediate for online checks, 1-2 business days for in-person requests",
            fees: "No fee for this service",
          },
          {
            id: "tababarka-shaqaalaha",
            title: "Tababarka Shaqaalaha",
            icon: Users,
            description:
              "Access professional development and training programs for employees.",
            howToApply:
              "Submit a training request through your department head or via the employee portal.",
            requirements: [
              "Must be a current employee of the Banadir Regional Administration",
              "Approval from immediate supervisor or department head",
              "Completed training request form",
            ],
            processingTime:
              "5-10 business days for request processing and approval",
            fees: "Varies depending on the training program; many internal programs are provided at no cost to employees",
          },
        ],
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
        icon: BadgeDollarSign,
        description: "Bixi canshuurahaada Maamulka Gobolka Banaadir.",
      },
      {
        id: "miisaaniyada",
        title: "Miisaaniyada",
        icon: EqualSquareIcon,
      },
      {
        id: "adeegyada",
        title: "Adeegyada",
        icon: ShoppingCart,
      },
      {
        id: "qasnada",
        title: "Qasnada",
        icon: PiggyBankIcon,
      },
      {
        id: "iibka",
        title: "Iibka ",
        icon: ShoppingBag,
      },
      {
        id: "xisaabiyaha-guud",
        title: "Xisaabiyaha Guud",
        icon: CalculatorIcon,
      },
    ],
    quickLinks: [
      { label: "Shaqooyin Bannaan", href: "#" },
      { label: "Xogta Mushaharka", href: "#" },
      { label: "Tababarada Shaqaalaha", href: "#" },
    ],
  },

  {
    id: "howlaha-guud",
    title: " Howlaha Guud",
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
        icon: Droplet,
      },
      {
        id: "gaadiidka",
        title: "Gaadiidka",
        icon: Car,
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
        icon: Users,
      },
      {
        id: "haweenka",
        title: "Haweenka",
        icon: Venus,
      },
      {
        id: "ciyaaraha",
        title: "Ciyaaraha",
        icon: Volleyball,
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
  { id: "council", title: "Your Council" },
  { id: "cabashooyinka", title: "Cabashooyinka" },

];
