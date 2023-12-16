

const FormField = ({input, meta: {error, touched}}) => {
    return(
        <div>
            <input {...input} className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 transition duration-200 text-lg" />
            <div style={{color:'red'}}>
                {touched && error}
            </div>
        </div>
    )
}

export default FormField;