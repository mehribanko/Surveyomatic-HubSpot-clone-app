


const Landing = () => {
    return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100">
        <div className="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center " >
        
            <div className="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <h1 className="mb-6 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Unlock the power of customer insights with Surveyomatic!</h1>
                {/* <p className="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Feedback fuels growth and businesses thrive.</p> */}
                 <br></br><br></br>
                <button type="button" className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <svg className="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Sign in with Google
                </button>
                <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                    {/* <img src="App Store.svg" className="h-12 pr-4 bounce-top-icons">
                    <img src="Play Store.svg" className="h-12 bounce-top-icons"> */}
                </div>

            </div>
            
            <div className="w-full xl:w-3/5 py-6 overflow-y-hidden">
                {/* <img className="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="devices.svg"> */}
            </div>
            
        
            <div className="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
                {/* <a className="text-gray-500 no-underline hover:no-underline" href="#">&copy; App 2019</a> */}
            </div>
            
        </div>
        <section class="bg-gradient-to-r from-purple-800 to-indigo-600 text-white py-16">
            <div class="container mx-auto text-center">
                <h2 class="text-4xl font-bold mb-8">Elevate Your Business Through Customer Insights</h2>

                <p class="text-lg text-gray-300 max-w-3xl mx-auto">
                    At Surveyomatic, we believe in the power of customer feedback to drive business success. We provide a seamless platform for business owners like you to connect with your customers, understand their needs, and shape the future of your products and services.
                </p>
            </div>
        </section>


        <section className="bg-white border-b py-8">
        <div className="container mx-auto flex flex-wrap pt-4 pb-12">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
              Grow with Surveyomatic!
            </h2>
            <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                    Empower Your Decision-Making
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                    Make informed decisions based on real insights from your customers. Our user-friendly survey tools are designed to extract valuable feedback effortlessly.
                </p>
                </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-start">
                <button className="mx-auto lg:mx-0 hover:underline gradient font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Action
                </button>
                </div>
            </div>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                    Enhance Customer Satisfaction
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                    Show your customers that you care. By actively seeking their opinions, you demonstrate a commitment to providing the best possible experience.
                </p>
                </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-center">
                <button className="mx-auto lg:mx-0 hover:underline gradient  font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Action
                </button>
                </div>
            </div>
            </div>
            <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" className="flex flex-wrap no-underline hover:no-underline">
                <div className="w-full font-bold text-xl text-gray-800 px-6">
                    Build Stronger Relationships
                </div>
                <p className="text-gray-800 text-base px-6 mb-5">
                    Communication is key. Engage with your customers on a deeper level, fostering trust and loyalty that extends beyond the transaction.
                </p>
                </a>
            </div>
            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="flex items-center justify-end">
                <button className="mx-auto lg:mx-0 hover:underline gradient  font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Action
                </button>
                </div>
            </div>
            </div>
        </div>
        </section>

        <section class="bg-gray-100 py-16">
        <div class="container mx-auto">
            <h2 class="text-4xl font-bold text-purple-800 mb-8 text-center">What Sets Us Apart</h2>

            <div class="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-x-8 md:space-y-0">
                {/* <!-- Intuitive Survey Builder --> */}
                <div class="max-w-md p-6 bg-white shadow-lg rounded-md">
                    <h3 class="text-xl font-bold text-purple-800 mb-4">Intuitive Survey Builder</h3>
                    <p class="text-gray-600">Craft surveys effortlessly with our intuitive drag-and-drop interface. No coding skills required.</p>
                </div>

                {/* <!-- Customizable Templates --> */}
                <div class="max-w-md p-6 bg-white shadow-lg rounded-md">
                    <h3 class="text-xl font-bold text-purple-800 mb-4">Customizable Templates</h3>
                    <p class="text-gray-600">Save time with our range of customizable templates tailored to various industries. Start collecting feedback in minutes.</p>
                </div>

                {/* <!-- Real-time Analytics --> */}
                <div class="max-w-md p-6 bg-white shadow-lg rounded-md">
                    <h3 class="text-xl font-bold text-purple-800 mb-4">Real-time Analytics</h3>
                    <p class="text-gray-600">Stay ahead of the curve. Access real-time analytics and actionable insights to adapt and respond quickly to market trends.</p>
                </div>
            </div>
        </div>
    </section>


        <section className="bg-gray-100 py-8">
        <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
            <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Pricing
            </h2>
            <div className="w-full mb-4">
            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                    Free
                </div>
                <ul className="w-full text-center text-sm">
                    <li className="border-b py-4">1 Survey</li>
                    <li className="border-b py-4"> 1 Chart</li>
                    <li className="border-b py-4">0 Promotional Email Package</li>
                </ul>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                    $0
                    <span className="text-base">&nbsp; for one user</span>
                </div>
                <div className="flex items-center justify-center">
                    <button className="mx-auto lg:mx-0 hover:underline gradient  font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                    </button>
                </div>
                </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div className="w-full p-8 text-3xl font-bold text-center">Basic</div>
                <div className="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                <ul className="w-full text-center text-base font-bold">
                    <li className="border-b py-4">10 Surveys</li>
                    <li className="border-b py-4">5 Charts</li>
                    <li className="border-b py-4">3 Promotional Email Packages</li>
                </ul>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-4xl font-bold text-center">
                    $9.99
                    <span className="text-base">&nbsp; per user</span>
                </div>
                <div className="flex items-center justify-center">
                    <button className="mx-auto lg:mx-0 hover:underline gradient font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                    </button>
                </div>
                </div>
            </div>
            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div className="p-8 text-3xl font-bold text-center border-b-4">
                    Pro
                </div>
                <ul className="w-full text-center text-sm">
                    <li className="border-b py-4">25 Surveys</li>
                    <li className="border-b py-4">15 Charts</li>
                    <li className="border-b py-4">6 Promotional Email Packages</li>
                </ul>
                </div>
                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                    £19.99
                    <span className="text-base">&nbsp; per user</span>
                </div>
                <div className="flex items-center justify-center">
                    <button className="mx-auto lg:mx-0 hover:underline gradient font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <footer className="bg-white">
        <div className="container mx-auto px-8">
            <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-black">
                <a className="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                    <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                    <path
                    className="plane-take-off"
                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                    />
                </svg>
                LANDING
                </a>
            </div>
            <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6">Links</p>
                <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                </li>
                </ul>
            </div>

            <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6">Social</p>
                <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                </li>
                </ul>
            </div>
            <div className="flex-1">
                <p className="uppercase text-gray-500 md:mb-6">Company</p>
                <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
    
      </footer>
    </div>   
    )
}

export default Landing;