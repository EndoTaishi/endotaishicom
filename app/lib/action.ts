'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object({
    id: z.string(),
    title: z.string(),
    tags: z.string(),
    content: z.string(),
    date: z.string(),
});

const CreatePost = FormSchema.omit({ id: true, date: true });

export async function createPost(formData: FormData){
    const { title, tags, content} = CreatePost.parse({
        title: formData.get('title'),
        tags: formData.get('tags'),
        content: formData.get('content'),
    });
    const tagArray = tags.split(',').map((tag) => tag.trim());
    const date = new Date().toISOString().split('T')[0];

    await sql`
        INSERT INTO posts (title, tags, content, date)
        VALUES (${title}, ${tagArray}, ${content}, ${date})
    `;

    revalidatePath('/posts');
    redirect('/posts');
}

const EditPost = FormSchema.omit({ id: true, date: true });

export async function editPost(id: string, formData: FormData) {
    const { title, tags, content } = EditPost.parse({
        title: formData.get('title'),
        tags: formData.get('tags'),
        content: formData.get('content'),
    });
    const tagArray = tags.split(',').map((tag) => tag.trim());
    
    await sql`
        UPDATE posts
        SET title = ${title}, tags = ${tagArray}, content = ${content}
        WHERE id = ${id}
    `;

    revalidatePath('/posts');
    redirect('/posts');
}

export async function deletePost(id: string) {
    await sql`DELETE FROM posts WHERE id = ${id}`;
    revalidatePath('/posts');
    redirect('/posts');
}