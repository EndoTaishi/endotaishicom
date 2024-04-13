import { Post } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@chakra-ui/react'
import { createPost } from '@/app/lib/action';

export default function Form({ posts }: { posts: Post[] }) {
    return (
        <form action={createPost}>
            <div className="rounded-md bg-gray-50 p-4 md:p-6">
                {/* Post Title */}
                <div className="mb-4">
                    <label htmlFor="title" className="mb-2 block text-sm font-medium">
                        Title
                    </label>
                    <input
                        id="title"
                        name="title"
                        type="text"
                        placeholder="Enter title"
                        className="block w-full rounded-md border border-gray-200 py-2 px-4 text-sm"
                    />
                </div>

                {/* Post Tags */}
                <div className="mb-4">
                    <label htmlFor="tags" className="mb-2 block text-sm font-medium">
                        Tags
                    </label>
                    <input
                        id="tags"
                        name="tags"
                        type="text"
                        placeholder="Enter tags"
                        className="block w-full rounded-md border border-gray-200 py-2 px-4 text-sm"
                    />
                </div>

                {/* Post Content */}
                <div className="mb-4">
                    <label htmlFor="content" className="mb-2 block text-sm font-medium">
                        Content
                    </label>
                    <textarea
                        id="content"
                        name="content"
                        placeholder="Enter content"
                        rows={10}
                        className="block w-full rounded-md border border-gray-200 py-2 px-4 text-sm"
                    />
                </div>
                <div className="mt-6 flex justify-end gap-4">
                    <Link
                        href="/posts"
                        className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                    >
                        Cancel
                    </Link>
                    <Button colorScheme="blue" type="submit">Create Post</Button>
                </div>
            </div>
        </form>
    );
}