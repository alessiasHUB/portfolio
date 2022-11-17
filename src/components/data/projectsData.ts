export interface projectType {
    id: number;
    title: string;
    netlifyLink: string;
    netlifyTitle: string;
    description: string;
    githubLink: string;
    date: string
}

export const projects : projectType[] = [
    {
        id: 1,
        title: "Kanye West Quote App",
        netlifyLink: "https://get-a-kanye-quote.netlify.app/",
        netlifyTitle: "Kanye quote",
        description: "I've used useEffect to fetch data from an API and have it render something new every time the site refreshes.",
        githubLink: "https://github.com/alessiasHUB/mark-react-spa-demo--fetch-with-use-effect",
        date: "17/11/2022"
    }
]