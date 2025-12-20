import React, { useState } from "react";
import { Link } from "react-router";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import BookCart from "../Shared/BookCart/BookCart";
import Loading from "../../components/Loading";

const AllBooks = () => {

  const axiosSecure = useAxiosSecure();

  const [searBook, setSearchBook] = useState("");
  const [sortBook, setSortBook] = useState("");

  const { data: books = [], isLoading } = useQuery({
    queryKey: ["books", searBook, sortBook],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/books?sort=${sortBook}&&search=${searBook}`
      );
      return res.data;
    },
  });

  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 6;

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const totalPages = Math.ceil(books.length / booksPerPage);


  // useEffect(() => {
  //   axiosSecure.get("/books").then((res) => {
  //     setBooks(res.data);
  //   });
  // }, [axiosSecure]);

  if(isLoading) return <Loading></Loading>

  return (

    <div className="max-w-6xl mx-auto py-8 gap-6">
      
        <h2 className="text-4xl font-bold text-pink-500 text-center mb-4">
          All Books
        </h2>
        <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4 ">
          {/* Search filed */}
          <div className="w-full md:w-1/2">
            <input
              type="text"
              value={searBook}
              onChange={(e) => setSearchBook(e.target.value)}
              placeholder="Search Book..."
              className="w-full py-3 pl-4 pr-4 border rounded-sm shadow-sm outline-none border-purple-400"
            />
          </div>

          {/* Sort Drop */}
          <div className="relative w-full md:w-1/10">
            <select
              onChange={(e) => setSortBook(e.target.value)}
              value={sortBook}
              className="w-full appearance-none py-3 pl-4 pr-10 border rounded-sm  outline-none border-purple-400 "
            >
              <option disabled selected>
                Sort By Price
              </option>
              <option value="normal">Normal</option>
              <option value="low-high">Low → High</option>
              <option value="high-low">High → Low</option>
            </select>
          </div>
        </div>
        {/* Books grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          {currentBooks.map((latest) => (
            <BookCart key={latest?._id} latest={latest} />
          ))}
        </div>

      
        <div className="flex justify-center items-center gap-3 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-600"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 bg-blue-600 text-white rounded disabled:bg-gray-600"
          >
            Next
          </button>
        </div>
      </div>
  );
};

export default AllBooks;
