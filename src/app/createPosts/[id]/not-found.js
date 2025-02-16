import Link from "next/link";

export default function NotFound(){
    return (
        <>
        <div className="flex flex-col text-center ">
            <h1>Oooops this is embarassing, this post does not exist!</h1>
            <Link href={"/createPosts"}>Click here to view the rest of your posts</Link>
        </div>

        </>
    )
}