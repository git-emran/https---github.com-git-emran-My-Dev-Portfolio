"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="details">Personal Details</TabsTrigger>
        <TabsTrigger value="fun">Fun stuff</TabsTrigger>
      </TabsList>
      <TabsContent value="details" className="mt-12">
        <div>This is personal details</div>
      </TabsContent>
      <TabsContent value="fun" className="mt-12">
        <div>This is fun stuff</div>
      </TabsContent>
    </Tabs>
  );
}
