import "@/app/ui/globals.css";
import { Image } from '@chakra-ui/react'
import Header from "./ui/header";
import Footer from "./ui/footer";
import TabLinks from "./ui/tab-links";
import Providers from './providers'

export default function Home() {
  return (
    <>
      <Providers>
        <Header />
        <TabLinks />
        <div className="flex justify-center px-4 pb-12 w-3/5 sm:w-4/5 m-auto">
          <div className='grid md:grid-cols-5 gap-12'>
            <div className='col-span-5 md:col-span-2 flex justify-center'>
              <Image 
                src='/Profile.JPG'
                className='object-cover h-48 w-48 lg:h-72 lg:w-72 flex justify-center items-center' 
                borderRadius='full'
                alt='Profile photo'
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
        </div>
        <Footer />
      </Providers>
    </>
  );
};