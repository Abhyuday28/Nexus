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

export default function FacultyCard() {
  const faculties = [
    {
      name: "Vijay Kumar",
      img: "https://github.com/shadcn.png",
      isOnline: false,
    },
  ];

  return (
    <Card className="w-full border-0">
      <CardHeader>
        <CardTitle>Accordion Demo</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faculties.map((faculty) => {
            return (
              <AccordionItem value="item-1">
                <AccordionTrigger iconClassName="hidden">
                  <UserIcon name={faculty.name} img={faculty.img} />
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
