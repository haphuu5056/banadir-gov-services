// components/DistrictList.js
import Link from "next/link";

const districts = [
  "Boondheere",
  "Cabdicasiis",
  "Deyniile",
  "Dharkeenley",
  "Darusalam",
  "Hodan",
  "Yaqshiid",
  "Warnabada",
  "Xamarjajab",
  "Wadajir",
  "Howlwadaag",
  "Huriwaa",
  "Kaxda",
  "Kaaraan",
  "Shibis",
  "Xamarweyne",
  "Shangaani",
  "Gubadley",
  "Garasbaley",
];

const DistrictList = () => (
  <div className="hidden md:block bg-gradient-to-br from-[#FFF1F1] to-[#FFE4E4] transition-all duration-500 cursor-pointer group text-white py-5 px-8 rounded-lg col-span-3 row-start-8 text-center self-start">
    <h2 className="text-primary sm:text-2xl text-3xl font-bold text-left mb-5">
      Dagmooyinka Gobolka Banaadir
    </h2>
    <div className="flex gap-5 flex-wrap">
      {districts.map((district) => (
        <Link key={district} href="#" className="text-primary text-[1.3rem] hover:underline">
          {district}
        </Link>
      ))}
    </div>
  </div>
);

export default DistrictList;
