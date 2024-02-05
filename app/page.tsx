import { Tab, Tabs, TabList, TabPanels, TabPanel } from "@chakra-ui/react";
import { Profile } from "./components/profile";
import "./globals.css";

export default function Home() {
  return (
    <main className="flex justify-center px-4 pt-40 pb-12 w-3/5 sm:w-4/5 m-auto">
      <Tabs variant='soft-rounded' colorScheme='blue'>
        <div className="flex justify-center mb-6">
          <TabList>
            <Tab className="text-xl">ABOUT</Tab>
            <Tab className="text-xl">HOME</Tab>
          </TabList>
        </div>
        <TabPanels className="flex justify-center">
          <TabPanel>
            <Profile />
          </TabPanel>
          <TabPanel>
            <p>To be prepared.</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </main>
  );
}
