
const FormReview = (props) =>{
    return(
        <div>
            <div className="bg-gray-200  flex justify-center items-center">
                <div className="max-w-4xl w-full mx-4 my-8 p-8 bg-white rounded-md shadow-lg">
                    <div className="mt-8 flex justify-between">
                    <button 
                        onClick={props.onCancel}
                        className="bg-orange-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                    >
                        <i className="fas fa-times-circle mr-2"></i>Back
                    </button>

                    <button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                    >
                        Submit <i className="fas fa-check-circle ml-2"></i>
                    </button>
                    </div>
               
                </div>
            </div>
        </div>
    )
}

export default FormReview;