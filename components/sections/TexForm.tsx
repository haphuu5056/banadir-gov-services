'use client'
import React, { useState } from "react";

const TaxPaymentForm: React.FC = () => {
  const [responsiblePerson, setResponsiblePerson] = useState<string>("");
  const [district, setDistrict] = useState<string>("");
  const [houseNumber, setHouseNumber] = useState<string>("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log({ responsiblePerson, district, houseNumber });
  };

  return (
    <section className="py-8">
      <div className="w-full bg-gray-50 rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Bixi Canshuurta</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Magaca Masuulka
            </label>
            <input
              type="text"
              value={responsiblePerson}
              onChange={(e) => setResponsiblePerson(e.target.value)}
              placeholder="Gali saddaxda magac masuulka"
              className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Dagmadda Guriga
            </label>
            <input
              type="text"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              placeholder="Gali dagmadda guriga ku yaal"
              className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              10 Lambar ee Guriga
            </label>
            <input
              type="text"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              placeholder="Gali 10 lambar ee guriga"
              className="w-full p-3 bg-white rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-900 transition"
          >
            Bixi Canshuurta
          </button>
        </form>
      </div>
    </section>
  );
};

export default TaxPaymentForm;
