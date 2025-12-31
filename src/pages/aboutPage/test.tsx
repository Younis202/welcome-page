import React from 'react';
import { useWebflowScripts } from '@/hooks/useWebflowScripts';


// Team Members Data for Wasel
const TEAM_MEMBERS = [
    {
        name: 'Ahmed Seraj',
        designation: 'The Strategist',
        description: 'Cross-Continental Perspective. From medical corridors of Al-Farabi University in Kazakhstan to the business halls of Cairo University, Ahmed developed an analytical mind that sees beyond the surface. His medical background trained him to diagnose complex problems quickly, while his business education taught him to prescribe the right solutions. In business development, this translates to identifying the pulse of any deal and knowing exactly where to apply pressure for results.',
        quote: '"Every successful connection starts with understanding the anatomy of the relationship."',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d70e22cc0c5654d0c18eea_mufidul-tapadar.jpg',
        imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d70e220bdf4ae8dac17d2b_mufidul-tapadar-low.webp',
        link: '#'
    },
    {
        name: 'Hossam El Haggar',
        designation: 'The Systems Architect',
        description: 'Engineering Precision Meets Strategic Execution. Mechanical engineering at Fayoum University, advanced studies in Kazakhstan — Hossam thinks in systems and processes. But he applies this engineering mindset to something far more complex: human networks. He sees business relationships like mechanical systems — understanding every moving part, every point of leverage, and exactly how to optimize for maximum output.',
        quote: '"In engineering, there\'s always a more efficient path. The same applies to business connections."',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d70e7d7d5c13a74eb08e02_jubyer-ahmed.jpg',
        imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d70e7d3607a4d1b6a23bd5_jubyer-ahmed-low.webp',
        link: '#'
    },
    {
        name: 'Mohamed Safwat',
        designation: 'The Communicator',
        description: 'Master of Narrative and Influence. Media expertise from MUST University didn\'t just teach Mohamed how to tell stories — it taught him how to shape them. In a world where perception drives decision-making, Mohamed understands the subtle art of positioning, timing, and influence. He knows that the right message, delivered through the right channels, at the right moment, can move mountains — or close deals.',
        quote: '"Every deal has a story. We make sure it\'s the right one."',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d70f08a1b43c5d887b4bc0_asif-salim.jpg',
        imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d70f08e68193a4f5ea71dc_asif-salim-low.webp',
        link: '#'
    },
    {
        name: 'Younis Mohamed',
        designation: 'The Digital Native',
        description: 'Next-Generation Solutions. Currently mastering Software Engineering at Karabuk University in Turkey, Younis represents the future of business development. While others see technology as a tool, he sees it as a language — one that opens doors in ways traditional approaches never could. His developer mindset brings systematic thinking to relationship building, treating every connection as code that can be optimized.',
        quote: '"The best networks aren\'t just built — they\'re engineered."',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d70f491e4c1fef2e5ed1f0_omar-faruk.jpg',
        imageLow: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d70f49da37c2c3ab15cdcf_omar-faruk-low.webp',
        link: '#'
    },
];

const EXPERIENCE_STATS = [
    { value: '500+', label: 'Strategic Connections' },
    { value: '98%', label: 'Success Rate' },
    { value: '50+', label: 'Deals Closed' },
];

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
];

const TeamMemberCard = ({ name, designation, description, quote, image, imageLow, link }: { name: string; designation: string; description: string; quote: string; image: string; imageLow: string; link: string }) => (
    <div className="team-member_card">
        <a href={link} className="team-member_figure position-relative overflow-hidden w-inline-block">
            <img
                className="cover-image"
                src={imageLow}
                data-lazy-src={image}
                alt={name}
                width={306}
                height={382}
                loading="lazy"
                fetchPriority="low"
                decoding="async"
            />
        </a>
        <div className="team-member_info display-vertical">
            <h3 className="heading-style-h2">{name}</h3>
            <div className="team-member_designation">{designation}</div>
            <p className="body-l" style={{ marginTop: '1rem', opacity: 0.8 }}>{description}</p>
            <p className="body-l" style={{
                marginTop: '1rem',
                fontStyle: 'italic',
                opacity: 0.9,
                paddingLeft: '1rem',
                borderLeft: '2px solid rgba(255,255,255,0.3)'
            }}>{quote}</p>
            <div className="margin-top margin-small">
                <div
                    className="is-magnatic"
                    style={{
                        willChange: "transform",
                        transform: "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d"
                    }}
                >
                    <a href={link} className="team-member_link w-inline-block">
                        <div>Learn More</div>
                        <div className="team-member_link_overlay" />
                    </a>
                </div>
            </div>
        </div>
    </div>
);

const ExperienceCard = ({ value, label }: { value: string; label: string }) => (
    <div className="experiance_card display-vertical is-center">
        <div className="experiance_card_content text-align-center">
            <div className="heading-style-h2">{value}</div>
            <div className="experiance_card_text">{label}</div>
        </div>
    </div>
);

const CoreValueCard = ({ icon, title, text }: { icon: string; title: string; text: string }) => (
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

const About = () => {
    // Initialize Webflow scripts and animations
    useWebflowScripts();

    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
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
                            </div>
                        </div>
                    </div>
                </header>

                <section className="section_experiance">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="experiance_grid">
                                {EXPERIENCE_STATS.map((stat, index) => (
                                    <ExperienceCard key={index} value={stat.value} label={stat.label} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_operations">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="operation_content display-vertical is-left">
                                <div className="margin-bottom margin-medium">
                                    <h2 className="heading-style-h1">
                                        We Don't Work Around The System. <span className="text-style-secondary-font">We Work Inside It.</span>
                                    </h2>
                                </div>
                                <p className="operation_text text-size-large">
                                    We are a Business Development Unit that handles the hard part: access, alignment, and action. We are not consultants. We are not agents. We're your inside track to growth, deals, and decisive moves. From strategic meetings to full-blown execution — we handle it. We speak results.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_core-values">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Our work <span className="text-style-secondary-font">experience</span>
                                </h2>
                            </div>
                            <div className="core-value_gird">
                                {CORE_VALUES.map((value, index) => (
                                    <CoreValueCard key={index} icon={value.icon} title={value.title} text={value.text} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_team-member">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Meet <span className="text-style-secondary-font">Team Wasel</span>
                                </h2>
                                <p className="section-text text-size-large">
                                    The Minds Behind Wasel — Four distinct perspectives. One unified mission. Strategic excellence delivered.
                                </p>
                            </div>
                            <div className="team-member_grid">
                                {TEAM_MEMBERS.map((member, index) => (
                                    <TeamMemberCard key={index} {...member} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_core-values" style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Our <span className="text-style-secondary-font">Approach</span>
                                </h2>
                                <p className="section-text text-size-large">
                                    We're not just facilitators — we're translators. Between cultures, between industries, between vision and reality.
                                </p>
                            </div>
                            <div className="core-value_gird">
                                <div className="core-value_card">
                                    <div className="margin-bottom margin-custom2">
                                        <h3 className="core-value_card_title">Global Perspective</h3>
                                    </div>
                                    <p className="core-value_card_text">Kazakhstan, Egypt, Turkey — we've navigated different business cultures, regulatory environments, and relationship dynamics.</p>
                                </div>
                                <div className="core-value_card">
                                    <div className="margin-bottom margin-custom2">
                                        <h3 className="core-value_card_title">Complementary Expertise</h3>
                                    </div>
                                    <p className="core-value_card_text">Medical precision, engineering systems thinking, media influence, and technological innovation — combined, we see opportunities others miss.</p>
                                </div>
                                <div className="core-value_card">
                                    <div className="margin-bottom margin-custom2">
                                        <h3 className="core-value_card_title">Diverse Entry Points</h3>
                                    </div>
                                    <p className="core-value_card_text">Our varied backgrounds mean we can connect with decision-makers across industries, from healthcare executives to tech leaders, from government officials to international investors.</p>
                                </div>
                                <div className="core-value_card">
                                    <div className="margin-bottom margin-custom2">
                                        <h3 className="core-value_card_title">Cross-Industry Intelligence</h3>
                                    </div>
                                    <p className="core-value_card_text">We don't just understand business development — we understand the sectors our clients operate in, because we've lived in those worlds.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', marginTop: '3rem', maxWidth: '900px', margin: '3rem auto 0' }}>
                                <p className="text-size-large">
                                    Our diverse backgrounds aren't just credentials on a wall; they're keys to doors that others can't even see. When you work with Wasel, you're not just getting business development services. You're getting four different perspectives, four different networks, and four different approaches to solving the same problem: getting you where you need to be.
                                    <br /><br />
                                    <strong>Because sometimes, the best way to build a bridge is to have people who understand both sides.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="section_articles">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Ready to Put Our Collective Mind <span className="text-style-secondary-font">to Work?</span>
                                </h2>
                                <p className="section-text text-size-large">
                                    Four different approaches. One shared commitment to strategic excellence and your success.
                                </p>
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
                                            href="#contact"
                                            className="button is-small w-inline-block is-gradient"
                                        >
                                            <div className="button-text">Start a Conversation</div>
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
                </section>
            </main>
        </div>
    );
};

export default About;