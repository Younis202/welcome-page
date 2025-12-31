import React from 'react';

// ============================================================
// DATA CONFIGURATIONS
// ============================================================

const ARTICLE_TAGS = [
    { label: 'Healthcare' },
    { label: 'Government Relations' }
];

const SERVICE_TAGS = [
    { label: 'Ministerial Access' },
    { label: 'Market Entry' },
    { label: 'Strategic Partnership' }
];

const ABOUT_IMAGES = [
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63b29cab409c556dcfd37_nashouse-about-1-high.jpg',
        alt: 'altris ai strategic meeting',
        width: 635,
        height: 644
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63b53508515b6909d789d_nashouse-about-2-high.jpg',
        alt: 'altris ai government partnership',
        width: 635,
        height: 644
    }
];

const SOLUTION_CARDS = [
    {
        number: '001',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c57151ca21d031b662d6ea_calender.svg',
        title: 'Initial Discovery',
        description: "Start by gathering market objectives to understand the client's expansion aspirations"
    },
    {
        number: '002',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c57150a90a95057f29dba9_person.svg',
        title: 'Stakeholder Mapping',
        description: 'Identify key decision-makers to clarify access requirements and gather strategic insights.'
    },
    {
        number: '003',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c57150b4de1911f9b773e8_estimate.svg',
        title: 'Engagement Strategy',
        description: "Provide a transparent execution roadmap that outlines milestones and timelines, ensuring alignment with the client's objectives."
    },
    {
        number: '004',
        icon: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c571504fcf89b38f96ae4c_kickoff.svg',
        title: 'Access Activation',
        description: 'Once the client approves the strategy, initiate engagement with a well-defined plan and direct lines of communication.'
    }
];

const RELATED_PROJECTS = [
    {
        href: '/projects/altris-ai',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c5b848efd444c01860932d_next-project-high.jpg',
        title: 'Altris AI expand to  MENA markets',
        isCurrent: true
    },
    {
        href: '/projects/fintech-licensing',
        image: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c5b8485b462b3a3a91ebd7_next-project-2-high.jpg',
        title: 'FinTech Solutions secure  regulatory approval',
        isCurrent: false
    }
];

// ============================================================
// REUSABLE COMPONENTS
// ============================================================

const ArticleTag = ({ label }) => (
    <div className="article_tag display-flex is-left">
        <div className="article_tag-dot" />
        <div>{label}</div>
    </div>
);

const ServiceTag = ({ label }) => (
    <div className="service-tag display-flex is-center">
        <div className="body-l">{label}</div>
    </div>
);

const AboutImage = ({ src, alt, width, height }) => (
    <figure className="about-project_figure position-relative overflow-hidden">
        <img
            className="cover-image"
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading="lazy"
            fetchPriority="low"
            decoding="async"
        />
    </figure>
);

const SolutionCard = ({ number, icon, title, description }) => (
    <div className="solution_card display-vertical">
        <div className="solution_card_top display-flex">
            <div className="solution_card_icon display-flex is-center">
                <img src={icon} loading="lazy" alt="" />
            </div>
            <div className="body-l">{number}</div>
        </div>
        <div className="solution_card_content display-vertical">
            <h3 className="text-color-alternate">{title}</h3>
            <p className="text-size-regular">{description}</p>
        </div>
    </div>
);

const RelatedProjectItem = ({ href, image, title, isCurrent }) => (
    <div className="project_single-item">
        <a
            href={href}
            {...(isCurrent && { 'aria-current': 'page' })}
            className={`project_figure position-relative overflow-hidden w-inline-block${isCurrent ? ' w--current' : ''} is-related`}
        >
            <img
                className="cover-image"
                src={image}
                alt="strategic partnership"
                width={614}
                height={576}
                loading="lazy"
                fetchPriority="low"
                decoding="async"
            />
        </a>
        <div className="project_content">
            <h3 className="heading-style-h2">
                <div className="display-inline">Wasel unlocked </div>
                <div className="display-inline text-style-secondary-font">{title}</div>
            </h3>
            <div
                className="is-magnatic"
                style={{
                    willChange: "transform",
                    transform: "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                    transformStyle: "preserve-3d"
                }}
            >
                <a
                    href={href}
                    {...(isCurrent && { 'aria-current': 'page' })}
                    className={`button w-inline-block${isCurrent ? ' w--current' : ''} is-secondary`}
                >
                    <div>View case study</div>
                    <div className="button-hover-bg-two" />
                </a>
            </div>
        </div>
    </div>
);

// ============================================================
// MAIN COMPONENT
// ============================================================

const ProjectOne = () => {
    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
                {/* Project Details Header */}
                <section className="section_project-details-header">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="project-details-header_content display-flex">
                                <div className="project-details_content_left display-vertical">
                                    <div className="article_tag-wrapper display-flex">
                                        {ARTICLE_TAGS.map((tag, index) => (
                                            <ArticleTag key={index} {...tag} />
                                        ))}
                                    </div>
                                    <h1 className="project-details_title">
                                        Wasel unlocked{" "}
                                        <span className="text-style-secondary-font">Altris AI</span> strategic{" "}
                                        <span className="text-style-secondary-font">market access</span>{" "}
                                        across&nbsp;&nbsp;MENA region
                                    </h1>
                                </div>
                                <div className="project-details_content_right display-vertical">
                                    <p className="project-details-header_text body-l">
                                        We delivered comprehensive execution, including ministerial access, market entry coordination, and strategic partnership facilitation, to create accelerated regional presence for our client.
                                    </p>
                                    <div className="heading-style-h2">
                                        Our <span className="text-style-secondary-font">solution</span>
                                    </div>
                                    <div className="service-tag_wrapper display-flex is-left">
                                        {SERVICE_TAGS.map((tag, index) => (
                                            <ServiceTag key={index} {...tag} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <figure className="header_media position-relative overflow-hidden">
                                <img
                                    className="cover-image"
                                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63aa16449d54242ee2e26_nashouse-header-high-min.jpg"
                                    alt="Altris AI strategic partnership"
                                    width={1290}
                                    height={644}
                                    loading="eager"
                                    fetchPriority="high"
                                    decoding="sync"
                                />
                            </figure>
                        </div>
                    </div>
                </section>

                {/* About Project Section */}
                <section className="section_about-project">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-project">
                                <h2 className="section_title heading-style-h1">
                                    About <span className="text-style-secondary-font">Altris AI</span>
                                </h2>
                                <p className="header-text body-l">
                                    Altris AI is an innovative clinical AI infrastructure platform enabling healthcare providers to deliver advanced diagnostics. They needed strategic market access across MENA to establish institutional partnerships and navigate complex regulatory environments for rapid regional expansion.
                                </p>
                            </div>
                            <div className="about-project_grid">
                                {ABOUT_IMAGES.map((image, index) => (
                                    <AboutImage key={index} {...image} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Solution Section */}
                <section className="section_solution position-relative">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="solution_header display-vertical">
                                <div className="project_section_header display-flex">
                                    <h2 className="section_title heading-style-h2 text-color-alternate">
                                        The <span className="text-style-secondary-font">challenge</span>
                                    </h2>
                                    <p className="project_section_text body-l">
                                        Unlocking MENA healthcare markets for Altris AI meant navigating complex regulatory frameworks, securing ministerial-level endorsements, and establishing credibility with government health institutions and major hospital networks across multiple jurisdictions simultaneously.
                                    </p>
                                </div>
                                <div className="project_section_header display-flex">
                                    <h2 className="section_title heading-style-h2 text-color-alternate">
                                        The <span className="text-style-secondary-font">solution</span>
                                    </h2>
                                    <p className="project_section_text body-l">
                                        The solution was to leverage our ministerial network and healthcare relationships to orchestrate high-level introductions across Egypt, UAE, and Saudi Arabia. By facilitating pilot program discussions with ministry decision-makers and coordinating parallel engagement with enterprise hospital groups, we accelerated institutional adoption pathways and established Altris AI as a trusted regional partner.
                                    </p>
                                </div>
                            </div>
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1 text-color-alternate">
                                    The <span className="text-style-secondary-font">Execution</span>
                                </h2>
                            </div>
                            <div className="solution_grid">
                                {SOLUTION_CARDS.map((card, index) => (
                                    <SolutionCard key={index} {...card} />
                                ))}
                            </div>
                        </div>
                    </div>
                    <picture className="bg-absolute-shape">
                        <source
                            srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c57ad1211992d367f90ac2_solution-bg-high-min.png"
                            media="(max-width: 375px)"
                        />
                        <img
                            className="cover-image"
                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c57ad1211992d367f90ac2_solution-bg-high-min.png"
                            alt=""
                            width="100%"
                            height="100%"
                            loading="lazy"
                            fetchPriority="low"
                            decoding="async"
                        />
                    </picture>
                </section>

                {/* Style Guide Section */}
                <section className="section_style-guide">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="header_content">
                                <h1 className="home-header_title">
                                    <div className="display-inline">Strategic framework</div>
                                </h1>
                                <div className="home-header_content-inner display-vertical is-left">
                                    <p className="project_other-text body-l">
                                        our primary objective is to ensure consistent and coordinated
                                        stakeholder engagement across all ministerial and enterprise
                                        touchpoints.
                                    </p>
                                </div>
                            </div>
                            <figure className="style-guide_figure position-relative overflow-hidden position-relative overflow-hidden">
                                <img
                                    className="cover-image"
                                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63b92a6e51e35d4819be6_nashouse-style-guide-high.png"
                                    alt="Altris AI engagement strategy"
                                    width={1290}
                                    height={878}
                                    loading="lazy"
                                    fetchPriority="low"
                                    decoding="async"
                                />
                            </figure>
                        </div>
                    </div>
                </section>

                {/* Home Screen Section */}
                <section className="section_home-screen">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    <span className="text-style-secondary-font">Stakeholder</span> Mapping
                                </h2>
                            </div>
                            <figure className="home-screen_media position-relative overflow-hidden">
                                <img
                                    className="cover-image"
                                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63d3d8879041ea3b5686c_nashouse-home-screen-high-min.jpg"
                                    alt="Altris AI stakeholder network"
                                    width={1290}
                                    height={929}
                                    loading="lazy"
                                    fetchPriority="low"
                                    decoding="async"
                                />
                            </figure>
                        </div>
                    </div>
                </section>

                {/* Other Screen Section */}
                <section className="section_other-screen">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    <span className="text-style-secondary-font">Execution</span>Timeline
                                </h2>
                            </div>
                            <div className="position-relative overflow-hidden">
                                <picture className="bg-absolute-shape is-relative">
                                    <source
                                        srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63da16dc936a6b8b4a92b_nashouse-otherscreen-high-min.jpg"
                                        media="(max-width: 375px)"
                                    />
                                    <img
                                        className="max-width-full"
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67c63da16dc936a6b8b4a92b_nashouse-otherscreen-high-min.jpg"
                                        alt=""
                                        width="100%"
                                        height="100%"
                                        loading="lazy"
                                        fetchPriority="low"
                                        decoding="async"
                                    />
                                </picture>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonial Slider Section */}
                <div className="section_testimonial-slider">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="client_testimonial-wrapper">
                                <div className="client_testimonial-headshot">
                                    <img
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f232406efe01e0e0ac999_testimonial-imge.png"
                                        loading="lazy"
                                        alt=""
                                    />
                                </div>
                                <div className="client_testimonial">
                                    <img
                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4c3e2b3a9fead6ed357_quote.svg"
                                        loading="lazy"
                                        alt=""
                                    />
                                    <p className="body-xl text-color-primary">
                                        Wasel EBDS opened doors we couldn't access for years. Within 48 hours, we had ministerial meetings scheduled across three countries. Their network across MENA healthcare institutions is unmatched. They don't just connect—they deliver results.
                                    </p>
                                    <div className="client-testimonial-card-footer">
                                        <div className="client-testimonial-card-user">
                                            <div className="client-testimonial-card-user-preview">
                                                <figure className="client-testimonial-meida">
                                                    <img
                                                        width={70}
                                                        height={70}
                                                        alt="sarah al-mansouri"
                                                        loading="lazy"
                                                        src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67bda4143cdb248a8ea2fe9c_user-testimonial-1.png"
                                                        className="client-testimonial-media-image"
                                                    />
                                                </figure>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 82 82"
                                                    fill="none"
                                                    className="client-testimonial-media-progressbar"
                                                >
                                                    <path
                                                        d="M82 41C82 63.6437 63.6437 82 41 82C18.3563 82 0 63.6437 0 41C0 18.3563 18.3563 0 41 0C63.6437 0 82 18.3563 82 41ZM2.46 41C2.46 62.2851 19.7149 79.54 41 79.54C62.2851 79.54 79.54 62.2851 79.54 41C79.54 19.7149 62.2851 2.46 41 2.46C19.7149 2.46 2.46 19.7149 2.46 41Z"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    viewBox="0 0 82 82"
                                                    fill="none"
                                                    className="client-testimonial-media-progressbar-progress"
                                                >
                                                    <path
                                                        d="M62.2565 74.589L62.9249 75.6453L62.2565 74.589C57.8455 77.3805 52.9279 79.2759 47.7844 80.1668C42.641 81.0577 37.3725 80.9268 32.2796 79.7816C27.1866 78.6364 22.3693 76.4994 18.1022 73.4925C13.8353 70.4854 10.2024 66.6675 7.41094 62.2565C4.6195 57.8455 2.7242 52.9279 1.83326 47.7844C0.942314 42.6409 1.07316 37.3725 2.21835 32.2796L0.998802 32.0054L2.21835 32.2796C3.36354 27.1866 5.50061 22.3693 8.5076 18.1022C11.5146 13.8353 15.3325 10.2024 19.7435 7.41095C24.1545 4.61951 29.0722 2.7242 34.2155 1.83326C39.359 0.942305 44.6277 1.07317 49.7205 2.21836C54.8133 3.36355 59.6308 5.50064 63.8977 8.50761L64.4234 7.76164L63.8977 8.50761C68.1647 11.5146 71.7975 15.3325 74.589 19.7435C77.3805 24.1545 79.2759 29.0722 80.1668 34.2155C81.0577 39.359 80.9268 44.6276 79.7816 49.7205C78.6365 54.8133 76.4994 59.6308 73.4923 63.8977L74.4385 64.5645L73.4923 63.8978C70.4854 68.1647 66.6675 71.7977 62.2565 74.589Z"
                                                        stroke="currentColor"
                                                        strokeWidth="2.5"
                                                        pathLength={100}
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="client-testimonial-card-user-name text-bold">
                                                    Sarah Al-Mansouri
                                                </div>
                                                <div className="client-testimonial-card-user-designation">
                                                    CEO, MedTech Solutions MENA
                                                </div>
                                            </div>
                                        </div>
                                        <img
                                            src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f211cfb52a2de165bf31f_nashouse-logo.png"
                                            loading="lazy"
                                            alt=""
                                            className="client_testimonial-project-logo"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Related Projects Section */}
                <section className="section_related-project">
                    <div className="padding-global padding-section is-top-0">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    Next <span className="text-style-secondary-font">Deals</span>
                                </h2>
                            </div>
                            <div className="related-project_grid">
                                {RELATED_PROJECTS.map((project, index) => (
                                    <RelatedProjectItem key={index} {...project} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default ProjectOne;