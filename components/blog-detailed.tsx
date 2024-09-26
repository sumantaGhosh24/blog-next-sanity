"use client";

import Image from "next/image";
import {PortableText} from "@portabletext/react";

import {Badge} from "@/components/ui/badge";

import BlogMedia from "./blog-media";
import {usePrimaryColor} from "./primary-provider";
import BlogCard from "./blog-card";

interface BlogProps {
  data: {
    blog: {
      description: string;
      content: any;
      tags: string[];
      category: {
        name: string;
        image: any;
      };
      author: {
        _id: string;
        image: any;
        website: string;
        tags: string[];
        name: string;
        address: string;
        email: string;
        username: string;
      };
      image: any[];
      _id: string;
      title: string;
    };
    relatableBlog: {
      image: any[];
      _id: string;
      title: string;
      description: string;
      tags: string[];
      author: any;
      category: any;
    }[];
  };
}

const customizeComponent = {
  block: {
    h1: ({children}: {children: any}) => (
      <h1 className="mb-4 text-3xl font-bold">{children}</h1>
    ),
    h2: ({children}: {children: any}) => (
      <h2 className="mb-4 text-2xl font-bold">{children}</h2>
    ),
    h3: ({children}: {children: any}) => (
      <h3 className="mb-4 text-xl font-bold">{children}</h3>
    ),
    h4: ({children}: {children: any}) => (
      <h4 className="mb-4 text-lg font-bold">{children}</h4>
    ),
    h5: ({children}: {children: any}) => (
      <h5 className="mb-4 text-base font-bold">{children}</h5>
    ),
    h6: ({children}: {children: any}) => (
      <h6 className="mb-4 text-sm font-bold">{children}</h6>
    ),
    blockquote: ({children}: {children: any}) => (
      <blockquote className="mb-4 border-l-4 border-gray-500 pl-4 italic">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({children, value}: {children: any; value: any}) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a
          href={value.href}
          target={"_blank"}
          rel={rel}
          className="text-blue-500 underline"
        >
          {children}
        </a>
      );
    },
    strong: ({children}: {children: any}) => (
      <strong className="font-bold">{children}</strong>
    ),
    em: ({children}: {children: any}) => <em className="italic">{children}</em>,
    underline: ({children}: {children: any}) => <u>{children}</u>,
    strikeThrough: ({children}: {children: any}) => <s>{children}</s>,
    code: ({text}: {text: any}) => {
      return <code className="bg-gray-200 px-1 text-black">{text}</code>;
    },
  },
  list: {
    bullet: ({children}: {children: any}) => (
      <ul className="ml-6 list-disc">{children}</ul>
    ),
    number: ({children}: {children: any}) => (
      <ol className="ml-6 list-decimal">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({children}: {children: any}) => (
      <li style={{listStyleType: "disclosure-closed"}} className="ml-[20px]">
        {children}
      </li>
    ),
  },
};

const BlogDetailed = ({data}: BlogProps) => {
  const {primaryColor} = usePrimaryColor();

  return (
    <div className="mx-auto max-w-6xl">
      <Image
        src={data.blog.image[0].asset.url}
        alt="primary image"
        height={400}
        width={1200}
        className="h-[350px] w-full rounded object-cover"
      />
      <div>
        <h2 className="my-5 text-2xl font-semibold capitalize leading-none tracking-tight">
          {data.blog.title}
        </h2>
        <h3 className="mb-5 text-base">{data.blog.description}</h3>
        <PortableText
          value={data.blog.content}
          components={customizeComponent as any}
        />
        <span className="my-5 flex items-center font-bold">
          Category:{" "}
          <Badge
            className={`ml-2 text-xs font-normal md:text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
          >
            <Image
              src={data.blog.category.image.asset.url}
              alt="Category"
              height={50}
              width={50}
              className="mr-2 h-8 w-8 rounded-full object-cover"
            />
            {data.blog.category.name}
          </Badge>
        </span>
        <span className="mb-5 flex items-center font-bold">
          Author:{" "}
          <Badge
            className={`ml-2 text-xs font-normal md:text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
          >
            <Image
              src={data.blog.author.image.asset.url}
              alt="Author"
              height={50}
              width={50}
              className="mr-2 h-8 w-8 rounded-full object-cover"
            />
            {data.blog.author.name}
          </Badge>
        </span>
        <span className="font-bold">
          Tags/Technologies:{" "}
          {data.blog.tags?.map((tag: string) => (
            <Badge
              key={tag}
              className={`mr-1.5 text-xs font-normal md:text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
            >
              {tag}
            </Badge>
          ))}
        </span>
      </div>
      <BlogMedia image={data.blog.image} />
      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-4">Relatable Blog</h2>
        <div className="flex items-center justify-between flex-wrap gap-3">
          {data.relatableBlog.filter((blog) => blog._id !== data.blog._id)
            .length > 0 ? (
            data.relatableBlog
              .filter((blog) => blog._id !== data.blog._id)
              .slice(0, 3)
              .map((blog) => (
                <BlogCard
                  author={blog.author}
                  category={blog.category}
                  description={blog.description}
                  id={blog._id}
                  image={blog.image}
                  tags={blog.tags}
                  title={blog.title}
                />
              ))
          ) : (
            <h3 className="text-center font-bold my-3">
              No Relatable Blog Found!
            </h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailed;
