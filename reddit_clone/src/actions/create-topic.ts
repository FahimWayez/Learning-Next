"use server";

import z from "zod";
import { auth } from "@/auth";

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/[a-z-]+$/, {
      message: "Must be lowercase letters or dashes without spaces.",
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[]; //etate emon shob error gula dhukabo jegula khub form level e...like database e topic dhuktesena ba user authenticated na ei type er
  };
}

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  // console.log(result.error); //eta error ditese karon typescript chay je age check kori age parsing ta successfull hoise kina

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["Please sign in to create a topic"],
      },
    };
  }

  return {
    errors: {},
  };
  //TODO: revalidating the homepage after creating a topic
}
