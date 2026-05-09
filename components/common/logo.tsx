import img from "@/public/images/logo.png";
import Image from "next/image";

export default function Logo() {
  return <Image src={img} width={150} height={60} alt="Logo" />;
}
