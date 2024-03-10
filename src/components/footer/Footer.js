import React, { useState, useEffect } from "react";
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';
import { IoMdHome } from "react-icons/io";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

import './Footer.css';

function Footer() {
    
 
    return (
        <div className="footer">
            <div className="blank-space">_</div>
            <ul className="footer-contact">
                <div><img className="footer-logo" src={require('../../assets/logo_novo.png')} alt="Logo" /></div>
                    <li className="text-contact">Privatna kuća za odmor u Krku, svega nekoliko koraka od plaže. Potpuno opremljeni veliki apartman može primiti do 12 osoba, 
                    a svi mogu pronaći svoje mjesto pod suncem na velikoj terasi.</li>
                    <li className="footer-drustvene-mreze">DRUŠTVENE MREŽE</li>
                    <li><div className="social-icons">
                        <FaFacebook className='icon' />
                        <FaInstagram className='icon' />
                        <FaYoutube className='icon' />
                    </div>
                    </li>
                    <li className="contact">KONTAKT</li>
                    <li className="contact-first-row"><IoMdHome className='icon' />Apartmani Gržetić</li>
                    <li className="contact">Slaviše Vajnera 84</li>
                    <li className="contact">Krk, Hrvatska</li>
                    <li className="contact-first-row"><CiMail className='icon' />info@mail.com</li>
                    <li className="contact-first-row"><CiPhone className='icon' />+385 95552423</li>
                    <li className="text-map">PRONAĐITE NAS</li>

                </ul>
        </div>
    );
}

export default Footer;
