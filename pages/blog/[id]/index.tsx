import type { NextPage } from 'next'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Title } from '../../../components/common'
import { Main } from '../../../components/detail'
import { IPost } from '../../../interfaces'
import ClientLayout from '../../../layouts/client'
import { postService } from '../../../services'
import { postAction } from '../../../store/post/postSlice'
interface BlogDetailProps {
  post: IPost
}
const BlogDetail: NextPage<BlogDetailProps> = ({ post }) => {

  const dispatch = useDispatch()
  
  dispatch(postAction.setPost(post))
  // useEffect(() => {
  //   dispatch(postAction.setPost(post))
  // }, [dispatch, post])

  return (
    <ClientLayout>
      <Title postTitle={post.title} title={post.category.name} />
      <Main />
    </ClientLayout>
  )
}

export const getServerSideProps = async (context: any) => {
  try {
    const { id } = context.params
    const data = await postService.getDetail(id)
    return {
      props: {
        post: data.payload
      }
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}

export default BlogDetail