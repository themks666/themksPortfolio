import { Book, Briefcase, House } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/toggle-theme";

const Navbar = () => {
  return (
    <header className="flex pt-6 items-center">
      <nav className="w-full">
        <ul className="flex justify-between w-full items-center ">
          <li className="flex">
            <Link href="/">
              <span className="text-xl font-black mx-1 font-serif">{"{"}</span>
              <span className="text-xl font-black mx-1 font-serif text-emerald-500">
                MKS
              </span>
              <span className="text-xl font-black mx-1 font-serif">{"}"}</span>
            </Link>
          </li>
          <li className=" md:flex hidden gap-10">
            <Link
              href="/"
              className="flex hover:text-gray-400 text-sm items-center flex-col"
            >
              <House></House>
              <span className="text-gray-300">Home</span>
            </Link>
            <Link
              href="/projects"
              className="flex hover:text-gray-400 text-sm items-center flex-col"
            >
              <Briefcase></Briefcase>
              <span className="text-gray-300">Project</span>
            </Link>
            <Link
              href="/blogs"
              className="flex hover:text-gray-400 text-sm items-center flex-col"
            >
              <Book></Book>
              <span className="text-gray-300">Blogs</span>
            </Link>
          </li>
          <li className="flex items-center">
            <ThemeToggle></ThemeToggle>
            <Button>Download CV</Button>
          </li>
        </ul>
        <div className="flex md:hidden justify-center pt-3 gap-10">
            <Link
              href="/"
              className="flex hover:text-gray-400 text-sm items-center flex-col"
            >
              <House></House>
              <span className="text-gray-300">Home</span>
            </Link>
            <Link
              href="/projects"
              className="flex hover:text-gray-400 text-sm items-center flex-col"
            >
              <Briefcase></Briefcase>
              <span className="text-gray-300">Project</span>
            </Link>
            <Link
              href="/blogs"
              className="flex hover:text-gray-400 text-sm items-center flex-col"
            >
              <Book></Book>
              <span className="text-gray-300">Blogs</span>
            </Link>
          </div>
      </nav>
    </header>
  );
};

export default Navbar;
