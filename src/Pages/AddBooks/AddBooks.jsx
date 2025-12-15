
import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const AddBooks = () => {

    const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    
    const bookData = {
      title: data.title,
      author: data.author,
      category: data.category,
      description: data.description,
      price: Number(data.price),
      image: data.image,
      librarianEmail: data.email,
      status: data.status,
      createdAt: new Date()
    };

    const res = await axiosSecure.post("/books", bookData);

    if (res.data.insertedId) {
      toast.success("Book Added Successfully");
      reset();
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Add New Book</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <input {...register("title")} placeholder="Book Title" className="input" required />

        <input {...register("author")} placeholder="Author" className="input" required />

        <input {...register("category")} placeholder="Category" className="input" required />

        <input {...register("price")} type="number" placeholder="Price" className="input" required />

        <input {...register("stock")} type="number" placeholder="Stock" className="input" required />

        <input {...register("year")} type="number" placeholder="Published Year" className="input" required />

        <input {...register("image")} placeholder="Image URL" className="input" required />

        <textarea {...register("description")} placeholder="Description" className="textarea" required />

        <button className="btn btn-primary w-full">Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;