import { db } from "@/utils/dbConnection"
import { notFound } from "next/navigation"

export default async function IdPage({params}){

    const postParams = await params
    console.log(postParams)

    const myPost = await db.query(`SELECT * FROM posts WHERE id = $1`, [postParams.id])
    console.log(myPost)

    const wrangledPost = myPost.rows

    if(wrangledPost.length === 0){
        notFound();
    }

    return (
        <>
        <div className="p-5 border-b-4 border-pink-500 rounded-lg shadow-xl bg-gradient-to-b from-pink-200 to-pink-100 mt-11 ml-6 mr-6 mb-5 text-center">
            {wrangledPost.map((item)=>(
                <div className="text-center text-2xl" 
                key={item.id}>
                    <h2>{item.post_title}</h2>
                    <h2>{item.content}</h2>
                </div>
            ))}
        </div>
        </>
    )
}