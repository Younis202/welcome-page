import React from 'react';

// ==========================================
// DATA CONFIGURATIONS
// ==========================================

// Experience Stats Data
const EXPERIENCE_STATS = [
    { value: '500+', label: 'Strategic Connections' },
    { value: '98%', label: 'Success Rate' },
    { value: '50+', label: 'Deals Closed' },
];


// Core Values Data
const CORE_VALUES = [
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b475a572811e4459f4e09a_static-design-icon.svg',
        title: 'Deep access inside ministries and companies',
        text: 'We\'ve built relationships with key decision-makers across public and private sectors.',
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d9231d2e7b3b0c3f05841d_ego-free.svg',
        title: 'We operate with discretion and efficiency',
        text: 'Our business development approach prioritizes confidentiality and results.',
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d92340de8dc811a08388d8_graph.svg',
        title: 'Experience closing real, high-stakes deals',
        text: 'Our track record includes facilitating partnerships that others couldn\'t make happen.',
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c14cf45a3dd5cefd23b615_chrome-extention.svg',
        title: 'Trusted by serious decision-makers',
        text: 'We\'ve earned the confidence of executives and officials who value discretion and results.',
    },

    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d92340de8dc811a08388d8_graph.svg',
        title: 'Navigate with strategic intelligence',
        text: 'We embrace complexity as opportunity to strategize, connect, and deliver breakthrough solutions through relationship capital and execution.',
    },
    {
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d923bb330856358443adf5_file.svg',
        title: 'Deliver results every engagement',
        text: 'We drive excellence in every connection, delivering outcomes that reflect our commitment to strategic execution and market access',
    },

];

// Process Steps Data
const PROCESS_STEPS = [
    {
        number: '//001',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b577a45d72d1df495cccb0_business-step-icon.svg',
        title: 'Identify Your Market Objectives',
        description: 'Identify key access challenges and create tailored engagement strategies to accelerate your expansion',
    },
    {
        number: '//002',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b577a45d72d1df495cccb0_business-step-icon.svg',
        title: 'Map Strategic Stakeholders',
        description: 'Map critical decision-makers and regulatory pathways to unlock your market opportunities',
    },
    {
        number: '//003',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57966ce0989b332aa83a3_eye-search-icon.svg',
        title: 'Leverage Our Network & Your Vision',
        description: 'Combining your objectives with our connections to unlock high-impact opportunities',
    },
    {
        number: '//004',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b57a72027be6ac0c422f7f_result-sheet-icon.svg',
        title: 'Execute Deal Closure',
        description: 'Delivering strategic outcomes that exceed expectations and unlock sustainable growth',
    },
];

// Team Members Data
const TEAM_MEMBERS = [
    {
        image: 'https://ik.imagekit.io/pcet3dvcu/462118149_614484107672713_5822809619534374935_n.jpg?updatedAt=1761528522323',
        name: 'Younis Mohamed',
        designation: 'The Digital Native',
        alt: 'Next-Generation Solutions. Currently mastering Software Engineering at Karabuk University in Turkey, Younis represents the future of business development. While others see technology as a tool, he sees it as a language — one that opens doors in ways traditional approaches never could. His developer mindset brings systematic thinking to relationship building, treating every connection as code that can be optimized.',
    },
    {
        image: 'https://ik.imagekit.io/ihhlj9kpd/WhatsApp20Image202025-04-1920at2000.webp',
        name: 'Ahmed Seraj',
        designation: 'The Strategist',
        alt: 'Cross-Continental Perspective. From medical corridors of Al-Farabi University in Kazakhstan to the business halls of Cairo University, Ahmed developed an analytical mind that sees beyond the surface. His medical background trained him to diagnose complex problems quickly, while his business education taught him to prescribe the right solutions. In business development, this translates to identifying the pulse of any deal and knowing exactly where to apply pressure for results.',
    },
    {
        image: 'https://ik.imagekit.io/pcet3dvcu/personal%20(1).png?updatedAt=1761527582055',
        name: 'Hossam El Haggar',
        designation: 'The Systems Architect',
        alt: 'Engineering Precision Meets Strategic Execution. Mechanical engineering at Fayoum University, advanced studies in Kazakhstan — Hossam thinks in systems and processes. But he applies this engineering mindset to something far more complex: human networks. He sees business relationships like mechanical systems — understanding every moving part, every point of leverage, and exactly how to optimize for maximum output.',
    },
];

// ==========================================
// REUSABLE COMPONENTS
// ==========================================

// Experience Card Component
const ExperienceCard = ({ value, label }: { value: string; label: string }) => (
    <div className="experiance_card display-vertical is-center">
        <div className="experiance_card_content text-align-center">
            <div className="heading-style-h2">{value}</div>
            <div className="experiance_card_text">{label}</div>
        </div>
    </div>
);

// Core Value Card Component
const CoreValueCard = ({
    icon,
    title,
    text,
}: {
    icon: string;
    title: string;
    text: string;
}) => (
    <div className="core-value_card">
        <div className="margin-bottom margin-custom1">
            <img src={icon} loading="lazy" alt="" />
        </div>
        <div className="margin-bottom margin-custom2">
            <h3 className="core-value_card_title">{title}</h3>
        </div>
        <p className="core-value_card_text">{text}</p>
    </div>
);

// Process Item Component
const ProcessItem = ({
    number,
    icon,
    title,
    description,
}: {
    number: string;
    icon: string;
    title: string;
    description: string;
}) => (
    <div className="process_item display-flex is-center">
        <div className="process_item_content">
            <div>{number}</div>
            <h3 className="process_item_title heading-style-h2">{title}</h3>
            <p className="body-l">{description}</p>
        </div>
        <div className="process_item_icon-wrapper">
            <div className="process_item_icon display-flex is-center">
                <img src={icon} loading="lazy" alt="" />
            </div>
            <div className="process_item_button">
                <div
                    className="is-magnatic"
                    style={{
                        willChange: 'transform',
                        transform:
                            'translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                        transformStyle: 'preserve-3d',
                    }}
                >
                    <a
                        data-w-id="8bb02b6a-0dfa-c39d-4ebf-2f7056810763"
                        href="/projects"
                        className="button is-small w-inline-block is-gradient"
                    >
                        <div className="button-text">View all deals</div>
                        <div
                            className="button-hover-bg"
                            style={{
                                transform:
                                    'translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                transformStyle: 'preserve-3d',
                            }}
                        ></div>
                    </a>
                </div>
            </div>
        </div>
        <div className="core-service-border position-absolute pointer-events-none" />
    </div>
);

// Team Member Card Component
const TeamMemberCard = ({
    image,
    name,
    designation,
    alt,
}: {
    image: string;
    name: string;
    designation: string;
    alt: string;
}) => (
    <div className="team-member_card">
        <figure className="team-member_figure position-relative overflow-hidden">
            <img
                className="cover-image"
                src={image}
                alt={alt}
                width={408}
                height={425}
                loading="lazy"
                fetchPriority="low"
                decoding="async"
            />
        </figure>
        <div className="team-member_info display-vertical">
            <h3 className="heading-style-h2">{name}</h3>
            <div className="team-member_designation">{designation}</div>
        </div>
    </div>
);

// ==========================================
// MAIN COMPONENT
// ==========================================

const About = () => {
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
                                        <div className="display-inline">Who We Are –<span className="br"> </span></div>
                                        <div className="display-inline text-style-secondary-font">The Collective</div>
                                    </h1>
                                    <div className="home-header_content-inner display-vertical is-left">
                                        <p className="header-text text-size-large">
                                            Four minds. One mission. Unlimited access. We're not your typical business development team. We're Wasel — the bridge between ambition and achievement.
                                        </p>
                                    </div>
                                </div>
                                <figure className="header_media position-relative overflow-hidden">
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b45853da2cccf3e5aa1767_about-hero-high-quality.jpg"
                                        alt="Wasel Team"
                                        width={1290}
                                        height={644}
                                        loading="eager"
                                        fetchPriority="high"
                                        decoding="sync"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Experience Section */}
                <section className="section_experiance">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="header_content">
                                <h2 className="section_title heading-style-h1">
                                    Turning Access into<span className="br"></span>Strategic Partnerships
                                    <span className="br"> </span>
                                    <span className="text-style-secondary-font">that unlock</span> Growth
                                </h2>
                                <p className="section-text text-size-large">
                                    We specialize in turning market entry challenges into executed opportunities
                                    with exceptional government relations and strategic access. We craft
                                    connection-driven strategies that unlock doors and accelerate regional expansion
                                </p>
                            </div>
                            <div className="experiance_grid">
                                {EXPERIENCE_STATS.map((stat, index) => (
                                    <ExperienceCard key={index} value={stat.value} label={stat.label} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Operations Section */}
                <section className="section_operations">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="operation_grid">
                                <div
                                    id="w-node-_71bf2356-68f2-0b8e-31a5-7052f3b832e5-45375106"
                                    className="operation_content display-vertical is-left"
                                >
                                    <div className="margin-bottom margin-medium">
                                        <h2 className="heading-style-h1">
                                            What <span className="text-style-secondary-font">We do</span>
                                        </h2>
                                    </div>
                                    <p className="operation_text text-size-large">
                                        We help businesses expand by unlocking their access to MENA markets
                                        through strategic relationships. Whether you're a multinational or a
                                        regional player, we specialize in opening doors, navigating regulations,
                                        and facilitating partnerships that drive real market penetration.
                                        <br />
                                        <br />
                                        We focus on execution that delivers results—securing ministerial meetings,
                                        accelerating approvals, and closing strategic deals. By combining government
                                        relations expertise and business development acumen, we bring your expansion
                                        vision to life and strengthen your competitive position.
                                    </p>
                                    <div className="margin-top margin-large">
                                        <div
                                            className="is-magnatic"
                                            style={{
                                                willChange: 'transform',
                                                transform:
                                                    'translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                                transformStyle: 'preserve-3d',
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
                                                        transform:
                                                            'translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
                                                        transformStyle: 'preserve-3d',
                                                    }}
                                                ></div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <figure className="operation_media position-relative overflow-hidden">
                                    <img
                                        className="cover-image"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4732f3d80550bd7fd61b7_about-work.jpg"
                                        alt=""
                                        width={614}
                                        height={488}
                                        loading="lazy"
                                        fetchPriority="low"
                                        decoding="async"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="section_core-values">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Our <span className="text-style-secondary-font">Core Principles</span>
                                </h2>
                            </div>
                            <div className="core-value_gird">
                                {CORE_VALUES.map((value, index) => (
                                    <CoreValueCard
                                        key={index}
                                        icon={value.icon}
                                        title={value.title}
                                        text={value.text}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="section_process">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="header_content">
                                <h2 className="section_title heading-style-h1 text-color-alternate">
                                    Proven Execution Framework&nbsp;&nbsp;for
                                    <span className="br hide-mobile-portrait"> </span>
                                    <span className="text-style-secondary-font">
                                        Delivering Strategic
                                    </span>
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
                                    <ProcessItem
                                        key={index}
                                        number={step.number}
                                        icon={step.icon}
                                        title={step.title}
                                        description={step.description}
                                    />
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

                {/* Team Members Section */}
                <section className="section_team-member">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Behind the <span className="text-style-secondary-font">Network</span>
                                </h2>
                            </div>
                            <div className="team-member_grid">
                                {TEAM_MEMBERS.map((member, index) => (
                                    <TeamMemberCard
                                        key={index}
                                        image={member.image}
                                        name={member.name}
                                        designation={member.designation}
                                        alt={member.alt}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;