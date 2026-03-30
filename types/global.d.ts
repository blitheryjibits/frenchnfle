import { ReactNode } from "react";

declare global {
  type FormInputProps = {
    name: string;
    label: string;
    placeholder: string;
    type?: string;
    register: UseFormRegister;
    error?: FieldError;
    validation?: RegisterOptions;
    disabled?: boolean;
    value?: string;
  };

  type NAV_ITEMS = [
    {
      label: string;
      href: string;
    },
  ];

  type Testimonial = {
    author: string;
    authorExtra?: string;
    content: string;
    imageUrl?: string;
    date?: string | Date;
  };

  interface HeroProps {
    minorText: string;
    heading: ReactNode;
    imageUrl: string;
    imageAlt: string;
    subtext: string;
    footer: Array<string | ReactNode>;
    className?: string;
  }

  interface CarouselProps {
    testimonials: Array<{
      content: string;
      author: string;
      authorExtra?: string;
      date?: string | Date;
      imageUrl?: string;
    }>;
  }

  interface PriceCardProps {
    title: string;
    duration: string | number;
    price: string | number;
    priceExtract: string | number;
    className?: string;
    featured?: boolean;
  }
}
export {};
