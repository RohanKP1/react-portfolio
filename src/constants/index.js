import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";

export const HERO_CONTENT = `I am a passionate computer science undergraduate with the love for open-source development. Actively
contributes to projects, seeks continuous learning, and collaborates with global communities.`;

export const ABOUT_TEXT = `I am a dedicated and versatile software developer with a passion for creating efficient and user-friendly applications. With 5 years of development experience, I have worked with a variety of technologies, including Python, GNU/Linux, Bash, Tkinter, GTK, QT, Git/GitHub, React, MySQL, MongoDB, et cetera. My journey in software development began with a deep curiosity for how things work, and it has evolved into a undergraduate where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const PROJECTS = [
  {
    title: "Neural Network implementation on a Flappy bird clone",
    image: project1,
    description:
      "It is an implementation of PNN(Perceptron Neural Network) using a Genitic algorithm on a Flappy bird clone build from scrach using Python.",
    technologies: ["Python", "PNN", "Genitic Algorithm"],
  },
  {
    title: "Pathfinding Algorithms Visualizer",
    image: project2,
    description:
      "It is a GUI application that provides a visual representation of three different pathfinding algorithms: A-star, Dijkstra, and Depth-First Search (DFS).",
    technologies: ["Python", "Pygame", "Customtkinter", "Pathfinding Algorithms"],
  },
  {
    title: "Pytiti - TUI based Tic Tac Toe Game",
    image: project3,
    description:
      "A simple Tic Tac Toe Game, made entirely in Python with subtle TUI (Terminal User Interface).",
    technologies: ["Python", "TUI", "real-time logic", "system arguments"],
  },
];

export const CONTACT = {
  address: "New Delhi, India, 110059 ",
  phoneNo: "+91 9560282869 ",
  email: "rohankp5922@gmail.com",
};
