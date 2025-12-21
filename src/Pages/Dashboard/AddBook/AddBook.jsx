import React from 'react';
import { imageUpload } from '../../../utiles';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { FaBook, FaDollarSign, FaImage,  FaLanguage,
 FaLayerGroup, FaUser } from 'react-icons/fa6';
import { FaCalendarAlt, FaFileAlt, FaSortNumericDown } from 'react-icons/fa';

const AddBook = () => {

    const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const handleAddBook = async (data) => {
    const {
      bookName,
      authorName,
      isbn,
      format,
      category,
      status,
      description,
      bookCover,
      publisher,
      publishedYear,
      pageNumber,
      language,
      price,
      stockQuantity,
      edition,
     
    } = data;
    const imageFile = bookCover[0];

    try {
      const image = await imageUpload(imageFile);

      const bookData = {
        bookName,
        authorName,
        authorEmail: user.email,
        isbn,
        publisher,
        format,
        category,
        status,
        description,
        image,
        publishedYear,
        pageNumber,
        language,
        price,
        stockQuantity,
        edition,
       
      };
      await axiosSecure.post("/books", bookData);
      Swal.fire({
        title: `New Book added!`,
        text: "New Book Added successful",
        icon: "success",
        confirmButtonColor: "#22c55e",
      });
      reset();
    } catch (error) {}
  };

    return (
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600 ">
        Add Book
      </h1>
      <form
        onSubmit={handleSubmit(handleAddBook)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaBook className="text-blue-500" /> Book Name
          </label>
          <input
            type="text"
            {...register("bookName", { required: true })}
            placeholder=" book Name"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaUser className="text-blue-500" /> Author Name
          </label>
          <input
            {...register("authorName", { required: true })}
            type="text"
            defaultValue={user?.displayName}
            placeholder=" author name"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaFileAlt className="text-blue-500" /> ISBN
          </label>
          <input
            {...register("isbn", { required: true })}
            type="text"
            placeholder=" ISBN number"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaUser className="text-blue-500" /> Publisher
          </label>
          <input
            {...register("publisher", { required: true })}
            type="text"
            placeholder=" publisher name"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaCalendarAlt className="text-blue-500" /> Published Year
          </label>
          <input
            {...register("publishedYear", { required: true })}
            type="number"
            placeholder=" published year"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaSortNumericDown className="text-blue-500" /> Number of Pages
          </label>
          <input
            {...register("pageNumber", { required: true })}
            type="number"
            placeholder="total pages"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaLanguage className="text-blue-500" /> Language
          </label>
          <input
            {...register("language", { required: true })}
            type="text"
            placeholder="Add language"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaDollarSign className="text-blue-500" /> Price
          </label>
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="add price"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaSortNumericDown className="text-blue-500" /> Stock Quantity
          </label>
          <input
            {...register("stockQuantity", { required: true })}
            type="number"
            placeholder=" stock quantity"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaFileAlt className="text-blue-500" /> Edition
          </label>
          <input
            {...register("edition", { required: true })}
            type="text"
            placeholder="Add edition"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaLayerGroup className="text-blue-500" /> Format
          </label>
          <input
            {...register("format", { required: true })}
            type="text"
            placeholder="eBook / Hardcover / Paperback"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaLayerGroup className="text-blue-500" /> Category
          </label>
          <input
            {...register("category", { required: true })}
            type="text"
            placeholder="add category"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaLayerGroup className="text-blue-500" /> Status
          </label>
          <select
            {...register("status", { required: true })}
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            defaultValue=""
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
          <label className="text-gray-700 font-semibold mb-1 flex items-center gap-3">
            <FaImage className="text-blue-500" /> Book Cover
          </label>
          <input
            {...register("bookCover", { required: true })}
            type="file"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/*  Description */}
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-1">
            Book Description
          </label>
          <textarea
            {...register("description", { required: true })}
            placeholder="Enter book description"
            className="w-full border border-gray-300 text-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;