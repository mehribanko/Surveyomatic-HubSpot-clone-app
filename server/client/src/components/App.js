import React, {Component} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';


const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

class App extends Component {
    render(){
        return (
            <div>
                {/* BrowserRouter can have only one child */}
                <BrowserRouter>
                    <div>
                        <Header />
                        <Routes>    
                            <Route path="/" element={<Landing/>} />
                            <Route path="/surveys" element={<Dashboard/>} />
                            <Route path="/surveys/new" element={<SurveyNew/>} />
                        </Routes>                    
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;







