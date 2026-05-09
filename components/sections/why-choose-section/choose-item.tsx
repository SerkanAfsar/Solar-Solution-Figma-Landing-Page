import CustomElement from "@/components/common/custom-element";

export type ChooseItemProps = {
  counter?: number;
  title: string;
  description: string;
};

export default function ChooseItem({ item }: { item: ChooseItemProps }) {
  return (
    <CustomElement as="article">
      <CustomElement as="header">
        <CustomElement as="span">
          {item.counter?.toString().padStart(2, "0")}
        </CustomElement>
        <CustomElement as="h3">{item.title}</CustomElement>
      </CustomElement>
      <CustomElement as="p">{item.description}</CustomElement>
    </CustomElement>
  );
}
