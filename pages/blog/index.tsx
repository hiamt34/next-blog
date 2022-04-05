import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Main, Sidebar } from '../../components/blog'
import { Title } from '../../components/common'
import { IPost } from '../../interfaces'
import ClientLayout from '../../layouts/client'
import { GetAllPosts, postService } from '../../services'
import { categoryAction } from '../../store/category/categorySlice'
import { useAppDispatch } from '../../store/hooks'
import { instagramAction } from '../../store/instagram/instagramSlice'
import { postAction } from '../../store/post/postSlice'
import { tagAction } from '../../store/tag/tagSlice'

interface BlogProps {
    data: {
        posts: GetAllPosts,
        postsHot: IPost[]
    }
}

const Blog: NextPage<BlogProps> = ({ data }) => {

    const dispatch = useAppDispatch()
    const { payload, meta } = data.posts
    const { postsHot } = data

    useEffect(() => {

        dispatch(postAction.setMeta(meta))
        dispatch(instagramAction.fetchData())
        dispatch(tagAction.fetchData())
        dispatch(categoryAction.fetchData())
        dispatch(postAction.setPostsHot(postsHot))

    }, [postsHot, meta, payload, dispatch])

    return (
        <ClientLayout>
            <Title />
            <section className="blog-grid">
                <div className="container-fluid">
                    <div className="row">
                        <Main payload={payload} />
                        <Sidebar />
                    </div>
                </div>
            </section>

        </ClientLayout>
    )
}

export const getServerSideProps = async () => {
    try {
        const data = await postService.getAllPost()
        const param = {
            status: 'hot'
        }
        const postsHot = await postService.getAllPost(param)
        return {
            props: {
                data: {
                    posts: {
                        payload: data.payload.payload,
                        meta: data.payload.meta,
                    },
                    postsHot: postsHot.payload.payload
                }
            }
        }
    } catch (error) {
        return {
            notFound: true,
        }
    }
}

export default Blog
