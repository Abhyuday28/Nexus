import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-64px)]">
      <Skeleton className={"w-full max-w-md h-96 rounded-lg"} />
    </div>
  );
};

export default loading;
