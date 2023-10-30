const logotext = "Initials: TV";
const meta = {
    title: "Thando Vilakazi's Portfolio",
    description: "I'm Thando Musa Vilakazi, I am an enthusiastic, determined, and hardworking individual who is currently finishing up my studies in Computer System in Engineering (in-service training). I have a background in data science and am interested in integration engineering. I would like to expand my skill set in areas like enterprise solutions on cloud platforms and data mining and analytics(Credit and/or Market Risk).",
};

const introdata = {
    title: "Hi, I'm Thando Vilakazi",
    animated: {
        first: "Data Scientist",
        second: "Visionary",
        third: "Programmer",
        fourth: "Business Analyst",
        // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
    },
    description: "I have experience in several different fields, such as data mining, statistical analysis, machine learning, and predictive modelling. My proficiency in computer languages, including Python, R, and SQL, allows me to efficiently handle and analyse data. Furthermore, I have extensive experience with data visualisation programmes like Tableau and Power BI, which helps me communicate complicated results in an understandable way.",
    your_img_url: "https://media.discordapp.net/attachments/1135941568570855494/1166696625545158666/IMG_3185.jpg?ex=654b6de7&is=6538f8e7&hm=56855b0a40a116b71eb43e5af08611077c7c1735b1dd6b7fd723233291a48aad&=&width=802&height=1078" ,
};

const dataabout = {
    title: "Who am I?",
    aboutme: "I am a dedicated, persistent, and diligent individual presently in the process of completing my studies in Computer Systems Engineering through in-service training. Furthermore, I hold a National Qualifications Framework Level 5 (NQF5) certification in System Support IT, and I am on the verge of completing a Diploma in Business Analysis. I possess a fervent passion for Integration Engineering and am deeply motivated to enhance my expertise in various domains, including data mining and analytics, with a specific focus on Credit and Market Risk evaluation. Additionally, I am keen on developing enterprise solutions on cloud platforms. I am equipped with exceptional conflict resolution abilities and am a proficient team player, skilled in efficiently managing multiple tasks. My robust analytical thinking empowers me to excel even in the most demanding and high-pressure situations.",
};
const worktimeline = [ 
    {
        jobtitle: "Intergration Engineer",
        where: "Ukukula Consulting",
        date: "November 2022- May 2023",
    },
    {
        jobtitle: "Jnr Data Scientist",
        where: "ABSA",
        date: "January 2022–November 2022",
    },
    {
        jobtitle: "Data Science Leaner",
        where: "The Digital Academy",
        date: "May 2021 – January 2022",
    },
];

const  skills = [{
        name: "Python",
    },
    
    {
        name: "C++",
    },
    
    {
        name: "MS SQL",
    },
    
    {
        name: "PowerBI & Tableau",
    },

    {
        name: "Powershell",
    },

    {
        name: "Reverse Engineering",
    },

    {
        name: "Web-Scraping",
    },


    {
        name: "React",
    },

    {
        name: "Base SAS",
    },

    {
        name: "R Programming",
    },

    {
        name: "Machine Learning",
    },
];

const dataportfolio = [{
        img: "https://media.discordapp.net/attachments/1102956565583101982/1138100108890738778/C_P_I_1.png?ex=6548e8d2&is=653673d2&hm=842c085a97460de3020108384f2b0f710cf6392236232e6961730dc81324a09a&=&width=1000&height=1000",
        description: "CPI Vision utilizes advanced statistical algorithms and machine learning techniques to analyze extensive datasets of past CPI values, economic indicators, and market trends. By processing this vast amount of information, the tool generates accurate predictions for future CPI values across different categories, such as food and housing.",
        link: "https://github.com/groupassignmen5/CPI-VISION",
    },
    {
        img: "https://cdn.discordapp.com/attachments/1135941568570855494/1168542065248972820/RAIWNQQLCOHUFR4RF2FWYAJ7TY.jpeg?ex=6552249a&is=653faf9a&hm=b9d54f53b5bb9d6adc6749e29fcf5d1684e78e9a0a9e8c26a08f1ccfa13ec612&",
        description: "This dataset likely serves as a record of fatal encounters between law enforcement officers and individuals, providing insights into the circumstances surrounding these incidents. It could be used for various analyses, such as understanding patterns in the use of lethal force, evaluating the impact of law enforcement policies.",
        link: "https://github.com/The-DigitalAcademy/fatal_police_shootings_data",
    },
    {
        img: "https://cdn.discordapp.com/attachments/1135941568570855494/1168540523351515246/360_F_91838791_STC1m9VvXhU7B5c9Mpv3yx6Yjzo9c1av.jpeg?ex=6552232b&is=653fae2b&hm=752e063b648eef256e1fbcda633743e653cb8489e90c03a2e985ef26034fe46b&",
        description: "This project focuses on predicting loan approval decisions using machine learning techniques. The goal is to automate the loan approval process, making it more efficient and accurate, while reducing human bias. The dataset contains various features related to loan applicants and their loan approval status",
        link: "https://github.com/groupassignmen5/Loan_approval_deep_learning",
    },


];

const contactConfig = {
    YOUR_EMAIL: "vilakazithando84@gmail.com",
    description: "Looking forward to hearing from you!",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_8jn4esc",
    YOUR_TEMPLATE_ID: "template_u7g24jc",
    YOUR_USER_ID: "FzXrnYHUAyWaQrWeo",
};

const socialprofils = {
    github: "https://github.com/",
    linkedin: "https://www.linkedin.com/in/thando-vilakazi-646624216/",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};