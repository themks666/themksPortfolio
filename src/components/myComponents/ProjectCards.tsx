import { Project } from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

const ProjectCards = ({ project }: { project: Project }) => {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-5 py-4">
      <section className="shrink-0 h-64 relative md:w-64 w-full">
        <Image
          fill
          alt="Dino game image"
          src={project.metadata.image!}
          className="rounded-xl object-contain shrink-0"
        ></Image>
      </section>
      <section className="max-w-xl">
        <h2 className="text-xl md:text-2xl">{project.metadata.title}</h2>
        <p className="text-sm text-gray-400 text-justify">
          {project.metadata.description}
        </p>
        <ul className="md:flex pt2 hidden gap-3 text-sm items-center overflow-hidden">
          {project.metadata.tags?.map((tag, index) => {
            return (
              <li
                className="border-4 p-2 hover:bg-[#222] rounded-xl "
                key={index}
              >
                #{tag}
              </li>
            );
          })}
        </ul>
        <div className="flex text-sm flex-wrap gap-3 pt-2  justify-between">
          <div className="flex">Author :{" " + project.metadata.author}</div>
          <div className="flex">Published : {project.metadata.date}</div>
        </div>
        <Link href={`/projects/${project.metadata.slug}`} className="text-emerald-300 underline hover:text-emerald-500">Read More</Link>
      </section>
    </div>
  );
};

export default ProjectCards;
