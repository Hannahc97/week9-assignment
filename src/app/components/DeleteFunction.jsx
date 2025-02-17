"use server"; // Define this as a Server Action

import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function handleDeletePost(postId) {
    await db.query(`DELETE FROM posts WHERE id = $1`, [postId]);
    revalidatePath("/createPosts");
    redirect("/createPosts");
}