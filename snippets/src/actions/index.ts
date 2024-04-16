"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect(`/`);
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  return {
    message: "Title must be longer",
  };
  // // ekhane emon shob code thakbe ja database e notun record insert korbe, jar jonno amar prisma client import kora lagbe
  // //this needs to be a server action as we are trying to change something
  // // "use server"; //eta next er ekta jinish. Jokhon ekta async function er bhitore ei exact string ta she dekhe, she server action ke call korte hobe eta bujhe ney nije theke.
  // //Also, the inputs users are giving, we need to make sure that they are valid. Amra amader function er parameter hishebe formData pathaisi, jetar data type FormData. Eita ekta object jetar bhitore form er shob information gula thakbe.
  // // const title = formData.get("title");
  // // const code = formData.get("code");
  // const title = formData.get("title") as string; //ei value gula amra paitesi kemne? jokhon form submit kori, eta automatically link er maddhome form er data gula pathay dey...oikhan thekei fetch kore nitesi get method er maddhome. Ei value gula jokhon amra receive kori, typescript bujhe ney egular datatype hoy null, naile FormDataEntryValue...string na. Ekhon, amra je input nibo, amra shudhu string radio button checkbox number date badeo file o input nite pari. Tai typescript eta kore...FormDataEntryValue datatype e shob dhukay...jate eta string hok ba file hok ba jai hok amra jeno access korte pari as FormDataEntryValue type ei.
  // const code = formData.get("code") as string; //Jar karone amra emne etake as string bole ditesi, jeno typescript etake FormDataEntryValue hishebe na niye string hishebei assume kore ney ekhon.
  // //Create a record in the database
  // const snippet = await db.snippet.create({
  //   data: {
  //     title: title, //duitai identical bole amra just title, code likhleo hoito.
  //     code: code,
  //   },
  // });
  // console.log(snippet);
  // //Redirect the user to the root. Amra jodi konodin forcibly navigate koraite chai jemon redirect koraite chai ekta user ke amader application er bhitore,  amader ekta function use korte hobe redirect name. Upore import korsi.
  // redirect("/");
}
