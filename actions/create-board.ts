"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const CreateBoard = z.object({
  title: z.string(),
});

const BoardSchema = CreateBoard.extend({
  id: z.number(),
});

export type Board = z.infer<typeof BoardSchema>;

export async function create(formData: FormData) {
  const { title } = CreateBoard.parse({ title: formData.get("title") });

  await db.board.create({
    data: {
      title: title,
    },
  });

  revalidatePath("/organization/org_2bfy36Y2JPYkuwY9zHG4oZfYtQk")
}
