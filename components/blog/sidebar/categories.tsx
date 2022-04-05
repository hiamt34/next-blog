import { useSelector } from "react-redux"
import { selectCategories } from "../../../store/category/categorySlice"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"
export const Categories = () => {
    const categories = useSelector(selectCategories)
    const router = useRouter()
    const { query, pathname } = router
    return (
        <div className="widget">
            <div className="section-title">
                <h5>Categories</h5>
            </div>
            <ul className="widget-categories">
                <li>
                    <Link href={{
                        pathname,
                        query: { ...query, category: '', page: '1' }
                    }} >
                        <a className="categorie">All</a>
                    </Link>
                    {/* <span className="ml-auto">22 Posts</span> */}
                </li>
                {
                    categories.map((category, key) => {
                        return (
                            <li key={key}>
                                <Link href={{
                                    pathname,
                                    query: { ...query, category: category._id, page: '1' }
                                }} >
                                    <a className="categorie">{category.name}</a>
                                </Link>
                                <span className="ml-auto">{category.countPost} Posts</span>
                            </li>
                        )
                    })
                }


            </ul>
        </div>
    )
}