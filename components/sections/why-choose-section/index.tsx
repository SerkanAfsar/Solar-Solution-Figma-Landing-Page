import CustomElement from "@/components/common/custom-element";
import { WhyChooseUsData } from "@/utils/data";
import ChooseItem from "./choose-item";
import FirstItem from "./first-item";

export default function WhyChooseSection() {
  return (
    <CustomElement as="section" className="why-choose-section">
      <CustomElement className="container-md wrapper">
        <FirstItem />
        {WhyChooseUsData.map((item, index) => (
          <ChooseItem item={{ ...item, counter: index + 1 }} key={index} />
        ))}
      </CustomElement>
    </CustomElement>
  );
}
