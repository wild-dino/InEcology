import "./InputForm.css";

const InputForm = ({type, autoComplete, id, className, placeholder, name, onChange, value, onBlur}) => {
    return (
        <>
            <input
                type={type}
                autoComplete={autoComplete}
                id={id}
                className={className}
                placeholder={placeholder}
                name={name}
                onChange={onChange}
                value={value}
                onBlur={onBlur}
            />
        </>
    );
};

export default InputForm;