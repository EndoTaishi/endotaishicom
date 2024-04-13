import Form from '@/app/ui/blogs/create-form';
import { fetchPost } from '@/app/lib/data';

export default async function Page() {
    const posts = await fetchPost();

    return (
        <div className="px-4 pt-40 pb-12 w-4/5 m-auto">
            <h2 className='flex justify-center'>Create Article</h2>
            <Form posts={posts} />
        </div>
    );
}