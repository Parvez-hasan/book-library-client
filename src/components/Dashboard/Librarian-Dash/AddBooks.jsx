import { useForm } from "react-hook-form";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const AddBooks = () => {
  const { user } = useAuth();

  const { register, handleSubmit, reset ,  formState: { errors } } = useForm();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const bookData = {
      title: data.title,
      author: data.author,
      category: data.category,
      description: data.description,
      price: Number(data.price),
      image: data.image,
      librarianEmail: user.email,
      status: data.status,
      createdAt: new Date(),
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
        {/* Book Title */}
        <div>
          <label className="label">Book Title</label>
          <input
            {...register("title", { required: true })}
            className="input input-bordered w-full"
          />
          {errors.title && (
            <p className="text-red-500 text-sm">Title required</p>
          )}
        </div>

        {/* Author */}
        <div>
          <label className="label">Author</label>
          <input
            {...register("author", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="label">Book Image URL</label>
          <input
            {...register("image", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Price */}
        <div>
          <label className="label">Price</label>
          <input
            type="number"
            {...register("price", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        {/* Status */}
        <div>
          <label className="label">Status</label>
          <select
            {...register("status")}
            className="select select-bordered w-full"
          >
            <option value="published">Published</option>
            <option value="unpublished">Unpublished</option>
          </select>
        </div>

        <div>
          <label className="label">Description</label>
          <input
            {...register("description", { required: true })}
            className="input input-bordered w-full"
          />
        </div>

        <button className="btn btn-primary w-full">Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;
