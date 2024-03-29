import { Image } from '@chakra-ui/react'

export default function Profile() {
  return (
    <div className='grid md:grid-cols-5 gap-12'>
        <div className='col-span-5 md:col-span-2 flex justify-center'>
            <Image className='object-cover h-40 w-40 lg:h-72 lg:w-72 m-3 flex justify-center items-center' 
                borderRadius='full'
                src='/Profile.JPG'
            />
        </div>
        <div className='col-span-5 md:col-span-3 '>
            <h1 className='text-3xl pb-3 flex justify-center'>Endo Taishi</h1>
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