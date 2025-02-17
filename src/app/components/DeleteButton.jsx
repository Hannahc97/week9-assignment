"use client"

import { handleDeletePost } from "./DeleteFunction"

export default function DeleteButton ({postId}){

    return (
        <>
        <button 
            className="flex flex-col items-center bg-pink-400 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit" 
            onClick={()=>handleDeletePost(postId)}>Delete Post</button>
        </>
    )
}