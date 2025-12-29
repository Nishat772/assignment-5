import { useForm } from "react-hook-form"
import { createEvent } from "../api/eventApi";
import toast from "react-hot-toast";

export const CreateEventForm = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const res = await createEvent(data);
      console.log("Created:", res);
      if (res.status === 201) {
        toast.success("Event Added Successfully.")
      }else {
        toast.error("Somthing Went Wrong.")
      }
    } catch (error) {
      console.error(error);

    }

  };
  return (
    <div className="mx-auto flex flex-col justify-center items-center my-20">
      <h2 className="text-[30px] text-[#0D9C6D] font-serif">Create Event Here</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 shadow-2xl w-96 p-5 rounded-md">
        <input type="text" placeholder="Event Title" {...register("title", { required: true })} className="input w-full" />
        {errors.title && <span className="text-red-500">Title is required</span>}
        <textarea type="text" placeholder="Event Contant" {...register("contant", { required: true })} className="textarea w-full" />
        {errors.contant && <span className="text-red-500">Contant is required</span>}
        <fieldset className="fieldset">
          <input type="file" className="file-input w-full" />
          <label className="label">Max Image size 2MB</label>
        </fieldset>
        <button type="submit" className="btn btn-primary">Create</button>
      </form>
    </div>
  )
}
