const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Anurag Kumar",
        description: "Java Full Stack Developer with 3+ years of experience building scalable microservices and enterprise applications. I work across Spring Boot, REST APIs, database optimization, and cloud-native deployments with Docker, AKS, and CI/CD, with a strong focus on secure, production-ready engineering.",
        role: "Java Full Stack Developer",
        photo: "/anurag-dp.png",
        email: "anuragkumar88583@gmail.com",
    },

    // ============ SOCIAL LINKS ============
    socials: {
        twitter: "https://twitter.com/Anuragk70",
		github: "https://github.com/anuragkumar151",
		linkedin: "https://www.linkedin.com/in/anuragkumar12/",
		instagram: "https://instagram.com/__anuragkumar__",
    },

    // ============ PROJECTS ============
    projects: [
        {
            title: "AI Customer Support Chatbot",
            description: "Designed end-to-end backend architecture for a RAG-based chatbot with contextual response generation.",
            technologies: "Spring Boot, REST APIs, OpenAI API, Postman, Swagger",
            github: "https://github.com/anuragkumar151",
            image: "/chatbot.png"
        },
        {
            title: "On Demand Car Wash Application",
            description: "Architected a microservices-based booking platform with secure authentication and payment workflow.",
            technologies: "Spring Boot, Java, React, MySQL, MongoDB, JWT, Razorpay",
            github: "https://github.com/anuragkumar151/CarWash-Backend",
            image: "/Carwash.png"
        },
        {
			title: "Ghost Drop",
			description: "A web-based application for secure, anonymous peer-to-peer file transfers, via browsers without external software.",
			technologies: "Spring Boot, React, MySQL",
			github: "https://github.com/anuragkumar151/GhostDrop-Frontend",
            link: "https://ghost-drop.vercel.app/",
            image: "/GhostDrop.png"
		},
		{
            title: "Weather App",
            description: "A simple and user-friendly weather application that provides real-time weather updates based on city search.",
            technologies: "React, Tailwind CSS, OpenWeather API",
            github: "https://github.com/anuragkumar151/Weather-App",
            link: "https://climaticview.vercel.app/",
            image: "/Weather.png"
        },
        {
            title: "Skull Blocker (Ad Blocker)",
            description: "A lightweight Chrome extension that blocks ads, trackers, and unwanted websites to improve browsing privacy.",
            technologies: "JavaScript, JSON, Chrome Extensions API",
            github: "https://github.com/anuragkumar151/Website-Blocker-Extension",
            image: "/Blocker.png"
        }
    ],

 // ============ EXPERIENCE ============
experience: [
    {
        position: "Associate Consultant",
        company: "Capgemini India Pvt. Ltd.",
        duration: "Aug 2023 – Present",
        image: "/capgemini.png",
        descriptions: [
            "Led migration from Spring Boot 2.x to 3.x and Java 8 to Java 17, improving stability and reducing production defects.",
            "Designed and optimized 50+ REST APIs and 30+ microservices using Spring Boot, Hibernate, and JPA.",
            "Implemented JWT authentication and RBAC using Spring Security for stronger access control.",
            "Optimized high-volume reporting APIs and 20+ PL/SQL queries through tuning, pagination, and indexing.",
            "Worked on Docker + AKS deployments with auto-scaling and rolling updates; coordinated Jenkins CI/CD releases.",
            "Developed unit/integration tests with JUnit and Postman and collaborated in Agile teams for sprint delivery."
        ]
    },
    {
        position: "Software Developer Intern",
        company: "Capgemini India Pvt. Ltd.",
        duration: "Feb 2023 – May 2023",
        image: "/capgemini.png",
        descriptions: [
            "Optimized RESTful APIs in Java Spring Boot, reducing response times and improving API reliability.",
            "Built responsive UI modules using ReactJS and JavaScript for better frontend performance.",
            "Documented data flow and participated in debugging production issues and release support."
        ]
    }
],


  
    // ============ CONTACT ============
    contact: {
        description: "Thank you for visiting my portfolio! If you have any questions, feedback, or suggestions, feel free to get in touch. You can reach me via email at anuragkumar88583@gmail.com. I strive to respond to all messages within 24 hours, but it may take a bit longer during busy times. If you'd like to connect through social media, you can find my social media links below. Looking forward to hear from you!",
    },
    // ============ FOOTER ============
    footer: "© 2026 Anurag Kumar. All Rights Reserved"
}

export default info
