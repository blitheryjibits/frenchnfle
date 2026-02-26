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

    type NAV_ITEMS = [{
       label: string;
       href: string;
    }]
}

export {};