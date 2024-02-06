import Link from "next/link";
import Date from "@/components/date"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import { getSortedPostsData } from '@/lib/posts'

type AllPostsData = {
    date: string
    title: string
    id: string
}[]

export function Lists() {
    const allPostsData: AllPostsData = getSortedPostsData()

    return (
        <>
            <h2 className='text-2xl font-bold mb-3 flex justify-center'>Notes</h2>
            <div className="w-screen flex justify-center items-center">
                <div className="w-3/5">
                    {allPostsData.map(({ id, date, title }) => (
                        <Card key={id} className="mb-3">
                            <CardHeader className='font-bold mb-1 mt-5'>
                                <Link href={`/posts/${id}`}>{title}</Link>
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