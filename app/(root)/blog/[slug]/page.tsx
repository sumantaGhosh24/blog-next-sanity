import BlogDetailed from "@/components/blog-detailed";
import {getBlog} from "@/sanity/actions";

export const revalidate = 900;

export const metadata = {
  title: "Blog",
};

const BlogPage = async ({params}: {params: {slug: string}}) => {
  const data = await getBlog(params.slug);

  return (
    <>
      <BlogDetailed data={data} />
    </>
  );
};

export default BlogPage;
