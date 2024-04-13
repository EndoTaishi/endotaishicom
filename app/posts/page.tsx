import TabLinks from '@/app/ui/tab-links';
import Lists from '@/app/ui/blogs/lists';
//import { fetchPost } from '@/app/lib/data';

export default async function Page() {
    return (
        <>
            <TabLinks />
            <h2 className='text-2xl font-bold flex justify-center'>Articles</h2>
            <div className="w-screen flex justify-center items-center">
                <div className="w-3/5">
                    <Lists />
                </div>
            </div>
        </>
    );
}