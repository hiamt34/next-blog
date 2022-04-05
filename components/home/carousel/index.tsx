
import React from "react"
import { IPost } from "../../../interfaces"
import { useAppSelector } from "../../../store/hooks"
import { selectPostsHot } from "../../../store/post/postSlice"
import { ItemCarousel } from "./itemCarousel"

interface CarouselProps {
    postsHot: IPost[]
}
export const Carousel: React.FC<CarouselProps> = ({ postsHot }) => {
    // const postsHot = useAppSelector(selectPostsHot)
    // const [posts, setPosts] = useState(postsHot)

    return (
        <section className="section carousel-hero">
            <div className="owl-carousel">
                {
                    postsHot.map((post, key) => {
                        return (
                            <ItemCarousel post={post} key={key} />
                        )
                    })
                }

            </div>
        </section>

    )
}
