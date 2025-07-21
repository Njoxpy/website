// pages/NotFound.jsx
const NotFound = () => (
  <div className="max-w-2xl mx-auto px-6 py-32 text-center">
    <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-4">
      404
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
      Page not found
    </p>
    <Link to="/" className="text-gray-900 dark:text-white hover:underline">
      ← Back to home
    </Link>
  </div>
);

export default NotFound;
