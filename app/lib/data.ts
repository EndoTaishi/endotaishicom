import { sql } from '@vercel/postgres';
import { 
    User,
    Post,
} from './definitions';
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchUser(email: string) {
    try{
        const user = await sql`SELECT * FROM users WHERE email = ${email}`;
        return user.rows[0] as User;
    } catch (error) {
        console.error('fetchUser error:', error);
        throw new Error('Failed to fetch user.')
    }
}

export async function fetchPost() {
    noStore();
    try{
        const data = await sql<Post>`SELECT * FROM posts order by date desc`;
        const posts = data.rows;
        return posts;
    } catch (error) {
        console.error('fetchPost error:', error);
        throw new Error('Failed to fetch posts.')
    }
}

export async function fetchPostById(id: string) {
    noStore();
    try{
        const data = await sql<Post>`SELECT * FROM posts WHERE id = ${id}`;
        return data.rows[0] as Post;
    } catch (error) {
        console.error('fetchPostById error:', error);
        throw new Error('Failed to fetch post.')
    }
}
