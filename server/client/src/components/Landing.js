


const Landing = () => {
    return (
    <div className="bg-gradient-to-r from-rose-100 to-teal-100">
        <div class="container pt-24 md:pt-48 px-6 mx-auto flex flex-wrap flex-col md:flex-row items-center " >
        
            <div class="flex flex-col w-full xl:w-2/5 justify-center lg:items-start overflow-y-hidden">
                <h1 class="my-4 text-3xl md:text-5xl text-purple-800 font-bold leading-tight text-center md:text-left slide-in-bottom-h1">Main Hero Message to sell your app</h1>
                <p class="leading-normal text-base md:text-2xl mb-8 text-center md:text-left slide-in-bottom-subtitle">Sub-hero message, not too long and not too short. Make it just right!</p>
            
                <p class="text-blue-400 font-bold pb-8 lg:pb-6 text-center md:text-left fade-in">Download our app:</p>
                <button type="button" class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                <svg class="w-4 h-4 mr-2 -ml-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Sign in with Google
                </button>
                <div class="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
                    {/* <img src="App Store.svg" class="h-12 pr-4 bounce-top-icons">
                    <img src="Play Store.svg" class="h-12 bounce-top-icons"> */}
                </div>

            </div>
            
            <div class="w-full xl:w-3/5 py-6 overflow-y-hidden">
                {/* <img class="w-5/6 mx-auto lg:mr-0 slide-in-bottom" src="devices.svg"> */}
            </div>
            
        
            <div class="w-full pt-16 pb-6 text-sm text-center md:text-left fade-in">
                {/* <a class="text-gray-500 no-underline hover:no-underline" href="#">&copy; App 2019</a> */}
            </div>
            
        </div>
        <section class="bg-white border-b py-8">
        <div class="container mx-auto flex flex-wrap pt-4 pb-12">
            <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Title    
            </h2>
            <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                    xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                    Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
                </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="flex items-center justify-start">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Action
                </button>
                </div>
            </div>
            </div>
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                    xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                    Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
                </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="flex items-center justify-center">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Action
                </button>
                </div>
            </div>
            </div>
            <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <a href="#" class="flex flex-wrap no-underline hover:no-underline">
                <p class="w-full text-gray-600 text-xs md:text-sm px-6">
                    xGETTING STARTED
                </p>
                <div class="w-full font-bold text-xl text-gray-800 px-6">
                    Lorem ipsum dolor sit amet.
                </div>
                <p class="text-gray-800 text-base px-6 mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
                </a>
            </div>
            <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="flex items-center justify-end">
                <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Action
                </button>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section class="bg-gray-100 py-8">
        <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
            <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Pricing
            </h2>
            <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
            <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
            <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div class="p-8 text-3xl font-bold text-center border-b-4">
                    Free
                </div>
                <ul class="w-full text-center text-sm">
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                </ul>
                </div>
                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                    £0
                    <span class="text-base">for one user</span>
                </div>
                <div class="flex items-center justify-center">
                    <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                    </button>
                </div>
                </div>
            </div>
            <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                <div class="w-full p-8 text-3xl font-bold text-center">Basic</div>
                <div class="h-1 w-full gradient my-0 py-0 rounded-t"></div>
                <ul class="w-full text-center text-base font-bold">
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                </ul>
                </div>
                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="w-full pt-6 text-4xl font-bold text-center">
                    £x.99
                    <span class="text-base">/ per user</span>
                </div>
                <div class="flex items-center justify-center">
                    <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                    </button>
                </div>
                </div>
            </div>
            <div class="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                <div class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                <div class="p-8 text-3xl font-bold text-center border-b-4">
                    Pro
                </div>
                <ul class="w-full text-center text-sm">
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                    <li class="border-b py-4">Thing</li>
                </ul>
                </div>
                <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                <div class="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                    £x.99
                    <span class="text-base">/ per user</span>
                </div>
                <div class="flex items-center justify-center">
                    <button class="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                    Sign Up
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <footer class="bg-white">
        <div class="container mx-auto px-8">
            <div class="w-full flex flex-col md:flex-row py-6">
            <div class="flex-1 mb-6 text-black">
                <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
                <svg class="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
                    <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
                    <path
                    class="plane-take-off"
                    d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
                    />
                </svg>
                LANDING
                </a>
            </div>
            <div class="flex-1">
                <p class="uppercase text-gray-500 md:mb-6">Links</p>
                <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">FAQ</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Help</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Support</a>
                </li>
                </ul>
            </div>
            <div class="flex-1">
                <p class="uppercase text-gray-500 md:mb-6">Legal</p>
                <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
                </li>
                </ul>
            </div>
            <div class="flex-1">
                <p class="uppercase text-gray-500 md:mb-6">Social</p>
                <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Facebook</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Linkedin</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Twitter</a>
                </li>
                </ul>
            </div>
            <div class="flex-1">
                <p class="uppercase text-gray-500 md:mb-6">Company</p>
                <ul class="list-reset mb-6">
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Official Blog</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">About Us</a>
                </li>
                <li class="mt-2 inline-block mr-2 md:block md:mr-0">
                    <a href="#" class="no-underline hover:underline text-gray-800 hover:text-pink-500">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </div>
        <a href="https://www.freepik.com/free-photos-vectors/background" class="text-gray-500">Background vector created by freepik - www.freepik.com</a>
      </footer>
    </div>   
    )
}

export default Landing;