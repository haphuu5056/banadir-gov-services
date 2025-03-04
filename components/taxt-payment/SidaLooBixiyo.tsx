import { Alert, AlertDescription } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export function SidaLooBixiyo() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-[#3F479E]">Sida loo bixiyo Canshuurta</h2>
      <p className="text-gray-600">Waxaa jira siyaabo kala duwan oo aad canshuurta ku bixin karto:</p>
      <ul className="space-y-2">
        {[
          "Online-ka - Habka ugu fudud ee aad ku bixin karto canshuurta",
          "Direct Debit - Si toos ah ayaa lacagta laguuga jaraya bil walba",
          "Xafiiska Bangiga - Booqo xafiiska bangiga si aad u bixiso canshuurta",
          "Mobile Money - Isticmaal adeegyada lacag bixinta moobilka",
        ].map((detail, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="font-semibold text-[#3F479E]">•</span>
            <span>{detail}</span>
          </li>
        ))}
      </ul>
      <Alert>
        <InfoIcon className="h-4 w-4" />
        <AlertDescription>
          Dooro habka kuu fudud ee aad ku bixin karto canshuurta. Haddii aad u baahan tahay caawimaad, fadlan nala soo
          xiriir.
        </AlertDescription>
      </Alert>
    </div>
  )
}

