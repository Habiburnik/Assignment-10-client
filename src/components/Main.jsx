import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';




const Main = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500,  // animation duration
            once: true       // whether animation should happen only once
        });
    }, []);


    return (
        <div>

        </div>
    );
};

export default Main;