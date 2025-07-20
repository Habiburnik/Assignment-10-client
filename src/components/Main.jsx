import 'aos/dist/aos.css';
import LatestVisa from './pages/LatestVisa';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import { Typewriter } from 'react-simple-typewriter';
import { Fade } from 'react-awesome-reveal';

const Main = () => {


    useEffect(() => {
        AOS.init({
            duration: 3000,
            once: false,
        });
    }, []);
    const navigate = useNavigate();
    const destinations = [
        {
            country: "Japan",
            image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amFwYW58ZW58MHx8MHx8fDA%3D",
            quote: "Discover tradition and technology in harmony.",
        },
        {
            country: "Canada",
            image: "https://images.unsplash.com/photo-1551009175-15bdf9dcb580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhbmFkYXxlbnwwfHwwfHx8MA%3D%3D",
            quote: "Live among nature’s wonders and city skylines.",
        },
        {
            country: "Australia",
            image: "https://images.unsplash.com/photo-1493375366763-3ed5e0e6d8ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF1c3RyYWxpYXxlbnwwfHwwfHx8MA%3D%3D",
            quote: "Where every meal is a masterpiece and every street tells a story.",
        },
    ];

    return (
        <div className='pt-[40px]'>

            <div className="carousel max-h-[500px] w-ful">
                <div id="slide1" className="carousel-item relative  w-full">
                    <img
                        src="https://images.unsplash.com/photo-1624267439301-8147fff1a23d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="w-full" />
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/40 text-white text-3xl font-bold">
                        <div className="flex flex-col items-center text-white text-center space-y-2">
                            <p>Your Journey Starts Here</p>
                            <p className="text-2xl font-bold">
                                <Typewriter
                                    words={['Explore the World', 'Discover New Cultures']}
                                    loop={0}
                                    cursor
                                    cursorStyle='_'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </p>
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
            <Fade direction="up"
                duration={1200} // 1.2 seconds for animation
                delay={200}     // Starts 200ms later
                triggerOnce={true} cascade>
                <LatestVisa></LatestVisa>
            </Fade>
            <section data-aos="fade-up" className="mt-7 bg-base-200 py-16 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-6">Why Choose VisaVista?</h2>
                    <p className="mb-12 text-lg text-gray-600">
                        We make your visa journey easy, fast, and reliable with the best services in the industry.
                    </p>

                    <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
                        <div data-aos="flip-left" className="bg-white p-6 rounded-lg shadow">
                            <h4 className="font-semibold text-xl mb-2">Expert Guidance</h4>
                            <p className="text-gray-600">Our experts help you choose the right visa with step-by-step support.</p>
                        </div>
                        <div data-aos="flip-left" className="bg-white p-6 rounded-lg shadow">
                            <h4 className="font-semibold text-xl mb-2">Fast Processing</h4>
                            <p className="text-gray-600">We ensure fast and efficient processing for quicker results.</p>
                        </div>
                        <div data-aos="flip-left" className="bg-white p-6 rounded-lg shadow">
                            <h4 className="font-semibold text-xl mb-2">Secure & Transparent</h4>
                            <p className="text-gray-600">Your data is safe with us, and we keep everything transparent.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos="flip-up" className="py-20 bg-gradient-to-b from-base-100 to-base-200">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold"> Dream Destinations Await</h2>
                    <p className="text-lg text-gray-600 mt-2">Find the perfect visa to explore the places you've always dreamed of.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
                    {destinations.map((dest) => (
                        <div
                            key={dest.country}
                            className="relative group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                        >
                            <img src={dest.image} className="w-full h-64 " />
                            <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-end p-6 text-white">
                                <h3 className="text-2xl font-bold">{dest.country}</h3>
                                <p className="text-sm italic">{`"${dest.quote}"`}</p>
                                <button
                                    onClick={() => navigate('/visas')}
                                    className="mt-4 btn btn-sm btn-primary w-fit"
                                >
                                    Explore Visas
                                </button>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
        </div >
    );
};

export default Main;