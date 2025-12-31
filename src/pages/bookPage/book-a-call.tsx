import React from 'react';

// ==========================================
// DATA CONFIGURATIONS
// ==========================================

// Partner/Client Logos Data
const PARTNER_LOGOS = [
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67adab7f109ea0ce63c3ff5f_nas-house.svg',
        alt: 'Healthcare Partner',
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b429026535397fbda12509_mymenu-logo.svg',
        alt: 'Government Partner',
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4291146efe5712ec684cf_nasdaily-logo.svg',
        alt: 'Ministry Partner',
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4295646efe5712ec6b3e8_existack.png',
        alt: 'Enterprise Partner',
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b4296a18fbfc438e57163f_nastravel-logo.svg',
        alt: 'Healthcare System',
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b42978d5f25f6f99420436_reviewxpo-logo.svg',
        alt: 'Medical Institution',
    },
    {
        src: 'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b42988a54127b5b18d2668_nassummit-log.svg',
        alt: 'Regional Partner',
    },
];

// FAQ Data
const FAQ_ITEMS = [
    {
        question: 'What makes Wasel EBDS different from other market entry consultants?',
        answer:
            'We function as a dedicated regional execution partner, not passive advisors. Our risk-sharing model means we only succeed when you do - we absorb upfront costs and charge a success fee only after confirmed ministerial introductions. Unlike typical consultants who charge per-meeting fees, we cover all follow-ups, negotiations, and operational expenses.',
    },
    {
        question: 'How quickly can you arrange ministerial-level meetings?',
        answer:
            'Our direct relationships with C-suite executives and ministry-level decision-makers enable rapid access. Typically, we can arrange high-level government meetings within 2-4 weeks of engagement, depending on the target country and specific objectives. Our proven track record demonstrates consistent delivery of strategic access.',
    },
    {
        question: 'What is your phased expansion process?',
        answer:
            'We follow a three-phase approach: Foundation & Market Anchoring (identifying anchor partners and establishing government relationships), Strategic Pilots (launching institution-scale programs with clear expansion pathways), and Scale & Institutionalization (expanding within healthcare groups and integrating into national programs). This systematic approach ensures sustainable market penetration.',
    },
    {
        question: 'Which MENA countries do you cover?',
        answer:
            'We have established networks across key MENA healthcare markets including UAE, Saudi Arabia, Egypt, Kuwait, Qatar, and Jordan. Our team conducts comprehensive market mapping and stakeholder analysis to identify the priority countries best aligned with your strategic objectives and product offerings.',
    },
    {
        question: 'What types of companies do you work with?',
        answer:
            'We specialize in partnering with healthcare technology companies, medical device manufacturers, pharmaceutical firms, and clinical AI platforms seeking institutional-scale adoption across MENA markets. Our focus is on companies ready for government partnerships and enterprise healthcare system deployments rather than fragmented, clinic-by-clinic expansion.',
    },
    {
        question: 'What does your commercial structure look like?',
        answer:
            'We operate on a success-based model with a $10,000 ministerial-level success fee (payable only after confirmed governmental introductions) and 30-35% revenue share for large private hospital chains and government programs. All commercial terms are flexible and can be calibrated based on market scope, deployment scale, timeline, and strategic partnership depth.',
    },
];

// Case Studies / Articles Data
const CASE_STUDIES = [
    {
        url: '#',
        image:
            'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b5b3236858ebec79732441_service-slider-2-high.jpg',
        title: 'Securing Ministry Access for Healthcare AI Platform in UAE',
        tags: ['Government Relations', 'Healthcare'],
    },
    {
        url: '#',
        image:
            'https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d94e5671cd299e19a24dae_service-slider-3-high.jpg',
        title: 'Strategic Partnership: National Hospital Network Entry',
        tags: ['Market Entry', 'Partnerships'],
    },
];

// ==========================================
// REUSABLE COMPONENTS
// ==========================================

// Partner Logo Component
const PartnerLogo = ({ src, alt }: { src: string; alt: string }) => (
    <div className="client-logo_wrap">
        <img src={src} loading="lazy" alt={alt} />
    </div>
);

// FAQ Plus Icon Component
const FaqPlusIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        viewBox="0 0 24 24"
        fill="none"
        className="faq-card_pluse_icon position-relative"
    >
        <g clipPath="url(#clip0_1820_12856)" className="overflow-hidden">
            <path
                d="M12 19L12 5"
                stroke="#10131B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="faq-card_pluse_vertical"
            />
            <path
                d="M19 12L5 12"
                stroke="#10131B"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </g>
    </svg>
);

// FAQ Card Component
const FaqCard = ({ question, answer }: { question: string; answer: string }) => (
    <div data-faq="card" className="faq-card">
        <button type="button" data-faq="toggler" className="faq-card_header">
            <h3 className="faq-card_title body-l">{question}</h3>
            <div className="faq-card_arrow position-relative">
                <FaqPlusIcon />
            </div>
        </button>
        <div data-faq="body" className="faq-card-body overflow-hidden">
            <div className="faq-card_content">
                <p className="faq-card-text">{answer}</p>
            </div>
        </div>
    </div>
);

// Case Study Tag Component
const CaseStudyTag = ({ tag }: { tag: string }) => (
    <div className="article_tag display-flex is-left">
        <div className="article_tag-dot" />
        <div>{tag}</div>
    </div>
);

// Case Study Card Component
const CaseStudyCard = ({
    url,
    image,
    title,
    tags,
}: {
    url: string;
    image: string;
    title: string;
    tags: string[];
}) => (
    <div className="articles_single-item">
        <a
            href={url}
            className="article_figure w-inline-block position-relative overflow-hidden"
        >
            <img
                className="cover-image"
                src={image}
                alt={title}
                width={614}
                height={459}
                loading="lazy"
                fetchPriority="low"
                decoding="async"
            />
        </a>
        <div className="article_content">
            <div className="article_tag-wrapper display-flex">
                {tags.map((tag, index) => (
                    <CaseStudyTag key={index} tag={tag} />
                ))}
            </div>
            <a href={url} className="w-inline-block">
                <h3 className="article_title heading-style-h2">{title}</h3>
            </a>
        </div>
    </div>
);

// ==========================================
// MAIN COMPONENT
// ==========================================

const BookACall = () => {
    return (
        <div className="page-wrapper">
            <main className="main-wrapper">
                {/* Header Section */}
                <section className="section_book-a-call_header">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="book-a-call_header_content display-flex">
                                <h1 className="book-a-call_header_title">
                                    Let's{' '}
                                    <span className="text-style-secondary-font">Unlock Your</span>{' '}
                                    MENA Market Entry, our team is ready to accelerate your expansion
                                </h1>
                                <p className="book-a-call_header_text text-size-large">
                                    With proven ministerial access and successful institutional partnerships across MENA healthcare systems, we're ready to transform your regional expansion strategy into reality.
                                </p>
                            </div>
                            <div className="booking-embed">
                                <div className="w-embed w-script">
                                    {/* Cal inline embed code begins */}
                                    <div
                                        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                                        id="my-cal-inline"
                                        className="cal-inline-container"
                                    >
                                        <div
                                            data-layout="month_view"
                                            style={{
                                                maxHeight: 'inherit',
                                                height: 'inherit',
                                                minHeight: 'inherit',
                                                display: 'flex',
                                                position: 'relative',
                                                flexWrap: 'wrap',
                                                width: '100%',
                                            }}
                                            className="cal-element-embed-dark"
                                        >
                                            <iframe
                                                className="cal-embed"
                                                name="cal-embed=consultation"
                                                title="Book a consultation"
                                                data-cal-link="wasel-ebds/consultation"
                                                allow="payment"
                                                src="https://app.cal.com/wasel-ebds/consultation/embed?embed=consultation&layout=month_view&embedType=inline"
                                                style={{ height: 574, width: '100%' }}
                                            />
                                        </div>
                                        <style
                                            dangerouslySetInnerHTML={{
                                                __html: `
                                        .cal-inline-container::-webkit-scrollbar {
                                            display: none
                                        }

                                        .cal-inline-container {
                                            scrollbar-width: none
                                        }
                                    `,
                                            }}
                                        />
                                    </div>
                                    {/* Cal inline embed code ends */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Partner Logos Section */}
                <section className="section_client-logos padding-top padding-custom3">
                    <div className="padding-global">
                        <div className="container-large">
                            <div className="client-logos_component">
                                {PARTNER_LOGOS.map((logo, index) => (
                                    <PartnerLogo key={index} src={logo.src} alt={logo.alt} />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <div className="section_faq">
                    <div className="padding-global padding-section is-bottom-0">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    <span className="text-style-secondary-font">Questions?</span>
                                    &nbsp;We're glad<span className="br"></span>you asked.
                                </h2>
                            </div>
                            <div data-faq="list" className="faq_grid">
                                {FAQ_ITEMS.map((faq, index) => (
                                    <FaqCard key={index} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Case Studies Section */}
                <section className="section_articles">
                    <div className="padding-global padding-section">
                        <div className="container-large">
                            <div className="section_header is-center">
                                <h2 className="section_title heading-style-h1">
                                    <span className="text-style-secondary-font">Success</span> Stories
                                </h2>
                            </div>
                            <div className="articles_grid">
                                {CASE_STUDIES.map((study, index) => (
                                    <CaseStudyCard
                                        key={index}
                                        url={study.url}
                                        image={study.image}
                                        title={study.title}
                                        tags={study.tags}
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

export default BookACall;