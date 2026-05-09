import CustomElement from "@/components/common/custom-element";
import Link from "next/link";
import img1 from "@/public/images/about01.jpg";
import img2 from "@/public/images/about02.jpg";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <CustomElement as="section" className="about-us-section">
      <CustomElement className="wrapper container-md">
        <CustomElement className="left-side">
          <CustomElement as="h2">Who We Are</CustomElement>
          <CustomElement as="p">
            Welcome to our sales and marketing company, where we specialize in
            helping customers snag great deals from the leading solar and cable
            companies in the DC, Maryland, and Virginia area.We understand that
            finding the right solar and cable solutions for your needs can be a
            daunting task, which is why we are here to make the process easier
            and more affordable for you.
          </CustomElement>
          <CustomElement className="btn-wrapper">
            <Link className="btn" href={"/"}>
              Read More
            </Link>
            <Link className="btn bg-black! text-white!" href={"/"}>
              Contact us today
            </Link>
          </CustomElement>
        </CustomElement>
        <CustomElement className="right-side">
          <Image
            src={img1}
            width={290}
            height={457}
            className="w-auto shrink-0 grow-0 rounded-md shadow lg:-mr-28 lg:h-[450px]"
            alt="img1"
          />
          <Image
            src={img2}
            width={320}
            height={330}
            className="shrink-0 grow-0 rounded-md shadow lg:h-[237px]"
            alt="img2"
          />
        </CustomElement>
      </CustomElement>
    </CustomElement>
  );
}
