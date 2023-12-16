

const FormField = ({input, label}) => {
    return(
        <div>
            <input {...input} className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 text-lg" />
        </div>
    )
}

export default FormField;