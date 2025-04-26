import { ChangeEvent } from "react";

type FormProps<T> = {
    labelHtmlFor: string;
    labeltext: string;
    inputType: string;
    valueSetter: React.Dispatch<React.SetStateAction<T>>;
    inputValue: string | number | readonly string[] | undefined;
}

export default function RegistrationFormField<T>({ labelHtmlFor, labeltext, inputType, valueSetter, inputValue }: FormProps<T>) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        valueSetter(e.target.value as unknown as T);
    }
    return (
        <div className="w-full h-[15%] flex justify-center mb-6">
            <div className="w-[70%] h-full flex flex-col justify-center">
                <label htmlFor={labelHtmlFor}
                className="block w-full">{labeltext}</label>
                <input id={labelHtmlFor} type={inputType} onChange={handleChange} value={inputValue}
                className="border-0 
                border-b-2 
                border-black 
                focus:outline-none 
                focus:border-[#338680] 
                placeholder-gray-400 
                p-2 w-[100%] bg-[#F7F7F7]"/>
            </div>
        </div>
    );
}