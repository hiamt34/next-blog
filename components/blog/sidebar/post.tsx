/* eslint-disable @next/next/no-img-element */
import React from "react"
import { PostProps } from "../../common"
import Link from "next/link"

const baseURL = process.env.baseURL as string

export const Post: React.FC<PostProps> = ({ post }) => {

    const paseDate = Date.parse(post.createdAt as string) // number
    const event = new Date(paseDate)

    return (
        <li className="last-post">
            <div className="image">
                <Link href={'/blog/' + post._id}>
                    <a>
                        <img src={baseURL + post.imgs[0]} alt={post.title} />
                    </a>
                </Link>
            </div>
            {/* <div className="nb">1</div> */}
            <div className="content">
                <p>
                    <Link href={'/blog/' + post._id}><a>{post.title}</a></Link>
                </p>
                <small>
                    <span className="icon_clock_alt" />{event.toDateString()}</small>
            </div>
        </li>
    )
}