import {Skeleton} from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto my-10 max-w-6xl rounded-md bg-white px-5 py-10 shadow-md">
      <Skeleton className="mx-auto h-[400px] w-full" />
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        <Skeleton className="mx-auto h-65 w-1/2" />
        <Skeleton className="mx-auto h-65 w-1/2" />
      </div>
    </div>
  );
}
