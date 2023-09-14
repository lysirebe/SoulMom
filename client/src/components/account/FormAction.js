const buttonClass = " group relative bg-orange-500 text-white text-sm hover:bg-orange-700 border rounded-md py-2 px-4 "

export default function FormAction({
    handleSubmit,
    type='Button',
    action = 'submit',
    text
}){
    return (
        <>
        <div className="flex justify-center">
            <button
                 type={action}
                 className= {buttonClass}
                 onSubmit={handleSubmit}
            >
                 {text}

            </button>
        </div>
        </>
    )
};