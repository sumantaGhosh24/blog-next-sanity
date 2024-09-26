interface SearchHeaderProps {
  query: string;
  category: string;
  author: string;
}

const SearchHeader = ({query, category, author}: SearchHeaderProps) => {
  if (query && category && author) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search results for &quot;{query}&quot; in category{" "}
        <span className="font-bold">{category}</span> in author{" "}
        <span className="font-bold">{author}</span>
      </h1>
    );
  }
  if (query && category) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search results for &quot;{query}&quot; in category{" "}
        <span className="font-bold">{category}</span>
      </h1>
    );
  }
  if (query && author) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search results for &quot;{query}&quot; in author{" "}
        <span className="font-bold">{author}</span>
      </h1>
    );
  }
  if (query) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search results for &quot;{query}&quot;
      </h1>
    );
  }
  if (category) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search result for category <span className="font-bold">{category}</span>
      </h1>
    );
  }
  if (author) {
    return (
      <h1 className="mb-5 font-sans text-base font-medium">
        Search result for author <span className="font-bold">{author}</span>
      </h1>
    );
  }
  return (
    <h1 className="mb-5 font-sans text-base font-medium">No Filter Added</h1>
  );
};

export default SearchHeader;
