import { ProductItemProps } from "@/components/sections/products-section/product-item";
import { ServicesItemProps } from "@/components/sections/services-section/services-item";
import { ChooseItemProps } from "@/components/sections/why-choose-section/choose-item";
import services01 from "@/public/images/service01.png";
import services02 from "@/public/images/service02.png";
import services03 from "@/public/images/service03.png";
import services04 from "@/public/images/service04.png";

import product01 from "@/public/images/product01.png";
import product02 from "@/public/images/product02.png";
import product03 from "@/public/images/product03.png";
import product04 from "@/public/images/product04.png";

export const NavbarData = [
  {
    title: "HOME",
    url: "/",
  },
  {
    title: "ABOUT US",
    url: "/",
  },
  {
    title: "SOLAR INITIATIVES",
    url: "/",
  },
  {
    title: "OUR SERVICES",
    url: "/",
  },
  {
    title: "COMMUNITY",
    url: "/",
  },
  {
    title: "AESTHETICS",
    url: "/",
  },
];

export const ServicesData: ServicesItemProps[] = [
  {
    title: "Solar Solutions",
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    image: services01,
  },
  {
    title: "Cable Services",
    description:
      "Stay connected with high-quality cable services that deliver reliable and fast internet, television",
    image: services02,
  },
  {
    title: "Internet Solutions",
    description:
      "From fast broadband to fiber-optic connections, we'll help you find the internet service provider",
    image: services03,
  },
  {
    title: "Phone Services",
    description:
      "Discover cost-effective and feature-rich phone services that keep you connected to your loved ones.",
    image: services04,
  },
];

export const WhyChooseUsData: ChooseItemProps[] = [
  {
    title: "Expertise and Experience",
    description:
      "With years of experience in the sales and marketing industry, our team has a deep ",
  },
  {
    title: "Extensive Network",
    description:
      "We have established strong relationships with the leading solar and cable companies in the region ",
  },
  {
    title: "Personalized Approach",
    description:
      "We believe that every customer is unique, and their needs should be addressed accordingly",
  },
  {
    title: "Cost Savings",
    description:
      "By leveraging our industry knowledge and network, we can help you save money on your solar and cable purchases",
  },
  {
    title: "Hassle-Free Process",
    description:
      "We handle all the research, negotiations, and paperwork for you, making the process of finding",
  },
];

export const ProductsData: ProductItemProps[] = [
  {
    description:
      "Harness the power of the sun and embrace clean, renewable energy with our solar solutions.",
    title: "Solar Solutions",
    image: product01,
  },
  {
    description:
      "Stay connected with high-quality cable services that deliver reliable and fast internet, television",
    title: "Cable Services",
    image: product02,
  },
  {
    description:
      "We pride ourselves on securing great deals and promotions for our customers.",
    title: "Deals and Promotions",
    image: product03,
  },
  {
    description:
      "We understand that navigating the solar and cable landscape can be overwhelming.",
    title: "Consultation and Support",
    image: product04,
  },
];
