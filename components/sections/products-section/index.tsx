import CustomElement from "@/components/common/custom-element";
import { ProductsData } from "@/utils/data";
import ProductItem from "./product-item";
import img from "@/public/images/products.png";
import Image from "next/image";

export default function ProductsSection() {
  return (
    <CustomElement as="section" className="products-section">
      <CustomElement className="container-md">
        <CustomElement as="header">
          <CustomElement as="span">Our Services</CustomElement>
          <CustomElement as="h2">What We Do</CustomElement>
        </CustomElement>
        <CustomElement className="wrapper">
          <CustomElement className="exp-items">
            {ProductsData.slice(0, 2).map((item, index) => (
              <ProductItem item={item} key={index} />
            ))}
          </CustomElement>
          <CustomElement>
            <Image
              src={img}
              width={350}
              height={440}
              className="shrink-0 grow-0 object-cover object-center"
              alt="product"
            />
          </CustomElement>
          <CustomElement className="exp-items">
            {ProductsData.slice(2, 4).map((item, index) => (
              <ProductItem item={item} key={index} />
            ))}
          </CustomElement>
        </CustomElement>
      </CustomElement>
    </CustomElement>
  );
}
