// import { db } from "@/utils/dbConnection"
// import { redirect } from "next/navigation"
// import { revalidatePath } from "next/cache"
// import { auth } from "@clerk/nextjs/server"

// export default async function IdPage({params}){

//     const postParams = await params
//     console.log(postParams.id)

//     const {userId} = await auth()
//     console.log(userId)

//     // const post = await db.query(`SELECT * FROM users WHERE clerk_id = $1`, [postParams.id])
//     // console.log(post)
//     const myPost = await db.query(`SELECT * FROM posts WHERE clerk_id = $1`, [postParams.id])
//     console.log(myPost)


//     return (
//         <>
//             <h1>Post number {postParams.id}</h1>

//         </>
//     )
// }