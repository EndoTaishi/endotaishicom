import Link from "next/link";
import Date from "@/app/lib/date";
import TabLinks from "@/app/ui/tab-links";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { getSortedPostsData } from '@/app/lib/posts';

type AllPostsData = {
    date: string
    title: string
    id: string
}[]

export default function Blogs() {
    const allPostsData: AllPostsData = getSortedPostsData()

    return (
        <>
            <TabLinks />
            <h2 className='text-2xl font-bold flex justify-center'>Articles</h2>
            <div className="w-screen flex justify-center items-center">
                <div className="w-3/5">
                    {allPostsData.map(({ id, date, title }) => (
                        <Card key={id} className="mb-3">
                            <CardHeader className='font-bold mb-1 mt-5'>
                                <Link href={`/blogs/${id}`}>{title}</Link>
                            </CardHeader>
                            {/* <br /> */}
                            <CardBody className='text-gray-500 font-medium'>
                                <Date dateString={date} />
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}