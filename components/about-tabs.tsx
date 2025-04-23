import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Personal Details</TabsTrigger>
        <TabsTrigger value="password">Fun stuff</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        
      </TabsContent>
    </Tabs>
  );
}
