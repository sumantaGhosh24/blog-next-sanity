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
        <CardContent>
          <CardDescription>Username: {username}</CardDescription>
          <CardDescription>Email: {email}</CardDescription>
          <CardDescription>Address: {address}</CardDescription>
          <CardDescription>Website: {website}</CardDescription>
          <CardDescription>
            Tags:{" "}
            {tags?.map((tag: string) => (
              <Badge
                key={tag}
                className={`mr-1.5 text-xs font-normal md:text-sm bg-${primaryColor}-700 hover:bg-${primaryColor}-800`}
              >
                {tag}
              </Badge>
            ))}
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
};

export default AuthorCard;
