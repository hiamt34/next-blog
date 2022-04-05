/* eslint-disable @next/next/no-img-element */

import React from "react"
import { IPost } from "../../interfaces"
import Link from "next/link"

export interface PostProps {
    post: IPost
}

const baseURL = process.env.baseURL as string

export const Post: React.FC<PostProps> = ({ post }) => {

    const paseDate = Date.parse(post.createdAt as string) // number
    const event = new Date(paseDate)

    return (
        <div className="post-card">
            <div className="post-card-image">
                <Link href={'/blog/' + post._id}>
                    <a style={{ display: 'block' }}>
                        <img src={baseURL + post.imgs[0]} alt={post.title} />
                        <Link href={{
                            pathname: '/blog',
                            query: { category: post.category._id }
                        }} passHref>
                            <b className="categorie"
                                style={{ position: 'absolute', top: '15px', right: '15px' }}>
                                {post.category.name}
                            </b>
                        </Link>
                    </a>
                </Link>
            </div>
            <div className="post-card-content">
                {
                    post.tags.map((value, key) => {
                        return (
                            <Link href={{
                                pathname: '/blog',
                                query: { tags: value._id }
                            }} key={key}>
                                <a className="tag" style={{ marginRight: '10px' }}>{value.name}</a>
                            </Link>
                        )
                    })
                }

                <h5 style={{ marginTop: '8px' }}>
                    <Link href={'/blog/' + post._id}><a>{post.title}</a></Link>
                </h5>

                <div className="post-card-info">
                    <ul className="list-inline">
                        <li>
                            <Link href='/'>
                                <a >
                                    <img src="assets/img/author/1.jpg" alt="TTH BLOG" />
                                </a>

                            </Link>
                        </li>
                        <li>
                            <Link href="/">Admin</Link>
                        </li>
                        <li className="dot" />
                        <li>{event.toDateString()}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}