import { Image } from '@chakra-ui/react'

export function Profile() {
  return (
    <div className='grid md:grid-cols-5 gap-12'>
        <div className='relative col-span-5 md:col-span-2 mb-3'>
            <Image className='object-cover h-48 w-48 lg:h-64 lg:w-64 m-3' 
                borderRadius='full'
                src='/Profile.JPG'
            />
        </div>
        <div className='col-span-5 md:col-span-3 '>
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