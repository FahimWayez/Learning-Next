"user client";

import { Input } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

export default function SearchInput() {
  const searchParams = useSearchParams();

  return <Input defaultValue={searchParams.get("term") || ""} />;
}
