const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="text-4xl font-semibold mt-4">Page Not Found</h2>
      <p className="text-lg text-gray-400 mt-2">
        Oops! The page you are looking for doesn't exist.
      </p>
    </div>
  );
};

export default ErrorPage;
