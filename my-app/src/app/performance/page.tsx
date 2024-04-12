import performanceImg from "../../../public/performance.jpg";
import Hero from "@/components/hero";

export default function PerformancePage() {
  return (
    <Hero
      imgAlt="Welding"
      imgData={performanceImg}
      title="We serve high performance applications"
    />
  );
}
