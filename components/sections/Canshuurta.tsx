import React from "react";
import TaxPaymentForm from "./TexForm";
import TaxPayment from "./TaxPaymentCard";
import { taxPaymentData } from "@/data/canshuurta";

// Define the type for each section
interface Section {
  title: string;
  content: {
    text: string;
    isBold?: boolean;
  }[];
  image?: {
    src: object;
    alt: string;
  };
}

const Canshuurta: React.FC = () => {
  return (
    <div className="space-y-8 text-gray-900">
      {taxPaymentData.sections.map((section: Section, index: number) => (
        <TaxPayment key={index} section={section} />
      ))}
      <TaxPaymentForm />
    </div>
  );
};

export default Canshuurta;
