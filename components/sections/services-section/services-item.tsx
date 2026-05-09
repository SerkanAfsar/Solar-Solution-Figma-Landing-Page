import CustomElement from "@/components/common/custom-element";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
export type ServicesItemProps = {
  title: string;
  description: string;
  image: StaticImport;
};

export default function ServicesItem({ item }: { item: ServicesItemProps }) {
  return (
    <CustomElement as="article">
      <Image
        src={item.image}
        width={260}
        height={430}
        alt={item.title}
        className="absolute inset-0 z-0 h-auto w-full object-cover object-center"
      />
      <CustomElement className="content">
        <CustomElement as="h3">{item.title}</CustomElement>
        <CustomElement as="p">{item.description}</CustomElement>
      </CustomElement>
    </CustomElement>
  );
}
