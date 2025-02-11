const info = {
    // ============ MAIN DETAILS ============
    main: {
        name: "Anurag Kumar",
        description: "I am a Software Engineer with experience in building full-stack web applications and microservices using technologies like Java, Spring Boot, and ReactJS. I have worked on creating scalable and secure solutions, debugging code changes, and optimizing database queries. I enjoy solving challenging problems, writing clean and maintainable code, and continuously learning new technologies to enhance my skill set.",
        role: "Full-Stack Developer",
        photo: "../photo.png",
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
            title: "Car Wash Application",
            description: "A microservices-based car wash booking app with role-based authentication and payment integration.",
            technologies: "Spring Boot, JWT, React, MySQL, MongoDB",
            github: "https://github.com/anuragkumar151/CarWash-Backend",
            image: "/Carwash.png"
            //link: "https://pseudocode-to-c.netlify.app/"
        },   

        {
			title: "Ghost Drop",
			description: " A web-based application for secure, anonymous peer-to-peer file transfers, via browsers without external software",
			technologies: "Spring Boot, React, MySql",
			github: "https://github.com/anuragkumar151/GhostDrop-Frontend",
            link: "https://ghost-drop.vercel.app/",
            image: "/GhostDrop.png"
		},

        {
            title: "Skull Blocker",
            description: "Skull Blocker is a lightweight Chrome extension that enhances privacy by blocking ads, trackers, and unwanted websites.",
            technologies: "JavaScript, JSON, Chrome Extensions API",
            github: "https://github.com/anuragkumar151/Website-Blocker-Extension",
            image: "/Blocker.png"
        },

		{
            title: "Weather App",
            description: "A simple and user-friendly weather application that provides real-time weather updates based on city search.",
            technologies: "React, Tailwind CSS, OpenWeather API",
            github: "https://github.com/anuragkumar151/Weather-App",
            link: "https://climaticview.vercel.app/",
            image: "/Weather.png"
        },
        
       
        

    ],

 // ============ EXPERIENCE ============
experience: [
    {
        position: "Software Developer",
        company: "Capgemini India Pvt. Ltd.",
        duration: "Aug 2023 – Present",
        image: "/capgemini.png",
        descriptions: [
            "Analyzed and resolved 20+ critical production issues, ensuring smooth application performance.",
            "Worked in an Agile environment, collaborating with onshore teams and providing daily updates.",
            "Optimized PL/SQL procedures, reducing query execution time and enhancing database efficiency.",
            "Improved batch job performance, reducing processing time by 40% through Java and SQL optimizations.",
            "Provided production support for 20+ services, ensuring 99.9% uptime and managing deployments.",
            "Maintained design documentation in Confluence to streamline issue resolution."
        ]
    },
    {
        position: "Software Developer Intern",
        company: "Capgemini India Pvt. Ltd.",
        duration: "Feb 2023 – May 2023",
        image: "/capgemini.png",
        descriptions: [
            "Optimized RESTful APIs in Java Spring Boot, reducing response times by 15%.",
            "Documented data flow processes in Confluence and gained experience debugging production issues.",
            "Developed responsive UI components using ReactJS and JavaScript, improving frontend performance."
        ]
    }
],


  
    // ============ CONTACT ============
    contact: {
        description: "Thank you for visiting my portfolio! If you have any questions, feedback, or suggestions, feel free to get in touch. You can reach me via email at anuragkumar88583@gmail.com. I strive to respond to all messages within 24 hours, but it may take a bit longer during busy times. If you'd like to connect through social media, you can find my social media links below. Looking forward to hear from you!",
    },
    // ============ FOOTER ============
    footer: "© 2025 Anurag Kumar. All Rights Reserved"
}

export default info