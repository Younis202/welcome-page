import React from 'react';

// ============================================================
// DATA CONFIGURATIONS
// ============================================================

const HEADER_PROJECTS = [
    {
        href: '/projects/altris-ai',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4cd215468e2baaaf8dea_nas-house-work-high.jpg',
        alt: 'altris ai market entry',
        companyName: 'Altris AI',
        dataWId: null,
        magneticTransform: 'translate3d(0.0002rem, 0.00012rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
    },
    {
        href: '/projects/fintech-licensing',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4e664f95d500738d7095_reviewxpo-work-high.jpg',
        alt: 'fintech regulatory approval',
        companyName: 'FinTech Solutions',
        dataWId: null,
        magneticTransform: 'translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
    },
    {
        href: '/projects/manufacturing-deal',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4e22a224221439807852_nas-travel-wok-high.jpg',
        alt: 'manufacturing partnership',
        companyName: 'Industrial Corp',
        dataWId: '7bf67379-0a92-4766-1bb2-1a0b506e9e06',
        magneticTransform: 'translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
    },
    {
        href: '/projects/energy-partnership',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bd4f10432130b7246ae876_dd-sumit-work-high.jpg',
        alt: 'energy sector deal',
        companyName: 'Energy Ventures',
        dataWId: '7bf67379-0a92-4766-1bb2-1a0b506e9e2d',
        magneticTransform: 'translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)'
    }
];

const DESIGN_PROCESS_STEPS = [
    {
        number: '001',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bff7f640912009094a64fd_heart-icon.svg',
        title: 'Submit Objectives',
        description: "We'll examine your expansion goals thoroughly and devise a strategic plan for unlocking market access."
    },
    {
        number: '002',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffa4bec44a21c544a32d6_tictactoi.svg',
        title: 'Begin Engagement',
        description: 'Once the strategy is finalized, our team will commence outreach promptly to ensure on-time deal execution.'
    },
    {
        number: '003',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffa82bb83378bdacd6b5e_desktop-settings.svg',
        title: 'Unlimited Follow-Up',
        description: 'We value your objectives. We collect feedback, refine approach unless deal closure satisfaction'
    },
    {
        number: '004',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffaa5b7cb67f2e43f6136_code.svg',
        title: 'Stakeholder Onboarding',
        description: 'Effortless Relationship Transfer & Expert Training for Your Team on Engagement, Follow-Up, and Execution'
    },
    {
        number: '005',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffb1e3e5f1a358c9f068c_quality.svg',
        title: 'Deal Closure',
        description: "With all stakeholders aligned, we'll manage final negotiations and documentation, quickly closing your partnership!"
    },
    {
        number: '006',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffba93278e50f2580a7d5_grid.svg',
        title: 'Stay Connected',
        description: 'Always On WhatsApp, Email, Teams to get Instant Support for Follow-Ups, Assistance & Relationship Management'
    }
];

const SUPPORT_SERVICES = [
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c14cf45a3dd5cefd23b615_chrome-extention.svg',
        title: 'Network Intelligence',
        text: 'We give you personalized market intelligence that allows you to identify new opportunities and expand your regional presence with ease!'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c14d54384b43d05cd94683_webflow-icon.svg',
        title: 'Relationship Management',
        text: 'Our retainer-based relationship management packages are perfect if you need strategic access experts always ready when opportunities arise.'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c14d6b5a3dd5cefd2450e7_handover-icon.svg',
        title: 'Stakeholder Training',
        text: 'We train you and your team on how to navigate government relations and maintain strategic partnerships effectively.'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c14d6b5a3dd5cefd2450e7_handover-icon.svg',
        title: 'Documentation',
        text: 'We provide comprehensive documentation with everything you need to know about regional market dynamics and execution protocols.'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c14cf45a3dd5cefd23b615_chrome-extention.svg',
        title: 'Team Enablement',
        text: 'We can provide training for your in-house business development or regional teams on how to leverage relationships effectively.'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c14d54384b43d05cd94683_webflow-icon.svg',
        title: 'Direct Access',
        text: 'We are always connected via WhatsApp/Email. If you need introductions, strategic guidance or deal support, we are always available.'
    }
];

const INTEGRATION_ITEMS = [
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c19ff5f96269c0d438d392_airtable-svgrepo-com%201.svg',
        name: 'Egypt Ministry'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c1a15402f106531ebdbc4e_hubspot-svgrepo-com%201.svg',
        name: 'UAE Authorities'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c1a17635c9ff40f40f68e5_notion-svgrepo-com%201.svg',
        name: 'Saudi Arabia'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c1a15402f106531ebdbc4e_hubspot-svgrepo-com%201.svg',
        name: 'Qatar Networks'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c1a1b6bd4613cd77c33722_webflow-icon%20(1)%201.svg',
        name: 'Jordan Access'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c1a1d5c7059a51dd85e9e6_fathom-svgrepo-com%201.svg',
        name: 'Morocco Links'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c1a1f5c7059a51dd860ac9_google-sheets-icon%201.svg',
        name: 'Kuwait Partners'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c1a1b6bd4613cd77c33722_webflow-icon%20(1)%201.svg',
        name: 'Oman Channels'
    }
];

const OTHER_SERVICES = [
    {
        href: '/services/government-relations',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffee74b5b818456b278c2_other-service-1-high.jpg',
        title: 'Government Relations',
        description: 'We unlock ministerial access that not only accelerates your expansion but also truly connects ...'
    },
    {
        href: '/services/market-entry',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c000326d559e692450982b_other-service-2-high.jpg',
        title: 'Market Entry Support',
        description: 'We facilitate market access that not only drives your growth but also truly connects ...'
    },
    {
        href: '/services/strategic-partnerships',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffee74b5b818456b278c2_other-service-1-high.jpg',
        title: 'Strategic Partnerships',
        description: 'We create partnerships that not only unlock opportunities but also truly connect ...'
    }
];

// ============================================================
// REUSABLE COMPONENTS
// ============================================================

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 14 14" fill="none">
        <g opacity="0.9">
            <path
                d="M4.8125 2.625L9.1875 7L4.8125 11.375"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

const ProjectItem = ({ href, image, alt, companyName, dataWId, magneticTransform }) => (
    <div className="project_single-item">
        <a href={href} className="project_figure w-inline-block position-relative overflow-hidden">
            <img
                className="cover-image"
                src={image}
                alt={alt}
                width={614}
                height={576}
                loading="lazy"
                fetchPriority="low"
                decoding="async"
            />
        </a>
        <div className="project_content">
            <h2 className="heading-style-h2">
                <div className="display-inline">Wasel unlocked </div>
                <div className="display-inline text-style-secondary-font">{companyName} </div>
                <div className="display-inline">strategic access to&nbsp;&nbsp;MENA markets</div>
            </h2>
            <div
                className="is-magnatic"
                style={{
                    willChange: "transform",
                    transform: magneticTransform,
                    transformStyle: "preserve-3d"
                }}
            >
                <a
                    {...(dataWId && { 'data-w-id': dataWId })}
                    href={href}
                    className="button is-secondary w-inline-block is-secondary"
                >
                    <div>View case study</div>
                    <ArrowIcon />
                    <div className="button-hover-bg-two" />
                </a>
            </div>
        </div>
    </div>
);

const DesignProcessItem = ({ number, icon, title, description }) => (
    <div className="design-process_item">
        <div className="design-process_icon-wrapper display-flex">
            <div className="design-process_icon display-flex is-center">
                <img src={icon} loading="lazy" alt="" />
            </div>
            <div className="body-l">{number}</div>
        </div>
        <div className="design-process_content display-vertical">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    </div>
);

const SupportCard = ({ icon, title, text }) => (
    <div className="core-value_card is-dark">
        <div className="margin-bottom margin-custom1">
            <img src={icon} loading="lazy" alt="" />
        </div>
        <div className="margin-bottom margin-custom2">
            <h3 className="core-value_card_title">{title}</h3>
        </div>
        <p className="core-value_card_text">{text}</p>
    </div>
);

const IntegrationBadge = ({ icon, name }) => (
    <div className="integration-badge display-flex is-left">
        <div className="integration-icon display-flex is-center">
            <img src={icon} loading="lazy" alt="" />
        </div>
        <div className="body-l">{name}</div>
    </div>
);

const OtherServiceCard = ({ href, image, title, description }) => (
    <div className="other-service_card display-vertical">
        <a href={href} className="other-service_figure position-relative overflow-hidden w-inline-block">
            <img
                className="cover-image"
                src={image}
                alt="Strategic service"
                width={414}
                height={259}
                loading="lazy"
                fetchPriority="low"
                decoding="async"
            />
        </a>
        <div className="other-service_content">
            <div className="margin-bottom margin-small">
                <h3>{title}</h3>
            </div>
            <p>{description}</p>
        </div>
        <div className="display-flex">
            <a
                data-w-id="bdbc966e-3c4b-ff76-f07f-0dcb8ba5abe8"
                href={href}
                className="button is-secondary w-inline-block is-secondary"
            >
                <div>View service details</div>
                <ArrowIcon />
                <div className="button-hover-bg-two" />
            </a>
        </div>
    </div>
);

// ============================================================
// MAIN COMPONENT
// ============================================================

const ServiceTwo = () => {
    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
                {/* Header Section */}
                <header className="section_other-header">
                    <div className="padding-global padding-xxlarge">
                        <div className="container-large">
                            <div className="header_component">
                                <div className="header_content">
                                    <h1 className="home-header_title">
                                        <div className="display-inline">Turning Your Objectives into </div>
                                        <div className="br hide-mobile-portrait" />
                                        <div className="display-inline">
                                            Strategic <span className="text-style-secondary-font">Outcomes</span>
                                        </div>
                                    </h1>
                                    <div className="home-header_content-inner display-vertical is-left">
                                        <p className="service_header-text text-size-large">
                                            We facilitate deal closures that not only accelerate your expansion but also
                                            truly unlock regional markets, delivering partnerships that make
                                            strategic impact
                                        </p>
                                    </div>
                                </div>
                                <div className="home-project_grid">
                                    {HEADER_PROJECTS.map((project, index) => (
                                        <ProjectItem key={index} {...project} />
                                    ))}
                                </div>
                                <div className="margin-top margin-xlarge">
                                    <div className="display-flex is-center">
                                        <div
                                            className="is-magnatic"
                                            style={{
                                                willChange: "transform",
                                                transform: "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                transformStyle: "preserve-3d"
                                            }}
                                        >
                                            <a
                                                data-w-id="8bb02b6a-0dfa-c39d-4ebf-2f7056810763"
                                                href="/projects"
                                                className="button is-small w-inline-block"
                                            >
                                                <div className="button-text">View all deals</div>
                                                <div
                                                    className="button-hover-bg"
                                                    style={{
                                                        transform: "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                        transformStyle: "preserve-3d"
                                                    }}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Design Process Section */}
                <div className="section_design-process">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-flex">
                                <h2 className="section_title heading-style-h1">
                                    Our <span className="text-style-secondary-font">Deal Facilitation </span>
                                    <span className="br hide-mobile-portrait"> </span>process
                                </h2>
                                <p className="section-text is-service body-l">
                                    Our expert business development team brings your expansion objectives to reality with precision
                                    and strategic execution, ensuring seamless, high-quality closure. With
                                    our proven frameworks, we create lasting, impactful partnerships you'll be
                                    proud to leverage
                                </p>
                            </div>
                            <div className="design-process_grid">
                                {DESIGN_PROCESS_STEPS.map((step, index) => (
                                    <DesignProcessItem key={index} {...step} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Support Section */}
                <section className="section_support position-relative">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1 text-color-alternate">
                                    <span className="text-style-secondary-font">Post closure</span> support. We
                                    <span className="br hide-mobile-portrait"> </span>are always here.
                                </h2>
                            </div>
                            <div className="support_grid">
                                {SUPPORT_SERVICES.map((service, index) => (
                                    <SupportCard key={index} {...service} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <picture className="bg-absolute-shape">
                        <source
                            srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c1401bf85dac5f3ac2f219_excellent-bg-mobile.webp"
                            media="(max-width: 375px)"
                        />
                        <img
                            className="cover-image"
                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c0219e7255db47324d1333_excilent-bg.png"
                            alt=""
                            width="100%"
                            height="100%"
                            loading="lazy"
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                </section>

                {/* Integrations Section */}
                <div className="section_integrations padding-section">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="section_header is-flex">
                                <h2 className="section_title heading-style-h1">
                                    <span className="text-style-secondary-font">Regional Access?</span> We've
                                    <span className="br hide-tablet"> </span>Got You Covered.
                                </h2>
                                <p className="section-text is-service body-l">
                                    Connect with decision-makers across MENA and unlock your expansion's
                                    full potential. From ministries and regulatory bodies to enterprise networks, we
                                    facilitate access to nearly any stakeholder across the region.
                                </p>
                            </div>
                            <div className="display-vertical is-center">
                                <div className="webflow-badge display-flex is-center">
                                    <img
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c2b121db46676dd35c3120_webflow-icon-2.svg"
                                        loading="lazy"
                                        alt="Wasel network"
                                    />
                                    <div className="heading-style-h3">Wasel Network</div>
                                </div>
                                <div className="integration-divider" />
                            </div>
                        </div>
                    </div>
                    <div
                        data-direction=""
                        className="splide common-marquee-slider splide--loop splide--ltr splide--draggable is-active is-overflow is-initialized"
                        id="splide01"
                        role="region"
                        aria-roledescription="carousel"
                    >
                        <div
                            className="splide__track splide__track--loop splide__track--ltr splide__track--draggable"
                            id="splide01-track"
                            style={{ paddingLeft: 0, paddingRight: 0 }}
                            aria-live="off"
                            aria-atomic="true"
                        >
                            <div
                                className="splide__list"
                                id="splide01-list"
                                role="presentation"
                                style={{ transform: "translateX(-2410.88px)" }}
                            >
                                {/* Clone Slides - First Set */}
                                {INTEGRATION_ITEMS.map((item, index) => (
                                    <div
                                        key={`clone-first-${index}`}
                                        className={`splide__slide splide__slide--clone${index === 4 ? ' is-active' : ''}`}
                                        id={`splide01-clone${String(index + 1).padStart(2, '0')}`}
                                        role="group"
                                        aria-roledescription="slide"
                                        aria-label={`${index + 1} of 8`}
                                        style={{ marginRight: 24 }}
                                        aria-hidden="true"
                                    >
                                        <IntegrationBadge {...item} />
                                    </div>
                                ))}

                                {/* Original Slides */}
                                {INTEGRATION_ITEMS.map((item, index) => (
                                    <div
                                        key={`original-${index}`}
                                        className={`splide__slide${index === 3 ? ' is-prev' : ''}${index === 4 ? ' is-visible is-active' : ''}${index === 5 ? ' is-visible is-next' : ''}${index === 6 || index === 7 ? ' is-visible' : ''}`}
                                        id={`splide01-slide${String(index + 1).padStart(2, '0')}`}
                                        role="group"
                                        aria-roledescription="slide"
                                        aria-label={`${index + 1} of 8`}
                                        style={{ marginRight: 24 }}
                                        {...(index < 3 && { 'aria-hidden': 'true' })}
                                    >
                                        <IntegrationBadge {...item} />
                                    </div>
                                ))}

                                {/* Clone Slides - Second Set */}
                                {INTEGRATION_ITEMS.map((item, index) => (
                                    <div
                                        key={`clone-second-${index}`}
                                        className={`splide__slide splide__slide--clone${index === 0 || index === 1 ? ' is-visible' : ''}${index === 4 ? ' is-active' : ''}`}
                                        id={`splide01-clone${String(index + 9).padStart(2, '0')}`}
                                        role="group"
                                        aria-roledescription="slide"
                                        aria-label={`${index + 1} of 8`}
                                        style={{ marginRight: 24 }}
                                        {...(index > 1 && { 'aria-hidden': 'true' })}
                                    >
                                        <IntegrationBadge {...item} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Other Services Section */}
                <section className="section_other-services">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Other <span className="text-style-secondary-font">solutions</span>
                                </h2>
                            </div>
                            <div className="other-services_grid">
                                {OTHER_SERVICES.map((service, index) => (
                                    <OtherServiceCard key={index} {...service} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ServiceTwo;