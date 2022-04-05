/* eslint-disable @next/next/no-img-element */

import { Comment } from "../comment"
import { PostDetail } from "./postDetail"

export const Main = () => {
    
    return (
        <section className="section ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 mb-20">
                        <PostDetail />
                        
                        <Comment />
                    </div>
                </div>
            </div>
        </section>

    )
}