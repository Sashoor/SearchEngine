import Head from "next/head";
import Image from "next/image";
import Avatar from "../components/Avatar";
import {
  MicrophoneIcon,
  SearchCircleIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router"

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`);

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

          <Avatar url="data:image/jpeg;base64,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" />
        </div>
      </header>

      {/* Body */}
      <form className="flex flex-col items-center mt-44 flex-grow w-4/5">
        <Image
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png"
          alt="picture of google logo"
          width={300}
          height={100}
        />

        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full
         borde border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl" >
        
          <SearchIcon className="h-5 mr-3 text-gray-500"/><input
            ref={searchInputRef}
            type="text"
            className="focus:outline-none flex-grow"
            />
            <MicrophoneIcon className="h-5 " />
        </div>
        <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            Im feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
