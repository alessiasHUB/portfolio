interface Project {
  title: string;
  image: string;
  description: string;
  descLink?: string;
  skills: (
    | "JavaScript"
    | "TypeScript"
    | "React"
    | "CSS"
    | "SQL"
    | "Node.js"
    | "Full stack"
    | "Postman"
    | "Beekeeper"
  )[];
  // ['JavaScript', 'TypeScript', 'React', 'CSS', SQL', 'Node.js', 'Full stack', 'Postman', 'Beekeeper']
  gitHubFrontEnd: string;
  gitHubBackEnd?: string;
  netlify: string;
}

export const projects: Project[] = [
  {
    title: "Snake Game",
    image: "",
    description: `
            A full-stack snake game with a database to manage highscores that the user will have the 
            option to add their name to, if they're skilled enough to get one of the top 10 scores. 
            Front-end made using React (Typescript) and deployed on Netlify, 
            Back-end made with Node.js (Express), and the database in SQL, deployed on Render and 
            ElephantSQL and managed on beekeeper studios.
            All images / icons used were made by me in Adobe Illustrator.
        `,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "SQL",
      "Node.js",
      "Full stack",
      "Beekeeper",
    ],
    gitHubFrontEnd: "https://github.com/alessiasHUB/snake-front",
    gitHubBackEnd: "https://github.com/alessiasHUB/snake-back",
    netlify: "https://my-great-snake-game.netlify.app/",
  },
  {
    title: "TV Shows DataBase",
    image: "",
    description: `A collaborative effort (with Maria Ten) to make a website that can search through 
    TV-shows and their episodes. The API used can be found  `,
    descLink: "https://www.tvmaze.com/",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "CSS",
    ],
    gitHubFrontEnd: "https://github.com/mariatens/tv-shows-project",
    netlify: "https://tv-shows-project-alli-maria.netlify.app/",
  },
  {
    title: "",
    image: "",
    description: ``,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "CSS",
      "SQL",
      "Node.js",
      "Full stack",
      "Postman",
      "Beekeeper",
    ],
    gitHubFrontEnd: "",
    gitHubBackEnd: "",
    netlify: "",
  },
];
