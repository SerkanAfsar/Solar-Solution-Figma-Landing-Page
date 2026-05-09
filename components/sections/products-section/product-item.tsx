import CustomElement from "@/components/common/custom-element";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
export type ProductItemProps = {
  title: string;
  description: string;
  image: StaticImport;
};
export default function ProductItem({ item }: { item: ProductItemProps }) {
  return (
    <CustomElement as="article">
      <Image
        src={item.image}
        width={50}
        height={60}
        className="shrink-0 grow-0 object-cover object-center"
        alt={item.title}
      />
      <CustomElement as="h3">{item.title}</CustomElement>
      <CustomElement as="p">{item.description}</CustomElement>
    </CustomElement>
  );
}
