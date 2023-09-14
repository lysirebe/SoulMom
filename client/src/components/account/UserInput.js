const fixedInputClass ="rounded-md appearance none relative w-full block px-3 py-2 border border-orange-500 placeholder-orange-500"

export default function UserInput({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass
}){
    return(
        <div className="my-5">

            <label htmlFor={labelFor} className="sr-only">{labelText}</label>
            <input 
                onChange={handleChange}
                value = {value}
                id ={id}
                name = {name}
                type = {type}
                required = {isRequired}
                className={fixedInputClass + customClass}
                placeholder={placeholder}
            />
        </div>
    )
}