import Image from "next/image";
import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany(); //Ekhane amra directly database theke access nitesi. Jodi bairer kono third party api lagto taile http request kora lagto.

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="flex justify-between  items-center p-2 border rounded"
      >
        <div>{snippet.title} </div>
        <div>View</div>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="text-xl fond-bold">Snippets</h1>
        <Link href={"/snippets/new"} className="border p-2 rounded">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
