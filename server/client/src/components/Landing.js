


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
    </div>   
    )
}

export default Landing;