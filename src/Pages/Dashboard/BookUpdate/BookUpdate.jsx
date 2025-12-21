import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { imageUpload } from '../../../utiles';
import Swal from 'sweetalert2';

const BookUpdate = () => {

   const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const { data: updateBooks = {} } = useQuery({
    queryKey: ["updateBooks", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/update-book/${id}`);
      return res.data;
    },
  });


   const handleAddBook = async (data) => {
    const {
      bookName,
      isbn,
      publisher,
      publishedYear,
      pageNumber,
      language,
      price,
      stockQuantity,
      edition,
      format,
      category,
      status,
      description,
      bookCover,
    } = data;
    const imageFile = bookCover[0];

    try {
      const image = await imageUpload(imageFile);

      const bookData = {
        bookName,
        isbn,
        publisher,
        publishedYear,
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
      };
      await axiosSecure.put(`/books/${id}`, bookData);
      Swal.fire({
        title: `Update book ${bookName}!`,
        text: "Update book success",
        icon: "success",
        confirmButtonColor: "#22c55e",
      });
      reset();
    } catch (error) {}
  };


  return (
    <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-blue-600 ">
        Add New Book
      </h1>
      <form
        onSubmit={handleSubmit(handleAddBook)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaBook className="text-blue-500" /> Book Name
          </label>
          <input
            type="text"
            defaultValue={updateBooks.bookName}
            {...register("bookName", { required: true })}
            placeholder=" book Name"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaFileAlt className="text-blue-500" /> ISBN
          </label>
          <input
            {...register("isbn", { required: true })}
            type="text"
            defaultValue={updateBooks.isbn}
            placeholder=" ISBN number"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaUser className="text-blue-500" /> Publisher
          </label>
          <input
            defaultValue={updateBooks.publisher}
            {...register("publisher", { required: true })}
            type="text"
            placeholder=" publisher name"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaCalendarAlt className="text-blue-500" /> Published Year
          </label>
          <input
            defaultValue={updateBooks.publishedYear}
            {...register("publishedYear", { required: true })}
            type="number"
            placeholder=" published year"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaSortNumericDown className="text-blue-500" /> Number of Pages
          </label>
          <input
            defaultValue={updateBooks.pageNumber}
            {...register("pageNumber", { required: true })}
            type="number"
            placeholder=" total pages"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLanguage className="text-blue-500" /> Language
          </label>
          <input
            defaultValue={updateBooks.language}
            {...register("language", { required: true })}
            type="text"
            placeholder="add language"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaDollarSign className="text-blue-500" /> Price
          </label>
          <input
            defaultValue={updateBooks.price}
            {...register("price", { required: true })}
            type="number"
            placeholder=" price"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaSortNumericDown className="text-blue-500" /> Stock Quantity
          </label>
          <input
            defaultValue={updateBooks.stockQuantity}
            {...register("stockQuantity", { required: true })}
            type="number"
            placeholder=" stock quantity"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaFileAlt className="text-blue-500" /> Edition
          </label>
          <input
            defaultValue={updateBooks?.edition}
            {...register("edition", { required: true })}
            type="text"
            placeholder="add edition"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaLayerGroup className="text-blue-500" /> Format
          </label>
          <input
            defaultValue={updateBooks.format}
            {...register("format", { required: true })}
            type="text"
            placeholder="Hardcover / eBook / Paperback "
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaLayerGroup className="text-blue-500" /> Category
          </label>
          <input
            defaultValue={updateBooks.category}
            {...register("category", { required: true })}
            type="text"
            placeholder=" category"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-">
            <FaLayerGroup className="text-blue-500" /> Status
          </label>
          <select
            {...register("status", { required: true })}
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue={updateBooks?.status}
          >
            <option value="" disabled>
              Select status
            </option>
            <option value="published">Published</option>
            <option value="unpublished">Unpublished</option>
          </select>
        </div>

        {/* Book Cover */}
        <div className="md:col-span-2">
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-2">
            <FaImage className="text-blue-500" /> Book Cover
          </label>
          <input
            {...register("bookCover", { required: true })}
            type="file"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Description  */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-1">
            Book Description
          </label>
          <textarea
            defaultValue={updateBooks?.description}
            {...register("description", { required: true })}
            placeholder=" description"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Btn */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Update Book
          </button>
        </div>
      </form>
    </div>
  );

};

export default BookUpdate;