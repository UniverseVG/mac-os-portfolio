const EMAIL = "gmvarungmvarun32524@gmail.com";

const navLinks = [
  {
    id: 1,
    name: "Projects",
    type: "finder",
  },
  {
    id: 3,
    name: "Contact",
    type: "contact",
  },
  {
    id: 4,
    name: "Resume",
    type: "resume",
  },
];

const navIcons = [
  {
    id: 1,
    img: "/icons/wifi.svg",
  },
  {
    id: 2,
    img: "/icons/search.svg",
  },
  {
    id: 3,
    img: "/icons/user.svg",
  },
  {
    id: 4,
    img: "/icons/mode.svg",
  },
];

const dockApps = [
  {
    id: "finder",
    name: "Portfolio", // was "Finder"
    icon: "finder.png",
    canOpen: true,
  },
  {
    id: "safari",
    name: "Articles", // was "Safari"
    icon: "safari.png",
    canOpen: true,
  },
  {
    id: "photos",
    name: "Gallery", // was "Photos"
    icon: "photos.png",
    canOpen: true,
  },
  {
    id: "contact",
    name: "Contact", // or "Get in touch"
    icon: "contact.png",
    canOpen: true,
  },
  {
    id: "terminal",
    name: "Skills", // was "Terminal"
    icon: "terminal.png",
    canOpen: true,
  },
  {
    id: "trash",
    name: "Archive", // was "Trash"
    icon: "trash.png",
    canOpen: false,
  },
];

const blogPosts = [
  {
    id: 1,
    date: "Dec 7, 2025",
    title:
      "Stop Fighting with LLM APIs: A Guide to Vercel AI SDK for React Developers",
    image: "/images/blog1.png",
    link: "https://medium.com/@varungm24/stop-fighting-with-llm-apis-a-guide-to-vercel-ai-sdk-for-react-developers-d58c87975bad",
  },
  {
    id: 2,
    date: "Dec 7, 2025",
    title: "Building Real-Time Finance using Convex",
    image: "/images/blog2.png",
    link: "https://building-real-time-finance-using-convex.hashnode.dev/building-real-time-finance-using-convex",
  },
  {
    id: 3,
    date: "May 10, 2023",
    title: "Creating dependent dropdown in React Native",
    image: "/images/blog3.png",
    link: "https://medium.com/@varungm24/creating-dependent-dropdown-in-react-native-e47179fe723c",
  },
];

const techStack = [
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Mobile",
    items: ["React Native", "Expo"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Sass", "CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS"],
  },
  {
    category: "Database",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Dev Tools",
    items: ["Git", "GitHub", "Docker"],
  },
];

const socials = [
  {
    id: 1,
    text: "Github",
    icon: "/icons/github.svg",
    bg: "#f4656b",
    link: "https://github.com/gmvarun24",
  },
  {
    id: 2,
    text: "LinkedIn",
    icon: "/icons/linkedin.svg",
    bg: "#05b6f6",
    link: "https://www.linkedin.com/in/varun-gm-86694a1a4/",
  },
  {
    id: 3,
    text: "Twitter/X",
    icon: "/icons/twitter.svg",
    bg: "#ff866b",
    link: "https://x.com/GMVarun2",
  },
  {
    id: 4,
    text: "Youtube",
    icon: "/icons/youtube.svg",
    bg: "#ff0000",
    link: "https://www.youtube.com/@Code_Canopy",
  },
];

const photosLinks = [
  {
    id: 1,
    icon: "/icons/gicon1.svg",
    title: "Library",
  },
  {
    id: 2,
    icon: "/icons/gicon2.svg",
    title: "Memories",
  },
  {
    id: 3,
    icon: "/icons/file.svg",
    title: "Places",
  },
  {
    id: 4,
    icon: "/icons/gicon4.svg",
    title: "People",
  },
  {
    id: 5,
    icon: "/icons/gicon5.svg",
    title: "Favorites",
  },
];

const gallery = [
  {
    id: 1,
    img: "/images/event1.png",
  },
  {
    id: 2,
    img: "/images/event2.png",
  },
  {
    id: 3,
    img: "/images/event3.png",
  },
  {
    id: 4,
    img: "/images/event4.png",
  },
];

export {
  navLinks,
  navIcons,
  dockApps,
  blogPosts,
  techStack,
  socials,
  photosLinks,
  gallery,
  EMAIL,
};

const WORK_LOCATION = {
  id: 1,
  type: "work",
  name: "Work",
  icon: "/icons/work.svg",
  kind: "folder",
  children: [
    // ▶ Project 1
    {
      id: 5,
      name: "ProsprAI",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-5", // icon position inside Finder
      windowPosition: "top-[5vh] left-5", // optional: Finder window position
      children: [
        {
          id: 1,
          name: "ProsprAI.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          image: "/images/prospr-logo.png",
          description: [
            "ProsprAI is a powerful AI-driven career management platform designed to guide job seekers through every stage of their journey.",
            "Instead of just offering tools, it delivers a personalized and interactive experience with smart career advice, interview practice, and real-time industry insights.",
            "Think of it like having a career coach, market analyst, and resume expert—all in one intelligent platform.",
            "Built with Next.js and powered by advanced AI capabilities, it ensures fast performance, seamless interactions, and a clean, modern interface.",
          ],
        },
        {
          id: 2,
          name: "prospr-ai.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://prospr-ai.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "prospr-ai.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/prospr-ai.png",
        },
        {
          id: 5,
          name: "prospr-ai.git",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "git",
          href: "https://github.com/gmvarun24/prospr-ai",
          position: "top-60 right-20",
        },
      ],
    },

    // ▶ Project 2
    {
      id: 6,
      name: "CareTake",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-52 right-80",
      windowPosition: "top-[20vh] left-7",
      children: [
        {
          id: 1,
          name: "CareTake.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          image: "/images/caretake-logo.png",
          position: "top-5 right-10",
          description: [
            "CareTake is a healthcare patient management app built with Next.js, designed to simplify how patients book and manage appointments with doctors.",
            "Instead of relying on manual scheduling or scattered communication, it offers a seamless experience with patient dashboards, doctor listings, appointment booking, and real-time updates.",
            "Think of it as a digital clinic assistant—helping patients register, schedule visits, get SMS reminders, and stay organized, while giving admins full control over doctors, appointments, and notifications.",
            "It’s powered by Next.js and real-time technologies, ensuring fast performance, instant updates, and a clean, intuitive interface for both patients and administrators.",
          ],
        },
        {
          id: 2,
          name: "care-take.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://care-take.vercel.app/",
          position: "top-20 left-20",
        },
        {
          id: 4,
          name: "care-take.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 left-80",
          imageUrl: "/images/caretake.png",
        },
        {
          id: 5,
          name: "care-take.git",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "git",
          href: "https://github.com/gmvarun24/care-take",
          position: "top-60 left-5",
        },
      ],
    },

    // ▶ Project 3
    {
      id: 7,
      name: "StoryTime Spark",
      icon: "/images/folder.png",
      kind: "folder",
      position: "top-10 left-80",
      windowPosition: "top-[33vh] left-3",
      children: [
        {
          id: 1,
          name: "storytime-spark.txt",
          icon: "/images/txt.png",
          kind: "file",
          fileType: "txt",
          position: "top-5 left-10",
          image: "/images/storytime-spark-logo.png",
          description: [
            "StoryTime Spark is an AI-powered storytelling platform that creates fun, age-appropriate stories for kids.",
            "It delivers a charming storybook-style experience with AI-generated illustrations that bring each tale to life.",
            "Think of it as a playful digital storyteller with a modern, easy-to-use interface.",
            "Built with Next.js and Razorpay, it features secure payments, responsive design, user authentication, and a credit system for generating premium stories.",
          ],
        },
        {
          id: 2,
          name: "storytime-spark.com",
          icon: "/images/safari.png",
          kind: "file",
          fileType: "url",
          href: "https://storytime-spark.vercel.app/",
          position: "top-10 right-20",
        },
        {
          id: 4,
          name: "storytime-spark.png",
          icon: "/images/image.png",
          kind: "file",
          fileType: "img",
          position: "top-52 right-80",
          imageUrl: "/images/storytime-spark.png",
        },
        {
          id: 5,
          name: "storytime-spark.git",
          icon: "/images/plain.png",
          kind: "file",
          fileType: "git",
          href: "https://github.com/gmvarun24/storytime-spark",
          position: "top-60 right-20",
        },
      ],
    },
  ],
};

const ABOUT_LOCATION = {
  id: 2,
  type: "about",
  name: "About me",
  icon: "/icons/info.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-5",
      imageUrl: "/images/event3.png",
    },
    {
      id: 2,
      name: "casual-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-28 right-72",
      imageUrl: "/images/varun.png",
    },
    {
      id: 3,
      name: "conference-me.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-52 left-80",
      imageUrl: "/images/event1.png",
    },
    {
      id: 4,
      name: "about-me.txt",
      icon: "/images/txt.png",
      kind: "file",
      fileType: "txt",
      position: "top-60 left-5",
      subtitle: "Meet the Developer Behind the Code",
      image: "/images/casual_me.jpg",
      description: [
        "Hey! I’m Varun 👋, a full-stack developer who loves turning ideas into polished, high-impact digital products.",
        "I specialize in JavaScript, React, Next.js, Node.js, and modern backend tooling—and I’m super excited about integrating Generative AI to build smarter, more intuitive experiences.",
        "I’m all about clean UI, great UX, and writing code that doesn’t require a rescue mission to understand later.",
        "When I’m off the clock, I’m usually poking at new tech, experimenting with AI tools, or polishing ideas that I swear won’t become another half-finished side project… probably 😌",
      ],
    },
  ],
};

const RESUME_LOCATION = {
  id: 3,
  type: "resume",
  name: "Resume",
  icon: "/icons/file.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "Resume.pdf",
      icon: "/images/pdf.png",
      kind: "file",
      fileType: "pdf",
      // you can add `href` if you want to open a hosted resume
      // href: "/your/resume/path.pdf",
    },
  ],
};

const TRASH_LOCATION = {
  id: 4,
  type: "trash",
  name: "Trash",
  icon: "/icons/trash.svg",
  kind: "folder",
  children: [
    {
      id: 1,
      name: "outdated-portfolio-trash1.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-10",
      imageUrl: "/images/outdated_portfolio_trash1.png",
    },
    {
      id: 2,
      name: "outdated-portfolio-trash2.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-40 left-80",
      imageUrl: "/images/outdated_portfolio_trash2.png",
    },
    {
      id: 3,
      name: "outdated-portfolio-trash3.png",
      icon: "/images/image.png",
      kind: "file",
      fileType: "img",
      position: "top-10 left-80",
      imageUrl: "/images/outdated_portfolio_trash3.png",
    },
  ],
};

export const locations = {
  work: WORK_LOCATION,
  about: ABOUT_LOCATION,
  resume: RESUME_LOCATION,
  trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
  finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
  imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };
