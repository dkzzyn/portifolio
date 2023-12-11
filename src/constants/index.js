import { Html } from "@react-three/drei";
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
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre",
  },
  {
    id: "work",
    title: "Projetos",
  },
  {
    id: "contact",
    title: "Contato",
  },

];

const services = [
  {
    title: "Desenvolvedor Web",
    icon: web,
  },
  {
    title: "Desenvolvedor React Native",
    icon: mobile,
  },
  {
    title: "ui/ux designer",
    icon: backend,
  },
  {
    title: "Criador de conteúdor",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    title: "React.js Developer",
    company_name: "frella",
    icon: html,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Desenvolvimento e manutenção de aplicações web usando html e css outras tecnologias.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
      "Implementar design responsivo e garantir compatibilidade entre navegadores..",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
  {
    title: "React.js Developer",
    company_name: "frella",
    icon: reactjs,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Desenvolvimento e manutenção de aplicações web usando React.js e outras tecnologias.",
      "Colaborar com equipes multifuncionais, incluindo designers, gerentes de produto e outros desenvolvedores, para criar produtos de alta qualidade.",
      "Implementar design responsivo e garantir compatibilidade entre navegadores..",
      "Participar de revisões de código e fornecer feedback construtivo a outros desenvolvedores.",
    ],
  },
  

];


/*aaaaa*/
const testimonials = [
  /*{
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },*/
];

const projects = [
  {
    name: "Aluguel de carro",
    description:
      "Plataforma baseada na web que permite aos usuários pesquisar, reservar e gerenciar aluguel de carros de diversos fornecedores, fornecendo uma solução conveniente e eficiente para as necessidades de transporte.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trabalho IT",
    description:
    "Aplicativo da Web que permite aos usuários pesquisar vagas de emprego, visualizar faixas salariais estimadas para cargos e localizar empregos disponíveis com base em sua localização atual.",    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Guia de viageme",
    description:
    "Uma plataforma abrangente de reservas de viagens que permite aos usuários reservar voos, hotéis e aluguel de carros e oferece recomendações selecionadas para destinos populares.",    tags: [
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
    source_code_link: "https://github.com/",
  },
];

const links = [
  {
    name: "linkedin",
    Text : "linkedin",
    linkedin_code_link: "https://www.linkedin.com/in/diogo-silva-42b1b2213/",
  },
  
    {
      name: "linkedin",
      Text : "linkedin",
      gith_code_link: "https://github.com/",
    },

];



export { services, technologies, experiences, testimonials, projects };
