import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { BsEnvelopeArrowUp, BsGithub, BsLinkedin } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <div className="absolute h-40 w-40 bg-blue-500/50 top-16 left-1/6 -z-10 rounded-full   blur-3xl"></div>
      <div className="absolute h-40 w-40 bg-rose-500/50 bottom-16 right-1/6 -z-10 rounded-full   blur-3xl"></div>
      <section className="flex grow w-full mx-auto pt-10 justify-center">
        <main className="">
          <p className="text-emerald-600 lg:text-2xl md:text-xl font-semibold">
            👋 Hey there!, I'm-
          </p>
          <p className=" lg:text-8xl sm:text-6xl text-5xl font-bold">
            Manish K. Sah
          </p>
          <div className="py-5">
            <p className="lg:text-3xl md:text-2xl text-xl py-3 text-center font-medium">
              Software Engineer😀
            </p>
            <p className="text-xl dark:text-gray-300 text-center">
              🚀A self-taught developer currently studying B.Tech AI
            </p>
          </div>
          <div className="py-3 text-lg md:text-xl ">
            <p className="dark:text-gray-300  text-center">
              ⚡Intrested In Technologies like{" "}
              <span className="text-orange-400 font-bold">Blender</span>,{" "}
              <span className="text-stone-500 font-bold">Unity Games</span> and{" "}
              <span className="text-blue-400 font-bold">NextJS</span>
            </p>
            <p className="text-center   font-medium">
              {" "}
              A student at{" "}
              <span className="text-purple-500">
                Orchid International College
              </span>
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center py-4 gap-6">
            <div className="flex flex-col items-center gap-2">
              <i className="devicon-react-original colored lg:text-[32px] md:text-[28px] text-[25px]"></i>
              <span className="text-sm text-gray-400">React</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <i className="devicon-nextjs-plain lg:text-[32px] md:text-[28px] text-[25px]"></i>
              <span className="text-sm text-gray-400">Next.js</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <i className="devicon-nodejs-plain colored lg:text-[32px] md:text-[28px] text-[25px]"></i>
              <span className="text-sm text-gray-400">Node.js</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <i className="devicon-mongodb-plain colored lg:text-[32px] md:text-[28px] text-[25px]"></i>
              <span className="text-sm text-gray-400">MongoDB</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <i className="devicon-python-plain colored lg:text-[32px] md:text-[28px] text-[25px]"></i>
              <span className="text-sm text-gray-400">Python</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <i className="devicon-unity-plain lg:text-[32px] md:text-[28px] text-[25px]"></i>
              <span className="text-sm text-gray-400">Unity</span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <i className="devicon-blender-original colored lg:text-[32px] md:text-[28px] text-[25px]"></i>
              <span className="text-sm text-gray-400">Blender</span>
            </div>
          </div>
          <footer className="text-center pt-5 flex gap-4 justify-center w-full">
            <Link href="/github.com/themks666">
              <span className="flex border-4 border-emerald-700/60 rounded-lg gap-3 py-2 px-4 justify-between items-center">
                <BsGithub className="lg:text-[25px] md:text-[20px] text-[15px]"></BsGithub>
                <span className="md:text-[14px] text-[12px]">
                  Github
                </span>
              </span>
            </Link>
            <Link href="/github.com/themks666">
              <span className="flex border-4 border-emerald-700/60 rounded-lg gap-3 py-2 px-4 justify-between items-center">
                <BsEnvelopeArrowUp className="lg:text-[25px] md:text-[20px] text-[15px]"></BsEnvelopeArrowUp>
                <span className="] md:text-[14px] text-[12px]">
                  Email
                </span>
              </span>
            </Link>
            <Link href="/github.com/themks666">
              <span className="flex border-4 border-emerald-700/60 rounded-lg gap-3 py-2 px-4 justify-between items-center">
                <BsLinkedin className="lg:text-[25px] md:text-[20px] text-[15px]"></BsLinkedin>
                <span className=" md:text-[14px] text-[12px]">
                  Linkedin
                </span>
              </span>
            </Link>
          </footer>
        </main>
      </section>
    </>
  );
}
