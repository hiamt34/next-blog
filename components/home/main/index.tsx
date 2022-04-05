import React from "react"
import { IPost } from "../../../interfaces"
import { Post } from "../../common"
import Link from "next/link"
interface MainProps {
    posts: IPost[]
}
export const Main: React.FC<MainProps> = ({ posts }) => {

    return (
        <section className="mt-40 masonry-layout">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card-columns">
                            {
                                posts.map((value, key) => {
                                    return (
                                        <div className="card" key={key}>
                                            <Post post={value} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <Link href="/blog" passHref><button className="view-all" type="submit">Xem Thêm</button></Link>
                        
                    </div>
                </div>
            </div>
        </section>

    )
}