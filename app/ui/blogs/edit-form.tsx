'use client';

import { Post } from '@/app/lib/definitions';
import Link from 'next/link';
import { Button } from '@chakra-ui/react'
import { editPost, deletePost } from '@/app/lib/action';
import { signOut } from '@/auth';

export default function Form({ post }: { post: Post }) {
    const editPostWithId = editPost.bind(null, post.id);
    const deletePostWithId = deletePost.bind(null, post.id);
    return (
        <>
            <form action={deletePostWithId}>
                <div className='flex justify-end mb-2'>
                    <Button colorScheme="red" type="submit">Delete Post</Button>
                </div>
            </form>
            <form action={editPostWithId}>
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
                            className="block w-full rounded-md border border-gray-200 py-2 px-4 text-sm"
                            defaultValue={post.title}
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
                            className="block w-full rounded-md border border-gray-200 py-2 px-4 text-sm"
                            defaultValue={post.tags.join(', ')}
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
                            rows={10}
                            className="block w-full rounded-md border border-gray-200 py-2 px-4 text-sm"
                            defaultValue={post.content}
                        />
                    </div>
                    <div className="mt-6 flex justify-end gap-4">
                        <Link
                            href={`/posts/${post.id}`}
                            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
                        >
                            Cancel
                        </Link>
                        <Button colorScheme="blue" type="submit">Edit Post</Button>
                    </div>
                </div>
            </form>
        </>
    );
}