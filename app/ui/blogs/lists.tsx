import Link from "next/link";
import Date from "@/app/lib/date"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { fetchPost } from "@/app/lib/data"

export default async function Lists() {
    const posts = await fetchPost();

    if (!posts || posts.length === 0) {
        return <p className="flex justify-center items-center h-48">No post available.</p>
    }

    return (
        <div className="w-full flex flex-col justify-center">
            {posts.map((post) => (
                <Card key={post.id} className="mb-3">
                    <CardHeader>
                        {post.tags.map((tag) => (
                            <span key={tag} className="border border-solid py-1 px-2 rounded-full text-sm text-gray-500 mr-2">{tag}</span>
                        ))}
                    </CardHeader>
                    <CardBody className='font-bold'>
                        <Link href={`/posts/${post.id}`}>{post.title}</Link>
                    </CardBody>
                    <CardFooter className='text-gray-500 font-medium'>
                        <Date dateString={post.date} />
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
}