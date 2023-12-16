import { Component } from "react";
import {reduxForm, Field} from 'redux-form';
import FormField from "./FormField";
import {Link} from 'react-router-dom';
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
            // return <Field type='text' component={FormField} name={name} label={label} key={name}></Field>
        })
    }


    render(){
        return(
            <div className="bg-gray-200  flex justify-center items-center">
                <div className="max-w-4xl w-full mx-4 my-8 p-8 bg-white rounded-md shadow-lg">
                <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
                    {this.showForm()}
                    <div className="mt-8 flex justify-between">
                    <Link to='/surveys'
                        type="submit"
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


export default reduxForm({
    form: 'Form'
})(Form);