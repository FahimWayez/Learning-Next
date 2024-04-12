import Hero from "@/components/hero";
import reliabilityImg from "../../../public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero
      imgData={reliabilityImg}
      imgAlt="Welding"
      title="Super high reliability hosting"
    />
  );
}
