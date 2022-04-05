import { useSelector } from "react-redux"
import { selectTags } from "../../../store/tag/tagSlice"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"
export const Tags = () => {
    const tags = useSelector(selectTags)
    const router = useRouter()
    const { query, pathname } = router
    return (
        <div className="widget">
            <div className="section-title">
                <h5>Tags</h5>
            </div>
            <div className="widget-tags">
                <ul className="list-inline">
                    <li>
                        <Link href={{
                            pathname,
                            query: { ...query, tags: '', page: '1' }
                        }}>
                            <a className="tag">All</a>
                        </Link>
                    </li>
                    {
                        tags.map((tag, key) => {
                            return (
                                <li key={key}>
                                    <Link href={{
                                        pathname,
                                        query: { ...query, tags: tag._id, page: '1' }
                                    }}>
                                        <a className="tag">{tag.name}</a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}