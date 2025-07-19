import 'aos/dist/aos.css';


const Main = () => {


    return (
        <div className='pt-[40px]'>
            <div className="carousel max-h-[500px] w-ful">
                <div id="slide1" className="carousel-item relative  w-full">
                    <img
                        src="https://images.unsplash.com/photo-1624267439301-8147fff1a23d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/40 text-white text-3xl font-bold">
                        <div className="flex flex-col items-center text-white text-center space-y-2">
                            <p className="text-2xl font-bold">Your Journey Starts Here</p>
                            <p className="text-lg">Navigate global visas with ease on VisaVista.</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://images.unsplash.com/photo-1630405199974-0d9fbfb23b72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-2xl md:text-4xl font-semibold text-center px-4">
                        <div className="flex flex-col items-center text-white text-center space-y-2">

                            <p className="text-2xl font-bold">Explore Without Limits</p>
                            <p className="text-lg">Discover visa requirements for over 200 countries.</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://images.unsplash.com/photo-1491613993002-8956ec08fddc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-2xl md:text-4xl font-semibold text-center px-4">
                        <div className="flex flex-col items-center text-white text-center space-y-2">
                            <p className="text-2xl font-bold">Visa Guidance Made Simple</p>
                            <p className="text-lg">From paperwork to approvals — we’re with you every step.</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://images.unsplash.com/photo-1444084316824-dc26d6657664?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white text-2xl md:text-4xl font-semibold text-center px-4">
                        <div className="flex flex-col items-center text-white text-center space-y-2">
                            <p className="text-2xl font-bold">Plan. Apply. Travel.</p>
                            <p className="text-lg">Empowering travelers with smart, fast visa insights.</p>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Main;