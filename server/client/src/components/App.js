import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SuurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {

    return (
        <div>
            {/* BrowserRouter can have only one child */}
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/" element={<Landing/>} />
                    </Routes>                    
                </div>
            </BrowserRouter>
        </div>
    );
}


export default App;







