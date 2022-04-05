/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react"
import { IMeta, selectMeta } from "../../store/post/postSlice"
import Link from "next/link"
import { useRouter } from "next/dist/client/router"
import { useAppSelector } from "../../store/hooks"
interface PaginateProp {
    action: Function
}

const page = (meta: IMeta, pages: number, action: Function, query: any, pathname: string) => {
    let render = []
    for (let i = 0; i < pages; i++) {
        render.push(
            <li className={meta.currentPage === i + 1 ? "active" : ""} key={i}>
                <Link href={{
                    pathname: pathname,
                    query: { ...query, page: i + 1 },
                }}
                >
                    <a > {i + 1}</a>

                </Link>
            </li>
        )
    }

    return (
        render
    )
}


export const Paginate: React.FC<PaginateProp> = ({ action }) => {
    const router = useRouter()
    const { query, pathname } = router
    
    const meta = useAppSelector(selectMeta)

    const pages = Math.round((meta.total / (meta.perPage + 1)) + 0.5)

    useEffect(() => {
        action(query)
    }, [query])

    return (
        <div className="pagination mt-30">
            <ul className="list-inline">
                <li style={meta.currentPage === 1 ? { display: 'none' } : {}}>
                    <Link href={{
                        pathname: pathname,
                        query: { ...query, page: meta.currentPage - 1 },
                    }}
                    >
                        <a >
                            <i className="arrow_carrot-2left" />
                        </a>
                    </Link>
                </li>
                {
                    page(meta, pages, action, query, pathname)
                }
                <li style={meta.currentPage === pages ? { display: 'none' } : {}}>
                    <Link href={{
                        pathname: pathname,
                        query: { ...query, page: meta.currentPage + 1 },
                    }}
                    >
                        <a >
                            <i className="arrow_carrot-2right" />
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}