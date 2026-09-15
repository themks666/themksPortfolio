import Link from "next/link";
import { Home, FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen  text-white flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="relative inline-flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
            <FileQuestion className="w-12 h-12 text-emerald-400 animate-pulse" />
          </div>
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-7xl font-extrabold tracking-tight">
            404
          </h1>
          <h2 className="text-2xl font-bold text-gray-100">Page Not Found</h2>
          <p className="text-gray-400 text-sm max-w-sm mx-auto">
            Sorry, we couldn’t find the page or blog post you’re looking for. It
            might have been moved or removed.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm rounded-xl transition-all shadow-lg shadow-emerald-950 hover:shadow-emerald-900/40"
          >
            <Home className="w-4 h-4" />
            Back to Homepage
          </Link>

          
        </div>
      </div>
    </div>
  );
}