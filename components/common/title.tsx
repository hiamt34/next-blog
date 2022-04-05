import { useRouter } from "next/dist/client/router"
import Link from "next/link"
import React from "react"
import { useSelector } from "react-redux"
import { selectCategories } from "../../store/category/categorySlice"
import { selectTags } from "../../store/tag/tagSlice"
import { Item } from "../detail/comment/item"
interface TitleProps {
    postTitle?: string;
    title?: string
}
export const Title: React.FC<TitleProps> = ({ postTitle, title }) => {
    const router = useRouter()
    const { query, pathname } = router
    const categories = useSelector(selectCategories)
        .filter(item => item._id === query.category)
    const tags = useSelector(selectTags)
        .filter(item => item._id === query.tags)
    return (
        <section className="categorie-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="categorie-title">
                            <small>

                                <Link href="/blog"><a className="categorie">Blog</a></Link>
                                {
                                    categories.map((category, key) => {
                                        return (
                                            <Link href={{
                                                pathname,
                                                query: { category: category._id }
                                            }} key={key}>
                                                <a className="categorie">{category.name}</a>
                                            </Link>
                                        )
                                    })
                                }
                                {
                                    tags.map((tag, key) => {
                                        return (
                                            <Link href={{
                                                pathname,
                                                query: { tags: tag._id }
                                            }} key={key}>
                                                <a className="tag">{tag.name}</a>
                                            </Link>
                                        )
                                    })
                                }
                                {
                                    title
                                        ?
                                        (<><span className="arrow_carrot-right" /><Link href={{
                                            pathname: '/blog',
                                        }}>
                                            <a className="categorie">{title}</a>
                                        </Link></>)
                                        : null
                                }
                                {
                                    postTitle
                                        ?
                                        (<><span className="arrow_carrot-right" /><Link href="/blog"><a className="categorie">{postTitle}</a></Link></>)
                                        : null
                                }


                            </small>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}