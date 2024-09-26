"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

import {usePrimaryColor} from "./primary-provider";

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  category: any;
  author: any;
  image: any[];
}

const BlogCard = ({
  id,
  title,
  description,
  tags,
  category,
  author,
  image,
}: BlogCardProps) => {
  const {primaryColor} = usePrimaryColor();

  const TAG_MAX_COUNT = 2;

  const filteredTags =
    tags.length <= TAG_MAX_COUNT ? tags : tags.splice(0, TAG_MAX_COUNT);

  return (
    <Card>
      <Link href={`/blog/${id}`}>
        <CardHeader className="p-3">
          <div className="mb-4 overflow-hidden">
            <Image
              src={image[0].asset.url}
              className="h-[200px] w-full rounded transition-all duration-300 ease-linear hover:scale-125"
              width={384}
              height={440}
              alt={title}
            />
          </div>
          <CardTitle className="capitalize">{title}</CardTitle>
        </CardHeader>
        <CardContent className="p-3">
          <CardDescription className="mb-4 first-letter:uppercase">
            {description}
          </CardDescription>
          <p>
            Category:{" "}
            <Badge
              className={`text-xs md:text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
            >
              {category?.name}
            </Badge>
          </p>
          <p>
            Author:{" "}
            <Badge
              className={`text-xs md:text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800 mt-4`}
            >
              {author?.name}
            </Badge>
          </p>
          <br />
          <span>
            Tags:{" "}
            {filteredTags.map((tag: string) => (
              <Badge
                key={tag}
                className={`my-1 mr-1.5 text-xs md:text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
              >
                {tag}
              </Badge>
            ))}
            {tags.length > 0 && (
              <Badge
                className={`my-1 mr-1.5 text-xs md:text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
              >
                {tags.length} +
              </Badge>
            )}
          </span>
        </CardContent>
      </Link>
    </Card>
  );
};

export default BlogCard;
