import Image from "next/image";
import Link from "next/link";

import {Card, CardHeader, CardTitle} from "./ui/card";

interface CategoryCardProps {
  name: string;
  slug: {current: string};
  image: any;
}

const CategoryCard = ({name, slug, image}: CategoryCardProps) => {
  return (
    <Card>
      <Link href={`/category/${slug.current}`}>
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
      </Link>
    </Card>
  );
};

export default CategoryCard;
