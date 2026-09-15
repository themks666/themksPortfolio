import ProjectCards from "@/components/myComponents/ProjectCards";
import SearchBar from "@/components/myComponents/SearchBar";
import { getAllProject } from "@/lib/projects";

const tags: string[] = ["games", "Web development", "App "];
interface PageProps {
  searchParams?: Promise<{ projectName?: string }>;
}
const page = async ({ searchParams }: PageProps) => {
  let projects = getAllProject();
  const resolvedParams = await searchParams;
  const projectName = resolvedParams?.projectName || "";

  const projectSlug = projects.filter((project) =>
    project.metadata.title
      ?.toLocaleLowerCase()
      .includes(projectName.toLocaleLowerCase()),
  );
  projects = projectSlug
  return (<div>
      <div className="flex flex-col-reverse md:flex-row items-center pt-5 justify-between">
        <ul className="flex text-sm gap-2 items-center  justify-between overflow-hidden">
          {tags.map((tag, index) => {
            return (
              <li
                className="border-4 p-2 hover:bg-[#222] rounded-xl border- "
                key={index}
              >
                #{tag}
              </li>
            );
          })}
        </ul>
        <SearchBar searchParamsName={"projectName"}></SearchBar>
      </div>
      <main>
        {projects.map((project, index) => {
          return <ProjectCards key={index} project={project}></ProjectCards>;
        })}
      </main>
    </div>
  );
};

export default page;
