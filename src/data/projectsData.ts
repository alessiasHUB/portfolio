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
    | "PostgreSQL"
    | "Node.js"
    | "Full stack"
    | "Postman"
    | "Beekeeper"
    | "Adobe Illustrator"
  )[];
  // ['JavaScript', 'TypeScript', 'React', 'CSS', PostgreSQL', 'Node.js', 'Full stack', 'Postman', 'Beekeeper', "Adobe Illustrator"]
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
            Back-end made with Node.js (Express), and the database in PostgreSQL, deployed on Render and 
            ElephantSQL and managed on beekeeper studios.
            All images / icons used were made by me in Adobe Illustrator.
        `,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "PostgreSQL",
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
    description: `A collaborative effort (with Maria Ten) to make a website that can 
    search through TV-shows and their episodes. The API used can be found `,
    descLink: "https://www.tvmaze.com/",
    skills: ["JavaScript", "TypeScript", "React", "CSS"],
    gitHubFrontEnd: "https://github.com/mariatens/tv-shows-project",
    netlify: "https://tv-shows-project-alli-maria.netlify.app/",
  },
  {
    title: "To-do app",
    image: "",
    description: `A full-stack app that allows any user to add todo tasks to the website, 
    mark them as completed / not completed, edit individual tasks, delete all completed tasks or 
    an individual task.`,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "CSS",
      "PostgreSQL",
      "Node.js",
      "Full stack",
      "Postman",
      "Beekeeper",
    ],
    gitHubFrontEnd: "https://github.com/alessiasHUB/to-do-front/",
    gitHubBackEnd: "https://github.com/alessiasHUB/to-do-back/",
    netlify: "https://to-do-full-stack.netlify.app/",
  },
  {
    title: "Breed Battle",
    image: "",
    description: `A collaborative effort (team of 4) to create a full-stack app
    that fetches dog images from an API and let's the user vote for either of two images.
    The votes are then collected in a database and the top 10 voted breeds are then 
    displayed in a leaderboard on the website, and top 3 are displayed on a podium. 
    All artwork on the website is made by me in Adobe illustrator. The API used for dog images con be found `,
    descLink: "https://dog.ceo/dog-api",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "CSS",
      "PostgreSQL",
      "Node.js",
      "Full stack",
      "Postman",
      "Beekeeper",
      "Adobe Illustrator",
    ],
    gitHubFrontEnd: "https://github.com/syndercres/dog-breeds-front-end",
    gitHubBackEnd: "https://github.com/syndercres/dog-voting-back-end",
    netlify: "https://breed-battle.netlify.com/",
  },
  {
    title: "Snip Snap",
    image: "",
    description: `A collaborative effort (team of 3) to create a full-stack app. 
    The task was to create a "paste bin app" where the user can leave a 'snip-snap' 
    which other users can then comment on. Other features; be able to delete comments 
    and, or snip-snaps.`,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "CSS",
      "PostgreSQL",
      "Node.js",
      "Full stack",
      "Postman",
      "Beekeeper",
    ],
    gitHubFrontEnd: "https://github.com/alessiasHUB/snip-snap-front",
    gitHubBackEnd: "https://github.com/alessiasHUB/snip-snap-back",
    netlify: "https://snip-snaps.netlify.app/",
  },
  {
    title: "Study Resource Catalog",
    image: "",
    description: `A collaborative effort (team of 4) to create a full-stack app. 
    The task was to make a resource bank for students, where the user, if logged in, can
    post a new resource (as long as it's not already in the system), comment, like or dislike 
    other resources and add resources to their 'study-list'. The website feature several search 
    bars and filters and has a home-page that displays the latest added resources and the
    top liked ones.`,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "CSS",
      "PostgreSQL",
      "Node.js",
      "Full stack",
      "Postman",
      "Beekeeper",
      "Adobe Illustrator",
    ],
    gitHubFrontEnd:
      "https://github.com/alessiasHUB/study-resource-catalog-front",
    gitHubBackEnd: "https://github.com/alessiasHUB/study-resource-catalog-back",
    netlify: "https://study-resource-catalog.netlify.app/",
  },
  // {
  //   title: "",
  //   image: "",
  //   description: ``,
  //   skills: [
  //     "JavaScript",
  //     "TypeScript",
  //     "React",
  //     "CSS",
  //     "PostgreSQL",
  //     "Node.js",
  //     "Full stack",
  //     "Postman",
  //     "Beekeeper",
  //     // "Adobe Illustrator"
  //   ],
  //   gitHubFrontEnd: "",
  //   gitHubBackEnd: "",
  //   netlify: "",
  // },
];
