import React from 'react';

// ============================================================
// DATA CONFIGURATIONS
// ============================================================

const DESIGN_PROCESS_STEPS = [
    {
        number: '001',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bff7f640912009094a64fd_heart-icon.svg',
        title: "Let's Connect",
        description: "We want to understand your market objectives deeply. Your expansion goals, target regions and strategic priorities drive everything we do, so let us"
    },
    {
        number: '002',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffa4bec44a21c544a32d6_tictactoi.svg',
        title: 'Stakeholder Mapping',
        description: "We're a strategic and connected team that unlocks market access by leveraging every relationship and opportunity"
    },
    {
        number: '003',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffa82bb83378bdacd6b5e_desktop-settings.svg',
        title: 'Access Strategy',
        description: 'Now things start to align. We develop your market entry roadmap and create the pathway to key decision-makers, building the foundations'
    },
    {
        number: '004',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffaa5b7cb67f2e43f6136_code.svg',
        title: 'Executive Engagement',
        description: "Our network activation specialists connect you with ministry-level contacts, regulatory authorities, and strategic partners across MENA"
    },
    {
        number: '005',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffb1e3e5f1a358c9f068c_quality.svg',
        title: 'Momentum Management',
        description: "Progress tracking ready—we rigorously manage every engagement touchpoint to ensure momentum and readiness for partnership. Strategic execution ahead!"
    },
    {
        number: '006',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffba93278e50f2580a7d5_grid.svg',
        title: 'Deal Closure!',
        description: '3...2...1... Success! Your market entry is secured. We deliver results and watch your regional presence expand with strategic impact.'
    }
];

const CORE_VALUES = [
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c02cacd9ea0f26bb5ae4da_blueprinnt-icon.svg',
        title: 'Intelligence',
        text: "We dive deep into your objectives, conducting stakeholder mapping and regulatory analysis to develop tailored strategies that position you for accelerated market penetration."
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

const EXCELLENCE_ITEMS = [
    {
        number: '001',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c01087aa70a95dc2666593_revision-icon.svg',
        title: 'Unlimited Follow-Up Support',
        text: "We offer unlimited follow-up meetings as standard. Rest assured that connections remain active and opportunities stay open!"
    },
    {
        number: '002',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c0200dc5b1446fccbaf4dc_hidden-fees-icon.svg',
        title: 'No Hidden Fees',
        text: 'Transparent business development services with no hidden fees, delivering clear, performance-based pricing for your expansion'
    },
    {
        number: '003',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c02042f98a35e36081b3ca_process-icon.svg',
        title: 'A Strategic Process',
        text: 'We focus on personalized execution frameworks that make your market entry smooth, efficient, and results-driven from start to finish'
    },
    {
        number: '004',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c020b2859565df01fbcb78_sheet-icon.svg',
        title: 'Efficient Relationship Management',
        text: 'With our efficient stakeholder coordination, we ensure seamless engagement, delivering access on schedule and with precision'
    },
    {
        number: '005',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c020ebc1250a94c3f2016c_track-icon.svg',
        title: 'Proven Track Record',
        text: "With our proven track record, we've built lasting partnerships and deliver market access results you can count on"
    }
];

const CTA_LIST_ITEMS = [
    'Strategic, Results-Driven Access',
    'Optimized for Deal Closure & Expansion',
    'Unlimited Support & Clear, Transparent Agreements',
    'Fast, Responsive, and Scalable Engagement'
];

const OTHER_SERVICES = [
    {
        href: '/services/market-entry',
        imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffee659183921f02be7b7_other-service-1-low.webp',
        imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffee74b5b818456b278c2_other-service-1-high.jpg',
        title: 'Market Entry Support',
        description: 'We unlock market access that not only accelerates your growth but also truly connects ...'
    },
    {
        href: '/services/strategic-partnerships',
        imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c00032441d1178ff95f846_other-service-2-low.webp',
        imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c000326d559e692450982b_other-service-2-high.jpg',
        title: 'Strategic Partnerships',
        description: 'We facilitate partnerships that not only drive your expansion but also truly connect ...'
    },
    {
        href: '/services/deal-facilitation',
        imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffee659183921f02be7b7_other-service-1-low.webp',
        imageHigh: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffee74b5b818456b278c2_other-service-1-high.jpg',
        title: 'Deal Facilitation',
        description: 'We close strategic deals that not only unlock your potential but also truly connect ...'
    }
];

const WORK_PROCESS_FEATURES = [
    'Ministerial Access',
    'Custom Strategy With Market Intelligence',
    'Ultra-Fast Expedited Engagement Available'
];

// ============================================================
// REUSABLE COMPONENTS
// ============================================================

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

const CoreValueCard = ({ icon, title, text }) => (
    <div className="core-value_card is-center">
        <div className="margin-bottom margin-custom1">
            <img src={icon} loading="lazy" alt="" />
        </div>
        <div className="margin-bottom margin-custom2">
            <h3 className="core-value_card_title">{title}</h3>
        </div>
        <p className="core-value_card_text">{text}</p>
    </div>
);

const ExcellenceItem = ({ number, icon, title, text }) => (
    <div className="excellence_item">
        <div className="excellence_content display-vertical">
            <div>//{number}</div>
            <h3 className="heading-style-h3">{title}</h3>
        </div>
        <div className="excellence_icon display-flex is-center">
            <img src={icon} loading="lazy" alt="" />
            <div gradient={1} className="gradient_icon-gradient pointer-events-none" />
        </div>
        <p className="excellence_item_text body-l">{text}</p>
        <div className="process-item-border position-absolute" />
    </div>
);

const OtherServiceCard = ({ href, imageLow, imageHigh, title, description }) => (
    <div className="other-service_card display-vertical">
        <a href={href} className="other-service_figure position-relative overflow-hidden w-inline-block">
            <img
                className="cover-image"
                src={imageLow}
                data-lazy-src={imageHigh}
                alt="Strategic service"
                width={414}
                height={259}
                loading="lazy"
                fetchpriority="low"
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
                <div className="button-hover-bg-two" />
            </a>
        </div>
    </div>
);

const MagnaticButton = ({ href, text }) => (
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
            href={href}
            className="button is-small w-inline-block"
        >
            <div className="button-text">{text}</div>
            <div
                className="button-hover-bg"
                style={{
                    transform: "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                }}
            />
        </a>
    </div>
);

// ============================================================
// MAIN COMPONENT
// ============================================================

const ServiceOne = () => {
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
                                        <div className="display-inline text-style-secondary-font">
                                            Government relations and market access{" "}
                                        </div>
                                        <div className="br hide-mobile-portrait" />
                                        <div className="display-inline">
                                            &nbsp;powered to accelerate your expansion
                                        </div>
                                    </h1>
                                    <div className="home-header_content-inner display-vertical is-left">
                                        <p className="service_header-text text-size-large">
                                            Government relations and strategic access powered to unlock your expansion goals with
                                            execution-focused and high-impact solutions
                                        </p>
                                    </div>
                                </div>
                                <div className="services_header-grid">
                                    <figure className="services_header-figure position-relative overflow-hidden">
                                        <img
                                            className="cover-image"
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bede953b2a09cfc2af8fe2_reviewxpo-service-mockup-high.jpg"
                                            alt="Strategic partnership success"
                                            width={874}
                                            height={585}
                                            loading="eager"
                                            fetchpriority="high"
                                            decoding="sync"
                                        />
                                    </figure>
                                    <div className="service_review display-vertical position-relative">
                                        <div className="service_review_content display-vertical">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="21.5" viewBox="0 0 22 16" fill="none">
                                                <g opacity="0.8">
                                                    <path
                                                        d="M9.18681 1.14286C9.18681 0.511675 8.67514 0 8.04396 0H1.14286C0.511675 0 0 0.511676 0 1.14286V8.1203C0 8.75148 0.511675 9.26316 1.14286 9.26316H3.16862C4.01655 9.26316 4.5692 10.1541 4.1925 10.9137L2.48882 14.3494C2.11212 15.1091 2.66477 16 3.5127 16H5.18021C5.59178 16 5.97157 15.7787 6.1745 15.4206L9.03825 10.3674C9.13563 10.1956 9.18681 10.0014 9.18681 9.80394V1.14286Z"
                                                        fill="#677084"
                                                    />
                                                    <path
                                                        d="M21.7143 1.14286C21.7143 0.511675 21.2026 0 20.5714 0H13.6703C13.0391 0 12.5275 0.511676 12.5275 1.14286V8.1203C12.5275 8.75148 13.0391 9.26316 13.6703 9.26316H15.6961C16.544 9.26316 17.0967 10.1541 16.72 10.9137L15.0163 14.3494C14.6396 15.1091 15.1922 16 16.0402 16H17.7077C18.1193 16 18.499 15.7787 18.702 15.4206L21.5657 10.3674C21.6631 10.1956 21.7143 10.0014 21.7143 9.80394V1.14286Z"
                                                        fill="#677084"
                                                    />
                                                </g>
                                            </svg>
                                            <p>
                                                Wasel took time to understand our industry challenges.
                                                They knew exactly who we needed to meet and delivered those
                                                connections flawlessly. We've seen tremendous traction in
                                                government contracts after their strategic intervention. I
                                                vouch for them completely.
                                            </p>
                                        </div>
                                        <div className="service_review_author display-flex is-left">
                                            <img
                                                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4211329b6fc32d099d2b1_arifur-rahaman.png"
                                                loading="lazy"
                                                alt="Fatima Hassan"
                                                className="service_review_auhtor-image"
                                            />
                                            <div className="service_review_author-info">
                                                <div className="text-color-primary">Fatima Hassan</div>
                                                <div>VP of Strategy, Infrastructure Holdings</div>
                                            </div>
                                        </div>
                                        <div
                                            className="margin-top margin-xlarge is-magnatic"
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
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="100%"
                                            strokeDasharray={1000}
                                            fill="none"
                                            className="service_review_svg-line position-absolute"
                                        >
                                            <path
                                                d="M200.117 1H51C23.3858 1 1 23.3857 1 51L1 535C1 562.614 23.3858 585 51 585H261"
                                                stroke="#8C73F4"
                                                className="path"
                                                y={0}
                                                x={0}
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Work Process Section */}
                <section className="section_work-process">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="work-process_grid">
                                <div id="w-node-_8b952f68-d200-9754-3e83-c5a593ddf12a-70bb1425" className="work-process_left">
                                    <div className="work-process_content display-vertical">
                                        <h2 className="heading-style-h1 work-process_title">
                                            We <span className="text-style-secondary-font">unlock</span>{" "}
                                            game-changing{" "}
                                            <span className="text-style-secondary-font">market access</span>
                                        </h2>
                                        <p className="work-process_text body-l">
                                            We facilitate strategic connections that empower your expansion and unlock
                                            regional opportunities, creating pathways that drive rapid ROI and
                                            sustainable growth
                                        </p>
                                        <ul role="list" className="work-process_list display-vertical">
                                            {WORK_PROCESS_FEATURES.map((feature, index) => (
                                                <li key={index} className="work-process_list_item text-weight-medium">
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="display-flex margin-top margin-custom3">
                                        <MagnaticButton href="/projects" text="View all deals" />
                                    </div>
                                </div>
                                <figure
                                    id="w-node-b64d0b16-1584-0269-75b2-1f53a818bbc8-70bb1425"
                                    className="work-process_figure position-relative overflow-hidden"
                                >
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bef97e021d2a52a3859858_reviewxpo-showeel-high.jpg"
                                        alt="strategic engagement success"
                                        width={614}
                                        height={488}
                                        loading="lazy"
                                        fetchpriority="low"
                                        decoding="async"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Design Process Section */}
                <div className="section_design-process">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Our market entry{" "}
                                    <span className="text-style-secondary-font">framework</span>
                                </h2>
                            </div>
                            <div className="design-process_grid">
                                {DESIGN_PROCESS_STEPS.map((step, index) => (
                                    <DesignProcessItem key={index} {...step} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Core Values Section */}
                <section className="section_core-values">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    How we're{" "}
                                    <span className="text-style-secondary-font">different</span>
                                </h2>
                            </div>
                            <div className="core-value_gird">
                                {CORE_VALUES.map((value, index) => (
                                    <CoreValueCard key={index} {...value} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Excellence Section */}
                <div className="section_excellence position-relative">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1 text-color-alternate">
                                    Why We{" "}
                                    <span className="text-style-secondary-font">Deliver Results</span>
                                </h2>
                            </div>
                            {EXCELLENCE_ITEMS.map((item, index) => (
                                <ExcellenceItem key={index} {...item} />
                            ))}
                        </div>
                    </div>
                    <picture className="bg-absolute-shape">
                        <source
                            srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c1401bf85dac5f3ac2f219_excellent-bg-mobile.webp"
                            media="(max-width: 375px)"
                        />
                        <img
                            className="cover-image"
                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c02229864bddf9f6b48eae_excilent-bg.webp"
                            data-lazy-src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c0219e7255db47324d1333_excilent-bg.png"
                            alt=""
                            width="100%"
                            height="100%"
                            loading="lazy"
                            fetchpriority="low"
                            decoding="async"
                        />
                    </picture>
                </div>

                {/* CTA Section */}
                <section className="section_cta">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="work-process_grid">
                                <div id="w-node-f958ccdd-385d-cb31-93c9-9e161a5a0399-1a5a0395" className="work-process_left">
                                    <div className="work-process_content display-vertical">
                                        <h2 className="heading-style-h1">
                                            We're a{" "}
                                            <span className="text-style-secondary-font">trusted partner</span>{" "}
                                            for <span className="text-style-secondary-font">market access</span>
                                        </h2>
                                        <p className="work-process_text body-l">
                                            Our government relations &amp; business development clients consistently rate
                                            us exceptionally well across the region—our strategic impact has even
                                            unlocked awards!
                                        </p>
                                        <div role="list" className="cta_list display-vertical">
                                            {CTA_LIST_ITEMS.map((item, index) => (
                                                <div key={index} role="listitem" className="cta_list_item body-l">
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="display-flex margin-top margin-custom3">
                                        <MagnaticButton href="/book-a-call" text="Book a strategy call" />
                                    </div>
                                </div>
                                <figure
                                    id="w-node-f958ccdd-385d-cb31-93c9-9e161a5a03b2-1a5a0395"
                                    className="cta_figure position-relative overflow-hidden"
                                >
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c00447170174072cbadcdf_cta-low.webp"
                                        data-lazy-src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c0044a3edafe371b946e46_cta-high.jpg"
                                        alt="strategic partnership success"
                                        width={614}
                                        height={488}
                                        loading="lazy"
                                        fetchpriority="low"
                                        decoding="async"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

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

export default ServiceOne;