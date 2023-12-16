import { Component } from "react";
import Form from "./Form";
import FormReview from "./FormReview";

class NewSurvey extends Component{

    state = {showReview: false};

    renderContent(){
        if(this.state.showReview){
            return <FormReview onCancel={()=> this.setState({showReview: false})} />
        }

        return <Form onSubmit={() => this.setState({showReview: true})} />
    }

    render(){

        return(
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

export default NewSurvey;