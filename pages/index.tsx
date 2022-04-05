import type { NextPage } from 'next'
import { useEffect } from 'react'
import { Carousel, Main } from '../components/home'
import { IPost } from '../interfaces'
import ClientLayout from '../layouts/client'
import { GetAllPosts, postService } from '../services'
import { useAppDispatch } from '../store/hooks'
import { postAction } from '../store/post/postSlice'
interface HomeProps {
  data: {
    posts: GetAllPosts,
    postsHot: IPost[]
  }
}
const Home: NextPage<HomeProps> = ({ data }) => {

  const dispatch = useAppDispatch()
  const { payload, meta } = data.posts
  const { postsHot } = data

  useEffect(() => {
    dispatch(postAction.setMeta(meta))
  }, [dispatch, meta])

  return (
    <ClientLayout>
      <Carousel postsHot={postsHot} />
      <Main posts={payload} />
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

export default Home
