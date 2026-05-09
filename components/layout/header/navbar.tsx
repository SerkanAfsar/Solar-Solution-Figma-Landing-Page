import CustomElement from "@/components/common/custom-element";
import { cn } from "@/utils";
import { NavbarData } from "@/utils/data";
import Link from "next/link";

export type ClassValueType = {
  className?: string;
};

export default function Navbar({ className }: ClassValueType) {
  return (
    <CustomElement as="nav" className={cn(className)}>
      <CustomElement as="ul" className="">
        {NavbarData.map((item, index) => (
          <CustomElement as="li" className="block" key={index}>
            <Link href={item.url} className="block">
              {item.title}
            </Link>
          </CustomElement>
        ))}
      </CustomElement>
    </CustomElement>
  );
}
