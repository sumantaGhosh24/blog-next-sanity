import AuthorCard from "@/components/author-card";
import {getAuthor} from "@/sanity/actions";

export const metadata = {
  title: "Authors",
};

const AuthorsPage = async () => {
  const author = await getAuthor();

  return (
    <section className="mb-5 mt-10">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {author?.length > 0 ? (
          author.map((auth: any) => (
            <AuthorCard
              key={auth._id}
              name={auth.name}
              username={auth.username}
              email={auth.email}
              image={auth.image}
              address={auth.address}
              slug={auth.slug}
              tags={auth.tags}
              website={auth.website}
            />
          ))
        ) : (
          <p>No author found</p>
        )}
      </div>
    </section>
  );
};

export default AuthorsPage;
