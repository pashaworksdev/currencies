import React from 'react';
import './About.styles.css';

export const About = () => (

    <div className="about main__about">
        <div className="about__author">
            This site was designed and developed by: Pavel Pushkarev
        </div>
        <div className="about__link">
            GitHub URL:
            <a href="https://github.com/pashaworksdev/currencies">
                https://github.com/pashaworksdev/currencies
            </a>
        </div>
        <div className="about__link">
            GitHub pages:
            <a href="https://pashaworksdev.github.io/">
                https://pashaworksdev.github.io/
            </a>
        </div>
    </div>

);

