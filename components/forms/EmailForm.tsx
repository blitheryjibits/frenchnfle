'use client'

import InputField from "@/components/forms/InputField";
import { useForm, SubmitHandler } from "react-hook-form";
import TextAreaField from "./TextAreaField";

type FormValues = {
  email: string;
  fullName: string;
  message?: string;
};

export const EmailForm = () => {

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      fullName: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
  }

  return (
    <div className="min-h-screen w-full bg-gray-500 flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-8 rounded flex flex-col gap-3 shadow-md w-full max-w-lg">
        <InputField 
          name="fullName"
          label="Full Name"
          placeholder="Enter your Full Name"
          type="text"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full Name is required" }}
        />
        <InputField 
          name="email"
          label="Email"
          placeholder="Enter your email"
          type="email"
          register={register}
          error={errors.email}
          validation={{ required: "Email is required" }}
        />
         <TextAreaField
          name="message"
          label="Message"
          placeholder="Enter your message"
          type="textarea"
          register={register}
          error={errors.message}
          validation={{ required: "Message is required", message: "Please write a short question or comment about why you are contacting us so we can better serve your needs" }}
        />
        <button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed mt-4"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>


  );
}
