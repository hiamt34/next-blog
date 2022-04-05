/* eslint-disable @next/next/no-img-element */
import React from "react"
import { IPost } from "../../../interfaces"
import { changeDate, changeTime } from "../../../ultis/load"
import Link from "next/link"
interface ItemCarousel {
    post: IPost
}
const baseURL = process.env.baseURL as string

export const ItemCarousel: React.FC<ItemCarousel> = ({ post }) => {

    const paseDate = Date.parse(post.createdAt as string) // number
    const event = new Date(paseDate)

    return (
        <div className="hero d-flex align-items-center " style={{ backgroundImage: `url('${baseURL + post.imgs[0].replace(/\\/g, "/")}')` }}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                        <div className="hero-content">
                            {
                                post.tags.map((value, key) => {
                                    return (
                                        <Link href={{
                                            pathname: '/blog',
                                            query: { tags: value._id }
                                        }} key={key}><a className="tag" > {value.name}</a></Link>
                                    )
                                })
                            }
                            <h2>
                                <Link href={'/blog/' + post._id}><a>{post.title}</a></Link>
                            </h2>
                            <div className="post-card-info">
                                <ul className="list-inline">
                                    <li>
                                        <b>
                                            <img src="assets/img/author/1.jpg" alt="TTH BLOG" />
                                        </b>
                                    </li>
                                    <li>
                                        <b>Admin</b>
                                    </li>
                                    <li className="dot" />
                                    <li>{changeDate(post.createdAt)}</li>
                                    <li className="dot" />
                                    <li>{changeTime(post.createdAt)}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
