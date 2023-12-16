import { Component } from "react";
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';
import FormField from "./FormField";
import validateEmail from "../../helpers/validateEmail";

const VALUES = [
    {label: 'Title', name: 'title'},
    {label: 'Subject Line', name: 'subject' },
    {label: 'Survey Body', name: 'body'},
    {label: 'Recipients', name: 'recipient'}
]

class Form extends Component{

    showForm(){
        return VALUES.map(({label, name}) => {
           return <div key={name} className="mb-6">
                    <label className="block text-gray-700 text-lg font-bold mb-2" htmlFor={name}>
                        {label}
                    </label>
                    <Field
                        type="text"
                        component={FormField}
                        name={name}
                        key={name}
                    />
                 </div>
        })
    }


    render(){
        return(
            <div className="bg-gray-200  flex justify-center items-center">
                <div className="max-w-4xl w-full mx-4 my-8 p-8 bg-white rounded-md shadow-lg">
                <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    {this.showForm()}
                    <div className="mt-8 flex justify-between">
                    <Link to='/surveys'
                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                    >
                        <i className="fas fa-times-circle mr-2"></i>Cancel
                    </Link>

                    <button
                        type="submit"
                        className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center"
                    >
                        Submit <i className="fas fa-check-circle ml-2"></i>
                    </button>
                    </div>
                </form>
                </div>
            </div>
        )

    }
}

function validate(values){
    const errors={};
    errors.recipient=validateEmail(values.recipient || ' ');
    VALUES.forEach(({name})=>{
        if(!values[name]){
            errors[name]='Please, provide some value.'
        }
    })

    
    return errors;
}


export default reduxForm({
    validate: validate,
    form: 'Form'
})(Form);