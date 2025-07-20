import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-base-200 text-black mt-16">
            {/* Main Footer Content */}
            <div className="container  mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <aside>
                    <h2 className="text-2xl font-bold mb-2">VisaVista</h2>
                    <p className="mb-2">A clear view into your visa journey.</p>
                    <p className="text-sm">123 Global Street, Dhaka, Bangladesh</p>
                    <p className="text-sm">Email: support@visavista.com</p>
                    <p className="text-sm mb-3">Phone: +880-123-456-789</p>
                    <div className="mx-auto flex gap-4 text-lg ">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700"><FaLinkedin /></a>
                    </div>
                </aside>

                <nav className='flex flex-col gap-2' >
                    <h6 className="footer-title font-semibold mb-2">Services</h6>
                    <a className="link link-hover">Visa Consultation</a>
                    <a className="link link-hover">Application Tracking</a>
                    <a className="link link-hover">Support</a>
                    <a className="link link-hover">Advisory</a>
                </nav>

                <nav className='flex flex-col gap-2' >
                    <h6 className="footer-title font-semibold mb-2">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Blog</a>
                </nav>

                <nav className='flex flex-col gap-2' >
                    <h6 className="footer-title font-semibold mb-2">Legal</h6>
                    <a className="link link-hover">Terms of Use</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Cookie Policy</a>
                </nav>
            </div>

            {/* Bottom Bar */}
            <div className="bg-base-300 text-center py-2 text-sm text-gray-600">
                &copy; {new Date().getFullYear()} VisaVista. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
