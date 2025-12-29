import { useEffect } from 'react';

export const useWebflowScripts = () => {
  useEffect(() => {
    // Load jQuery first (required by Webflow)
    const jqueryScript = document.createElement('script');
    jqueryScript.src = '/js-and-animation/jquery-3.5.1.min.dc5e7f18c8.js';
    jqueryScript.async = false;
    document.body.appendChild(jqueryScript);

    // Load Swiper
    const swiperScript = document.createElement('script');
    swiperScript.src = '/js-and-animation/swiper-bundle.min.js';
    swiperScript.async = false;
    document.body.appendChild(swiperScript);

    // Load Cal.com embed
    const calScript = document.createElement('script');
    calScript.src = '/js-and-animation/embed.js';
    calScript.async = false;
    document.body.appendChild(calScript);

    // Load Webflow scripts in order
    const webflowScripts = [
      '/js-and-animation/webflow.schunk.36b8fb49256177c8.js',
      '/js-and-animation/webflow.schunk.c4a36111a0acf2f7.js',
      '/js-and-animation/webflow.d7a61038.d7ad47a38177bf8a.js',
      '/js-and-animation/webflow.7327b3ce.039d10ee52b7a630.js'
    ];

    let loadedScripts = 0;

    const initializeWebflowCustomScripts = () => {
      const $ = window.$;
      const Webflow = window.Webflow || [];

      Webflow.push(function () {
        // Nav scroll functionality
        let lastScrollTop = 0;
        const $wrapper = $('.nav_component');
        const $nav = $('.nav_wrapper');
        const delta = 10;

        $(window).on('scroll', function () {
          const scrollTop = $(this).scrollTop();

          if (scrollTop > 0) {
            $nav.addClass('scrolled');
          } else {
            $nav.removeClass('scrolled');
          }

          if (Math.abs(lastScrollTop - scrollTop) <= delta) return;

          if (scrollTop > lastScrollTop && scrollTop > $nav.outerHeight()) {
            $wrapper.addClass('nav-hidden');
          } else if (scrollTop + $(window).height() < $(document).height()) {
            $wrapper.removeClass('nav-hidden');
          }

          lastScrollTop = scrollTop;
        });

        // Lazy Load Images
        if ($("img[data-lazy-src]").length > 0) {
          let t = new IntersectionObserver((t, e) => {
            t.forEach(t => {
              if (t.isIntersecting) {
                let a = $(t.target), r = a.attr("data-lazy-src"), c = new Image;
                c.src = r;
                $(c).on("load", function () {
                  c.decode().then(() => {
                    a.attr("src", r);
                    a.removeAttr("data-lazy-src");
                  }).catch(t => console.error("Image decoding failed:", t));
                });
                e.unobserve(t.target);
              }
            });
          });
          $("img[data-lazy-src]").each(function () {
            t.observe(this);
          });
        }

        // Navigation mobile menu
        $(".nav_menu-button").click(function () {
          $(".nav_menu-bar").toggleClass("nav-open");
          $(".mobile-menu-wrapper").toggleClass("is-open");
        });

        // Copy to clipboard
        function copyToClipboard(o) {
          var e = $("<input>");
          $("body").append(e);
          e.val($(o).text()).select();
          document.execCommand("copy");
          e.remove();
        }

        $(".copy-parent").on("click", function () {
          copyToClipboard($(this).find("[id='textToCopy']").get(0));
          $(this).find(".copy-result").addClass("active");
          setTimeout(() => {
            $(this).find(".copy-result").removeClass("active");
          }, 1000);
        });

        // Nav dropdown services
        const $serviceItems = $(".nav_services_list-item");
        const $images = $(".nav_service_image");
        const $contents = $(".nav_services_content-inner");

        $serviceItems.on("mouseenter", function () {
          let e = $(this).index();
          $images.removeClass("is-active");
          $contents.removeClass("is-active");
          $serviceItems.removeClass("is-active");
          $($images[e]).addClass("is-active");
          $($contents[e]).addClass("is-active");
          $(this).addClass("is-active");
        });

        // Core services items
        const $coreServiceItems = $(".core-service_link");
        const $coreImages = $(".core-service_figure");
        const $CoreContents = $(".core-service_right_content");

        $coreServiceItems.on("mouseenter", function () {
          let e = $(this).index();
          $coreImages.removeClass("is-active");
          $CoreContents.removeClass("is-active");
          $coreServiceItems.removeClass("is-active");
          $($coreImages[e]).addClass("is-active");
          $($CoreContents[e]).addClass("is-active");
          $(this).addClass("is-active");
        });
      });

      // Page specific script
      Webflow.push(function () {
        // Swiper initialization
        if (window.Swiper) {
          new window.Swiper(".testimonial-swiper", {
            slidesPerView: 1,
            spaceBetween: 24,
            speed: 700,
            breakpoints: {
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            },
          });
        }

        // Video lazy load
        var $lazyVideos = $("video.lazy");
        $lazyVideos.each(function () {
          var $video = $(this);
          $video.find("source").each(function () {
            var $source = $(this);
            $source.attr("src", $source.data("src"));
          });
          this.load();
          $video.removeClass("lazy");
        });
      });
    };

    const loadWebflowScripts = () => {
      webflowScripts.forEach((src) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = false;
        script.onload = () => {
          loadedScripts++;
          if (loadedScripts === webflowScripts.length) {
            // Initialize custom scripts after all Webflow scripts loaded
            setTimeout(() => {
              if (window.$ && window.Webflow) {
                initializeWebflowCustomScripts();
              }
            }, 100);
          }
        };
        document.body.appendChild(script);
      });
    };

    // Wait for jQuery and Swiper to load first
    jqueryScript.onload = () => {
      swiperScript.onload = () => {
        loadWebflowScripts();
      };
    };

    // Cleanup function
    return () => {
      const scripts = document.querySelectorAll('script[src^="/js-and-animation"]');
      scripts.forEach(script => script.remove());
    };
  }, []);
};

// TypeScript declaration for Webflow global
declare global {
  interface Window {
    Webflow: any;
    $: any;
    jQuery: any;
    Swiper: any;
  }
}
