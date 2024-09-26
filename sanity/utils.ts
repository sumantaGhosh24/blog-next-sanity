import qs from "query-string";

interface BuildQueryParams {
  type: string;
  query: string;
  category: string;
  author: string;
}

interface UrlQueryParams {
  params: string;
  key?: string;
  value?: string | null;
  keysToRemove?: string[];
}

export function buildQuery({type, query, category, author}: BuildQueryParams) {
  const conditions = [`*[_type=="${type}"`];
  if (query) conditions.push(`title match "*${query}*"`);
  if (category && category !== "all") {
    conditions.push(`category->slug.current == "${category}"`);
  }
  if (author && author !== "all") {
    conditions.push(`author->slug.current == "${author}"`);
  }
  return conditions.length > 1
    ? `${conditions[0]} && (${conditions.slice(1).join(" && ")})]`
    : `${conditions[0]}]`;
}

export function formUrlQuery({
  params,
  key,
  value,
  keysToRemove,
}: UrlQueryParams) {
  const currentUrl = qs.parse(params);
  if (keysToRemove) {
    keysToRemove.forEach((keyToRemove) => {
      delete currentUrl[keyToRemove];
    });
  } else if (key && value) {
    currentUrl[key] = value;
  }
  return qs.stringifyUrl(
    {url: window.location.pathname, query: currentUrl},
    {skipNull: true}
  );
}
