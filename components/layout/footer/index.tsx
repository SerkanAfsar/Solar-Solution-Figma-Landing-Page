import CustomElement from "@/components/common/custom-element";
import FooterTop from "./footer-top";
import FooterMiddle from "./footer-middle";
import FooterBottom from "./footer-bottom";

export default function Footer() {
  return (
    <CustomElement as="footer">
      <FooterTop />
      <FooterMiddle />
      <FooterBottom />
    </CustomElement>
  );
}
