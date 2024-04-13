import Date from '@/app/lib/date'
import { fetchPostById } from '@/app/lib/data';
import { remark } from 'remark';
import html from 'remark-html';
import '@/app/ui/globals.css'

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const post = await fetchPostById(id);

    //if (!post) {
    //    notFound();
    //}

    const processedContent = await remark()
        .use(html, { sanitize: false })
        .process(post.content);
    const contentHtml = processedContent.toString();

    return (
        <div className='flex flex-col px-4 pt-40 pb-12 w-4/5 m-auto'>
            {/* Post Title */}
            <h1 className='flex justify-center font-extrabold text-3xl mb-3'>{post.title}</h1>

            {/* Post Date */}
            <div className='flex justify-end text-gray-500 text-lg font-medium mb-12'>
                <Date dateString={post.date} />
            </div>

            {/* Post Content */}
            <div className="markdown text-gray-600 text-xl" dangerouslySetInnerHTML={{ __html: contentHtml }} />

            {/* Back link */}
            <a href='/posts' className='flex justify-center text-lg pt-6 underline'>back</a>
        </div>
    );
}
