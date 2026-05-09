"use client";
import CustomElement from "@/components/common/custom-element";
import Logo from "../../common/logo";
import Navbar from "./navbar";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/utils";

export default function Header() {
  const [opened, setOpened] = useState<boolean>(false);
  const IconComponent = opened ? X : Menu;
  return (
    <CustomElement as="header">
      <CustomElement className="container flex items-center justify-between">
        <Logo />
        <Navbar
          className={cn(opened && "visible! translate-y-0! opacity-100!")}
        />
        <IconComponent
          size={25}
          className="block cursor-pointer xl:hidden"
          onClick={() => setOpened(!opened)}
        />
      </CustomElement>
    </CustomElement>
  );
}
