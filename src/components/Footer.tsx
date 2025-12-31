import { useWebflowScripts } from '@/hooks/useWebflowScripts';

const Footer = () => {
    // Initialize Webflow scripts and animations
    useWebflowScripts();

    return (
        <footer className="footer_component">
            <div className="padding-global">
                <div className="container-large">
                    <div className="footer_spacer">
                        <div className="footer_top">
                            <h2 className="footer_title heading-style-h1 text-color-alternate">
                                Let’s create{" "}
                                <span className="text-style-secondary-font">
                                    Something together
                                </span>
                            </h2>
                            <div className="footer_cta">
                                <div
                                    className="footer_cta_content display-vertical is-left"
                                >
                                    <a
                                        href="#"
                                        className="copy-email-wrapper copy-parent w-inline-block"
                                    >
                                        <div
                                            id="textToCopy"
                                            className="footer_cta_text text-color-alternate"
                                        >
                                            contact@waselebds.com
                                        </div>
                                        <div className="copy-button display-vertical  is-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 25 24"
                                                fill="none"
                                                className="copy-button-icon"
                                            >
                                                <path
                                                    d="M16.5 12.9V17.1C16.5 20.6 15.1 22 11.6 22H7.4C3.9 22 2.5 20.6 2.5 17.1V12.9C2.5 9.4 3.9 8 7.4 8H11.6C15.1 8 16.5 9.4 16.5 12.9Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="bottom-path"
                                                />
                                                <path
                                                    d="M22.5 6.9V11.1C22.5 14.6 21.1 16 17.6 16H16.5V12.9C16.5 9.4 15.1 8 11.6 8H8.5V6.9C8.5 3.4 9.9 2 13.4 2H17.6C21.1 2 22.5 3.4 22.5 6.9Z"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="top-path"
                                                />
                                            </svg>
                                            <div data-gradient={1} className="copy-button-overlay" />
                                        </div>
                                        <div data-gradient={1} className="copy-result">
                                            <div>copied!</div>
                                        </div>
                                    </a>
                                    <div
                                        className="is-magnatic"
                                        style={{
                                            willChange: "transform",
                                            transform:
                                                "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                            transformStyle: "preserve-3d"
                                        }}
                                    >
                                        <a
                                            data-w-id="8bb02b6a-0dfa-c39d-4ebf-2f7056810763"
                                            href="/book-a-call"
                                            className="button is-small w-inline-block is-gradient"
                                        >
                                            <div className="button-text">Schedule a consultation</div>
                                            <div
                                                className="button-hover-bg"
                                                style={{
                                                    transform:
                                                        "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                    transformStyle: "preserve-3d"
                                                }}
                                            ></div>
                                        </a>
                                    </div>
                                </div>
                                <figure className="footer_cta_figure">
                                    <img
                                        className="cover-image"
                                        src="https://ik.imagekit.io/ihhlj9kpd/Gemini_Generated_Image_zdfislzdfislzdfi.png"
                                        data-lazy-src="https://ik.imagekit.io/ihhlj9kpd/Gemini_Generated_Image_zdfislzdfislzdfi.png"
                                        alt=""
                                        width={186}
                                        height={155}
                                        loading="lazy"
                                        fetchPriority="low"
                                        decoding="async"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="footer_middle">
                        <div className="footer_middle-left">
                            <a
                                href="/"
                                aria-current="page"
                                className="footer_logo-link w-inline-block w--current"
                            >
                                <img
                                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67ac925dc3a152594b6bcc01_logo.svg"
                                    loading="lazy"
                                    alt="Omotive Logo"
                                />
                            </a>
                            <p className="footer_text text-color-alternate">
                                Delivering strategic market access solutions that combine ministerial connections with execution excellence to drive MENA expansion
                            </p>
                        </div>
                        <div className="footer_middle-right">
                            <div className="heading-style-h3 text-color-alternate">Connect</div>
                            <div className="footer_social-link-wrapper">
                                <div
                                    className="is-magnatic"
                                    style={{
                                        willChange: "transform",
                                        transform:
                                            "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        transformStyle: "preserve-3d"
                                    }}
                                >
                                    <a
                                        data-w-id="1dc7bf29-b59a-c97d-ec7d-00e476be4559"
                                        href="#"
                                        target="_blank"
                                        className="footer_social-link w-inline-block"
                                    >
                                        <div>Twitter</div>
                                        <div className="footer_social-overlay" />
                                        <div
                                            className="button-hover-bg"
                                            style={{
                                                transform:
                                                    "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                transformStyle: "preserve-3d"
                                            }}
                                        ></div>
                                    </a>
                                </div>
                                <div
                                    className="is-magnatic"
                                    style={{
                                        willChange: "transform",
                                        transform:
                                            "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        transformStyle: "preserve-3d"
                                    }}
                                >
                                    <a
                                        data-w-id="1dc7bf29-b59a-c97d-ec7d-00e476be455d"
                                        href="#"
                                        target="_blank"
                                        className="footer_social-link w-inline-block"
                                    >
                                        <div>Email</div>
                                        <div className="footer_social-overlay" />
                                        <div
                                            className="button-hover-bg"
                                            style={{
                                                transform:
                                                    "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                transformStyle: "preserve-3d"
                                            }}
                                        ></div>
                                    </a>
                                </div>
                                <div
                                    className="is-magnatic"
                                    style={{
                                        willChange: "transform",
                                        transform:
                                            "translate3d(0rem, 0rem, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                        transformStyle: "preserve-3d"
                                    }}
                                >
                                    <a
                                        data-w-id="1dc7bf29-b59a-c97d-ec7d-00e476be4561"
                                        href="#"
                                        target="_blank"
                                        className="footer_social-link w-inline-block"
                                    >
                                        <div>Linkedin</div>
                                        <div className="footer_social-overlay" />
                                        <div
                                            className="button-hover-bg"
                                            style={{
                                                transform:
                                                    "translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                                                transformStyle: "preserve-3d"
                                            }}
                                        ></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <div className="footer_service-menu">
                            <a
                                href="#"
                                target="_blank"
                                className="clutch-link w-inline-block"
                            >
                                <img
                                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67b02ff19b0ad6a3fb5ba114_clutch-logo.svg"
                                    loading="lazy"
                                    alt="clutch logo"
                                />
                            </a>
                            <div className="footer_service-link-wrap">
                                <a
                                    href="/"
                                    aria-current="page"
                                    className="text-weight-medium text-color-alternate w--current"
                                >
                                    Home
                                </a>
                                <a href="/about" className="footer_service-link">
                                    About
                                </a>
                                <a href="/services" className="footer_service-link">
                                    Services
                                </a>
                                <a href="/projects" className="footer_service-link">
                                    Projects
                                </a>
                                <a href="/contact" className="footer_service-link">
                                    Contact
                                </a>
                            </div>
                        </div>
                        <div className="footer_divider" />
                        <div className="footer_copyright">
                            <a href="#" className="download-button w-inline-block">
                                <div data-gradient={1} className="download-button_text">
                                    Download deck
                                </div>
                                <img
                                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/67d9261eb0261c57f846fabb_arrow-up.svg"
                                    loading="lazy"
                                    alt=""
                                />
                            </a>
                            <div className="footer_copyright-text">Made with Love Wasel Team ❤</div>
                            <a href="#header" className="back-to-top w-inline-block w--current">
                                <div>Back to top</div>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="100%"
                                    viewBox="0 0 14 14"
                                    fill="none"
                                    className="bac-to-top-arrow"
                                >
                                    <path
                                        d="M11.6199 8.77888L7.81655 4.97555C7.36738 4.52638 6.63238 4.52638 6.18322 4.97555L2.37988 8.77888"
                                        stroke="currentColor"
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <picture className="bg-absolute-shape">
                <source
                    srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f16dc9f1294ba1936b7fc_footer-gradient-bg-shape-mobil.png"
                    media="(max-width: 375px)"
                />
                <img
                    className="cover-image"
                    src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f167b98ff3be489cafd02_footer-gradient-bg-shape-low.webp"
                    data-lazy-src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f15e0b040e507611785eb_footer-gradient-bg-shape.png"
                    alt=""
                    width="100%"
                    height="100%"
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                />
            </picture>
            <img
                src="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f1810b655b374941bb843_footer-pattern.png"
                loading="lazy"
                sizes="100vw"
                srcSet="https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f1810b655b374941bb843_footer-pattern-p-500.png 500w, https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f1810b655b374941bb843_footer-pattern-p-800.png 800w, https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f1810b655b374941bb843_footer-pattern-p-1080.png 1080w, https://cdn.prod.website-files.com/679788a93b745e4c42cbb1c5/682f1810b655b374941bb843_footer-pattern.png 1440w"
                alt=""
                className="pattern-bg pointer-events-none"
            />
        </footer>
    );
};

export default Footer;
