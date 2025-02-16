import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";


export default async function CreatePostsPage (){

    const { userId } = await auth();
    console.log(userId)

    const myComments = await db.query (`
        SELECT posts.id, posts.post_title, posts.content FROM users
        JOIN posts ON posts.clerk_id = users.clerk_id WHERE users.clerk_id = 
        $1`, [userId])
    console.log(myComments)

    const wrangledMyComments = myComments.rows

    async function handleSubmit (formValues){
        "use server"
        const formData = {
            postTitle: formValues.get("post_title"),
            content: formValues.get("content")
        }

        db.query(`INSERT INTO posts (post_title, content, clerk_id)
            VALUES($1, $2, $3)`, [formData.postTitle, formData.content, userId])

        revalidatePath("/createPosts");
        redirect("/createPosts");
    }

    return (
        <>
        <div>
            <div className="m-6 p-2 flex flex-col items-center">
            <div className="text-center text-2xl">
                <h1>Create a post</h1>
            </div>
            <div className="w-full max-w-xs">
                <form action={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <label htmlFor="post_title">Post Title: </label>
                    <br/>
                    <input
                        className="w-full h-10 p-2"
                        type="text"
                        name="post_title"
                        required
                        placeholder="Enter your post title"/>
                    <br/>
                    <label htmlFor="content">Content: </label>
                    <br/>
                    <textarea
                        className="h-40 w-full p-2"
                        type="text"
                        name="content"
                        required
                        placeholder="Enter your post title">
                    </textarea>
                    <br/>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit Post</button>
                </form>
            </div>
            </div>


            <div className="text-center text-2xl">
            <h1>My Posts</h1>
            </div>

            

            <div className="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4 m-4">
            {wrangledMyComments.map((comment)=>(
                <div className="flex flex-col justify-between rounded-lg bg-white p-5 shadow-lg" 
                    key={comment.id}>
                    <Link href={`/createPosts/${comment.id}`}>
                        <h1>{comment.post_title}</h1>
                    </Link>
                    <p>{comment.content}</p>
                    <br/>
                </div>
            ))}
            </div>
            </div>
        </>
    )
}