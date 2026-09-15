import MdxContent from "@/components/myComponents/MdxContent";
import { getProject } from "@/lib/projects";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { slug: string } }) => {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) {
    notFound();
  }
  const { metadata, content } = project;
  const { title, author, date, description, tags } = metadata;
  return (
    <div className="grow lg:w-3/4 mx-auto md:w-9/12 w-full pt-10">
      <h2 className="text-3xl font-bold">{title}</h2>
      <p className="flex justify-between pt-2">
        <span className="text-emerald-400">Author : {author}</span>
        <span>{date}</span>
      </p>
      <hr className="pt-1 my-2 bg-blue-400" />
      <p className="text-lg py-4">{description}</p>
      <div className="mb-2 flex flex-wrap gap-2">
        {tags?.map((tag, index) => {
          return (
            <div
              key={index}
              className="border-2 hover:bg-green-900/40 border-emerald-400/40 py-2 px-2 rounded-sm"
            >
              #{tag}
            </div>
          );
        })}
      </div>
      <main className="w-full prose max-w-none dark:prose-invert pt-5 ">{<MdxContent source={content} />}</main>
    </div>
  );
};

export default page;
