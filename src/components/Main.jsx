import React from 'react';
import slider5 from '../assets/slider5.jpg'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.jpg'
import CountUp from 'react-countup';
import spain from '../assets/Spain.jpg'
import learn from '../assets/learn.jpg'
import { Link } from 'react-router-dom';

const Main = () => {

    const stats = [
        { title: "Users", count: 18245 },
        { title: "Lessons", count: 140 },
        { title: "Vocabularies", count: 8450 },
        { title: "Tutorials", count: 35 },
    ];

    return (
        <div>
            <div className="carousel w-full max-h-[500px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={slider5}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src={slider4}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={slider3}
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <section className="bg-white py-16 px-4 md:px-10">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <img
                            src={learn}
                            alt="Learning Spanish"
                            className="rounded-2xl shadow-lg w-full h-96 object-cover"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">About Lingo Bingo</h2>
                        <p className="text-gray-600 mb-4 text-md leading-relaxed">
                            Welcome to <span className="font-semibold text-red-500">Lingo Bingo</span> — your fun and interactive way to learn Spanish! Whether you're just starting out or looking to refine your skills, we offer vocabulary games, pronunciation guides, and real-world usage examples to help you master Spanish naturally.
                        </p>
                        <p className="text-gray-600 mb-4 text-md leading-relaxed">
                            Our lessons are built around real-life scenarios, so you’ll learn how to speak Spanish the way native speakers actually use it — not just textbook phrases.
                        </p>
                        <p className="text-gray-600 text-md leading-relaxed">
                            With bite-sized lessons, themed vocabulary, and engaging quizzes, learning Spanish is now easier, faster, and more fun!
                        </p>

                        <Link
                            to="/lessons"
                            className="inline-block mt-6 px-6 py-3 bg-red-500 hover:bg-red-600 text-white text-lg font-medium rounded-xl transition"
                        >
                            Start Learning Now
                        </Link>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-10">Our Progress So Far </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md p-6 transition hover:shadow-xl"
                            >
                                <h3 className="text-3xl font-bold text-red-500">
                                    <CountUp end={stat.count} duration={5} />
                                </h3>
                                <p className="text-gray-600 text-lg mt-2">{stat.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-white py-16 px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    {/* Text */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-800 mb-6">Why Learn Spanish?</h2>
                        <ul className="space-y-4 text-lg text-gray-600">
                            <li>🌎 Spoken by over 500 million people worldwide</li>
                            <li>🎓 Boosts career and academic opportunities</li>
                            <li>🧠 Improves memory, focus, and brain health</li>
                            <li>✈️ Makes travel to 20+ countries more immersive</li>
                            <li>🎬 Enjoy Spanish music, films, and culture in original form</li>
                        </ul>
                    </div>

                    {/* Image */}
                    <div>
                        <img
                            src={spain}
                            alt="Spanish Culture"
                            className="rounded-2xl shadow-lg w-full h-96 object-cover"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 py-16 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    <h2 className="text-4xl font-bold text-gray-800 mb-12">What’s Included in Each Lesson?</h2>

                    <div className="grid gap-8 md:grid-cols-3 text-left">
                        {/* Card 1 */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2 text-red-500">🎧 Native Pronunciations</h3>
                            <p className="text-gray-600">Listen and repeat exercises recorded by native speakers.</p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2 text-red-500">📚 Vocabulary Packs</h3>
                            <p className="text-gray-600">Learn themed word lists with pronunciation and usage tips.</p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-xl shadow-md p-6">
                            <h3 className="text-xl font-semibold mb-2 text-red-500">🧩 Interactive Quizzes</h3>
                            <p className="text-gray-600">Test your skills and earn points with fun quizzes and games.</p>
                        </div>

                    </div>
                </div>
            </section>



        </div>
    );
};

export default Main;