import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <div className="text-center">
        <h1 className="font-extrabold text-9xl">Oops!</h1>
        <p className="font-medium text-6xl my-8">404 - Page not found!</p>
        <Link
          to="/"
          class="inline-block bg-transparent hover:bg-black text-black-700 font-semibold hover:text-purple-500 py-2 px-4 border-2 border-black hover:border-transparent rounded transition linear duration-300 hover:-translate-y-1 hover:scale-110"
        >
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};

export default Page404;
