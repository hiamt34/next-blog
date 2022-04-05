import { useSelector } from "react-redux"
import { selectPostsHot } from "../../../store/post/postSlice"
import { Post } from "./post"

export const LatestPost = () => {
    const postsHot = useSelector(selectPostsHot)
    return (
        <div className="widget ">
            <div className="section-title">
                <h5>Bài viết mới</h5>
            </div>
            <ul className="widget-latest-posts">
                {
                    postsHot.map((value, key) => {
                        return (
                            <Post key={key} post={value} />
                        )
                    })
                }

            </ul>
        </div>
    )
}