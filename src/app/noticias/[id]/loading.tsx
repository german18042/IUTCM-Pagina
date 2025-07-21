export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb skeleton */}
          <div className="mb-8 h-6 w-64 bg-gray-200 rounded animate-pulse" />

          {/* Contenido principal skeleton */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Imagen skeleton */}
            <div className="h-[400px] w-full bg-gray-200 animate-pulse" />

            {/* Contenido skeleton */}
            <div className="p-8">
              {/* Metadata skeleton */}
              <div className="flex gap-4 mb-6">
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
                <div className="h-6 w-32 bg-gray-200 rounded animate-pulse" />
              </div>

              {/* Título skeleton */}
              <div className="h-12 w-3/4 bg-gray-200 rounded mb-6 animate-pulse" />

              {/* Resumen skeleton */}
              <div className="h-24 w-full bg-gray-200 rounded mb-8 animate-pulse" />

              {/* Contenido principal skeleton */}
              <div className="space-y-4">
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-4/6 bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 