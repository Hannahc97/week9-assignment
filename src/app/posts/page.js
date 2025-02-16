// import { db } from "@/utils/dbConnection"
// import { auth } from "@clerk/nextjs/server"

// export default async function PostsPage() {

//     const { userId } = await auth();
//     console.log(userId)

//     const myPost = await db.query(`
//         SELECT post_title FROM posts WHERE clerk_id = $1`, [userId])

//     console.log(myPost)

//     const wrangledMyPost = myPost.rows

//     return (
//         <>
//             <h1>My Posts</h1>

//             {wrangledMyPost.map((item)=>(
//                 <div key={item.id}>
//                     <h1>{item.post_title}</h1>
//                 </div>
//             ))}
//         </>
//     )
// }