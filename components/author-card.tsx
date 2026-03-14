"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import {usePrimaryColor} from "./primary-provider";
import {Badge} from "./ui/badge";

interface AuthorCardProps {
  name: string;
  slug: {current: string};
  username: string;
  email: string;
  address: string;
  website: string;
  tags: string[];
  image: any;
}

const AuthorCard = ({
  name,
  slug,
  username,
  email,
  address,
  website,
  tags,
  image,
}: AuthorCardProps) => {
  const {primaryColor} = usePrimaryColor();

  const TAG_MAX_COUNT = 2;

  const filteredTags =
    tags.length <= TAG_MAX_COUNT ? tags : tags.splice(0, TAG_MAX_COUNT);

  return (
    <Card>
      <Link href={`/author/${slug.current}`}>
        <CardHeader className="p-3">
          <div className="mb-4 overflow-hidden">
            <Image
              src={image.asset.url}
              className="h-[200px] w-full rounded transition-all duration-300 ease-linear hover:scale-125"
              width={384}
              height={440}
              alt={name}
            />
          </div>
          <CardTitle className="capitalize">{name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 p-3">
          <CardDescription>
            <span className="font-bold">Username: </span>
            {username}
          </CardDescription>
          <CardDescription>
            <span className="font-bold">Email: </span>
            {email}
          </CardDescription>
          <CardDescription>
            <span className="font-bold">Address: </span>
            {address}
          </CardDescription>
          <CardDescription>
            <span className="font-bold">Website: </span>
            {website}
          </CardDescription>
          <CardDescription>
            <span className="font-bold">Tags: </span>
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
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
};

export default AuthorCard;
