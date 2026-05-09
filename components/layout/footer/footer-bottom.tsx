import CustomElement from "@/components/common/custom-element";

export default function FooterBottom() {
  return (
    <CustomElement as="section" className="footer-bottom-section">
      <CustomElement className="wrapper container text-center">
        © Copyright {new Date().getFullYear()} - Powered by Serkan Afşar
      </CustomElement>
    </CustomElement>
  );
}
