import path from "path";
import fs from "fs";
import matter from "gray-matter";

export type Metadata = {
  title?: string;
  date?: string;
  author?: string;
  description?: string;
  image?: string;
  tags?: string[];
  slug: string;
};

export type Project = {
  metadata: Metadata;
  content: string;
};

const rootFile = path.join(process.cwd(), "src/content", "projects");

export function getProject(slug: string): Project | null {
  try {
    const sanitizedSlug = slug.replace(/\.mdx$/, "");
    const filePath = path.join(rootFile, `${sanitizedSlug}.mdx`);
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });
    const { data, content } = matter(fileContent);
    
    return {
      metadata: {
        ...data,
        slug: sanitizedSlug,
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading project  "${slug}":`, error);
    return null;
  }
}

export function getAllProject(limit?: number): Project[] {
  if (!fs.existsSync(rootFile)) return [];

  const allFiles = fs.readdirSync(rootFile);

  const posts = allFiles
    .map((file) => getProject(file))
    .filter((post): post is Project => post !== null);

  if (limit) {
    return posts.slice(0, limit);
  }

  return posts;
}