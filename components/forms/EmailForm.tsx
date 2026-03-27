"use client";

import InputField from "@/components/forms/InputField";
import { useForm, SubmitHandler } from "react-hook-form";
import TextAreaField from "./TextAreaField";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type FormValues = {
  email: string;
  fullName: string;
  message?: string;
};

export const EmailForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      email: "",
      fullName: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    toast.success("Form submitted!");
    setTimeout(() => {
      reset();
      router.push("/");
    }, 1200);
  };

  return (
    <div className="flex items-center w-full mx-auto md:mx-0 max-w-[clamp(300px,50vw,600px)] sm:max-w-[clamp(300px,66vw,700px)]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" p-8 rounded flex flex-col gap-3 border shadow-md hover:shadow-xl w-full max-w-lg
        transition-shadow duration-300"
      >
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
          validation={{
            required: "Message is required",
            message:
              "Please write a short question or comment about why you are contacting us so we can better serve your needs",
          }}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full md:w-1/3 md:self-end bg-primary text-white py-2 px-4 rounded disabled:bg-gray-400 disabled:cursor-not-allowed mt-4
          transition-all duration-300"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};
