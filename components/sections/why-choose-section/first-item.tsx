import CustomElement from "@/components/common/custom-element";

export default function FirstItem() {
  return (
    <CustomElement>
      <CustomElement className="flex h-full w-full flex-col items-center justify-center gap-2">
        <CustomElement as="h2" className="block w-full text-left! leading-14!">
          Why Choose Us?
        </CustomElement>
        <CustomElement as="p" className="text-center md:text-left">
          Whether you are looking to switch to solar energy or upgrade your
          cable services, our sales and marketing company is here to help.
        </CustomElement>
      </CustomElement>
    </CustomElement>
  );
}
