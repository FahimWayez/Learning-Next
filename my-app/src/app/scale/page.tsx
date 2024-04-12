import Hero from "@/components/hero";
import scaleImg from "../../../public/scale.jpg";

export default function ScalePage() {
  return (
    <Hero
      imgData={scaleImg}
      imgAlt="Steel Factory"
      title="Scale your application to infinity"
    />
  );
}
