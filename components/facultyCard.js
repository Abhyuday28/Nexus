/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xGr3Cod6jvG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Avatar } from "./ui/avatar";
import UserIcon from "./userIcon";
import { PhoneCallIcon } from "lucide-react";

export default function FacultyCard() {
  const faculties = [
    {
      name: "Vijay Kumar",
      img: "https://github.com/shadcn.png",
      isOnline: true,
      branch: "CSE",
    },
  ];

  return (
    <Card className="border-0 w-full ">
      <CardHeader>
        <CardTitle></CardTitle>
      </CardHeader>
      <CardContent className="">
        <Accordion type="single" collapsible className="">
          {faculties.map((faculty) => {
            return (
              <AccordionItem value="item-1">
                <AccordionTrigger
                  // iconClassName="hidden"
                  
                  className="flex justify-start gap-4"
                >
                  <UserIcon name={faculty.name} img={faculty.img} />
                  <div className="flex flex-col items-start gap-1">
                    <h3>{faculty.name}</h3>
                    <h6 className="text-xs">{faculty.branch}</h6>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </CardContent>
    </Card>
  );
}
