import CustomElement from "@/components/common/custom-element";
import Logo from "@/components/common/logo";
import { Mail, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function FooterMiddle() {
  return (
    <CustomElement as="section" className="footer-middle-section">
      <CustomElement className="container-md">
        <CustomElement className="footer-middle">
          <CustomElement className="item">
            <Logo />
            <CustomElement as="p">
              Contact us today to explore our services and take advantage of the
              great deals available from the leading solar and cable companies
              in the DC, Maryland, and Virginia area. Let us be your trusted
              partner in finding the best solutions for your energy and
              connectivity needs.
            </CustomElement>
          </CustomElement>
          <CustomElement className="item">
            <CustomElement as="h4">Quick Links</CustomElement>
            <CustomElement as="ul">
              <CustomElement as="li">Home</CustomElement>
              <CustomElement as="li">About Us</CustomElement>
              <CustomElement as="li">Solar Intitaives</CustomElement>
              <CustomElement as="li">Our Services</CustomElement>
              <CustomElement as="li">Community</CustomElement>
              <CustomElement as="li">Aesthetics</CustomElement>
            </CustomElement>
          </CustomElement>
          <CustomElement className="item">
            <CustomElement as="h4">Services</CustomElement>
            <CustomElement as="ul">
              <CustomElement as="li">Solar Solution</CustomElement>
              <CustomElement as="li">Cable Services</CustomElement>
              <CustomElement as="li">Deals and Promotions</CustomElement>
              <CustomElement as="li">Consultation and Support </CustomElement>
            </CustomElement>
          </CustomElement>
          <CustomElement className="item">
            <CustomElement as="h4">Contact</CustomElement>
            <CustomElement as="ul">
              <CustomElement as="li" className="flex gap-4">
                <Phone />
                <CustomElement as="span">0123456789</CustomElement>
              </CustomElement>
            </CustomElement>
            <CustomElement as="li" className="mt-4 flex gap-4">
              <Mail />
              <CustomElement as="span">companyname@gmail.com</CustomElement>
            </CustomElement>
            <CustomElement as="li" className="mt-4 flex gap-4 text-2xl">
              <FaFacebookF />
              <FaInstagram />
              <FaYoutube />
            </CustomElement>
          </CustomElement>
        </CustomElement>
      </CustomElement>
    </CustomElement>
  );
}
