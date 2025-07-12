
import Navbar from './../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../components/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <main className=' mx-auto min-h-screen'>
                <section>
                    <Outlet></Outlet>
                </section>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Home;