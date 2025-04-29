import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'; // ✅ Corrected typo from 'axois' to 'axios'
import toast from 'react-hot-toast';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://getform.io/f/agdpmpkb", userInfo);
      toast.success("Message sent successfully");
    } catch (error) {
      console.error("Error sending form:", error);
      toast.error("Something went wrong while sending the message.");
    }
  };

  return (
    <>
      <div name="Contact" className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-12">
        <h1 className="text-5xl font-semibold text-gray-800 gap-2 text-center">
          Contact Me
        </h1>
        <br />
        <span>Please fill out the form below to contact me</span>
        <br />
        <br />
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-200 w-100 px-5 py-6 rounded-xl"
          >
            <h1 className="text-center text-2xl font-semibold mb-3 mt-2 text-[#6c63ff]">
              Send Your Message
            </h1>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 text-lg font-bold mb-1 ml-4">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                className="shadow border rounded bg-white py-2 px-10 ml-4 text-gray-700 leading-tight focus:outline-none"
                id="name"
                type="text"
                placeholder="Let’s not be strangers"
              />
              {errors.name && <span className="text-red-500 ml-4 mt-1">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 text-lg font-bold mb-1 ml-4">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                className="shadow border rounded bg-white py-2 px-10 ml-4 text-gray-700 leading-tight focus:outline-none"
                id="email"
                type="email"
                placeholder="So I know where to reply"
              />
              {errors.email && <span className="text-red-500 ml-4 mt-1">This field is required</span>}
            </div>

            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 text-lg font-bold mb-1 ml-4">
                Message
              </label>
              <textarea
                {...register("message", { required: true })}
                className="resize-y min-h-36 max-h-96 shadow border rounded bg-white px-4 py-2 ml-4 text-gray-700 leading-tight focus:outline-none"
                id="message"
                placeholder="Let’s start a conversation"
              />
              {errors.message && <span className="text-red-500 ml-4 mt-1">This field is required</span>}
            </div>

            <button
              className="bg-[#6c63ff] text-white rounded-xl px-4 py-2 hover:bg-blue-800 duration-300 ml-33 cursor-pointer "
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
