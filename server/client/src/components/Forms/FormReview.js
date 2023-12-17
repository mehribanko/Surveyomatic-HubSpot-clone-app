import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faTimesCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from "react-redux";
import VALUES from "./fieldValues";



const  FormReview = (props) =>  {

    const formReview = () => {
        return VALUES.map(({ label, name }) => (
            <div key={name} className="mb-4">
                <label className="block text-sm text-gray-600">{label}</label>
                <p className="text-lg font-semibold text-teal-700">{props.formValues[name]}</p>
            </div>
        ))
    };
    
        return(
            <div>
                <div className="bg-gray-200 flex justify-center items-center" style={{ minHeight: '600px' }}>
                    <div className="max-w-4xl w-full mx-4 my-8 p-8 bg-white rounded-md shadow-lg">
                        {formReview()}
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
                            SEND &nbsp; <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        </button>
                        </div>
                
                    </div>
                </div>
            </div>
        )
    }

function mapStateToProps(state){
    return {formValues: state.form.Form.values}
  }
  
  
export default connect(mapStateToProps)(FormReview);