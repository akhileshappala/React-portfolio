(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 435:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: Failed to parse URL from /Users/ssakhilesha/Documents/GitHub/React-portfolio/node_modules/next/dist/server/lib/squoosh/webp/webp_node_dec.wasm\n    at Object.fetch (node:internal/deps/undici/undici:11118:11)\n    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)");

/***/ }),

/***/ 643:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: Failed to parse URL from /Users/ssakhilesha/Documents/GitHub/React-portfolio/node_modules/next/dist/server/lib/squoosh/mozjpeg/mozjpeg_node_dec.wasm\n    at Object.fetch (node:internal/deps/undici/undici:11118:11)");

/***/ }),

/***/ 553:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: Failed to parse URL from /Users/ssakhilesha/Documents/GitHub/React-portfolio/node_modules/next/dist/server/lib/squoosh/mozjpeg/mozjpeg_node_dec.wasm\n    at Object.fetch (node:internal/deps/undici/undici:11118:11)");

/***/ }),

/***/ 466:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: Failed to parse URL from /Users/ssakhilesha/Documents/GitHub/React-portfolio/node_modules/next/dist/server/lib/squoosh/mozjpeg/mozjpeg_node_dec.wasm\n    at Object.fetch (node:internal/deps/undici/undici:11118:11)");

/***/ }),

/***/ 117:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: Failed to parse URL from /Users/ssakhilesha/Documents/GitHub/React-portfolio/node_modules/next/dist/server/lib/squoosh/mozjpeg/mozjpeg_node_dec.wasm\n    at Object.fetch (node:internal/deps/undici/undici:11118:11)");

/***/ }),

/***/ 740:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: Failed to parse URL from /Users/ssakhilesha/Documents/GitHub/React-portfolio/node_modules/next/dist/server/lib/squoosh/mozjpeg/mozjpeg_node_dec.wasm\n    at Object.fetch (node:internal/deps/undici/undici:11118:11)");

/***/ }),

/***/ 381:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: Failed to parse URL from /Users/ssakhilesha/Documents/GitHub/React-portfolio/node_modules/next/dist/server/lib/squoosh/mozjpeg/mozjpeg_node_dec.wasm\n    at Object.fetch (node:internal/deps/undici/undici:11118:11)");

/***/ }),

/***/ 1:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: Failed to parse URL from /Users/ssakhilesha/Documents/GitHub/React-portfolio/node_modules/next/dist/server/lib/squoosh/mozjpeg/mozjpeg_node_dec.wasm\n    at Object.fetch (node:internal/deps/undici/undici:11118:11)");

/***/ }),

/***/ 509:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: Failed to parse URL from /Users/ssakhilesha/Documents/GitHub/React-portfolio/node_modules/next/dist/server/lib/squoosh/mozjpeg/mozjpeg_node_dec.wasm\n    at Object.fetch (node:internal/deps/undici/undici:11118:11)");

/***/ }),

/***/ 811:
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/next/dist/build/webpack/loaders/next-image-loader.js):\nTypeError: Failed to parse URL from /Users/ssakhilesha/Documents/GitHub/React-portfolio/node_modules/next/dist/server/lib/squoosh/webp/webp_node_dec.wasm\n    at Object.fetch (node:internal/deps/undici/undici:11118:11)");

/***/ }),

/***/ 962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
;// CONCATENATED MODULE: ./src/components/Layout/Page.tsx




const Page = /*#__PURE__*/ (0,external_react_.memo)(({ children , title , description  })=>{
    const { asPath: pathname  } = (0,router_namespaceObject.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: description,
                        name: "description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: `https://reactresume.com${pathname}`,
                        rel: "canonical"
                    }, "canonical"),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/favicon.ico",
                        rel: "icon",
                        sizes: "any"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/icon.svg",
                        rel: "icon",
                        type: "image/svg+xml"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/apple-touch-icon.png",
                        rel: "apple-touch-icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        href: "/site.webmanifest",
                        rel: "manifest"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: title,
                        property: "og:title"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: description,
                        property: "og:description"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: `https://reactresume.com${pathname}`,
                        property: "og:url"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: title,
                        name: "twitter:title"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        content: description,
                        name: "twitter:description"
                    })
                ]
            }),
            children
        ]
    });
});
Page.displayName = "Page";
/* harmony default export */ const Layout_Page = (Page);

;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: external "@heroicons/react/outline"
const outline_namespaceObject = require("@heroicons/react/outline");
;// CONCATENATED MODULE: ./src/components/Icon/Icon.tsx


const Icon = /*#__PURE__*/ (0,external_react_.memo)(({ children , className , svgRef , transform , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        className: className,
        fill: "currentColor",
        ref: svgRef,
        transform: transform,
        viewBox: "0 0 128 128",
        width: "128",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: children
    }));
/* harmony default export */ const Icon_Icon = (Icon);

;// CONCATENATED MODULE: ./src/components/Icon/GithubIcon.tsx



const GithubIcon = /*#__PURE__*/ (0,external_react_.memo)((props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Icon_Icon, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                clipRule: "evenodd",
                d: "M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z",
                fillRule: "evenodd"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"
            })
        ]
    }));
/* harmony default export */ const Icon_GithubIcon = (GithubIcon);

;// CONCATENATED MODULE: ./src/components/Icon/InstagramIcon.tsx



const InstagramIcon = /*#__PURE__*/ (0,external_react_.memo)((props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Icon_Icon, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M92.6759 0H35.3226C15.8457 0 0 15.8465 0 35.3234V92.6766C0 112.154 15.8457 128 35.3226 128H92.6759C112.154 128 128 112.154 128 92.6766V35.3234C128.001 15.8465 112.154 0 92.6759 0ZM116.644 92.6766C116.644 105.892 105.892 116.643 92.6766 116.643H35.3226C22.1079 116.644 11.3568 105.892 11.3568 92.6766V35.3234C11.3568 22.1086 22.1079 11.3568 35.3226 11.3568H92.6759C105.891 11.3568 116.643 22.1086 116.643 35.3234V92.6766H116.644Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M64 31.0191C45.8133 31.0191 31.0176 45.8147 31.0176 64.0015C31.0176 82.1875 45.8133 96.9823 64 96.9823C82.1867 96.9823 96.9824 82.1875 96.9824 64.0015C96.9824 45.8147 82.1867 31.0191 64 31.0191ZM64 85.6248C52.0761 85.6248 42.3744 75.9246 42.3744 64.0007C42.3744 52.0761 52.0754 42.3751 64 42.3751C75.9246 42.3751 85.6256 52.0761 85.6256 64.0007C85.6256 75.9246 75.9239 85.6248 64 85.6248Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M98.3656 21.3893C96.1775 21.3893 94.0281 22.2752 92.4828 23.8273C90.9299 25.3718 90.0373 27.522 90.0373 29.7176C90.0373 31.9065 90.9307 34.0559 92.4828 35.608C94.0273 37.1526 96.1775 38.046 98.3656 38.046C100.561 38.046 102.704 37.1526 104.256 35.608C105.808 34.0559 106.694 31.9057 106.694 29.7176C106.694 27.522 105.808 25.3718 104.256 23.8273C102.711 22.2752 100.561 21.3893 98.3656 21.3893Z",
                fill: "currentColor"
            })
        ]
    }));
/* harmony default export */ const Icon_InstagramIcon = (InstagramIcon);

;// CONCATENATED MODULE: ./src/components/Icon/LinkedInIcon.tsx



const LinkedInIcon = /*#__PURE__*/ (0,external_react_.memo)((props)=>/*#__PURE__*/ jsx_runtime_.jsx(Icon_Icon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3zM39.17 107H21.06V48.73h18.11zm-9-66.21a10.5 10.5 0 1110.49-10.5 10.5 10.5 0 01-10.54 10.48zM107 107H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53V48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75z",
            fill: "currentColor"
        })
    }));
/* harmony default export */ const Icon_LinkedInIcon = (LinkedInIcon);

;// CONCATENATED MODULE: ./src/components/Icon/StackOverflowIcon.tsx



const StackOverflowIcon = /*#__PURE__*/ (0,external_react_.memo)((props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Icon_Icon, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M90.1875 114.162V83.027H104.062V128H0V83.027H13.875V114.162H90.1875Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M74.5781 0L65.2125 6.91892L99.5531 52.9297L108.919 46.0108L74.5781 0ZM90.1875 63.6541L46.1344 26.9838L53.4187 18.3351L97.4719 55.0054L90.1875 63.6541ZM31.5656 52.5838L83.5969 76.8L88.4531 66.4216L36.4219 42.2054L31.5656 52.5838ZM80.1281 89.9114L82.4869 79.706L26.64 68.1168L24.2812 79.5676L80.1281 89.9114V89.9114ZM79.7812 103.784H24.2812V93.4054H79.7812V103.784Z",
                fill: "currentColor"
            })
        ]
    }));
/* harmony default export */ const Icon_StackOverflowIcon = (StackOverflowIcon);

// EXTERNAL MODULE: ./src/images/header-background.webp
var header_background = __webpack_require__(435);
var header_background_default = /*#__PURE__*/__webpack_require__.n(header_background);
// EXTERNAL MODULE: ./src/images/portfolio/portfolio-2.jpg
var portfolio_2 = __webpack_require__(553);
var portfolio_2_default = /*#__PURE__*/__webpack_require__.n(portfolio_2);
// EXTERNAL MODULE: ./src/images/portfolio/portfolio-3.jpg
var portfolio_3 = __webpack_require__(466);
var portfolio_3_default = /*#__PURE__*/__webpack_require__.n(portfolio_3);
// EXTERNAL MODULE: ./src/images/portfolio/portfolio-5.jpg
var portfolio_5 = __webpack_require__(117);
var portfolio_5_default = /*#__PURE__*/__webpack_require__.n(portfolio_5);
// EXTERNAL MODULE: ./src/images/portfolio/portfolio-6.jpg
var portfolio_6 = __webpack_require__(740);
var portfolio_6_default = /*#__PURE__*/__webpack_require__.n(portfolio_6);
// EXTERNAL MODULE: ./src/images/portfolio/portfolio-7.jpg
var portfolio_7 = __webpack_require__(381);
var portfolio_7_default = /*#__PURE__*/__webpack_require__.n(portfolio_7);
// EXTERNAL MODULE: ./src/images/portfolio/portfolio-9.jpg
var portfolio_9 = __webpack_require__(1);
var portfolio_9_default = /*#__PURE__*/__webpack_require__.n(portfolio_9);
// EXTERNAL MODULE: ./src/images/portfolio/portfolio-11.jpg
var portfolio_11 = __webpack_require__(643);
var portfolio_11_default = /*#__PURE__*/__webpack_require__.n(portfolio_11);
// EXTERNAL MODULE: ./src/images/profilepic.jpg
var profilepic = __webpack_require__(509);
var profilepic_default = /*#__PURE__*/__webpack_require__.n(profilepic);
// EXTERNAL MODULE: ./src/images/testimonial.webp
var testimonial = __webpack_require__(811);
var testimonial_default = /*#__PURE__*/__webpack_require__.n(testimonial);
;// CONCATENATED MODULE: ./src/data/dataDef.ts
const ContactType = {
    Email: "Email",
    Phone: "Phone",
    Location: "Location",
    Github: "Github",
    LinkedIn: "LinkedIn",
    Facebook: "Facebook",
    Twitter: "Twitter",
    Instagram: "Instagram"
};

;// CONCATENATED MODULE: ./src/data/data.tsx

















/**
 * Page meta data
 */ const homePageMeta = {
    title: "React Resume Template",
    description: "Example site built with Tim Baker's react resume template"
};
/**
 * Section definition
 */ const SectionId = {
    Hero: "hero",
    About: "about",
    Contact: "contact",
    Portfolio: "portfolio",
    Resume: "resume",
    Skills: "skills",
    Stats: "stats",
    Testimonials: "testimonials"
};
/**
 * Hero section
 */ const heroData = {
    imageSrc: (header_background_default()),
    name: `I'm S.S.Akhilesh Appala`,
    description: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "prose-sm text-stone-200 sm:prose-base lg:prose-lg",
                children: [
                    "I'm a ",
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        className: "text-stone-100",
                        children: "Full Stack Developer with 4 years of experience,"
                    }),
                    " currently pursuing ",
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        children: " Masters in Computer Science "
                    }),
                    "at ",
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        className: "text-stone-100",
                        children: "University of Colorado at Boulder."
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "prose-sm text-stone-200 sm:prose-base lg:prose-lg",
                children: [
                    "Actively looking for  ",
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        className: "text-stone-100",
                        children: "  Summer Intenrships - 2023"
                    }),
                    " in Software Development related to Full Stack."
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                className: "prose-sm text-stone-200 sm:prose-base lg:prose-lg",
                children: [
                    "In my free time, you can catch me with 111^212312 coffee cup, experimenting with ",
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        className: "text-stone-100",
                        children: "photography"
                    }),
                    ", Building open source ",
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        className: "text-stone-100",
                        children: "projects"
                    }),
                    " or touring the beautiful ",
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                        className: "text-stone-100",
                        children: "Colorado"
                    }),
                    "."
                ]
            })
        ]
    }),
    actions: [
        {
            href: "/assets/resume.pdf",
            text: "Resume",
            primary: true,
            Icon: outline_namespaceObject.DownloadIcon
        },
        {
            href: `#${SectionId.Contact}`,
            text: "Contact",
            primary: false
        }, 
    ]
};
/**
 * About section
 */ const aboutData = {
    profileImageSrc: (profilepic_default()),
    description: ` I do Full stack development using JS. I really enjoy working with JS related frameworks like Angular,React,NodeJs,
  Node-red(IOT technology) and java Springboot for web applications and ElectronJs, NWJS for Desktop applications.
  Have experience with CI/CD tools like jenkins for building pipelines to automate the build and deployment process.`,
    aboutItems: [
        {
            label: "Location",
            text: "Boulder, CO",
            Icon: outline_namespaceObject.MapIcon
        },
        {
            label: "Looking for",
            text: "Summer Internships - 2023",
            Icon: outline_namespaceObject.CalendarIcon
        },
        {
            label: "Nationality",
            text: "Indian",
            Icon: outline_namespaceObject.FlagIcon
        },
        {
            label: "Interests",
            text: "Tech-Gadgets, Motorcycles, Cricket",
            Icon: outline_namespaceObject.SparklesIcon
        },
        {
            label: "Study",
            text: "University of Colorado at Boulder",
            Icon: outline_namespaceObject.AcademicCapIcon
        },
        {
            label: "Ex-Employment",
            text: "Thermo Fisher Scientific",
            Icon: outline_namespaceObject.OfficeBuildingIcon
        }, 
    ]
};
/**
 * Skills section
 */ const skills = [
    {
        name: "Frontend development",
        skills: [
            {
                name: "Angular",
                level: 9
            },
            {
                name: "React",
                level: 8
            },
            {
                name: "Typescript",
                level: 8
            }, 
        ]
    },
    {
        name: "Backend development",
        skills: [
            {
                name: "Node.js",
                level: 8
            },
            {
                name: "Java Spring Boot",
                level: 6
            },
            {
                name: "flask",
                level: 6
            }, 
        ]
    },
    {
        name: "Desktop and Mobile development",
        skills: [
            {
                name: "Electron JS",
                level: 9
            },
            {
                name: "NWJS ",
                level: 7
            },
            {
                name: "Ionic ",
                level: 8
            }, 
        ]
    },
    {
        name: "DevOPS",
        skills: [
            {
                name: "AWS",
                level: 6
            },
            {
                name: "Jenkisn",
                level: 9
            },
            {
                name: "Docket and kubernetes",
                level: 7
            }
        ]
    }
];
/**
 * Portfolio section
 */ const portfolioItems = [
    {
        title: "Angular Project",
        description: "Angular framework based project connecting concepts with code samples.",
        url: "https://github.com/akhileshappala/complete-Angular-project",
        image: (portfolio_7_default())
    },
    {
        title: "React Project",
        description: "React framework based project connecting concepts with code samples.",
        url: "https://github.com/akhileshappala/React-project",
        image: (portfolio_3_default())
    },
    {
        title: "NodeJs-MongoDB project",
        description: "NodeJs framework based project connecting concepts with code samples.",
        url: "https://github.com/akhileshappala/NodeJS-MongoDb-project",
        image: (portfolio_2_default())
    },
    {
        title: "Bootstrap Project",
        description: "Bootstrap based project connecting concepts with code samples.",
        url: "https://github.com/akhileshappala/BootStrap4-project",
        image: (portfolio_5_default())
    },
    {
        title: "US-forest fire prediction",
        description: "Data Mining project for US forest fire prediction based on the regions wise models and classification.",
        url: "https://github.com/akhileshappala/Masters-Datamining-project",
        image: (portfolio_6_default())
    },
    {
        title: "Twitter Sentimental analysis",
        description: "To annalyse tweets which are toxic or not, using different approaches.",
        url: "https://github.com/akhileshappala/Twitter-sentimental-analysis",
        image: (portfolio_9_default())
    },
    {
        title: "Masters Course work ",
        description: "The course work related to the current masters program at University of Colorado at Boulder.",
        url: "https://github.com/akhileshappala/Masters-course-work",
        image: (portfolio_11_default())
    }, 
];
/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */ const education = [
    {
        date: "Aug 2022 - April 2024",
        location: "Masters in Computer Science",
        title: "University of Colorado at Boulder ",
        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            children: [
                "Pursuing Masters in Computer Science, exploring the courses related to Design and Analysis of algorithms, Data analytics, Systems side. In parallel working as a ",
                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: "Research project lead"
                }),
                " for verbNet project under ",
                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: " Dr.Susan Brown and Dr.Martha Palmar."
                })
            ]
        })
    },
    {
        date: "Jul 2015 -  May 2019",
        location: "Bachelors in Computer Science",
        title: "Amrita University",
        content: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Worked and mentored freshers in FOSS club for 2 years, worked on a research related to Digital image processing under Dr.Geetha and published it in IMTEX conference. lead for 8 projects in academics, Please check the github for more information."
        })
    }, 
];
const experience = [
    {
        date: "July 2019 - June 2022",
        location: "Thermo Fisher Scientific ",
        title: "Software Engineer 2",
        content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: " Skills Used "
                }),
                " : Angular 8-10, ElectornJS, AWS Services, Node-red, Spring\u2011Boot Framework, ESF.",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: " LabEdge"
                }),
                ":  Designed a platform for linking lab instruments to the cloud through a physical gateway. The project included cloud and edge components integrated with ESF to manage and operate the 250+ devices from anywhere.",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: " CDD library"
                }),
                " : Presented and Developed a Configuration-driven-dynamic UI library to generate the UI pages using JSON rather than the regular method. while reducing the development cycle of developing UI mock-ups by nearly 60%.",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: " Connect Enterprise: Serial and Network:"
                }),
                ":  Web and desktop application to display the updated values of an instrument based on demand/ scheduler while connected to serial / Network device including data transformation/ conversion.",
                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: "Architectured Node\u2011red flows"
                }),
                " to connect serial and network instruments from Thermo Fisher Scientific laboratories, lowering the risk of receiving stale data from 10 seconds to 2 seconds, an 80% reduction.",
                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                    children: "Edge-Lims Immersive POC"
                }),
                ": Edge-LIMS-Immersive POC: Lead a five-person team that uses computer vision to integrate the Microsoft HoloLens 2 with lab instruments. This has been chosen for the Thermo Fisher Scientific Patenting process for 2022. Implemented a mechanism to register devices to cloud applications by scanning the QR codes on the device. Features such as checking logs and status in the cloud application reduce human intervention by 70%."
            ]
        })
    },
    {
        date: " May 2018 - Aug 2018 & Jan 2019 - June 2019",
        location: "Thermo Fisher Scientific ",
        title: "Software Developer Intern",
        content: /*#__PURE__*/ jsx_runtime_.jsx("p", {
            children: "Responsible for creating a web application and Integrating the same with a legacy instrument, which is a tissue processor. The web app is responsible for dynamically updating the status and usage of resources and their availability based on need."
        })
    }, 
];
/**
 * Testimonial section
 */ const data_testimonial = {
    imageSrc: (testimonial_default()),
    testimonials: [
        {
            name: "Akhilesh Appala",
            text: "Work, life, Balance - Peace and Happiness, these are ultimate.",
            image: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg"
        }
    ]
};
/**
 * Contact section
 */ const contact = {
    headerText: "Get in touch.",
    description: "The best way to get in touch with is the emailing service, you typically get response in couple of days.",
    items: [
        {
            type: ContactType.Email,
            text: "akiakhilesh16@gmail.com",
            href: "mailto:akiakhilesh16@gmail.com"
        },
        {
            type: ContactType.Location,
            text: "Boulder, CO, USA",
            href: "https://goo.gl/maps/B13ds45CVZWCEETq6"
        },
        {
            type: ContactType.LinkedIn,
            text: "@akhileshappala",
            href: "https://www.linkedin.com/in/akhilesh-appala/"
        },
        {
            type: ContactType.Github,
            text: "Akhilesh Appala",
            href: "https://github.com/akhileshappala"
        }
    ]
};
/**
 * Social items
 */ const socialLinks = [
    {
        label: "Github",
        Icon: Icon_GithubIcon,
        href: "https://github.com/akhileshappala"
    },
    {
        label: "LinkedIn",
        Icon: Icon_LinkedInIcon,
        href: "https://www.linkedin.com/in/akhilesh-appala/"
    },
    {
        label: "Wordpress",
        Icon: Icon_StackOverflowIcon,
        href: "https://akhileshappala.wordpress.com"
    },
    {
        label: "Instagram",
        Icon: Icon_InstagramIcon,
        href: "https://www.instagram.com/random_shutters/"
    }, 
];

;// CONCATENATED MODULE: ./src/components/Layout/Section.tsx



const Section = /*#__PURE__*/ (0,external_react_.memo)(({ children , sectionId , noPadding =false , className  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: external_classnames_default()(className, {
            "px-4 py-16 md:py-24 lg:px-8": !noPadding
        }),
        id: sectionId,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: external_classnames_default()({
                "mx-auto max-w-screen-lg": !noPadding
            }),
            children: children
        })
    });
});
Section.displayName = "Section";
/* harmony default export */ const Layout_Section = (Section);

;// CONCATENATED MODULE: ./src/components/Sections/About.tsx






const About = /*#__PURE__*/ (0,external_react_.memo)(()=>{
    const { profileImageSrc , description , aboutItems  } = aboutData;
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout_Section, {
        className: "bg-neutral-800",
        sectionId: SectionId.About,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: external_classnames_default()("grid grid-cols-1 gap-y-4", {
                "md:grid-cols-4": !!profileImageSrc
            }),
            children: [
                !!profileImageSrc && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-span-1 flex justify-center md:justify-start",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "relative h-24 w-24 overflow-hidden rounded-xl md:h-32 md:w-32",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            alt: "about-me-image",
                            layout: "fill",
                            objectFit: "cover",
                            src: profileImageSrc
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: external_classnames_default()("col-span-1 flex flex-col gap-y-6", {
                        "md:col-span-3": !!profileImageSrc
                    }),
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex flex-col gap-y-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "text-2xl font-bold text-white",
                                    children: "About me"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "prose prose-sm text-gray-300 sm:prose-base",
                                    children: description
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "grid grid-cols-1 gap-4 sm:grid-cols-2",
                            children: aboutItems.map(({ label , text , Icon  }, idx)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                    className: "col-span-1 flex items-start gap-x-2",
                                    children: [
                                        Icon && /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                            className: "h-5 w-5 text-white"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                            className: "text-sm font-bold text-white",
                                            children: [
                                                label,
                                                ":"
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: " text-sm text-gray-300",
                                            children: text
                                        })
                                    ]
                                }, idx))
                        })
                    ]
                })
            ]
        })
    });
});
About.displayName = "About";
/* harmony default export */ const Sections_About = (About);

;// CONCATENATED MODULE: ./src/components/Icon/FacebookIcon.tsx



const FacebookIcon = /*#__PURE__*/ (0,external_react_.memo)((props)=>/*#__PURE__*/ jsx_runtime_.jsx(Icon_Icon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M116.42 5.07H11.58a6.5 6.5 0 00-6.5 6.5v104.85a6.5 6.5 0 006.5 6.5H68V77.29H52.66V59.5H68V46.38c0-15.22 9.3-23.51 22.88-23.51a126 126 0 0113.72.7v15.91h-9.39c-7.39 0-8.82 3.51-8.82 8.66V59.5H104l-2.29 17.79H86.39v45.64h30a6.51 6.51 0 006.5-6.5V11.58a6.5 6.5 0 00-6.47-6.51z",
            fill: "currentColor"
        })
    }));
/* harmony default export */ const Icon_FacebookIcon = (FacebookIcon);

;// CONCATENATED MODULE: ./src/components/Icon/TwitterIcon.tsx



const TwitterIcon = /*#__PURE__*/ (0,external_react_.memo)((props)=>/*#__PURE__*/ jsx_runtime_.jsx(Icon_Icon, {
        ...props,
        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
            d: "M40.254 127.637c48.305 0 74.719-48.957 74.719-91.403 0-1.39 0-2.777-.075-4.156 5.141-4.547 9.579-10.18 13.102-16.633-4.79 2.602-9.871 4.305-15.078 5.063 5.48-4.02 9.582-10.336 11.539-17.774-5.156 3.743-10.797 6.38-16.68 7.801-8.136-10.586-21.07-13.18-31.547-6.32-10.472 6.86-15.882 21.46-13.199 35.617C41.922 38.539 22.246 26.336 8.915 6.27 1.933 20.94 5.487 39.723 17.022 49.16c-4.148-.172-8.207-1.555-11.832-4.031v.41c0 15.273 8.786 28.438 21.02 31.492a21.596 21.596 0 01-11.863.543c3.437 13.094 13.297 22.07 24.535 22.328-9.305 8.918-20.793 13.75-32.617 13.72-2.094 0-4.188-.15-6.266-.446 12.008 9.433 25.98 14.441 40.254 14.422",
            fill: "currentColor"
        })
    }));
/* harmony default export */ const Icon_TwitterIcon = (TwitterIcon);

;// CONCATENATED MODULE: ./src/components/Sections/Contact/ContactForm.tsx


const ContactForm = /*#__PURE__*/ (0,external_react_.memo)(()=>{
    const defaultData = (0,external_react_.useMemo)(()=>({
            name: "",
            email: "",
            message: ""
        }), []);
    const { 0: data , 1: setData  } = (0,external_react_.useState)(defaultData);
    const onChange = (0,external_react_.useCallback)((event)=>{
        const { name , value  } = event.target;
        const fieldData = {
            [name]: value
        };
        setData({
            ...data,
            ...fieldData
        });
    }, [
        data
    ]);
    const handleSendMessage = (0,external_react_.useCallback)(async (event)=>{
        event.preventDefault();
        /**
       * This is a good starting point to wire up your form submission logic
       * */ console.log("Data to send: ", data);
    }, [
        data
    ]);
    const inputClasses = "bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        className: "grid min-h-[320px] grid-cols-1 gap-y-4",
        method: "POST",
        onSubmit: handleSendMessage,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                className: inputClasses,
                name: "name",
                onChange: onChange,
                placeholder: "Name",
                required: true,
                type: "text"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                autoComplete: "email",
                className: inputClasses,
                name: "email",
                onChange: onChange,
                placeholder: "Email",
                required: true,
                type: "email"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                className: inputClasses,
                maxLength: 250,
                name: "message",
                onChange: onChange,
                placeholder: "Message",
                required: true,
                rows: 6
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                "aria-label": "Submit contact form",
                className: "w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800",
                type: "submit",
                children: "Send Message"
            })
        ]
    });
});
ContactForm.displayName = "ContactForm";
/* harmony default export */ const Contact_ContactForm = (ContactForm);

;// CONCATENATED MODULE: ./src/components/Sections/Contact/index.tsx













const ContactValueMap = {
    [ContactType.Email]: {
        Icon: outline_namespaceObject.MailIcon,
        srLabel: "Email"
    },
    [ContactType.Phone]: {
        Icon: outline_namespaceObject.DeviceMobileIcon,
        srLabel: "Phone"
    },
    [ContactType.Location]: {
        Icon: outline_namespaceObject.LocationMarkerIcon,
        srLabel: "Location"
    },
    [ContactType.Github]: {
        Icon: Icon_GithubIcon,
        srLabel: "Github"
    },
    [ContactType.LinkedIn]: {
        Icon: Icon_LinkedInIcon,
        srLabel: "LinkedIn"
    },
    [ContactType.Facebook]: {
        Icon: Icon_FacebookIcon,
        srLabel: "Facebook"
    },
    [ContactType.Twitter]: {
        Icon: Icon_TwitterIcon,
        srLabel: "Twitter"
    },
    [ContactType.Instagram]: {
        Icon: Icon_InstagramIcon,
        srLabel: "Instagram"
    }
};
const Contact = /*#__PURE__*/ (0,external_react_.memo)(()=>{
    const { headerText , description , items  } = contact;
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout_Section, {
        className: "bg-neutral-800",
        sectionId: SectionId.Contact,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-y-6",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col gap-6 md:flex-row md:items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.MailIcon, {
                            className: "hidden h-16 w-16 text-white md:block"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-2xl font-bold text-white",
                            children: headerText
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 gap-6 md:grid-cols-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "order-2 col-span-1 md:order-1 ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Contact_ContactForm, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "order-1 col-span-1 flex flex-col gap-y-4 md:order-2",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "prose leading-6 text-neutral-300",
                                    children: description
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("dl", {
                                    className: "flex flex-col space-y-4 text-base text-neutral-500 sm:space-y-2",
                                    children: items.map(({ type , text , href  })=>{
                                        const { Icon , srLabel  } = ContactValueMap[type];
                                        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("dt", {
                                                    className: "sr-only",
                                                    children: srLabel
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("dd", {
                                                    className: "flex items-center",
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                                        className: external_classnames_default()("-m-2 flex rounded-md p-2 text-neutral-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500", {
                                                            "hover:text-white": href
                                                        }),
                                                        href: href,
                                                        target: "_blank",
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                                                "aria-hidden": "true",
                                                                className: "h-4 w-4 flex-shrink-0 text-neutral-100 sm:h-5 sm:w-5"
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                className: "ml-3 text-sm sm:text-base",
                                                                children: text
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        }, srLabel);
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
});
Contact.displayName = "About";
/* harmony default export */ const Sections_Contact = (Contact);

;// CONCATENATED MODULE: ./src/components/Socials.tsx



const Socials = /*#__PURE__*/ (0,external_react_.memo)(()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: socialLinks.map(({ label , Icon , href  })=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                "aria-label": label,
                className: "-m-1.5 rounded-md p-1.5 transition-all duration-300 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 sm:-m-3 sm:p-3",
                href: href,
                children: /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                    className: "h-5 w-5 align-baseline sm:h-6 sm:w-6"
                })
            }, label))
    });
});
Socials.displayName = "Socials";
/* harmony default export */ const components_Socials = (Socials);

;// CONCATENATED MODULE: ./src/components/Sections/Footer.tsx





const Footer = /*#__PURE__*/ (0,external_react_.memo)(()=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative bg-neutral-900 px-4 pb-6 pt-12 sm:px-8 sm:pt-14 sm:pb-8",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-x-0 -top-4 flex justify-center sm:-top-6",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "rounded-full bg-neutral-100 p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2",
                    href: `/#${SectionId.Hero}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.ChevronUpIcon, {
                        className: "h-6 w-6 bg-transparent sm:h-8 sm:w-8"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col items-center gap-y-6",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex gap-x-4 text-neutral-500",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(components_Socials, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-sm text-neutral-700",
                        children: "\xa9 Copyright 2022 Akhilesh Appala"
                    })
                ]
            })
        ]
    }));
Footer.displayName = "Footer";
/* harmony default export */ const Sections_Footer = (Footer);

;// CONCATENATED MODULE: ./src/components/Sections/Hero.tsx







const Hero = /*#__PURE__*/ (0,external_react_.memo)(()=>{
    const { name , description , actions  } = heroData;
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout_Section, {
        noPadding: true,
        sectionId: SectionId.Hero,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative flex h-screen w-screen items-center justify-center",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "z-10 max-w-screen-lg px-4 lg:px-0",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/40 p-6 text-center shadow-lg backdrop-blur-sm",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-4xl font-bold text-white sm:text-5xl lg:text-7xl",
                                children: name
                            }),
                            description,
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex gap-x-4 text-neutral-100",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_Socials, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex w-full justify-center gap-x-4",
                                children: actions.map(({ href , text , primary , Icon  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                        className: external_classnames_default()("flex gap-x-2 rounded-full border-2 bg-none py-2 px-4 text-sm font-medium text-white ring-offset-gray-700/80 hover:bg-gray-700/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base", primary ? "border-orange-500 ring-orange-500" : "border-white ring-white"),
                                        href: href,
                                        children: [
                                            text,
                                            Icon && /*#__PURE__*/ jsx_runtime_.jsx(Icon, {
                                                className: "h-5 w-5 text-white sm:h-6 sm:w-6"
                                            })
                                        ]
                                    }, text))
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute inset-x-0 bottom-6 flex justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: "rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2",
                        href: `/#${SectionId.About}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.ChevronDownIcon, {
                            className: "h-5 w-5 bg-transparent sm:h-6 sm:w-6"
                        })
                    })
                })
            ]
        })
    });
});
Hero.displayName = "Hero";
/* harmony default export */ const Sections_Hero = (Hero);

;// CONCATENATED MODULE: ./src/config.ts
const isBrowser = "undefined" !== "undefined";
const isMobile = isBrowser ? window.matchMedia("(pointer: coarse)").matches : false;
const canUseDOM =  false && 0;
const isApple = canUseDOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);

;// CONCATENATED MODULE: ./src/hooks/useDetectOutsideClick.ts

const useDetectOutsideClick = (ref, handler)=>{
    (0,external_react_.useEffect)(()=>{
        const listener = (event)=>{
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event?.target || null)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return ()=>{
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [
        ref,
        handler
    ]);
};
/* harmony default export */ const hooks_useDetectOutsideClick = (useDetectOutsideClick);

;// CONCATENATED MODULE: ./src/components/Sections/Portfolio.tsx









const Portfolio = /*#__PURE__*/ (0,external_react_.memo)(()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout_Section, {
        className: "bg-neutral-800",
        sectionId: SectionId.Portfolio,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col gap-y-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "self-center text-xl font-bold text-white",
                    children: "Check out some of my work"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: " w-full columns-2 md:columns-3 lg:columns-4",
                    children: portfolioItems.map((item, index)=>{
                        const { title , image  } = item;
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "pb-6",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: external_classnames_default()("relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl"),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        alt: title,
                                        layout: "responsive",
                                        placeholder: "blur",
                                        src: image
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(ItemOverlay, {
                                        item: item
                                    })
                                ]
                            })
                        }, `${title}-${index}`);
                    })
                })
            ]
        })
    });
});
Portfolio.displayName = "Portfolio";
/* harmony default export */ const Sections_Portfolio = (Portfolio);
const ItemOverlay = /*#__PURE__*/ (0,external_react_.memo)(({ item: { url , title , description  }  })=>{
    const { 0: mobile , 1: setMobile  } = (0,external_react_.useState)(false);
    const { 0: showOverlay , 1: setShowOverlay  } = (0,external_react_.useState)(false);
    const linkRef = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        // Avoid hydration styling errors by setting mobile in useEffect
        if (isMobile) {
            setMobile(true);
        }
    }, []);
    hooks_useDetectOutsideClick(linkRef, ()=>setShowOverlay(false));
    const handleItemClick = (0,external_react_.useCallback)((event)=>{
        if (mobile && !showOverlay) {
            event.preventDefault();
            setShowOverlay(!showOverlay);
        }
    }, [
        mobile,
        showOverlay
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("a", {
        className: external_classnames_default()("absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300", {
            "opacity-0 hover:opacity-80": !mobile
        }, showOverlay ? "opacity-80" : "opacity-0"),
        href: url,
        onClick: handleItemClick,
        ref: linkRef,
        target: "_blank",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative h-full w-full p-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex h-full w-full flex-col gap-y-2 overflow-y-auto",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-center font-bold text-white opacity-100",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-xs text-white opacity-100 sm:text-sm",
                            children: description
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(outline_namespaceObject.ExternalLinkIcon, {
                    className: "absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2"
                })
            ]
        })
    });
});

;// CONCATENATED MODULE: ./src/components/Sections/Resume/ResumeSection.tsx


const ResumeSection = /*#__PURE__*/ (0,external_react_.memo)(({ title , children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0 md:grid-cols-4",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-span-1 flex justify-center md:justify-start",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative h-max",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-xl font-bold uppercase text-neutral-800",
                            children: title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "absolute inset-x-0 -bottom-1 border-b-2 border-orange-400"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "col-span-1 flex flex-col md:col-span-3",
                children: children
            })
        ]
    });
});
ResumeSection.displayName = "ResumeSection";
/* harmony default export */ const Resume_ResumeSection = (ResumeSection);

;// CONCATENATED MODULE: ./src/components/Sections/Resume/Skills.tsx


const SkillGroup = /*#__PURE__*/ (0,external_react_.memo)(({ skillGroup  })=>{
    const { name , skills  } = skillGroup;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-center text-lg font-bold",
                children: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "flex flex-col gap-y-2",
                children: skills.map((skill, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Skill, {
                        skill: skill
                    }, `${skill.name}-${index}`))
            })
        ]
    });
});
SkillGroup.displayName = "SkillGroup";
const Skill = /*#__PURE__*/ (0,external_react_.memo)(({ skill  })=>{
    const { name , level , max =10  } = skill;
    const percentage = (0,external_react_.useMemo)(()=>Math.round(level / max * 100), [
        level,
        max
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-2 text-sm font-medium",
                children: name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-5 w-full overflow-hidden rounded-full bg-neutral-300",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "h-full rounded-full bg-orange-400",
                    style: {
                        width: `${percentage}%`
                    }
                })
            })
        ]
    });
});
Skill.displayName = "Skill";

;// CONCATENATED MODULE: ./src/components/Sections/Resume/TimelineItem.tsx


const TimelineItem = /*#__PURE__*/ (0,external_react_.memo)(({ item  })=>{
    const { title , date , location , content  } = item;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col pb-8 text-center last:pb-0 md:text-left",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col pb-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: "text-xl font-bold",
                        children: title
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-center gap-x-2 md:justify-start",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "flex-1 text-sm font-medium italic sm:flex-none",
                                children: location
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "\u2022"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "flex-1 text-sm sm:flex-none",
                                children: date
                            })
                        ]
                    })
                ]
            }),
            content
        ]
    });
});
TimelineItem.displayName = "TimelineItem";
/* harmony default export */ const Resume_TimelineItem = (TimelineItem);

;// CONCATENATED MODULE: ./src/components/Sections/Resume/index.tsx







const Resume = /*#__PURE__*/ (0,external_react_.memo)(()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout_Section, {
        className: "bg-neutral-100",
        sectionId: SectionId.Resume,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "flex flex-col divide-y-2 divide-neutral-300",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Resume_ResumeSection, {
                    title: "Education",
                    children: education.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Resume_TimelineItem, {
                            item: item
                        }, `${item.title}-${index}`))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Resume_ResumeSection, {
                    title: "Work",
                    children: experience.map((item, index)=>/*#__PURE__*/ jsx_runtime_.jsx(Resume_TimelineItem, {
                            item: item
                        }, `${item.title}-${index}`))
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Resume_ResumeSection, {
                    title: "Skills",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "pb-8",
                            children: "Below are some of the major skills where I am good at "
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grid grid-cols-1 gap-6 md:grid-cols-2",
                            children: skills.map((skillgroup, index)=>/*#__PURE__*/ jsx_runtime_.jsx(SkillGroup, {
                                    skillGroup: skillgroup
                                }, `${skillgroup.name}-${index}`))
                        })
                    ]
                })
            ]
        })
    });
});
Resume.displayName = "Resume";
/* harmony default export */ const Sections_Resume = (Resume);

;// CONCATENATED MODULE: ./src/hooks/useInterval.ts

function useInterval(callback, delay) {
    const savedCallback = (0,external_react_.useRef)(callback);
    (0,external_react_.useEffect)(()=>{
        savedCallback.current = callback;
    }, [
        callback
    ]);
    (0,external_react_.useEffect)(()=>{
        if (!delay && delay !== 0) {
            return;
        }
        const id = setInterval(()=>savedCallback.current(), delay);
        return ()=>clearInterval(id);
    }, [
        delay
    ]);
}
/* harmony default export */ const hooks_useInterval = (useInterval);

;// CONCATENATED MODULE: ./src/hooks/useWindow.ts

const useWindow = ()=>{
    const { 0: windowSize , 1: setWindowSize  } = (0,external_react_.useState)({
        width: 0,
        height: 0
    });
    const handleSize = ()=>{
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };
    // Set size at the first client-side load
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("resize", handleSize);
        handleSize();
        return ()=>window.removeEventListener("resize", handleSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return windowSize;
};
/* harmony default export */ const hooks_useWindow = (useWindow);

;// CONCATENATED MODULE: ./src/components/Icon/QuoteIcon.tsx



const QuoteIcon = /*#__PURE__*/ (0,external_react_.memo)((props)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Icon_Icon, {
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M26.3657 53.7076C27.9274 43.8912 40.1978 33.4056 49.791 33.1825C50.4603 33.1825 51.1296 32.9594 51.5758 32.5132C52.022 32.2901 52.4682 32.067 52.6913 31.3978C56.0377 25.151 54.253 20.2428 48.6755 16.2271C42.2057 11.542 31.9431 16.2271 26.8119 20.4659C13.8722 31.1747 0.709398 49.6914 1.37869 67.3166C-0.852289 79.1411 -0.406093 91.8573 2.94038 102.343C5.17136 109.036 11.6412 112.382 18.3342 112.829C25.0271 113.275 38.8592 115.283 44.8828 111.267C50.9065 107.251 51.3527 99.4427 52.022 92.7501C52.6913 85.3879 54.6991 71.5554 48.4524 65.7549C42.2057 60.1774 24.3578 66.2011 26.3657 53.7076Z",
                fill: "currentColor"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M99.9881 53.7076C101.55 43.8912 113.82 33.4056 123.413 33.1825C124.083 33.1825 124.752 32.9594 125.198 32.5132C125.645 32.2901 126.091 32.067 126.314 31.3978C129.66 25.151 127.876 20.2428 122.298 16.2271C115.828 11.542 105.566 16.2271 100.434 20.4659C87.4946 31.1747 74.3318 49.6918 75.0011 67.3166C72.7701 79.1411 73.2163 91.8573 76.5624 102.343C78.7934 109.036 85.2632 112.382 91.9565 112.829C98.6495 113.275 112.482 115.283 118.505 111.267C124.528 107.251 124.975 99.4427 125.644 92.7501C126.314 85.3879 128.322 71.5554 122.075 65.7549C115.828 60.1774 97.7571 66.2011 99.9881 53.7076Z",
                fill: "currentColor"
            })
        ]
    }));
/* harmony default export */ const Icon_QuoteIcon = (QuoteIcon);

;// CONCATENATED MODULE: ./src/components/Sections/Testimonials.tsx









const Testimonials = /*#__PURE__*/ (0,external_react_.memo)(()=>{
    const { 0: activeIndex , 1: setActiveIndex  } = (0,external_react_.useState)(0);
    const { 0: scrollValue , 1: setScrollValue  } = (0,external_react_.useState)(0);
    const { 0: parallaxEnabled , 1: setParallaxEnabled  } = (0,external_react_.useState)(false);
    const itemWidth = (0,external_react_.useRef)(0);
    const scrollContainer = (0,external_react_.useRef)(null);
    const { width  } = hooks_useWindow();
    const { imageSrc , testimonials  } = data_testimonial;
    const resolveSrc = (0,external_react_.useMemo)(()=>{
        if (!imageSrc) return undefined;
        return typeof imageSrc === "string" ? imageSrc : imageSrc.src;
    }, [
        imageSrc
    ]);
    // Mobile iOS doesn't allow background-fixed elements
    (0,external_react_.useEffect)(()=>{
        setParallaxEnabled(!(isMobile && isApple));
    }, []);
    (0,external_react_.useEffect)(()=>{
        itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
    }, [
        width
    ]);
    (0,external_react_.useEffect)(()=>{
        if (scrollContainer.current) {
            const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
            setActiveIndex(newIndex);
        }
    }, [
        itemWidth,
        scrollValue
    ]);
    const setTestimonial = (0,external_react_.useCallback)((index)=>()=>{
            if (scrollContainer !== null && scrollContainer.current !== null) {
                scrollContainer.current.scrollLeft = itemWidth.current * index;
            }
        }, []);
    const next = (0,external_react_.useCallback)(()=>{
        if (activeIndex + 1 === testimonials.length) {
            setTestimonial(0)();
        } else {
            setTestimonial(activeIndex + 1)();
        }
    }, [
        activeIndex,
        setTestimonial,
        testimonials.length
    ]);
    const handleScroll = (0,external_react_.useCallback)((event)=>{
        setScrollValue(event.currentTarget.scrollLeft);
    }, []);
    hooks_useInterval(next, 10000);
    // If no testimonials, don't render the section
    if (!testimonials.length) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout_Section, {
        noPadding: true,
        sectionId: SectionId.Testimonials,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: external_classnames_default()("flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8", parallaxEnabled && "bg-fixed", {
                "bg-neutral-700": !imageSrc
            }),
            style: imageSrc ? {
                backgroundImage: `url(${resolveSrc}`
            } : undefined,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "z-10 w-full max-w-screen-md px-4 lg:px-0",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth",
                            onScroll: handleScroll,
                            ref: scrollContainer,
                            children: testimonials.map((testimonial, index)=>{
                                const isActive = index === activeIndex;
                                return /*#__PURE__*/ jsx_runtime_.jsx(Testimonial, {
                                    isActive: isActive,
                                    testimonial: testimonial
                                }, `${testimonial.name}-${index}`);
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex gap-x-4",
                            children: [
                                ...Array(testimonials.length)
                            ].map((_, index)=>{
                                const isActive = index === activeIndex;
                                return /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: external_classnames_default()("h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4", isActive ? "scale-100 opacity-100" : "scale-75 opacity-60"),
                                    disabled: isActive,
                                    onClick: setTestimonial(index)
                                }, `select-button-${index}`);
                            })
                        })
                    ]
                })
            })
        })
    });
});
const Testimonial = /*#__PURE__*/ (0,external_react_.memo)(({ testimonial: { text , name , image  } , isActive  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: external_classnames_default()("flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6", isActive ? "opacity-100" : "opacity-0"),
        children: [
            image ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative h-14 w-14 shrink-0 sm:h-16 sm:w-16",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Icon_QuoteIcon, {
                        className: "absolute -top-2 -left-2 h-4 w-4 stroke-black text-white"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        className: "h-full w-full rounded-full",
                        src: image
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime_.jsx(Icon_QuoteIcon, {
                className: "h-5 w-5 shrink-0 text-white sm:h-8 sm:w-8"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex flex-col gap-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "prose prose-sm font-medium italic text-white sm:prose-base",
                        children: text
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                        className: "text-xs italic text-white sm:text-sm md:text-base lg:text-lg",
                        children: [
                            "-- ",
                            name
                        ]
                    })
                ]
            })
        ]
    }));
/* harmony default export */ const Sections_Testimonials = (Testimonials);

;// CONCATENATED MODULE: ./src/pages/index.tsx












// eslint-disable-next-line react-memo/require-memo
const Header = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "index.tsx -> " + "../components/Sections/Header"
        ]
    },
    ssr: false
});
const Home = /*#__PURE__*/ (0,external_react_.memo)(()=>{
    const { title , description  } = homePageMeta;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout_Page, {
        description: description,
        title: title,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Sections_Hero, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Sections_About, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Sections_Resume, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Sections_Portfolio, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Sections_Testimonials, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Sections_Contact, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(Sections_Footer, {})
        ]
    });
});
/* harmony default export */ const pages = (Home);


/***/ }),

/***/ 429:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [311,486], () => (__webpack_exec__(962)));
module.exports = __webpack_exports__;

})();