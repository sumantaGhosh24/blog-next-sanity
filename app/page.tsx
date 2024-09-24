"use client";

import {ModeToggle} from "@/components/mode-toggle";
import {usePrimaryColor} from "@/components/primary-provider";
import PrimaryToggle from "@/components/primary-toggle";

export default function Home() {
  const {primaryColor} = usePrimaryColor();

  return (
    <div>
      <h1 className={`text-${primaryColor}-500`}>Blog NextJS & Sanity</h1>
      <ModeToggle />
      <PrimaryToggle />
    </div>
  );
}
