export default function CreatePostsPage (){
    return (
        <>
            <form>
                <label>Post Title: </label>
                <input
                    type="text"
                    name="post_title"
                    required
                    placeholder="Enter your post title"/>
            </form>
        </>
    )
}