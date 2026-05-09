import CustomElement from "@/components/common/custom-element";
import { ServicesData } from "@/utils/data";
import ServicesItem from "./services-item";

export default function ServicesSection() {
  return (
    <CustomElement as="section" className="services-section">
      <CustomElement className="container-md">
        <CustomElement as="h2">Our Expertise and Experience</CustomElement>
        <CustomElement className="services-items">
          {ServicesData.map((item, index) => (
            <ServicesItem item={item} key={index} />
          ))}
        </CustomElement>
      </CustomElement>
    </CustomElement>
  );
}
