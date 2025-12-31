import React, { useEffect, useRef } from 'react';

// Data configurations
const SERVICE_SLIDES = [
    { id: 1, image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d94e5671cd299e19a24dae_service-slider-3-high.jpg', alt: 'government relations meeting' },
    { id: 2, image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b5b3236858ebec79732441_service-slider-2-high.jpg', alt: 'strategic partnership signing' },
    { id: 3, image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d94e5671cd299e19a24dae_service-slider-3-high.jpg', alt: 'ministerial meeting access' },
    { id: 4, image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d94e91c8a9cb38c9576b81_service-slider-4-high.jpg', alt: 'deal facilitation success' },
    { id: 5, image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b5b3236858ebec79732441_service-slider-2-high.jpg', alt: '' }
];

const CORE_SERVICES = [
    {
        id: '01',
        title: 'Government Relations',
        href: '/services/government-relations',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b1f4e6db0bda26bd26cacd_core-service-1-high.jpg',
        description: 'Delivering ministerial access solutions that combine strategic positioning with execution to unlock regulatory pathways',
        linkText: 'View service details',
        isActive: true,
        alt: ''
    },
    {
        id: '02',
        title: 'Market Entry Support',
        href: '/services/market-entry',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d706942a9764c6d4d158f2_core-service-mobile-app-low.webp',
        lazyImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d70694bedede1779d8aa3c_core-service-mobile-app-high.jpg',
        description: 'Delivering market access solutions that combine local expertise with strategic networks to accelerate MENA expansion',
        linkText: 'See service details',
        alt: 'market entry support'
    },
    {
        id: '03',
        title: 'Strategic Partnerships',
        href: '/services/strategic-partnerships',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d706c08d1c3060ecb941c7_core-service-web-app-low.webp',
        lazyImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d706c06561d1219bf28746_core-service-web-app-high.jpg',
        description: 'Delivering partnership solutions that combine relationship capital with strategic alignment to create lasting value',
        linkText: 'See service details',
        alt: 'strategic partnership facilitation'
    },
    {
        id: '04',
        title: 'Deal Facilitation',
        href: '/services/deal-facilitation',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d706f0f53741a37050423c_core-service-webflow-low.webp',
        lazyImage: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d706f0a79f0c901c03469c_core-service-webflow-high.jpg',
        description: 'Delivering closure-focused solutions that combine tactical navigation with momentum management to finalize agreements',
        linkText: 'See service details',
        alt: 'deal closure facilitation'
    }
];

const APPROACH_CARDS = [
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b475a572811e4459f4e09a_static-design-icon.svg',
        title: 'Intelligence',
        text: `We dive deep into your objectives, conducting stakeholder mapping and regulatory analysis to develop entry strategies that position you for accelerated market penetration`
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b6fe961651407268d79fd8_foundation-icon.svg',
        title: 'Access',
        text: 'Our team opens critical doors through direct ministerial introductions and executive connections, delivering relationships that unlock opportunities and overcome barriers.'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b6feaff171efceff6d1921_expansion-icon.svg',
        title: 'Execution',
        text: 'We drive sustainable momentum and help you realize measurable outcomes through continuous follow-up and strategic guidance at the right moment.'
    }
];

const PROCESS_STEPS = [
    {
        num: '001',
        title: 'Identify Your Market Objectives',
        text: 'Identify key access challenges and create tailored engagement strategies to accelerate your expansion',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b577a45d72d1df495cccb0_business-step-icon.svg'
    },
    {
        num: '002',
        title: 'Map Strategic Stakeholders',
        text: 'Map critical decision-makers and regulatory pathways to unlock your market opportunities',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b577a45d72d1df495cccb0_business-step-icon.svg'
    },
    {
        num: '003',
        title: 'Leverage Our Network & Your Vision',
        text: 'Combining your objectives with our connections to unlock high-impact opportunities',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b6c71abf8541d7489f64b3_handshake-icon.svg'
    },
    {
        num: '004',
        title: 'Execute Deal Closure',
        text: 'Delivering strategic outcomes that exceed expectations and unlock sustainable growth',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57a72027be6ac0c422f7f_result-sheet-icon.svg'
    }
];

const TESTIMONIALS_GROUP_1 = [
    {
        name: 'Sarah Al-Mansouri',
        position: 'CEO, MedTech Solutions MENA',
        img: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b2fb3d53859433ab0046c6_nuseir-yassin.png',
        text: 'Wasel EBDS opened doors we couldn\'t access for years. Within 48 hours, we had ministerial meetings scheduled. Their network across MENA healthcare institutions is unmatched. They don\'t just connect—they deliver results.'
    },
    {
        name: 'Michael Chen',
        position: 'Regional Director, GlobalTech Ventures',
        img: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b306fbc1a90c60620ce1b6_Rahat%20Ahmed.png',
        text: 'Working with Wasel on our Egypt market entry was transformative. They understood the regulatory landscape perfectly and executed with precision. What would\'ve taken us 18 months took 3 weeks. Exceptional value.'
    },
    {
        name: 'Dr. Ahmed Khalil',
        position: 'Managing Partner, Gulf Ventures Capital',
        img: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b3073e37c5fce4f02305c9_danny-menu.png',
        text: "Wasel's ability to navigate government relationships is extraordinary. They facilitated our licensing process with the Ministry of Investment and connected us with strategic partners. Their expertise in MENA business development is world-class."
    }
];

const TESTIMONIALS_GROUP_2 = [
    {
        name: 'Fatima Hassan',
        position: 'VP of Strategy, Infrastructure Holdings',
        img: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4211329b6fc32d099d2b1_arifur-rahaman.png',
        text: "Wasel took time to understand our industry challenges. They knew exactly who we needed to meet and delivered those connections flawlessly. We've seen tremendous traction in government contracts after their strategic intervention. I vouch for them completely."
    },
    {
        name: 'Omar Rashid',
        position: 'Chief Commercial Officer, Energy Solutions',
        img: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b42131553bf680ce6418b6_Ishti-alam.png',
        text: 'Wasel has a structured approach to government relations. Their execution-first methodology was key for us. They delivered on commitments ahead of schedule and remained responsive throughout. Our partnership expansion exceeded expectations.'
    },
    {
        name: 'Layla Mahmoud',
        position: 'Director of Business Development, Regional Pharmaceuticals',
        img: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67cfe710ff85e927f4fb2fa3_damien-haris.png',
        text: 'The Wasel team is exceptional at strategic business development with genuine passion for results. Working with them built a lasting partnership. They grasp complex stakeholder dynamics and take initiative to drive success.'
    }
];

// Reusable Components
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 18 18" fill="none">
        <path d="M12.129 9.9165L3 9.9165L3 8.4165L12.129 8.4165L8.106 4.3935L9.1665 3.333L15 9.1665L9.1665 15L8.106 13.9395L12.129 9.9165Z" fill="currentColor" />
    </svg>
);

const QuoteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={16} viewBox="0 0 22 16" fill="none" className="testimonail_icon">
        <g opacity="0.8">
            <path d="M9.18681 1.14286C9.18681 0.511675 8.67514 0 8.04396 0H1.14286C0.511675 0 0 0.511676 0 1.14286V8.1203C0 8.75148 0.511675 9.26316 1.14286 9.26316H3.16862C4.01655 9.26316 4.5692 10.1541 4.1925 10.9137L2.48882 14.3494C2.11212 15.1091 2.66477 16 3.5127 16H5.18021C5.59178 16 5.97157 15.7787 6.1745 15.4206L9.03825 10.3674C9.13563 10.1956 9.18681 10.0014 9.18681 9.80394V1.14286Z" fill="currentColor" />
            <path d="M21.7143 1.14286C21.7143 0.511675 21.2026 0 20.5714 0H13.6703C13.0391 0 12.5275 0.511676 12.5275 1.14286V8.1203C12.5275 8.75148 13.0391 9.26316 13.6703 9.26316H15.6961C16.544 9.26316 17.0967 10.1541 16.72 10.9137L15.0163 14.3494C14.6396 15.1091 15.1922 16 16.0402 16H17.7077C18.1193 16 18.499 15.7787 18.702 15.4206L21.5657 10.3674C21.6631 10.1956 21.7143 10.0014 21.7143 9.80394V1.14286Z" fill="currentColor" />
        </g>
    </svg>
);

const ServiceSlide = ({ image, alt }) => (
    <div className="swiper-slide" style={{ marginRight: 32 }}>
        <figure className="service_slider_item position-relative overflow-hidden">
            <img
                className="cover-image"
                src={image}
                alt={alt}
                width={614}
                height={459}
                loading="eager"
                fetchPriority="low"
                decoding="async"
            />
        </figure>
    </div>
);

const CoreServiceLink = ({ service }) => (
    <a
        role="listitem"
        href={service.href}
        className={`core-service_link is-two w-inline-block display-flex position-relative${service.isActive ? ' is-active' : ''}`}
    >
        <div className="core-service_content display-flex is-left">
            <div className="heading-style-h3">{service.id}</div>
            <h3 className="heading-style-h2">{service.title}</h3>
        </div>
        <div className="core-service_icon display-flex is-center">
            <ArrowIcon />
        </div>
        <div className="core-service-border position-absolute" />
    </a>
);

const CoreServiceMedia = ({ service }) => (
    <figure className={`core-service_figure position-relative overflow-hidden${service.isActive ? ' is-active' : ''}`}>
        <img
            className="cover-image"
            src={service.image}
            {...(service.lazyImage && { 'data-lazy-src': service.lazyImage })}
            alt={service.alt}
            width={388}
            height={243}
            loading="lazy"
            fetchPriority="low"
            decoding="async"
        />
    </figure>
);

const CoreServiceContent = ({ service }) => (
    <div className={`core-service_right_content${service.isActive ? ' is-active' : ''}`}>
        <h3 className="heading-style-h2">{service.title}</h3>
        <p className={`core-service_text is-two body-l${service.isActive ? ' is-active' : ''}`}>
            {service.description}
        </p>
        <div className="is-magnatic" style={{
            willChange: 'transform',
            transform: 'translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            transformStyle: 'preserve-3d'
        }}>
            <a
                data-w-id="421c0217-3615-29cf-ea8c-db753f812d3c"
                href={service.href}
                className="footer_social-link is-service w-inline-block"
            >
                <div>{service.linkText}</div>
                <div className="footer_social-overlay" />
                <div
                    style={{
                        transform: 'translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                        transformStyle: 'preserve-3d'
                    }}
                    className="button-hover-bg"
                />
            </a>
        </div>
    </div>
);

const ApproachCard = ({ card }) => (
    <div className="core-value_card is-center">
        <div className="margin-bottom margin-custom1">
            <img src={card.icon} loading="lazy" alt="" />
        </div>
        <div className="margin-bottom margin-custom2">
            <h3 className="core-value_card_title">{card.title}</h3>
        </div>
        <p className="core-value_card_text">{card.text}</p>
    </div>
);

const ProcessStep = ({ step }) => (
    <div className="process_item display-flex is-center">
        <div className="process_item_content">
            <div>//{step.num}</div>
            <h3 className="process_item_title heading-style-h2">{step.title}</h3>
            <p className="body-l">{step.text}</p>
        </div>
        <div className="process_item_icon-wrapper">
            <div className="process_item_icon display-flex is-center">
                <img src={step.icon} loading="lazy" alt="" />
            </div>
            <div className="process_item_button">
                <div className="is-magnatic" style={{
                    willChange: 'transform',
                    transform: 'translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                    transformStyle: 'preserve-3d'
                }}>
                    <a
                        data-w-id="8bb02b6a-0dfa-c39d-4ebf-2f7056810763"
                        href="/projects"
                        className="button is-small w-inline-block is-gradient"
                    >
                        <div className="button-text">View all deals</div>
                        <div
                            className="button-hover-bg"
                            style={{
                                transform: 'translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                transformStyle: 'preserve-3d'
                            }}
                        ></div>
                    </a>
                </div>
            </div>
        </div>
        <div className="core-service-border position-absolute pointer-events-none" />
    </div>
);

const TestimonialCard = ({ testimonial }) => (
    <div className="swiper-slide" style={{ width: 414, marginRight: 24 }}>
        <div className="testimonail_item is-two">
            <div className="testimonail_content">
                <QuoteIcon />
                <p className="testimonail_text">{testimonial.text}</p>
            </div>
            <div className="testimonail_author">
                <img
                    src={testimonial.img}
                    loading="lazy"
                    alt={testimonial.name}
                    className="testimonail_author-image"
                />
                <div className="testimonail_author-content">
                    <div className="testimonail_author_name body-l">{testimonial.name}</div>
                    <div className="testimonail_author_designation">{testimonial.position}</div>
                </div>
            </div>
        </div>
    </div>
);

const Services = () => {
    const serviceSwiperRef = useRef(null);
    const testimonialSwiper1Ref = useRef(null);
    const testimonialSwiper2Ref = useRef(null);

    useEffect(() => {
        const initSwiper = (ref, config) => {
            if (ref.current && window.Swiper) {
                new window.Swiper(ref.current, config);
            }
        };

        initSwiper(serviceSwiperRef, {
            slidesPerView: 'auto',
            spaceBetween: 32,
            centeredSlides: true,
            loop: true,
            speed: 600,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            grabCursor: true,
        });

        const testimonialConfig = {
            slidesPerView: 'auto',
            spaceBetween: 24,
            loop: true,
            speed: 600,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
        };

        initSwiper(testimonialSwiper1Ref, testimonialConfig);
        initSwiper(testimonialSwiper2Ref, testimonialConfig);
    }, []);

    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
                <header className="section_other-header">
                    <div className="padding-global padding-xxlarge">
                        <div className="container-large">
                            <div className="header_component">
                                <div className="header_content">
                                    <h1 className="home-header_title">
                                        <div className="display-inline">
                                            Unlocking Markets<span className="br"> </span>with{" "}
                                        </div>
                                        <div className="display-inline text-style-secondary-font">
                                            Strategic Access &amp; Execution
                                        </div>
                                    </h1>
                                    <div className="home-header_content-inner display-vertical is-left">
                                        <p className="header-text text-size-large">
                                            We unlock critical access and drive market expansion with
                                            strategic connections and proven execution
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div ref={serviceSwiperRef} className="service-swiper overflow-hidden swiper">
                        <div className="swiper-wrapper">
                            {SERVICE_SLIDES.map((slide) => (
                                <ServiceSlide key={slide.id} {...slide} />
                            ))}
                        </div>
                    </div>
                </header>

                <section className="section_core-service">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Core <span className="text-style-secondary-font">Solutions</span>
                                </h2>
                            </div>
                            <div className="core-service_grid">
                                <div role="list" className="core-service_left display-vertical is-left">
                                    {CORE_SERVICES.map((service) => (
                                        <CoreServiceLink key={service.id} service={service} />
                                    ))}
                                </div>
                                <div id="w-node-_421c0217-3615-29cf-ea8c-db753f812d2c-d225d80f" className="core-service_right display-vertical">
                                    <div className="core-service_media">
                                        {CORE_SERVICES.map((service) => (
                                            <CoreServiceMedia key={service.id} service={service} />
                                        ))}
                                    </div>
                                    <div className="core-service_right_content-wrap">
                                        {CORE_SERVICES.map((service) => (
                                            <CoreServiceContent key={service.id} service={service} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_core-values">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Our <span className="text-style-secondary-font">methodology</span>
                                </h2>
                            </div>
                            <div className="core-value_gird">
                                {APPROACH_CARDS.map((card, index) => (
                                    <ApproachCard key={index} card={card} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_process">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="header_content">
                                <h2 className="section_title heading-style-h1 text-color-alternate">
                                    Proven Execution Framework&nbsp;&nbsp;for
                                    <span className="br hide-mobile-portrait"> </span>
                                    <span className="text-style-secondary-font">Delivering Strategic</span>
                                    <span className="br hide-mobile-portrait"> </span>
                                    <span className="text-style-secondary-font">Market Access</span>
                                </h2>
                                <p className="section-text text-color-alternate">
                                    Our systematic execution framework ensures strategic outcomes, focusing
                                    on access, momentum, and measurable results at every stage
                                </p>
                            </div>
                            <div className="process_item_grid">
                                {PROCESS_STEPS.map((step, index) => (
                                    <ProcessStep key={index} step={step} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <img
                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57ca4658f71648983ee29_process-section-bg.png"
                        loading="lazy"
                        sizes="(max-width: 1440px) 100vw, 1440px"
                        srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57ca4658f71648983ee29_process-section-bg-p-500.png 500w, https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57ca4658f71648983ee29_process-section-bg-p-800.png 800w, https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57ca4658f71648983ee29_process-section-bg-p-1080.png 1080w, https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57ca4658f71648983ee29_process-section-bg.png 1440w"
                        alt=""
                        className="process_bg-gradient"
                    />
                </section>

                <section className="section_testimonial overflow-hidden">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Trusted by <span className="text-style-secondary-font">Industry Leaders</span>
                                </h2>
                            </div>
                            <div className="testimonail_grid">
                                <div ref={testimonialSwiper1Ref} className="testimonial-swiper swiper">
                                    <div className="swiper-wrapper">
                                        {TESTIMONIALS_GROUP_1.map((testimonial, index) => (
                                            <TestimonialCard key={index} testimonial={testimonial} />
                                        ))}
                                    </div>
                                </div>

                                <div ref={testimonialSwiper2Ref} className="testimonial-swiper hide-tablet swiper">
                                    <div className="swiper-wrapper">
                                        {TESTIMONIALS_GROUP_2.map((testimonial, index) => (
                                            <TestimonialCard key={index} testimonial={testimonial} />
                                        ))}
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

export default Services;