export function KaBixiKoontada() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#3F479E]">Ka bixi koontadaada BRUM</h2>
      <p className="text-gray-600">BRUM waa nidaamka cusub ee canshuur bixinta elektaroonigga ah:</p>
      <div>
        <h3 className="font-semibold mb-2">Talaabooyinka</h3>
        <ol className="space-y-2">
          {[
            "Gal websaydka BRUM",
            "Isticmaal lambarka canshuur bixiyahaaga",
            "Dooro nooca canshuurta aad bixineyso",
            "Xaqiiji macluumaadkaaga",
            "Bixi canshuurta",
          ].map((step, index) => (
            <li key={index} className="flex gap-2">
              <span className="text-[#3F479E]">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Waxyaabaha loo baahan yahay</h3>
        <ul className="list-disc list-inside space-y-1">
          {["Lambarka canshuur bixiyaha", "Email-ka shaqeynaya", "Telefoon lambar", "Dokumentiyo muhiim ah"].map(
            (req, index) => (
              <li key={index} className="text-gray-600">
                {req}
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  )
}

