import { Component } from "react";

class Dashboard extends Component{

    render(){
        return( 
            <div className="bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto flex flex-col items-center mb-8">
              <div className="max-w-2xl w-full bg-white shadow-md overflow-hidden rounded-md">
                {/* Card 1 */}
                <div className="px-8 py-6">
                  <div className="font-bold text-2xl mb-4">Campaign 1</div>
                  <p className="text-gray-700 text-lg">Yes Responses: 0</p>
                  <p className="text-gray-700 text-lg">No Responses: 0</p>
                  <p className="text-gray-700 text-lg">Surveys Sent: 0</p>
                </div>
              </div>
      
              <div className="max-w-2xl w-full bg-white shadow-md overflow-hidden rounded-md mt-4">
                {/* Card 2 */}
                <div className="px-8 py-6">
                  <div className="font-bold text-2xl mb-4">Campaign 2</div>
                  <p className="text-gray-700 text-lg">Yes Responses: 0</p>
                  <p className="text-gray-700 text-lg">No Responses: 0</p>
                  <p className="text-gray-700 text-lg">Surveys Sent: 0</p>
                </div>
              </div>
            </div>
      
            {/* Add Button */}
            <div className="fixed bottom-8 right-8">
            <button className="bg-blue-500 hover:bg-blue-600 text-white text-5xl p-8 rounded-full shadow-lg transition duration-300 transform hover:scale-110">
                <strong>+</strong>
              </button>
            </div>
          </div>
        );
    }   

}

export default Dashboard;