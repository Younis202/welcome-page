import React from 'react';

// ============================================================
// DATA CONFIGURATIONS
// ============================================================

const WORK_PROCESS_FEATURES = [
    'Ministerial-Level Access & Government Relations',
    'Risk-Sharing Partnership Model',
    'Proven Track Record Across MENA Healthcare'
];

const DESIGN_PROCESS_STEPS = [
    {
        number: '001',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bff7f640912009094a64fd_heart-icon.svg',
        title: "Foundation & Market Anchoring",
        description: "We identify and engage anchor partners in priority countries, establish initial government and enterprise relationships, and conduct comprehensive market mapping and stakeholder analysis"
    },
    {
        number: '002',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffa4bec44a21c544a32d6_tictactoi.svg',
        title: 'Strategic Pilots',
        description: "We launch institution-scale pilot programs with defined expansion pathways, generate localized clinical evidence and reference case studies to build proof points for broader market penetration"
    },
    {
        number: '003',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffa82bb83378bdacd6b5e_desktop-settings.svg',
        title: 'Scale & Institutionalization',
        description: 'We expand within established healthcare groups, engage national insurance schemes, support integration into national screening programs, and position for inclusion in national health digitalization strategies'
    },
    {
        number: '004',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffaa5b7cb67f2e43f6136_code.svg',
        title: 'Regulatory Navigation',
        description: "We manage regulatory approvals and compliance, navigate procurement cycles and tender processes, and facilitate local market entry and operational setup"
    },
    {
        number: '005',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffb1e3e5f1a358c9f068c_quality.svg',
        title: 'Stakeholder Engagement',
        description: "We maintain direct relationships with C-suite executives, provide strategic access to ministry-level decision-makers, and represent partners in institutional and policy discussions"
    },
    {
        number: '006',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bffba93278e50f2580a7d5_grid.svg',
        title: 'Continuous Momentum',
        description: 'We structure scalable programs with clear deployment pathways, design outcome-driven pilots, and provide continuous on-ground follow-up and momentum management'
    }
];

const CORE_VALUES = [
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c02cacd9ea0f26bb5ae4da_blueprinnt-icon.svg',
        title: 'Shared Execution',
        text: "We are invested operators, not passive intermediaries. We function as a dedicated regional execution partner committed to your success in MENA markets."
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b6fe961651407268d79fd8_foundation-icon.svg',
        title: 'Aligned Incentives',
        text: 'Our success is tied directly to your institutional adoption. We only succeed when you succeed, ensuring complete alignment of our interests with your long-term goals.'
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b6feaff171efceff6d1921_expansion-icon.svg',
        title: 'Long-Term Positioning',
        text: 'We focus on sustainable market leadership through deep institutional integration, creating enduring competitive advantages across MENA healthcare systems.'
    }
];

const EXCELLENCE_ITEMS = [
    {
        number: '001',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c01087aa70a95dc2666593_revision-icon.svg',
        title: 'Government-Led Health Initiatives',
        text: "Direct access to ministry-level decision-makers and representation in institutional health policy discussions across the MENA region"
    },
    {
        number: '002',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c0200dc5b1446fccbaf4dc_hidden-fees-icon.svg',
        title: 'Major Hospital Chains & Networks',
        text: 'Strategic partnerships with leading healthcare institutions and large-scale hospital networks throughout MENA markets'
    },
    {
        number: '003',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c02042f98a35e36081b3ca_process-icon.svg',
        title: 'Risk-Sharing Model',
        text: 'We absorb upfront costs and only succeed when you do. Ministerial-level success fee payable only after confirmed introductions'
    },
    {
        number: '004',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c020b2859565df01fbcb78_sheet-icon.svg',
        title: 'Reference-Level Deployments',
        text: 'We create institutional-scale implementations that drive organic downstream adoption across the broader clinical ecosystem'
    },
    {
        number: '005',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c020ebc1250a94c3f2016c_track-icon.svg',
        title: 'Revenue Share Partnership',
        text: "30-35% revenue share model with no ongoing transactional costs. We cover follow-ups, negotiations, and all operational expenses"
    }
];

const CTA_LIST_ITEMS = [
    'Ministerial & C-Suite Access',
    'No Per-Meeting Fees or Hidden Costs',
    'Proven Healthcare Market Penetration',
    'Dedicated Regional Execution Partner'
];

const OTHER_SERVICES = [
    {
        href: '/services/government-relations',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b1f4e6db0bda26bd26cacd_core-service-1-high.jpg',
        title: 'Government Relations',
        description: 'Delivering ministerial access solutions that combine strategic positioning with execution...'
    },
    {
        href: '/services/market-entry',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d70694bedede1779d8aa3c_core-service-mobile-app-high.jpg',
        title: 'Market Entry Support',
        description: 'Delivering market access solutions that combine local expertise with strategic networks...'
    },
    {
        href: '/services/deal-facilitation',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d706f0a79f0c901c03469c_core-service-webflow-high.jpg',
        title: 'Deal Facilitation',
        description: 'Delivering closure-focused solutions that combine tactical navigation with momentum...'
    }
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

const OtherServiceCard = ({ href, image, title, description }) => (
    <div className="other-service_card display-vertical">
        <a href={href} className="other-service_figure position-relative overflow-hidden w-inline-block">
            <img
                className="cover-image"
                src={image}
                alt={title}
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

const ServiceThree = () => {
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
                                        <div className="display-inline">
                                            Unlocking MENA Markets with{" "}
                                            <span className="text-style-secondary-font">Strategic</span>
                                        </div>
                                        <div className="br hide-mobile-portrait" />
                                        <div className="display-inline text-style-secondary-font">
                                            Partnership & Execution
                                        </div>
                                    </h1>
                                    <div className="home-header_content-inner display-vertical is-left">
                                        <p className="service_header-text text-size-large">
                                            We position companies as regional clinical standards through institutional-scale adoption via government partnerships and enterprise healthcare systems across MENA
                                        </p>
                                    </div>
                                </div>
                                <figure className="service_header_media position-relative overflow-hidden">
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b5b3236858ebec79732441_service-slider-2-high.jpg"
                                        alt="Strategic partnership signing"
                                        width={1290}
                                        height={644}
                                        loading="eager"
                                        fetchpriority="high"
                                        decoding="sync"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Work Process Section */}
                <section className="section_work-process">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="work-process_grid">
                                <div
                                    id="w-node-ecd417c3-a45a-2f66-d034-e21242cf5427-1df20acc"
                                    className="work-process_left"
                                >
                                    <div className="work-process_content display-vertical">
                                        <h2 className="heading-style-h1 work-process_title">
                                            Why Our{" "}
                                            <span className="text-style-secondary-font">
                                                Strategic Partnership
                                            </span>{" "}
                                            Framework Delivers Results
                                        </h2>
                                        <p className="work-process_text body-l">
                                            We function as a dedicated regional execution partner, not merely an advisory consultant. Our approach prioritizes institutional-scale adoption through government partnerships and major healthcare systems—establishing you as a regional standard rather than pursuing fragmented expansion
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
                                        <MagnaticButton href="/contact" text="Start Your Expansion" />
                                    </div>
                                </div>
                                <figure
                                    id="w-node-ecd417c3-a45a-2f66-d034-e21242cf543b-1df20acc"
                                    className="work-process_figure position-relative overflow-hidden"
                                >
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d94e5671cd299e19a24dae_service-slider-3-high.jpg"
                                        alt="Government relations meeting"
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
                                    Phased Expansion{" "}
                                    <span className="text-style-secondary-font">Roadmap</span>
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
                                    Partnership{" "}
                                    <span className="text-style-secondary-font">Philosophy</span>
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
                                    Strategic{" "}
                                    <span className="text-style-secondary-font">Market Access</span>
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
                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c0219e7255db47324d1333_excilent-bg.png"
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
                                <div
                                    id="w-node-e5352b00-13d2-f08f-1d83-947bdd6350d3-1df20acc"
                                    className="work-process_left"
                                >
                                    <div className="work-process_content display-vertical">
                                        <h2 className="heading-style-h1">
                                            A{" "}
                                            <span className="text-style-secondary-font">competitive</span>{" "}
                                            <span>commercial </span>
                                            <span className="text-style-secondary-font">structure</span>{" "}
                                            that aligns our success
                                        </h2>
                                        <p className="work-process_text body-l">
                                            Unlike typical market entry partners who charge per-meeting fees and lower revenue shares, our model eliminates ongoing transactional costs. We absorb all subsequent expenses and only succeed when you do
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
                                        <MagnaticButton href="/book-a-call" text="Discuss Your Market Entry" />
                                    </div>
                                </div>
                                <figure
                                    id="w-node-e5352b00-13d2-f08f-1d83-947bdd6350e4-1df20acc"
                                    className="cta_figure position-relative overflow-hidden"
                                >
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d94e91c8a9cb38c9576b81_service-slider-4-high.jpg"
                                        alt="Deal facilitation success"
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

export default ServiceThree;