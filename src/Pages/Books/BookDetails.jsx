// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router";
// import useAuth from "../../Hooks/useAuth";
// import useAxiosSecure from "../../Hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import Swal from "sweetalert2";
// import Loading from "../../components/Loading";
// import BookRating from "../../components/BookRating/BookRating";
// import OrderModal from "../../components/AllModal/OrderModal";

// const BookDetails = () => {

//   const { id } = useParams();
//   const axiosSecure = useAxiosSecure();
//   const { user } = useAuth();
//   const [isOpen, setIsOpen] = useState(false);

//   const navigate = useNavigate();
//   const { data: book = {}, isLoading } = useQuery({
//     queryKey: ["book", id],
//     queryFn: async () => {
//       const res = await axiosSecure.get(`/books/${id}`);
//       return res.data;
//     },
//   });


//   const handleWish = async (books) => {

//     const bookWishListData = {
//       userEmail: user.email,
//       userName: user.displayName,
//       bookName: books.bookName,
//       image: books.image,
//       authorName: books.authorName,
//       authorEmail: books.authorEmail,
//     };

//     try {
//       const res = await axiosSecure.post(`/wish-list`, bookWishListData);

//       if (res.data.insertedId) {
//         Swal.fire({
//           title: "Added Now!",
//           text: "Book added to your wishlist add successfully.",
//           icon: "success",
//           confirmButtonText: "OK",
//         });
//         navigate("/dashboard/wish-list");
//       } else {
//         Swal.fire({
//           title: "Already Added Book!",
//           text: "This book is already in your wishlist.",
//           icon: "warning",
//           confirmButtonText: "OK",
//         });
//       }
//     } catch (error) {
//       Swal.fire({
//         title: "Error!",
//         text: "Something went wrong. Please try again.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     }
//   };

//   const {
//     bookName,
//     authorName,
//     authorEmail,
//     isbn,
//     publisher,
//     pageNumber,
//     language,
//     price,
//     stockQuantity,
//     edition,
//     format,
//     category,
//     status,
//     description,
//     image,
//     create_date,
//   } = book;

//   if (isLoading) return <Loading></Loading>;

//   return (
//     <div className="p-4 pt-8">
//       <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-xl border border-blue-200">
//         <div className="grid grid-cols-1 md:grid-cols-2">

//           {/* Left Side */}
//           <div className="flex justify-center items-center p-6 bg-white rounded-r-xl border-l border-blue-100">
//             <img
//               src={image}
//               alt={bookName}
//               className="w-full max-h-[550px] object-contain rounded-lg"
//             />
//           </div>

//           {/* Right Side */}

//           <div className="p-8 space-y-4 bg-blue-50 rounded-l-xl">
//             <h1 className="text-3xl font-bold text-blue-700">{bookName}</h1>
//             <p className="text-lg text-blue-600 mb-2">
//               <span className="font-semibold">By:</span> {authorName}
//             </p>
//             <p className=" text-blue-600 mb-2">
//               <span className="font-semibold">Author Email:</span> {authorEmail}
//             </p>

//             <div className="grid grid-cols-2 gap-3 text-blue-800 text-sm">
//               <p>
//                 <strong>Language:</strong> {language}
//               </p>
//               <p>
//                 <strong>Pages:</strong> {pageNumber}
//               </p>
//               <p>
//                 <strong>Edition:</strong> {edition}
//               </p>
//               <p>
//                 <strong>Format:</strong> {format}
//               </p>
//               <p>
//                 <strong>Category:</strong> {category}
//               </p>
//               <p>
//                 <strong>Publisher:</strong> {publisher}
//               </p>
//               <p>
//                 <strong>Year:</strong> {new Date(create_date).getFullYear()}
//               </p>
//               <p>
//                 <strong>ISBN:</strong> {isbn}
//               </p>
//               <p>
//                 <strong>Stock Quantity:</strong> {stockQuantity}
//               </p>
//             </div>

//             <p className="text-blue-700 mt-3">
//               <strong>Description:</strong> {description}
//             </p>

//             <div className="flex items-center justify-between mt-4">
//               <span className="text-3xl font-bold text-blue-700">
//                 ${price}
//               </span>

//               <span
//                 className={`px-4 py-2 rounded-lg text-white text-sm font-semibold ${
//                   status === "Available" ? "bg-blue-600" : "bg-pink-500"
//                 }`}
//               >
//                 {status}
//               </span>
//             </div>

//             <div className="flex items-center justify-center gap-4">
//               <button
//                 onClick={() => setIsOpen(true)}
//                 className="w-full mt-5 cursor-pointer bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
//               >
//                 <span> Order Now</span>
//                 <OrderModal
//                   isOpen={isOpen}
//                   closeModal={() => setIsOpen(false)}
//                   book={book}
//                 />
//               </button>{" "}
//               <button
//                 onClick={() => handleWish(book)}
//                 className="w-full mt-5 cursor-pointer bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
//               >
//                 Wish List
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <BookRating book={book} />
//     </div>
//   );
// };

// export default BookDetails;



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
          text: "Book added to your wishlist successfully.",
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

  if (isLoading) return <Loading />;

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

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto">
      {/* Top Section: Book Title & Author */}
      <div className="mb-6 text-center md:text-left">
        <h1 className="text-4xl font-bold text-blue-700 mb-2">{bookName}</h1>
        <p className="text-lg text-blue-600">
          <span className="font-semibold">By:</span> {authorName}
        </p>
        <p className="text-blue-500">
          <span className="font-semibold">Author Email:</span> {authorEmail}
        </p>
      </div>

      {/* Media / Image Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col gap-4">
          <img
            src={image}
            alt={bookName}
            className="w-full max-h-[500px] object-contain rounded-lg shadow-md"
          />
          {/* Placeholder for multiple images if available */}
          <div className="flex gap-2 overflow-x-auto">
            {/* Example small thumbnails */}
            {[image, image, image].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`${bookName}-${i}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        </div>

        {/* Action & Key Info */}
        <div className="bg-blue-50 p-6 rounded-lg flex flex-col justify-between shadow-sm">
          {/* Price & Status */}
          <div className="flex items-center justify-between mb-4">
            <span className="text-3xl font-bold text-blue-700">${price}</span>
            <span
              className={`px-4 py-2 rounded-lg text-white font-semibold ${
                status === "Available" ? "bg-blue-600" : "bg-pink-500"
              }`}
            >
              {status}
            </span>
          </div>

          {/* Key Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-blue-800 text-sm mb-4">
            <p><strong>Language:</strong> {language}</p>
            <p><strong>Pages:</strong> {pageNumber}</p>
            <p><strong>Edition:</strong> {edition}</p>
            <p><strong>Format:</strong> {format}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Publisher:</strong> {publisher}</p>
            <p><strong>Year:</strong> {new Date(create_date).getFullYear()}</p>
            <p><strong>ISBN:</strong> {isbn}</p>
            <p><strong>Stock Quantity:</strong> {stockQuantity}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button
              onClick={() => setIsOpen(true)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Order Now
              <OrderModal
                isOpen={isOpen}
                closeModal={() => setIsOpen(false)}
                book={book}
              />
            </button>
            <button
              onClick={() => handleWish(book)}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Description / Overview */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-blue-700 mb-3">Description / Overview</h2>
        <p className="text-gray-700 text-justify">{description}</p>
      </section>

      {/* Reviews / Ratings */}
      <section className="mb-8">
        <BookRating book={book} />
      </section>

      {/* Related Items (Placeholder) */}
      <section className="mb-8 bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-blue-700 mb-3">Related Items</h2>
        <p className="text-gray-600">Related books or products will be displayed here.</p>
      </section>
    </div>
  );
};

export default BookDetails;
