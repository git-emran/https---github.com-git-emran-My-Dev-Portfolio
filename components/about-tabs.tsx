import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AboutTab1 from "./ui/about-tab1";

export function TabsDemo() {
  return (
    <Tabs className="mt-10">
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
        
      </TabsContent>
    </Tabs>
  );
}
