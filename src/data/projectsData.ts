interface Project {
    title: string;
    image: string;
    description: string;
    skills: ('JavaScript' | 'TypeScript' | 'React' | 'SQL' | 'Node.js' | 'Full stack' | 'Postman' | 'Beekeeper')[];
// ['JavaScript', 'TypeScript', 'React', 'SQL', 'Node.js', 'Full stack', 'Postman', 'Beekeeper']
    gitHubFrontEnd: string;
    gitHubBackEnd?: string;
    netlify: string;
}

export const projects : Project[] = [
    {
        title: 'Snake Game',
        image: '',
        description: `
            A full-stack snake game with a database to manage highscores that the user will have the 
            option to add their name to, if they're skilled enough to get one of the top 10 scores. 
            Front-end made using React (Typescript) and deployed on Netlify, 
            Back-end made with Node.js (Express), and the database in SQL, deployed on Render and 
            ElephantSQL and managed on beekeeper studios.
            All images / icons used were made by me in Adobe Illustrator.
        `,
        skills: ['JavaScript', 'TypeScript', 'React', 'SQL', 'Node.js', 'Full stack', 'Beekeeper'],
        gitHubFrontEnd: 'https://github.com/alessiasHUB/snake-front',
        gitHubBackEnd: 'https://github.com/alessiasHUB/snake-back',
        netlify: 'https://my-great-snake-game.netlify.app/',
    },
    {
        title: '',
        image: '',
        description: '',
        skills: ['JavaScript', 'TypeScript', 'React', 'SQL', 'Node.js', 'Full stack', 'Postman', 'Beekeeper'],
        gitHubFrontEnd: '',
        gitHubBackEnd: '',
        netlify: '',
    },
    {
        title: '',
        image: '',
        description: '',
        skills: ['JavaScript', 'TypeScript', 'React', 'SQL', 'Node.js', 'Full stack', 'Postman', 'Beekeeper'],
        gitHubFrontEnd: '',
        gitHubBackEnd: '',
        netlify: '',
    },
]