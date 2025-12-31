import React, { useEffect, useRef } from 'react';

// Data Configurations
const TESTIMONIALS = [
    {
        id: 1,
        name: 'Sarah Al-Mansouri',
        position: 'CEO, MedTech Solutions MENA',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b2fb3d53859433ab0046c6_nuseir-yassin.png',
        thumbImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fe9c_user-testimonial-1.png',
        text: "Wasel EBDS opened doors we couldn't access for years. Within 48 hours, we had ministerial meetings scheduled. Their network across MENA healthcare institutions is unmatched. They don't just connect—they deliver results.",
        width: 36,
        height: 36
    },
    {
        id: 2,
        name: 'Michael Chen',
        position: 'Regional Director, GlobalTech Ventures',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fe9f_user-testimonial-2.png',
        thumbImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fe9f_user-testimonial-2.png',
        text: 'Working with Wasel on our Egypt market entry was transformative. They understood the regulatory landscape perfectly and executed with precision. What would\'ve taken us 18 months took 3 weeks. Exceptional value.',
        width: 36,
        height: 36
    },
    {
        id: 3,
        name: 'Dr. Ahmed Khalil',
        position: 'Managing Partner, Gulf Ventures Capital',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea4_user-testimonial-3.png',
        thumbImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea4_user-testimonial-3.png',
        text: "Wasel's ability to navigate government relationships is extraordinary. They facilitated our licensing process with the Ministry of Investment and connected us with strategic partners. Their expertise in MENA business development is world-class. Highly recommend for serious market entry.",
        width: 70,
        height: 70
    },
    {
        id: 4,
        name: 'Layla Mahmoud',
        position: 'Director of Business Development, Regional Pharmaceuticals',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea1_user-testimonial-4.png',
        thumbImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fea1_user-testimonial-4.png',
        text: 'The Wasel team is exceptional at strategic business development with genuine passion for results. Working with them built a lasting partnership. They grasp complex stakeholder dynamics and take initiative to drive success. Excited to continue our collaboration into new markets.',
        width: 70,
        height: 70
    }
];

const REVIEW_LOGOS = [
    { src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bdac8ba112bbfbf20b80f6_clutch-logo-c.svg', alt: 'LinkedIn Network' },
    { src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bdac8b568326871d738810_behance-logo.svg', alt: 'Government Portal' },
    { src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bdac8b08e1c7c513781dc9_medium-logo.svg', alt: 'Business Directory' },
    { src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bdac8bc99e57b02082b09a_dribbble-logo.svg', alt: 'Industry Network' }
];

const INTEREST_OPTIONS = [
    'Government Relations',
    'Market Entry Support',
    'Strategic Partnerships',
    'Deal Facilitation'
];

const BUDGET_OPTIONS = [
    '$10K or Below',
    '$20k-$50k',
    '$50k-$100k+'
];

// Reusable Components
const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none" className="copy-button-icon is-two">
        <path d="M16.5 12.9V17.1C16.5 20.6 15.1 22 11.6 22H7.4C3.9 22 2.5 20.6 2.5 17.1V12.9C2.5 9.4 3.9 8 7.4 8H11.6C15.1 8 16.5 9.4 16.5 12.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22.5 6.9V11.1C22.5 14.6 21.1 16 17.6 16H16.5V12.9C16.5 9.4 15.1 8 11.6 8H8.5V6.9C8.5 3.4 9.9 2 13.4 2H17.6C21.1 2 22.5 3.4 22.5 6.9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const ProgressBar = () => (
    <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82" fill="none" className="client-testimonial-media-progressbar">
            <path d="M82 41C82 63.6437 63.6437 82 41 82C18.3563 82 0 63.6437 0 41C0 18.3563 18.3563 0 41 0C63.6437 0 82 18.3563 82 41ZM2.46 41C2.46 62.2851 19.7149 79.54 41 79.54C62.2851 79.54 79.54 62.2851 79.54 41C79.54 19.7149 62.2851 2.46 41 2.46C19.7149 2.46 2.46 19.7149 2.46 41Z" fill="currentColor" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 82 82" fill="none" className="client-testimonial-media-progressbar-progress">
            <path d="M62.2565 74.589L62.9249 75.6453L62.2565 74.589C57.8455 77.3805 52.9279 79.2759 47.7844 80.1668C42.641 81.0577 37.3725 80.9268 32.2796 79.7816C27.1866 78.6364 22.3693 76.4994 18.1022 73.4925C13.8353 70.4854 10.2024 66.6675 7.41094 62.2565C4.6195 57.8455 2.7242 52.9279 1.83326 47.7844C0.942314 42.6409 1.07316 37.3725 2.21835 32.2796L0.998802 32.0054L2.21835 32.2796C3.36354 27.1866 5.50061 22.3693 8.5076 18.1022C11.5146 13.8353 15.3325 10.2024 19.7435 7.41095C24.1545 4.61951 29.0722 2.7242 34.2155 1.83326C39.359 0.942305 44.6277 1.07317 49.7205 2.21836C54.8133 3.36355 59.6308 5.50064 63.8977 8.50761L64.4234 7.76164L63.8977 8.50761C68.1647 11.5146 71.7975 15.3325 74.589 19.7435C77.3805 24.1545 79.2759 29.0722 80.1668 34.2155C81.0577 39.359 80.9268 44.6276 79.7816 49.7205C78.6365 54.8133 76.4994 59.6308 73.4923 63.8977L74.4385 64.5645L73.4923 63.8978C70.4854 68.1647 66.6675 71.7977 62.2565 74.589Z" stroke="currentColor" strokeWidth="2.5" pathLength={100} />
        </svg>
    </>
);

const TestimonialNavButton = ({ testimonial, index }) => (
    <div
        className={`splide__slide${index === 0 ? ' is-active' : ''}`}
        role="button"
        aria-label={`Go to slide ${index + 1}`}
        style={{ marginBottom: 16, height: 'calc(25% - 12px)' }}
        {...(index === 0 && { 'aria-current': 'true' })}
    >
        <button type="button" className="client-testimonial-pagination">
            <figure className="client-testimonial-meida">
                <img width={testimonial.width} height={testimonial.height} alt={testimonial.name} loading="lazy" src={testimonial.image} className="client-testimonial-media-image" />
            </figure>
            <ProgressBar />
        </button>
    </div>
);

const TestimonialCard = ({ testimonial, index }) => (
    <div
        className={`splide__slide${index === 0 ? ' is-active is-visible' : ''}`}
        id={`splide01-slide0${index + 1}`}
        role="group"
        aria-roledescription="slide"
        aria-label={`${index + 1} of ${TESTIMONIALS.length}`}
        style={{ width: 'calc(100%)', height: 'auto' }}
    >
        <div className="client-testimonial-card">
            <div className="client-testimonial-card-icon" />
            <p className="client-testimonial-card-text">{testimonial.text}</p>
            <div className="client-testimonial-card-footer">
                <div className="client-testimonial-card-user">
                    <div className="client-testimonial-card-user-preview">
                        <figure className="client-testimonial-meida">
                            <img width={70} height={70} alt={testimonial.name} loading="lazy" src={testimonial.thumbImage} className="client-testimonial-media-image" />
                        </figure>
                        <ProgressBar />
                    </div>
                    <div>
                        <div className="client-testimonial-card-user-name text-bold">{testimonial.name}</div>
                        <div className="client-testimonial-card-user-designation">{testimonial.position}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const ReviewLogo = ({ src, alt }) => (
    <a href="#" className="review_logo-link w-inline-block">
        <img src={src} loading="lazy" alt={alt} />
    </a>
);

const InterestCheckbox = ({ value }) => (
    <button type="button" data-submit="ignore" tf-custom-select-option-value={value} className="contact_form_check display-flex is-center">
        <div className="checkbox_icon" />
        <div className="checkbox_label">{value}</div>
    </button>
);

const BudgetCheckbox = ({ value }) => (
    <button type="button" data-submit="ignore" tf-custom-select-option-value={value} className="contact_form_check display-flex is-center">
        <div className="checkbox_icon" />
        <div className="checkbox_label">{value}</div>
    </button>
);

const Contact = () => {
    const navigationSliderRef = useRef(null);
    const contentSliderRef = useRef(null);

    useEffect(() => {
        if (window.Splide && navigationSliderRef.current && contentSliderRef.current) {
            const navigationSlider = new window.Splide(navigationSliderRef.current, {
                type: 'loop',
                direction: 'ttb',
                height: '243.812px',
                autoHeight: false,
                perPage: 4,
                pagination: false,
                arrows: false,
                isNavigation: true,
            });

            const contentSlider = new window.Splide(contentSliderRef.current, {
                type: 'fade',
                pagination: false,
                arrows: false,
                autoplay: true,
                interval: 5000,
            });

            navigationSlider.sync(contentSlider);
            navigationSlider.mount();
            contentSlider.mount();
        }
    }, []);

    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
                <section className="section_contact">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="contact_grid">
                                <div className="contact_left display-vertical">
                                    <h1>
                                        Have a market challenge<span className="br"> </span>
                                        <span className="text-style-secondary-font">Let's unlock it together.</span>
                                    </h1>

                                    <div>
                                        <div className="margin-bottom margin-small">
                                            <div className="body-xl text-color-secondary">Connect directly</div>
                                        </div>
                                        <a href="#" className="copy-email-wrapper copy-parent w-inline-block">
                                            <div id="textToCopy2" className="footer_cta_text">contact@waselteam.com</div>
                                            <div className="copy-button is-two display-vertical is-center">
                                                <CopyIcon />
                                                <div data-gradient={1} className="copy-button-overlay" />
                                            </div>
                                            <div data-gradient={1} className="copy-result">
                                                <div>copied!</div>
                                            </div>
                                        </a>
                                    </div>

                                    <div tf-sliders="wrapper" className="client-testimonial-sliders-wrapper">
                                        <div className="client-testimonial-navigation-slider-wrapper">
                                            <div
                                                ref={navigationSliderRef}
                                                tf-slider="navigation"
                                                className="client-testimonial-navigation-slider splide"
                                                id="splide02"
                                            >
                                                <div className="splide__track splide__track--loop splide__track--ttb splide__track--draggable splide__track--nav" id="splide02-track" style={{ paddingTop: 0, paddingBottom: 0 }}>
                                                    <div className="splide__list" id="splide02-list" role="presentation" aria-orientation="vertical">
                                                        {TESTIMONIALS.map((testimonial, index) => (
                                                            <TestimonialNavButton key={testimonial.id} testimonial={testimonial} index={index} />
                                                        ))}
                                                    </div>
                                                </div>
                                                <span className="swiper-notification" aria-live="assertive" aria-atomic="true" />
                                            </div>
                                        </div>

                                        <div className="client-testimonial-content-slider-wrapper">
                                            <div
                                                ref={contentSliderRef}
                                                tf-slider="content"
                                                className="client-testimonial-content-slider splide"
                                                id="splide01"
                                            >
                                                <div className="splide__track splide__track--fade splide__track--ltr splide__track--draggable" id="splide01-track" style={{ paddingLeft: 0, paddingRight: 0 }} aria-live="polite" aria-atomic="true">
                                                    <div className="splide__list" id="splide01-list" role="presentation">
                                                        {TESTIMONIALS.map((testimonial, index) => (
                                                            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review_logo-wrapper display-flex">
                                        {REVIEW_LOGOS.map((logo, index) => (
                                            <ReviewLogo key={index} {...logo} />
                                        ))}
                                    </div>
                                </div>

                                <div id="w-node-a3ba80a6-31fc-eed1-caaa-3754f599e440-05fab082" className="contact_right">
                                    <div className="contact_form-block w-form">
                                        <form id="wf-form-Contact-Form" name="wf-form-Contact-Form" method="get" className="contact_form display-vertical" data-wf-page-id="67bd67370ac28e0c05fab082" data-wf-element-id="249d2cd8-37f7-9057-fe81-0ac00ca0fc61" aria-label="Contact Form">
                                            <div className="contact_form-inner-block display-flex">
                                                <div className="contact_form_field-wrapper">
                                                    <label htmlFor="name" className="contact_form_lebel body-l text-weight-medium">Name or Company</label>
                                                    <input className="contact_form_field w-input" maxLength={256} name="name" data-name="Name" placeholder="Enter Name" type="text" id="name" />
                                                </div>
                                                <div className="contact_form_field-wrapper">
                                                    <label htmlFor="email" className="contact_form_lebel body-l text-weight-medium">Your Email*</label>
                                                    <input className="contact_form_field w-input" maxLength={256} name="email" data-name="Email" placeholder="Enter Email" type="email" id="email" required />
                                                </div>
                                            </div>

                                            <div className="contact_form-inner-block">
                                                <label htmlFor="" className="contact_form_lebel">I need assistance with*</label>
                                                <div tf-custom-select-multiple="" tf-custom-select-wrapper="" className="position-relative">
                                                    <select id="Interested-In" name="Interested-In" data-name="Interested In" required multiple tf-custom-select-input="" className="contact_form_hidden-input w-select" tabIndex={-1}>
                                                        <option value="">Select multiple custom option</option>
                                                        {INTEREST_OPTIONS.map(option => (
                                                            <option key={option} value={option}>{option}</option>
                                                        ))}
                                                    </select>
                                                    <div className="contact_form_check-wrapper display-flex">
                                                        {INTEREST_OPTIONS.map(option => (
                                                            <InterestCheckbox key={option} value={option} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="contact_form-inner-block">
                                                <label htmlFor="" className="contact_form_lebel">Engagement Budget*</label>
                                                <div tf-custom-select-wrapper="" className="position-relative">
                                                    <input className="contact_form_hidden-input w-input" maxLength={256} name="Project-Budget" data-name="Project Budget" placeholder="Project Budget" tf-custom-select-input="" type="text" id="Project-Budget" required tabIndex={-1} />
                                                    <div className="contact_form_check-wrapper display-flex">
                                                        {BUDGET_OPTIONS.map(option => (
                                                            <BudgetCheckbox key={option} value={option} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="contact_form-inner-block">
                                                <label htmlFor="Message" className="contact_form_lebel">Market objectives & challenges*</label>
                                                <textarea placeholder="Describe your market entry goals and key challenges" maxLength={5000} id="Message" name="Message" data-name="Message" className="contact_form_text_field w-input" defaultValue={""} />
                                            </div>

                                            <input type="submit" data-wait="Please wait..." className="contact_form_button w-button" defaultValue="Submit" />
                                        </form>

                                        <div className="w-form-done" tabIndex={-1} role="region" aria-label="Contact Form success">
                                            <div>Thank you! Your submission has been received!</div>
                                        </div>
                                        <div className="w-form-fail" tabIndex={-1} role="region" aria-label="Contact Form failure">
                                            <div>Oops! Something went wrong while submitting the form.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Contact;