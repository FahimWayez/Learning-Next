import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-800 mb-8">
          Sorry! The page is unavailable
          <br />
          <br />
          Please check the URL and try again.
        </p>
        <Link href="/" className="text-blue-600 hover:text-blue-800 underline">
          Go back to the home page
        </Link>
      </div>
    </div>
  );
}
