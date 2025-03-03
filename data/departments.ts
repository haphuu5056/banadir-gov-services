import { Building, FileText, Users, ShieldAlert, Megaphone, Newspaper, Gavel } from "lucide-react";
import bgImg from '@/public/bg.png';

export const departments = [
  {
    title: "Xafiiska GGB ahna Duqa Magaalada",
    link: "xafiiska-ggb-ahna-duqa-magaalada",
    icon: Building, // Represents an official/government office
    sublinks: [
      {
        title: "Xafiiska GGB Ahna Duqa Magaalada",
        link: "/departments/xafiiska-ggb-ahna-duqa-magaalada/xafiiska-ggb-ahna-duqa-magaalada",
      },
    ],
    image: bgImg,
    span: "col-span-1 row-span-4",
    bg: "bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4]",
    textColor: "text-primary",
  },
  {
    title: "Waaxda Maamulka iyo Maaliyadda",
    link: "waaxda-maamulka-iyo-maaliyadda",
    icon: FileText, // Represents finance and administration documents
    sublinks: [
      {
        title: "Daqliyada iyo Ganaaxyada",
        link: "/departments/waaxda-maamulka-iyo-maaliyadda/daqliyada-iyo-ganaaxyada",
      },
      {
        title: "Canshuuraha",
        link: "/departments/waaxda-maamulka-iyo-maaliyadda/canshuuraha",
      },
      {
        title: "Adeegyadda",
        link: "/departments/waaxda-maamulka-iyo-maaliyadda/adeegyadda",
      },
    ],
    span: "col-span-1 row-span-2",
    bg: "bg-gradient-to-br from-[#3F479E] to-[#5f60bc] text-white",
  },
  {
    title: "Cabashooyinka",
    link: "cabashooyinka",
    icon: Users, // Represents complaints or public grievances
    sublinks: [
      {
        title: "Cabashooyinka",
        link: "/departments/cabashooyinka/cabashooyinka",
      },
    ],
    span: "col-span-1",
    bg: "bg-gradient-to-br from-[#3F479E] to-[#5f60bc] text-white",
  },
  {
    title: "Xogheynta Guud",
    link: "xogheynta-guud",
    icon: FileText, // Represents records and general documentation
    sublinks: [
      { title: "Keyda xogta", link: "/departments/xogheynta-guud/keyda-xogta" },
      {
        title: "Qorsheynta iyo kormeerka",
        link: "/departments/xogheynta-guud/qorsheynta-iyo-kormeerka",
      },
    ],
    span: "col-span-1 row-span-2",
    bg: "bg-gradient-to-br from-[#3F479E] to-[#5f60bc] text-white",
  },
  {
    title: "Waaxda Arimaha Bulshada iyo Wacyigelinta",
    link: "waaxda-arimaha-bulshada-iyo-wacyigelinta",
    icon: ShieldAlert, // Represents community and social services
    sublinks: [
      {
        title: "Dabdemiska iyo Gargaarka degdega",
        link: "/departments/waaxda-arimaha-bulshada-iyo-wacyigelinta/dabdemiska-iyo-gargaarka-degdega",
      },
      {
        title: "Biyaha iyo Deegaanka",
        link: "/departments/waaxda-arimaha-bulshada-iyo-wacyigelinta/biyaha-iyo-deegaanka",
      },
      {
        title: "Caafimaadka",
        link: "/departments/waaxda-arimaha-bulshada-iyo-wacyigelinta/caafimaadka",
      },
      {
        title: "Daddhigista",
        link: "/departments/waaxda-arimaha-bulshada-iyo-wacyigelinta/daddhigista",
      },
    ],
    span: "col-span-1 row-span-3",
    bg: "bg-gradient-to-br from-[#3F479E] to-[#5f60bc]",
  },
  {
    title: "Ogeysiis Dadweyne",
    link: "ogeysiis-dadweyne",
    icon: Megaphone, // Represents public announcements
    sublinks: [
      {
        title: "Gudoomiyaha degmada Shangaani",
        link: "/departments/ogeysiis-dadweyne/gudoomiyaha-degmada-shangaani",
      },
      {
        title: "Gudoomiyaha Degmada Wadajir",
        link: "/departments/ogeysiis-dadweyne/gudoomiyaha-degmada-wadajir",
      },
      {
        title: "Amarka Guddoomiyaha Gobolka",
        link: "/departments/ogeysiis-dadweyne/amarka-guddoomiyaha-gobolka",
      },
      {
        title: "Duqa Muqdisho ayaa warbixin",
        link: "/departments/ogeysiis-dadweyne/duqa-muqdisho-ayaa-warbixin",
      },
    ],
    span: "col-span-1 row-span-4",
    bg: "bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4]",
    textColor: "text-primary",
  },
  {
    title: "Waaxda Howlaha Guud",
    link: "waaxda-howlaha-guud",
    icon: Gavel, // Represents infrastructure and general works
    sublinks: [
      {
        title: "Maamulka Dhulka",
        link: "/departments/waaxda-howlaha-guud/maamulka-dhulka",
      },
      {
        title: "Farsamada",
        link: "/departments/waaxda-howlaha-guud/farsamada",
      },
      {
        title: "Korontada iyo Solarka",
        link: "/departments/waaxda-howlaha-guud/korontada-iyo-solarka",
      },
      {
        title: "Dhisma Wadaaga",
        link: "/departments/waaxda-howlaha-guud/dhisma-wadaaga",
      },
    ],
    span: "col-span-1 row-span-3",
    bg: "bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4]",
    textColor: "text-primary",
  },
  {
    title: "Wararka",
    link: "wararka",
    icon: Newspaper, // Represents news and media
    sublinks: [
      { title: "TV-ga", link: "/departments/wararka/tv-ga" },
      { title: "Idaacada", link: "/departments/wararka/idaacada" },
      { title: "Wararka kale", link: "/departments/wararka/wararka-kale" },
    ],
    span: "col-span-1 row-span-2",
    bg: "bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4]",
    textColor: "text-primary",
  },
];

export const districts = [
  "Boondheere", "Cabdicasiis", "Deyniile", "Dharkeenley", "Darusalam",
  "Hodan", "Yaqshiid", "warnabada", "Xamarjajab", "Wadajir",
  "Howlwadaag", "Huriwaa", "Kaxda", "Kaaraan", "Shibis",
  "Xamarweyne", "Shangaani", "Gubadley", "Garasbaley",
];
