import React from 'react';
import '../styles/RightNav.scss';

// src/components/RightNav.js
export const RightNav = () => {
    return <aside className="aside fixed top-1/2 right-4 transform -translate-y-1/2">
        <ul className="space-y-2 flex justify-between flex-col h-full">
            <li className='tooltip-container'>
                <a href="#link1" className="text-white hover:text-yellow">
                    <div className='flex items-center flex-col'>
                        <img src="/img/phone.svg" alt="phone"></img>
                        <p className="text-white">Telephone</p>
                    </div>
                </a>
                <p className='tooltip-content'>Telephone<br></br><span>+63 951 666 6666</span></p>
            </li>
            <li>
                <a href="#link1" className="text-white hover:text-yellow">
                    <div className='flex items-center flex-col'>
                        <img src="/img/phone.svg" alt="phone"></img>
                        <p className="text-white">Whatsapp</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="#link1" className="text-white hover:text-yellow">
                    <div className='flex items-center flex-col'>
                        <img src="/img/Telegram.svg" alt="telegram"></img>
                        <p className="text-white">Telegram</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="#link1" className="text-white hover:text-yellow">
                    <div className='flex items-center flex-col'>
                        <img src="/img/skype.svg" alt="skype"></img>
                        <p className="text-white">Skype</p>
                    </div>
                </a>
            </li>
            <li>
                <a href="#link1" className="text-white hover:text-yellow">
                    <div className='flex items-center flex-col'>
                        <img className='w-full' src="/img/top.svg" alt="top"></img>
                    </div>
                </a>
            </li>
        </ul>
    </aside>;
};