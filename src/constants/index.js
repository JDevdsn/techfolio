import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Intro",
    },
    {
      id: "work",
      title: "Experience ",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Mobile freindly Developer",
      icon: web,
    },
    {
      title: "Wordpress Developer",
      icon: mobile,
    },
    {
      title: "Front End/ Back End Development",
      icon: backend,
    },
    {
      title: "Digital Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },

  ];
  
  const experiences = [
    {
      title: "Computer Love Re-Kindled EP.1",
      company_name: "Bergin Glass Impressions: Logistics Assistant Manager ",
      icon: starbucks,
      iconBg: "#000000",
      date: "Dec 2013 - Aug 2017",
      points: [
        "This wont be your typical timeline.",
        "But this is where my figmatic brain for tech began to speak to me.",
        "I would often finish my work early just to walk over & hangout with the art/tech department.",
        "I saw that it was a place that was constantly creating and the people there were less stressed, and loving what they do.",
        "One random day I started learning Dreamweaver and fell in love with code, slowly but surely I fell in love with just the thought of just bringing things to life.",
      ],
    },
    {
      title: "A QT gets saved by the Pandemic EP.2",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Apr 2018 - Mar 2020",
      points: [
        "As time went by I eventually was layed off but soon aquired a position at Tesla as a (Q)uality (T)echnician, I once again also found another department to wonder off to.",
        "& made some new freinds- that after a few conversations said I should apply for a tech position. I didnt have the skill but I guess I had the Zeal?.",
        "On a daily I felt I wasnt working with-in purpose. Car after Car Implementing electrical components, safety inspections, harness connections, dashboard systems, with the 12 hours shifts it began to weary me .",
        "We all soon expirienced what the world calls the pandemic, my department was layed off and I was onto the next path to <Resilience/>.",
      ],
    },
    {
      title: "Reality Check EP.3",
      company_name: "Geekwise Academy",
      icon: shopify,
      iconBg: "#ffffff",
      date: "Nov 2021, 3 month program- Jan 2022",
      points: [
        "As the Pandemic began to slow down life was getting tougher, I found a Job At Mycoworks a place where they made vegan leather from mushrooms/mycellium as cool as it sounds it just wasnt for me.",
        "An associate there told me about Bitwise and the program they had so even though it sounded sketchy at first I gave it a shot and invested/signed up for some classes.",
        "I loved the challenges the courses brang me, the enviroment, and the light bulbs that kept going off in my head. I shocked my self but not to worry a good kind of shock.",
        "I was supprised to later be accepted into a paid apprenticeship program. I felt so much relief because I realy didnt no what was next.",
      ],
    },
    {
      title: "The Path to <Resilience/>",
      company_name: "Bitwise Workforce Development",
      icon: meta,
      iconBg: "#ffffff",
      date: "Jan 31, 2022 - Present",
      points: [
        "Thanks to Bitwise Workforce training I have been able to build the proper skills it takes to be a Junior Developer.",
        "Developing and maintaining web applications using Wordpress and other related technologies, following the standard Gitflow Procedures with Github.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Jordan has a broad set of skills that allows him to deliver quality work that ranges from future efficient web development to aesthetic visuals. My time working with Jordan has been uplifting, straightforward, and realistic. Jordan has expressed a great sense of leadership through team projects and meetings. Jordan is a very skilled digital creator.",
      name: "Neptali Montez",
      designation: "Tech Lead",
      company: "Bitwise Industries",
      image: "./src/assets/nepts.jpeg",
    },
    {
      testimonial:
        "Jordan is always looking for better ways to move the project forward and help his team. Thank you for all the extra effort you put into our projects!",
      name: "Jacob Paul",
      designation: "Project Manager",
      company: "Bitwise Industries",
      image: "./src/assets/jp.png",
    },
    {
      testimonial:
        "Jordan sales are up Thanks for everything and making things work for us. We can't thank him enough!",
      name: "Lisa Wang",
      designation: "Photographer",
      company: "Chateau Potelle Winery",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "The Freelance Developer",
      description:
        "Check out my Freelance site for more of my projects. A Web-based platform that allows users to get to know me, get intouch, see my capabilities such as code, graphic design, & photography, schedule a free consultation.",
      tags: [
        {
          name: "HTML 57.2%",
          color: "blue-text-gradient",
        },
        {
          name: "CSS 35.6%",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript 7.2%",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://hellojworlddd.live/",
    },
    {
      name: "Real Estate Made Easy",
      description:
        "Coming soon this job is still in the works. Is A Web application Dynamic for the saler and future client, simply select property of interest fill out the contact form and prepare to get cozy in your new home.",
      tags: [
        {
          name: "WP",
          color: "blue-text-gradient",
        },
        {
          name: "PHP/SCSS 57.6%",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript 53.4%",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/JDevdsn",
    },
    {
      name: "Trip Guide",
      description:
        "Coming soon this job is still in the works. Is A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/JDevdsn",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };