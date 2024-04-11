'use client';

import { Tab, Tabs, TabList } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from 'react';

export default function TabLinks() {
  const pathname = usePathname();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    switch (pathname) {
      case '/':
        setTabIndex(0);
        break;
      case '/blogs':
        setTabIndex(1);
        break;
      default:
        setTabIndex(0);
    }
  }, [pathname]);

  return (
    <>
      <main className="flex justify-center px-4 pt-40 w-3/5 sm:w-4/5 m-auto">
        <Tabs variant='soft-rounded' colorScheme='blue' index={tabIndex}>
          <div className="flex justify-center mb-6">
            <TabList>
              <Tab className="text-xl">
                <Link href="/">HOME</Link>
              </Tab>
              <Tab className="text-xl">
                <Link href="/blogs">BLOGS</Link>
              </Tab>
            </TabList>
          </div>
        </Tabs>
      </main>
    </>
  );
};