import React from "react";
import TaxPaymentForm from "./TexForm";
import TaxPayment from "./TaxPaymentCard";
import { taxPaymentData } from "@/data/canshuurta";

const Canshuurta = () => {
  return (
    <div className="space-y-8 text-gray-900">
      {taxPaymentData.sections.map((section, index) => (
        <TaxPayment key={index} section={section} />
      ))}
      <TaxPaymentForm />
    </div>
  );
};

export default Canshuurta;
