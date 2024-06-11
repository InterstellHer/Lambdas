import React, { useEffect, useState } from 'react';
import './StartupOverlay.css';
import lphie_logo3 from '../../assets/images/lphie_logo3.png';
import ncsu_logo from '../../assets/images/ncsu_logo copy.png';
import backgroundLogo from '../../assets/images/Crest.png';

function StartupOverlay({ onComplete }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
            onComplete();
        }, 3250); // Adjust the time to match your animation duration

        return () => clearTimeout(timer);
    }, [onComplete]);

    useEffect(() => {
        const textSpans = document.querySelectorAll('.leaders-text span');
        textSpans.forEach((span, index) => {
            span.classList.add('fade-in');
            span.classList.add(`delay-${index + 1}`);
        });
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const spans = entry.target.querySelectorAll('span');
                    spans.forEach((span, index) => {
                        setTimeout(() => {
                            span.classList.add('zoom-out');
                            if (index === 2) { // Trigger after the third zoom-out animation
                                setTimeout(() => {
                                    document.querySelector('.startup-overlay').classList.add('color-transition');
                                }, 200); // Delay to start the background color change
                            }
                        }, index * 400); // Adjust the delay as needed
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        const leadersText = document.querySelector('.leaders-text');
        const text = leadersText.textContent;
        leadersText.innerHTML = text.split(' ').map((word, index) => `<span class="delay-${index}">${word}</span>`).join(' ');
        observer.observe(leadersText);
    }, []);

    return (
        <div className={`startup-overlay ${!isVisible ? 'hide' : ''}`}>
            <div className="leaders-text">
                {Array.from('Leaders Among Men').map((char, index) => (
                    <span key={index}>{char}</span>
                ))}
            </div>
            <img src={lphie_logo3} alt="Logo" className="mt-3 logo-fade-in" style={{ height: '40px', backgroundColor: 'transparent' }} />
            <div className="logo-since-container">
                <img src={ncsu_logo} alt="NCSU Logo" className="mt-3 logo-fade-in" style={{ height: '40px', backgroundColor: 'transparent' }} />
                <div className="since-text">Since 2016</div>
            </div>
            <div className="full-page-logo" style={{ backgroundImage: `url(${backgroundLogo})` }}></div>
        </div>
    );
}

export default StartupOverlay;
