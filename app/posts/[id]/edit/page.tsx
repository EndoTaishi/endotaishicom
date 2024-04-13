import Form from '@/app/ui/blogs/edit-form';
import { fetchPostById } from '@/app/lib/data';

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const post = await fetchPostById(id);

    return (
        <div className="px-4 pt-40 pb-12 w-4/5 m-auto">
            <h2 className='flex justify-center'>Edit Article</h2>
            <Form post={post} />
        </div>
    );
}