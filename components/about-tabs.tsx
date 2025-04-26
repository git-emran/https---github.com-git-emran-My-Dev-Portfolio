import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutTab1 from "./ui/about-tab1";
import AboutTab2 from "./ui/about-tab2";

export function TabsDemo() {
  return (
    <Tabs defaultValue="Personal Details" className="mt-10">
      <TabsList className="flex gap-10 flex-row w-full">
        <TabsTrigger value="Personal Details">Personal Details</TabsTrigger>
        <TabsTrigger value="Fun stuff">Fun Stuff</TabsTrigger>
      </TabsList>
      <TabsContent value="Personal Details">
        <div className="w-full">
          <AboutTab1 />
        </div>
      </TabsContent>
      <TabsContent value="Fun stuff">
        <div className="w-full">
          <AboutTab2 />
        </div>
      </TabsContent>
    </Tabs>
  );
}
