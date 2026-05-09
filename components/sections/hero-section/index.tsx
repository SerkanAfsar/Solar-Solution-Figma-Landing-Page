import CustomElement from "@/components/common/custom-element";
export default function HeroSection() {
  return (
    <CustomElement as="section" className="hero-section">
      <CustomElement className="container">
        <CustomElement className="area">
          <CustomElement as="h1">
            Solar <CustomElement as="span">Solutions</CustomElement> for a
            Sustainable Tomorrow.
          </CustomElement>
        </CustomElement>
      </CustomElement>
    </CustomElement>
  );
}
