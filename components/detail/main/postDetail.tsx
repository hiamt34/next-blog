/* eslint-disable @next/next/no-img-element */

import { useSelector } from "react-redux"
import { selectPost } from "../../../store/post/postSlice"
import Link from 'next/link';
const baseURL = process.env.baseURL as string

export const PostDetail = () => {

    const post = useSelector(selectPost)
    const paseDate = Date.parse(post?.createdAt as string) // number
    const event = new Date(paseDate)

    return (
        <div className="post-single">
            <div className="post-single-gallery">
                <div className="owl-carousel">
                    {
                        post?.imgs.map((img, key) => {
                            return (
                                <div className="image" key={key}>
                                    <img src={baseURL + img} alt="đồ án website free miến phí" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="post-single-content">
                <Link href={{
                    pathname:'/blog',
                    query:{category: post?.category._id}
                }} >
                    <a className="categorie">{post?.category.name}</a>
                </Link>
                <h4>{post?.title} </h4>
                <div className="post-single-info">
                    <ul className="list-inline">
                        <li><img src="assets/img/author/1.jpg" alt="đồ án website free miến phí" /></li>
                        <li><b>Admin</b> </li>
                        <li className="dot" />
                        <li>{event.toDateString()}</li>
                        <li className="dot" />
                        <li>{post?.comment?.length} comments</li>
                    </ul>
                </div>
            </div>
            <div className="post-single-body">
                <div className="post-single-video pt-55">
                    {
                        post?.video
                            ?
                            // <iframe src={post.video.replace("watch?v=","embed/")} allowFullScreen />
                            <iframe width={560} height={400} src={post.video.replace("watch?v=","embed/")} title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                            :
                            null
                    }

                </div>
                {

                    <div dangerouslySetInnerHTML={{ __html: post?.description as string }} />
                }
            </div>
            <div className="post-single-footer">
                <div className="tags">
                    <ul className="list-inline">
                        {
                            post?.tags.map((tag, key) => {
                                return (
                                    <li key={key}>
                                        <a href="blog-grid.html">{tag.name}</a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                </div>
                
            </div>
        </div>
    )
}