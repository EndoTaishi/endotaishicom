import { Image } from '@chakra-ui/react'
import { Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

export function Profile() {
  return (
    <div className='flex justify-evenly'>
        <div className='flex justify-center w-2/5 mb-6'>
            <Image className='object-cover h-48 w-48 sm:h-48 sm:w-48 md:h-64 md:w-64 m-3' 
                borderRadius='full'
                src='/Profile.JPG'
            />
        </div>
        <div className='w-2/5'>
            <h1 className='text-3xl pb-3'>Endo Taishi</h1>
            <h3 className='text-2xl font-bold mb-3'>経歴</h3>
            <div className='mb-6'>
                <p>2023/04~</p>
                <p>早稲田大学大学院 人間科学研究科 修士課程</p>
            </div>
            <h3 className='text-2xl font-bold mb-3'>目的</h3>
            <div className='mb-6'>
                <p>このサイトは、自分の技術力を向上させるためにNext.js、TypeScript、Tailwind CSS、Chakra UIを使って開発し、Vercelでホスティングしています。</p>
            </div>
        </div>
    </div>
  );
}