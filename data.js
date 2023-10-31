export const bio = [
    "I am Md Shamiul Islam Tamim, a Computer Science and Engineering fresher from AIUB.",
    "Eager to apply my technical knowledge and skills to tackle challenging projects and make a meaningful impact.",
    "Thanks for taking the time to learn a little about me!",
];


export const skills = [
    {
        title: "Languages",
        skillName: "C#",
        color: "2",
        percentage: "95",
    },
    {
        title: "Languages",
        skillName: "JavaScript",
        color: "1",
        percentage: "75",
    },
    {
        title: "Languages",
        skillName: "Python",
        color: "2",
        percentage: "85",
    },
    {
        title: "Frameworks/Libraries",
        skillName: "Angular",
        color: "6",
        percentage: "70",
    },
    {
        title: "Frameworks/Libraries",
        skillName: "Asp.net",
        color: "6",
        percentage: "90",
    },
    {
        title: "Frameworks/Libraries",
        skillName: ".Net framework",
        color: "6",
        percentage: "80",
    },
    {
        title: "Design",
        skillName: "HTML, Bootstrap",
        color: "4",
        percentage: "70",
    },
    {
        title: "Version Control",
        skillName: "GitHub",
        color: "7",
        percentage: "80",
    },
    {
        title: "Tools",
        skillName: "Postman, Chrome DevTools",
        color: "3",
        percentage: "80",
    },
    {
        title: "IDE",
        skillName: "VS Code, Visual Studio",
        color: "6",
        percentage: "85",
    },
];

export const projects = {
    webProjects: [
        {
            projectName: "Moveez (A movie ticket management System)",
            image: "images/programmingdiaries.png",
            summary:
                "Moveez is a movie ticket management system that enables users to book tickets for movies available in nearby cinema halls.",
            preview: "https://programmingdiaries.herokuapp.com/",
            techStack: ["C#","ASP.NET Web API","HTML","CSS","Angular Js","Bootstrap","Microsoft SQL Server","git"],
        },
        {
            projectName: "StudentDoc App",
            image: "images/findyourbank.png",
            summary:
                "StudentDoc App is a document management platform that empowers students to efficiently manage their documents, allowing them to upload, update, delete, and download files for future use.",
            preview: "https://clever-fermi-0d5d76.netlify.app",
            techStack: ["C#","ASP.NET Web API","HTML","CSS","Angular Js","Bootstrap","Microsoft SQL Server","git"],
        },
       
        {
    ],
    softwareProjects: [
        {
            projectName: "Chaya Healthcare Solution",
            image: "images/pizzaorderchatbot.png",
            summary:
                "Chaya Healthcare Solution is a chat application that facilitates communication between patients and doctors, designed to improve healthcare interactions.",
            preview: "https://github.com/vinaysomawat/Pizza-Ordering-ChatBot",
            techStack: ["C#",".NET Framework","Windows Forms (WPF)","Microsoft SQL Server"],
        },
    ],
    androidProjects: [
        {
            projectName: "Classification-based Machine Learning Model Development For Diabetes Prediction",
            image: "images/nitwcse.jpg",
            summary:
                "Classification-based Machine Learning Model Development For Diabetes Prediction is a data-driven project aimed at predicting diabetes with the power of machine learning and data science technique",
            preview: "https://github.com/vinaysomawat/NITW-CSE",
            techStack: ["Machine Learning Algorithms","Python","Scikit-learn","Pandas","Jupyter Notebooks","Diabetes Datasets"],
        },
    ],
};

export const experience = [
    {
        title: "Shiprocket (Bigfoot Solution Private Limited)",
        duration: "September 2022 - Present",
        subtitle: "Software Engineer",
        details: [
            "Working in support and escalation team."
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
        icon: "truck ",
    },
    {
        title: "Biofourmis India Private Limited",
        duration: "April 2022 - Jul 2023",
        subtitle: "Software Engineer",
        details: [
            `Implemented microfrontends using the Module Federation Plugin in Angular.
            Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
            `Upgraded application with a dynamic base URL for flexible operation across multiple regions and verticals, leading to
            recognition with the Biofourmis Bravo award in Q1, 2023.`,
            `Implemented RxState for managing local state in components, resulting in elegant and reactive facades.`,
            `Utilized Twilio-Video for group video call rooms and Countly for Web Analytics.`,
            `Integrated NGXS WebSocket, enhancing state management and replacing legacy service injections.`,
            `Implemented extensive RxJS usage for reactive programming, resulting in efficient data handling, improved state
            management, and enhanced application performance.`,
            `Dramatically optimized load time and performance through code splitting, lazy loading, caching, and preload`,
            `Enhanced video call experience by implementing real-time switching of I/O devices and audio level indicators,
            resulting in reduced audio issues and increased user satisfaction.`,
            `Owned and led successful Angular application upgrades from version 12 to 13 and 14, improving performance
            and enhancing features.`,
        ],
        tags: ["JavaScript", "Angular", "RxJS", "NGXS", "TypeScript", "RxState", "Webpack", "Optimization"],
        icon: "heartbeat",
    },
    {
        title: "Novopay Solutions Private Limited",
        duration: "June 2020 - April 2022",
        subtitle: "Software Engineer",
        details: [
            `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
            and Money transfer.`,
            `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
            Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
            `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
            `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
        icon: "qrcode",
    },
    {
        title: "ThinkPedia LLP",
        duration: "May 2019 - June 2019",
        subtitle: "SDE Intern",
        details: [
            `Developed a customer web application for social media management, supporting the advertisement domain.`,
        ],
        tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
        icon: "group",
    },
];

export const education = [
    {
        title: "B.Sc. in Computer Science and Engineering",
        duration: "2019 - 2023",
        subtitle: "American International University, Bangladesh",
        details: [],
        tags: [
            "Data Structures & Algorithms",
            "Operating Systems",
            "Database Management System",
            "Computer Networks",
            "Compiler Designing",
            "Software Requirement Engineering",
        ],
        icon: "graduation-cap",
    },
    {
        title: "H.S.C",
        duration: "2016 - 2018",
        subtitle: "Government Science College, Tejgaon, dhaka",
        details: [],
        tags: ["Physics", "Chemistry", "Mathematics"],
        icon: "book",
    },
];


export const footer = [
    {
        label: "Dev Profiles",
        data: [
            {
                text: "Stackoverflow",
                link: "https://stackoverflow.com/users/22828881/shamiul-tamim",
            },
            {
                text: "GitHub",
                link: "https://github.com/itsonlytamim",
            },
            {
                text: "LeetCode",
                link: "https://leetcode.com/itsonlytamim/",
            },
        ],
    },
    {
        label: "Resources",
        data: [
            {
                text: "Enable Dark/Light Mode",
                func: "enableDarkMode()",
            },
            {
                text: "Print this page",
                func: "window.print()",
            },
            {
                text: "Clone this page",
                link: "https://github.com/itsonlytamim/itsonlytamim.github.io",
            },
        ],
    },
    {
        label: "Social Profiles",
        data: [
            {
                text: "Linkedin",
                link: "https://www.linkedin.com/in/itsonlytamimm/",
            },
            {
                text: "Twitter",
                link: "https://twitter.com/itsonlytamim",
            },
            {
                text: "Buy me a coffee",
                link: "https://www.buymeacoffee.com/r194dME8y",
            },
        ],
    },
    {
        label: "copyright-text",
        data: [
            "Made with &hearts; by Md Shamiul Islam Tamim.",
            "&copy; No Copyrights. Feel free to use this template.",
        ],
    },
];
