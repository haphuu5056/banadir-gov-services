import React from "react";
import TaxPaymentForm from "./TexForm";
import TaxPayment from "./TaxPaymentCard";
import { taxPaymentData } from "@/data/canshuurta";
import { StaticImageData } from "next/image";

// Define the type for each section
interface CanshuurtaData {
  title: string;
  content: {
    text: string;
    isBold?: boolean;
  }[];
  image?: {
    src: StaticImageData | string;
    alt: string;
  };
}

const Canshuurta: React.FC = () => {
  return (
    <div className="space-y-8 text-gray-900">
      {taxPaymentData.sections.map((section: CanshuurtaData, index: number) => (
        <TaxPayment key={index} section={section} />
      ))}
      <TaxPaymentForm />
    </div>
  );
};

export default Canshuurta;
