import Image from "next/image";
import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany(); //Ekhane amra directly database theke access nitesi. Jodi bairer kono third party api lagto taile http request kora lagto.

  const renderedSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });
  return <div>{renderedSnippets}</div>;
}
