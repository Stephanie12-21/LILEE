
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export function CardSection() {
  return (
    <Card className="w-[400px] h-[480px] rounded-[16px]">

      <CardContent  className='w-[390px] h-[300px]  flex items-center mx-auto mt-1 rounded-[24px] bg-slate-900'>
       
      </CardContent>
      <CardFooter className="flex-col items-start p-2 gap-y-4 mt-2">
        <Label htmlFor="categorie" className="bg-slate-500 p-2 rounded-[4px]">Categorie</Label>
        <Label htmlFor="type" className="text-xl">Type de logement</Label>
        <Label htmlFor="localisation">Localisation du logement</Label>

        <div className=" flex gap-x-56">
          <div className="bg-red-500">
            Prix
          </div>
          
            <div className="flex items-center">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="gold"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="none"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 17.27l6.18 3.73-1.64-7.03L21 9.24l-7.19-.61L12 2 10.19 8.63 3 9.24l5.46 4.73L6.82 21z"
                    />
                  </svg>
                ))}
              </div>
            </div>
          
        </div>
      </CardFooter>
    </Card>
  )
}
