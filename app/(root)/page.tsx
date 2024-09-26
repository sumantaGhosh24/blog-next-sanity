import Filters from "@/components/filter";
import BlogCard from "@/components/blog-card";
import SearchForm from "@/components/search-form";
import SearchHeader from "@/components/search-header";
import {getAuthor, getCategory, getBlogs} from "@/sanity/actions";

export const revalidate = 900;

export const metadata = {
  title: "Home",
};

interface Props {
  searchParams: {[key: string]: string | undefined};
}

const HomePage = async ({searchParams}: Props) => {
  const blogs = await getBlogs({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    author: searchParams?.author || "",
  });

  const category = await getCategory();

  const author = await getAuthor();

  return (
    <>
      <section className="bg-image relative h-[500px]">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto flex h-full items-center justify-center">
          <div className="z-10 w-full text-white">
            <h1 className="mb-24 text-center text-5xl font-bold leading-10 text-white sm:text-6xl sm:leading-10">
              All Blogs
            </h1>
            <div className="flex flex-col items-center justify-between gap-3">
              <SearchForm />
              <Filters category={category} author={author} />
            </div>
          </div>
        </div>
      </section>
      <section className="mb-5 mt-10">
        <SearchHeader
          query={searchParams?.query || ""}
          category={searchParams?.category || ""}
          author={searchParams?.author || ""}
        />
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
    </>
  );
};

export default HomePage;
