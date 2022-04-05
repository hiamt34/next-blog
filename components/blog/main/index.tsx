import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { IPost } from "../../../interfaces"
import { IParams, postAction, selectPosts } from "../../../store/post/postSlice"
import { Post, Paginate } from "../../common"
interface MainProps {
    payload: IPost[];
}
export const Main: React.FC<MainProps> = ({ payload }) => {
    const [posts, setPosts] = useState<IPost[]>(payload)

    const postsStore = useSelector(selectPosts)

    useEffect(()=>{
        setPosts(postsStore)
    },[postsStore])

    const dispatch = useDispatch()
    return (
        <div className="col-lg-8 mt-30">
            <div className="row">
                <div className="col-lg-12">
                    {
                        posts.map((post, key) => {
                            return <Post key={key} post={post} />
                        })
                    }
                </div>

                <div className="col-lg-12">
                    <Paginate action={(params: IParams) => dispatch(postAction.fetchDataPage({ params }))} />
                </div>

            </div>
        </div>

    )
}