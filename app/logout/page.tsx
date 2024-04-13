import { signOut } from '@/auth';
import { Button } from '@chakra-ui/react';

export default function Page() {
    return (
        <>
            <div className="px-4 pt-40 pb-12 w-4/5 m-auto">
                <h2 className='flex justify-center'>LogOut</h2>
            </div>
            <form action={async () => {
                'use server';
                await signOut();
            }}
            className='flex justify-center items-center'
            >
                <Button type="submit">
                    <a href="/">Sign Out</a>
                </Button>
            </form>
        </>
    );
}