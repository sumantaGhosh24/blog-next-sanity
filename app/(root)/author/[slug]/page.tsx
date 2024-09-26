import BlogCard from "@/components/blog-card";
import SearchHeader from "@/components/search-header";
import {getBlogs} from "@/sanity/actions";

export const metadata = {
  title: "Author",
};

const AuthorPage = async ({params}: {params: {slug: string}}) => {
  const blogs = await getBlogs({
    query: "",
    category: "",
    author: params.slug || "",
  });

  return (
    <section className="mb-5 mt-10">
      <SearchHeader query={""} category={""} author={params.slug || ""} />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {blogs?.length > 0 ? (
          blogs.map((blog: any) => (
            <BlogCard
              key={blog._id}
              id={blog._id}
              title={blog.title}
              description={blog.description}
              tags={blog.tags}
              category={blog.category}
              author={blog.author}
              image={blog.image}
            />
          ))
        ) : (
          <p>No blog found</p>
        )}
      </div>
    </section>
  );
};

export default AuthorPage;
