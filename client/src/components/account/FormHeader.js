import { Link } from "react-router-dom"

export default  function FormHeader({
    heading,
    paragraph,
    linkName,
    linkUrl = ""
}){

    return (
        <div className="mt-10 flex-col justify-center">
                <h2 className="mt-6 text-center text-3xl font-bold text-orange-500">
                    {heading}
                </h2>
                <p className="text-center text-sm text-gray-600 mt-5">
                    {paragraph} {' '}

                    <Link to={linkUrl} className="font-medium text-orange-500 hover:text-black">
                        {linkName}
                    </Link>
                    </p>
        </div>
    )
}