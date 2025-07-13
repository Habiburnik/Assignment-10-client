import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-100 px-6">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-extrabold text-gray-800">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
          Page Not Found
        </h2>
        <p className="text-gray-600 text-lg max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow transition"
        >
          <FaArrowLeft /> Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
