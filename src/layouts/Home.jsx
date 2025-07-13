
import Navbar from './../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './../components/Footer';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import Loading from './../components/pages/Loading';

const Home = () => {
    const { loading }= useContext(AuthContext)
    if (loading){
        return <Loading></Loading>
    }

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