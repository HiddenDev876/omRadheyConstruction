
import { Skeleton } from "@/components/ui/skeleton";

export function PageSkeleton() {
  return (
    <div className="container mx-auto px-4 py-8 animate-pulse">
      <div className="flex items-center space-x-2 mb-6 md:mb-8">
        <Skeleton className="h-9 w-20 rounded-md" />
        <Skeleton className="h-4 w-4 rounded-full bg-muted" />
        <Skeleton className="h-6 w-24 rounded-md" />
        <Skeleton className="h-4 w-4 rounded-full bg-muted" />
        <Skeleton className="h-6 w-32 rounded-md" />
      </div>

      <Skeleton className="h-10 w-3/4 md:w-1/2 mx-auto mb-3 rounded-md" />
      <Skeleton className="h-6 w-full max-w-lg mx-auto mb-10 rounded-md" />

      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        <div>
          <Skeleton className="aspect-video w-full rounded-lg mb-6" />
          <Skeleton className="h-5 w-full mb-2.5 rounded-md" />
          <Skeleton className="h-5 w-5/6 mb-2.5 rounded-md" />
          <Skeleton className="h-5 w-4/6 mb-2.5 rounded-md" />
        </div>
        <div className="space-y-4">
          <Skeleton className="h-7 w-1/2 rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-full rounded-md" />
          <Skeleton className="h-4 w-5/6 rounded-md" />
          <Skeleton className="h-32 w-full rounded-lg" />
        </div>
      </div>

      <div>
        <Skeleton className="h-8 w-1/3 mb-6 rounded-md" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg border bg-card p-4 shadow-sm">
              <Skeleton className="h-32 w-full rounded-md mb-4" />
              <Skeleton className="h-5 w-3/4 mb-2 rounded-md" />
              <Skeleton className="h-4 w-1/2 mb-4 rounded-md" />
              <Skeleton className="h-9 w-28 rounded-md" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
