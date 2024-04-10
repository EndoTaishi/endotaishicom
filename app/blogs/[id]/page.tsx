import Date from '@/components/date'
import '@/app/ui/globals.css'

import { getAllPostIds, getPostData } from '@/lib/posts'

type Params = {
  id: string
}

type Props = {
  params: Params
}

type PostData = {
  title: string
  date: string
  contentHtml: string
}

export async function generateMetadata({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return {
    title: postData.title,
  }
}

// -< Post >-
export default async function Post({ params }: Props) {
  const postData: PostData = await getPostData(params.id)

  return (
    <div className="px-4 pt-40 pb-12 w-4/5 m-auto">
      {/* Post Title */}
      <h1 className='font-extrabold text-3xl mb-3 flex justify-center'>{postData.title}</h1>

      <div className='text-gray-500 text-lg font-medium mb-12 flex justify-end'>
        <Date dateString={postData.date} />
      </div>

      {/* Post Content */}
      <div
        className='markdown text-gray-600 text-xl'
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />

      <a href='/blogs' className='flex justify-center text-lg pt-6 underline'>back</a>
    </div>
  )
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/