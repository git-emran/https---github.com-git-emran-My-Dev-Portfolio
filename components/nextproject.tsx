"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function ProjectNavigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger> View Other Projects </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid text-left gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <ListItem href="/fujifilm" title="FujiFilm Diosynth">
                Designing a complex dashboard for a Biotech Lab.
              </ListItem>
              <ListItem href="/matchtrack" title="MatchTrack">
                Designing a Sports management mobile application.
              </ListItem>
              <ListItem href="/insiddemaps" title="Inidemaps Capture">
                Simplifying Real estate marketing with just an iPhone.
              </ListItem>
              <ListItem href="/officeoutlet" title="Office Outlet">
                Workstation item shopping and planner tool.
              </ListItem>
              <ListItem href="/websiteredesign" title="Website Redesign">
                Redesigning a website to drive maximum conversion.
              </ListItem>
              <ListItem href="/getgenie" title="GetGenie AI">
                Your personal AI Content Generator with built in SERP data
                optimization.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
