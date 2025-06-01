import React from "react";
// import TaxPaymentForm from "./TexForm";
// import TaxPayment from "./TaxPaymentCard";
// import { taxPaymentData } from "@/data/canshuurta";
// import { StaticImageData } from "next/image";

// Define the type for each section
// interface CanshuurtaData {
//   title: string;
//   content: {
//     text: string;
//     isBold?: boolean;
//   }[];
//   image?: {
//     src: StaticImageData | string;
//     alt: string;
//   };
// }

const Canshuurta: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10 max-w-4xl text-gray-900">
      <h1 className="text-3xl font-bold text-primary mb-6">📌 Bixinta Canshuuraha</h1>
      
      <p className="text-lg mb-4">
        Bixinta canshuuraha waa waajib saaran dhammaan ganacsiyada iyo shaqsiyaadka si ay uga qayb qaataan horumarka dalka. 
        Adeeggan wuxuu kuu oggolaanayaa inaad si fudud u bixiso canshuurahaaga adoo isticmaalaya habab kala duwan sida 
        <span className="font-semibold"> bixinta online, bangiyada, ama xafiisyada dowladda.</span>
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">📝 Shuruudaha</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Dhammaan muwaadiniinta iyo ganacsiyada leh <span className="font-semibold">lambarka aqoonsiga canshuuraha (TIN)</span>.</li>
        <li>Waa in aad haysataa <span className="font-semibold">xisaab maaliyadeed sax ah</span> oo muujinaya dakhligaaga.</li>
        <li>Waa in aadan lahayn <span className="font-semibold">canshuur hore oo aan la bixin</span> si aad u hesho shahaadada bixinta.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">📑 Dukumentiyada Loo Baahan Yahay</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>✅ Shahaadada TIN (Lambarka Aqoonsiga Canshuuraha).</li>
        <li>✅ Laysinka Ganacsiga (Haddii aad tahay ganacsade).</li>
        <li>✅ Warqadda xisaabaadka ama warbixinta dakhliga.</li>
        <li>✅ Rasiidka bixinta canshuuraha hore (haddii aad hore u bixin jirtay).</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">📌 Talaabooyinka Bixinta Canshuuraha</h2>
      <div className="space-y-4">
        <p><span className="font-semibold">🔹 Talaabada 1:</span> Booqo bogga canshuuraha oo gali lambarkaaga TIN.</p>
        <p><span className="font-semibold">🔹 Talaabada 2:</span> Xisaabi canshuurtaada iyadoo lagu saleynayo dakhligaaga.</p>
        <p><span className="font-semibold">🔹 Talaabada 3:</span> Dooro habka bixinta (EVC Plus, Zaad, ama Bangi).</p>
        <p><span className="font-semibold">🔹 Talaabada 4:</span> Hel rasiidkaaga iyo caddeynta bixinta.</p>
        <p><span className="font-semibold">🔹 Talaabada 5:</span> Hubi in bixintaada la xaqiijiyay.</p>
      </div>

      <h2 className="text-2xl font-semibold mt-8 mb-3">⏳ Waqtiga Hawsha</h2>
      <p>✅ <span className="font-semibold">Bixinta online ah:</span> Isla markiiba.</p>
      <p>✅ <span className="font-semibold">Bangiga ama xafiiska:</span> 1-3 maalmood oo shaqo.</p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-3">💰 Lacagta Bixinta</h2>
      <p>✅ Haddii la bixin waayo waqtigii loogu talagalay, ganaax ayaa lagu dari karaa.</p>
      <p>✅ Haddii aad xilliga bixinta la daahdo, waxaa laguu soo diri doonaa <span className="font-semibold">xasuusin rasmi ah.</span></p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-3">📞 Xiriirka & Taageerada</h2>
      <p>✅ <span className="font-semibold">Xafiiska Canshuuraha:</span> 📞 +252-XX-XXXXXXX</p>
      <p>✅ <span className="font-semibold">Email:</span> <a href="mailto:canshuur@mogadishu.gov.so" className="text-blue-600 hover:underline">canshuur@mogadishu.gov.so</a></p>
      <p>✅ <span className="font-semibold">Websaydhka:</span> <a href="#" className="text-blue-600 hover:underline">www.canshuur.gov.so</a></p>
      
      <h2 className="text-2xl font-semibold mt-8 mb-3">❓ Su&apos;aalaha Badanaa La Isweydiiyo (FAQ)</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>✅ Waa maxay sababta ay muhiim u tahay bixinta canshuuraha?</li>
        <li>✅ Maxaa dhacaya haddii aan bixin waayo canshuurta?</li>
        <li>✅ Sideen ku heli karaa lambarka TIN haddii aanan haysan?</li>
      </ul>
      
      <div className="mt-8 text-center">
        <a href="#" className="px-6 py-3 bg-blue-600 text-white text-lg rounded-lg hover:bg-blue-700">➡️ Bixi Canshuuraha</a>
      </div>
    </div>
  );
};

export default Canshuurta;
