export function DirectDebit() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#3F479E]">Direct Debit</h2>
      <p className="text-gray-600">Direct Debit waa hab fudud oo toos ah oo bil walba lacagta lagaaga jari doono:</p>
      <div>
        <h3 className="font-semibold mb-2">Faa'iidooyinka</h3>
        <ul className="space-y-2">
          {[
            "Wax lacag ah lagaama jari doono ilaa taariikhda la isku raacay",
            "Waxaad dooran kartaa taariikhda bixinta",
            "Si toos ah ayaa lacagta laguuga jaraya bil walba",
            "Ma ilowdid inaad bixiso canshuurta",
          ].map((benefit, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="font-semibold text-[#3F479E]">•</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Sida loo diyaariyo</h3>
        <ol className="space-y-2">
          {[
            "Buuxi foomka Direct Debit-ka",
            "Soo gudbi caddeynta koontada bangiga",
            "Dooro taariikhda bixinta",
            "Saxiix heshiiska",
          ].map((step, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-[#3F479E]">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

