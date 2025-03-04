import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export function HababKale() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-[#3F479E]">Habab kale oo lacag bixin ah</h2>
      <p className="text-gray-600">Waxaa jira habab kale oo aad ku bixin karto canshuurta:</p>
      {[
        { name: "Mobile Money", details: "Isticmaal EVC Plus, Zaad, ama adeegyada kale ee moobilka" },
        { name: "Wakiilada", details: "Booqo wakiilada canshuur ururinta ee xaafadaada" },
        { name: "Bangiyada", details: "Tag xarumaha bangiyada la oggol yahay" },
      ].map((method, index) => (
        <div key={index} className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-[#3F479E] mb-2">{method.name}</h3>
          <p className="text-gray-600">{method.details}</p>
        </div>
      ))}
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertDescription>Dooro habka kuu fudud. Xaqiiji inaad hesho rasiidka lacag bixinta.</AlertDescription>
      </Alert>
    </div>
  )
}

