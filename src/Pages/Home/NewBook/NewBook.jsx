import { Link } from "react-router";
import { motion } from "framer-motion";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import Loading from "../../../components/Loading";
import { useQuery } from "@tanstack/react-query";
import BookCart from "../../Shared/BookCart/BookCart";

const NewBook = () => {

  const axiosSecure = useAxiosSecure();

  const {
    data: latests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["latest"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/latest`);
      return res.data;
    },
  });
  if (isLoading) return <Loading />;



  // const [books, setBooks] = useState([]);
  // const axiosSecure = useAxiosSecure();

  // useEffect(() => {
  //   axiosSecure
  //     .get("/books")
  //     .then((res) => setBooks(res.data))
  //     .catch((err) => {
  //       toast.error(err.message);
  //     });
  // }, [axiosSecure]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 py-8"
    >
      <h2 className="text-2xl text-blue-500 font-semibold flex justify-center items-center mb-4">
        Latest And Popular Books 
      </h2>

      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-4">
        {books.length === 0 && (
          <div className="col-span-full text-center py-8">No books yet</div>
        )}
        {books.map((b) => (
          <div
            key={b._id}
            className="bg-white dark:bg-slate-800 border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition"
          >
            <img
              src={b.image}
              alt={b.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="font-medium text-sm">{b.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-300">
                {b.author}
              </p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-sm font-semibold"> Price : 
                  { b.price ? `$${ b.price}` : "Free"}
                </span>
                <Link
                  to={`/books/${b._id}`}
                  className="text-indigo-600 text-sm"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

       */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {latests?.map((latest, index) => (
            <BookCart key={index} latest={latest} />
          ))}
        </div>
    </motion.div>
  );
};

export default NewBook;
