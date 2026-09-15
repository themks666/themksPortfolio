import SearchBar from "@/components/myComponents/SearchBar";
import { getAllBlogPosts, Post } from "@/lib/posts";
import Link from "next/link";
interface PageProps {
  searchParams?: Promise<{ blogName?: string }>;
}
const page = async ({ searchParams }: PageProps ) => {
  let posts = getAllBlogPosts();
  const resolvedParams = await searchParams;
  const blogName = resolvedParams?.blogName || "";
  const postSlug = posts.filter((post) =>
    post.metadata.title
      ?.toLocaleLowerCase()
      .includes(blogName.toLocaleLowerCase()),
  );
  posts = postSlug;
  return (
    <div className="pb-20 lg:w-3/4 mx-auto">
      <div>
        <SearchBar searchParamsName={"blogName"}></SearchBar>
      </div>
      {posts.map((post, index) => {
        return (
          <div key={index} className="border-b-4 pb-10">
            <div className="pt-5 text-2xl">{post.metadata.title}</div>
            <div className="text-emerald-300 flex justify-between pr-10 py-1">
              <span>Author : {post.metadata.author}</span>
              <span className="text-orange-300">{post.metadata.date}</span>
            </div>
            <div className="text-emerald-600 my-2 flex  flex-wrap gap-3">
              {post.metadata.tags?.map((tag, index) => {
                return (
                  <div
                    key={index}
                    className="border-2 rounded-sm p-1 hover:bg-emerald-800 text-white border-emerald-400"
                  >
                    #{tag}
                  </div>
                );
              })}
            </div>
            <div className="">{post.metadata.description}</div>
            <Link
              href={`blogs/${post.metadata.slug}`}
              className="border-2 px-4 py-2 hover:bg-white hover:text-black mt-2 rounded-xl border-white inline-block"
            >
              Read more
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default page;
