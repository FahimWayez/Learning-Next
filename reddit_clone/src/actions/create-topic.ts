"use server";

export async function createTopic(formData: FormData) {
  const name = formData.get("name");
  const description = formData.get("description");

  console.log(name, description);
  //TODO: revalidating the homepage after creating a topic
}
