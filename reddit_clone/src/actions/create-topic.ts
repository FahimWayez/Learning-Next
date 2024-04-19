"use server";

import z from "zod";
import { auth } from "@/auth";
import type { Topic } from "@prisma/client"; //eta describe kore amader application e ekta topic exactly ki
import { redirect } from "next/navigation";
import { db } from "@/db";
import paths from "@/paths";
import { revalidatePath } from "next/cache";

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

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name, //eta ashtese zod diye data validate korar pore amra result e shob rakhsilam. Oikhan theke
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong"],
        },
      };
    }
  }

  revalidatePath("/");

  redirect(paths.topicShow(topic.slug)); //etake try block e rakhtesina karon redirect ekta error throw korei kaj kore. Jodi try block e diye dei taile o barbar error e dekhay dibe, konodin e ar redirected hobena
}
