import { Component } from "react";
import { connect } from "react-redux";
import {Link }  from 'react-router-dom';
import StripePay from "./StripePay";


// class-based component 
// more easier to organize code (functions) inside class-based components
// to make Header component aware of the global state we need to hook it up in redux store
// to hook up a component into redux store, we import  {connect } from react-redux and define mapStateToProps function
// and drag out available states from there
class Header extends Component {

  renderContent(){
    switch(this.props.auth){
      case null:
        return [];

        case false:
       return [
            <li><a href="/auth/google" key='login'>Login With Google</a></li>
        ]
      default:  
        return [
          <li><StripePay key='stripe'/></li>,
          <li><a href="/api/logout" key='logout'>Logout</a></li>
       ];
      }
    }
  

    render() {
        return(
            <nav className="flex items-center justify-between flex-wrap  p-6 shadow-lg" style={{backgroundColor: "#00a989"}}>
            <div className="flex items-center flex-shrink-0 text-white mr-6">
              <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
              <Link
                to={this.props.auth ? '/surveys' : '/'} 
                className="font-semibold text-xl tracking-tight" 
              >
                Surveyomatic
              </Link>
            </div>
            <div className="block lg:hidden">
              <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div className="text-sm lg:flex-grow">
                <a href="#header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Dashboard
                </a>
                <a href="#header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                  Surveys
                </a>
                <a href="#header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                  New Survey
                </a>
              </div>
              {this.renderContent().length === 1 
                   ? <div className="inline-block text-sm px-4 py-2 leading-none list-none  border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                    <div className="flex space-x-4">
                      {this.renderContent()}
                    </div> 
                  </div>
                  : <> <div className="inline-block text-sm px-6 py-2 leading-none list-none  text-white  hover:border-transparent hover:text-teal-500 mt-4 lg:mt-0 gap-6">
                        {this.renderContent()[0]}
                      </div>
                    <div className="inline-block text-sm px-4 py-2 leading-none list-none  border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
                        <div className="flex space-x-4">
                            {this.renderContent()[1]}
                       </div>
                    </div> </> }
            </div>
          </nav>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 
        );
    }
}

// function mapStateToProps({state}){
//   return { auth: state.auth }
// }


function mapStateToProps({auth}){
  return { auth }
}



export default connect(mapStateToProps)(Header);