import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";
import BookRating from "../../components/BookRating/BookRating";
import OrderModal from "../../components/AllModal/OrderModal";

const BookDetails = () => {

  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const { data: book = {}, isLoading } = useQuery({
    queryKey: ["book", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/books/${id}`);
      return res.data;
    },
  });

  // useEffect(() => {
  //   axiosSecure.get(`/books/${id}`).then(res => {
  //     setBook(res.data);
  //   });
  // }, [id]);

  const handleWish = async (books) => {
    const bookWishListData = {
      userEmail: user.email,
      userName: user.displayName,
      bookName: books.bookName,
      image: books.image,
      authorName: books.authorName,
      authorEmail: books.authorEmail,
    };

    try {
      const res = await axiosSecure.post(`/wish-list`, bookWishListData);

      if (res.data.insertedId) {
        Swal.fire({
          title: "Added Now!",
          text: "Book added to your wishlist add successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/dashboard/wish-list");
      } else {
        Swal.fire({
          title: "Already Added Book!",
          text: "This book is already in your wishlist.",
          icon: "warning",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const {
    bookName,
    authorName,
    authorEmail,
    isbn,
    publisher,
    pageNumber,
    language,
    price,
    stockQuantity,
    edition,
    format,
    category,
    status,
    description,
    image,
    create_date,
  } = book;

  if (isLoading) return <Loading></Loading>;

  return (
    <div className="p-4 pt-8">
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl border border-blue-200">
        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Left Side */}
          <div className="flex justify-center items-center p-6 bg-white rounded-r-xl border-l border-blue-100">
            <img
              src={image}
              alt={bookName}
              className="w-full max-h-[550px] object-contain rounded-lg"
            />
          </div>

          {/* Right Side */}

          <div className="p-8 space-y-4 bg-blue-50 rounded-l-xl">
            <h1 className="text-3xl font-bold text-blue-700">{bookName}</h1>
            <p className="text-lg text-blue-600 mb-2">
              <span className="font-semibold">By:</span> {authorName}
            </p>
            <p className=" text-blue-600 mb-2">
              <span className="font-semibold">Author Email:</span> {authorEmail}
            </p>

            <div className="grid grid-cols-2 gap-3 text-blue-800 text-sm">
              <p>
                <strong>Language:</strong> {language}
              </p>
              <p>
                <strong>Pages:</strong> {pageNumber}
              </p>
              <p>
                <strong>Edition:</strong> {edition}
              </p>
              <p>
                <strong>Format:</strong> {format}
              </p>
              <p>
                <strong>Category:</strong> {category}
              </p>
              <p>
                <strong>Publisher:</strong> {publisher}
              </p>
              <p>
                <strong>Year:</strong> {new Date(create_date).getFullYear()}
              </p>
              <p>
                <strong>ISBN:</strong> {isbn}
              </p>
              <p>
                <strong>Stock Quantity:</strong> {stockQuantity}
              </p>
            </div>

            <p className="text-blue-700 mt-3">
              <strong>Description:</strong> {description}
            </p>

            <div className="flex items-center justify-between mt-4">
              <span className="text-3xl font-bold text-blue-700">
                ${price}
              </span>

              <span
                className={`px-4 py-2 rounded-lg text-white text-sm font-semibold ${
                  status === "Available" ? "bg-blue-600" : "bg-pink-500"
                }`}
              >
                {status}
              </span>
            </div>

            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setIsOpen(true)}
                className="w-full mt-5 cursor-pointer bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                <span> Order Now</span>
                <OrderModal
                  isOpen={isOpen}
                  closeModal={() => setIsOpen(false)}
                  book={book}
                />
              </button>{" "}
              <button
                onClick={() => handleWish(book)}
                className="w-full mt-5 cursor-pointer bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
              >
                Wish List
              </button>
            </div>
          </div>
        </div>
      </div>
      <BookRating book={book} />
    </div>
  );
};

export default BookDetails;
