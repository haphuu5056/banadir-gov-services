import img1 from "../public/Rectangle 75.png";
import img2 from "../public/Rectangle 76.png";

interface ContentItem {
  text: string;
  isBold?: boolean;
}

interface ImageItem {
  src: object;
  alt: string;
}

interface Section {
  title: string;
  content: ContentItem[];
  image?: ImageItem;
}

export const taxPaymentData: { sections: Section[] } = {
  sections: [
    {
      title: "Sida Loo Bixiyo Canshuurta",
      content: [
        {
          text: "Waxaa jira dhowr hab oo aad ku bixin karto Canshuurta Golaha Degmada. Habka ugu fudud waa inaad isticmaasho ",
        },
        {
          text: "toos-u-bixin",
          isBold: true,
        },
        {
          text: " (Direct Debit).",
        },
        {
          text: "Haddii aadan horey isugu diiwaangelin ",
        },
        {
          text: "biilal aan warqad ahayn",
          isBold: true,
        },
        {
          text: " (paperless billing), waxaad ku heli doontaa biilkaaga Canshuurta Golaha Degmada boostada.",
        },
      ],
    },
    {
      title: "Goormee La Bixiyaa",
      content: [
        {
          text: "Waad bixin kartaa biilkaaga Canshuurta Golaha Degmada hal mar, laakiin badanaa waxaa loo qaybiyay 10 lacag-bixin oo isla'eg oo bil walba ah.",
        },
        {
          text: "Sidoo kale, waxaad dooran kartaa inaad ku faafiso lacag-bixinta muddo ",
        },
        {
          text: "12 biloodah",
          isBold: true,
        },
        {
          text: ".",
        },
      ],
      image: {
        src: img1,
        alt: "Calculator with tax documents",
      },
    },
    {
      title: "Waxa Aad U Baahan Doonto",
      content: [
        {
          text: "Si aad u bixiso Canshuurta Golaha Degmada, waxaad u baahan tahay lambarkaaga tixraaca oo ka kooban ",
        },
        {
          text: "10 lambar",
          isBold: true,
        },
        {
          text: ". Waxaa ka heli kartaa lambarkan ",
        },
        {
          text: "geeska midig ee sare",
          isBold: true,
        },
        {
          text: " ee biilkaaga Canshuurta Golaha Degmada.",
        },
      ],
      image: {
        src: img2,
        alt: "Google Pay on phone",
      },
    },
  ],
};
