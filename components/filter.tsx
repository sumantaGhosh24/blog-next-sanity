"use client";

import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";

import {formUrlQuery} from "@/sanity/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface FiltersProp {
  category: {
    image: any;
    name: string;
    slug: any;
    _id: string;
  }[];
  author: {
    image: any;
    username: string;
    slug: any;
    _id: string;
  }[];
}

const Filters = ({category, author}: FiltersProp) => {
  const [aCategory, setACategory] = useState("");
  const [aAuthor, setAAuthor] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleCategory = (link: string) => {
    let newUrl = "";
    if (aCategory === link) {
      setAAuthor("");
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["category"],
      });
    } else {
      setACategory(link);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "category",
        value: link.toLowerCase(),
      });
    }
    router.push(newUrl, {scroll: false});
  };

  const handleAuthor = (link: string) => {
    let newUrl = "";
    if (aAuthor === link) {
      setAAuthor("");
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["author"],
      });
    } else {
      setAAuthor(link);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "author",
        value: link.toLowerCase(),
      });
    }
    router.push(newUrl, {scroll: false});
  };

  return (
    <>
      <Select onValueChange={(e: any) => handleCategory(e)} value={aCategory}>
        <SelectTrigger className="text-black dark:text-white py-3">
          <SelectValue placeholder="Enter blog category" />
        </SelectTrigger>
        <SelectContent className="text-black dark:text-white py-3">
          <SelectItem value="all">All Category</SelectItem>
          {category.map(({_id, name, slug}) => (
            <SelectItem key={_id} value={slug.current}>
              {name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={(e: any) => handleAuthor(e)} value={aAuthor}>
        <SelectTrigger className="text-black dark:text-white py-3">
          <SelectValue placeholder="Enter blog author" />
        </SelectTrigger>
        <SelectContent className="text-black dark:text-white py-3">
          <SelectItem value="all">All Author</SelectItem>
          {author.map(({_id, username, slug}) => (
            <SelectItem key={_id} value={slug.current}>
              {username}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default Filters;
