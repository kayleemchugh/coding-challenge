import React from 'react';
import nimbleLogo from '../../ui-kit/icons/svg/nimble_navbar_logo.svg'

export default function Header() {

    return (
        <header className="sticky top-0 bg-white">
            <div className="p-2 ml-5 mb-2">
                <img src={nimbleLogo} className="h-8" alt="logo" />
            </div>
            <hr></hr>
        </header>
    );
}


