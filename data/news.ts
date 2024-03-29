import { Post } from "./interfaces/Post"

export const latestNewsData: Post[] = [
  {
    title: "Clean Architecture: Principes S.O.L.I.D dans la pratique",
    image: "/images/code.jpg",
    date: "26 Mars 2023",
    video: "https://www.youtube.com/embed/8mfGzXPNiQw",
    category: { name: "Clean Architecture" },
    shortText:
      "Dans cette vidéo, nous appliquons les principes S.O.L.I.D pour développer le back-end de notre application EAD.",
    readMoreLink: "https://www.youtube.com/watch?v=8mfGzXPNiQw",
  },
  {
    title: "Configuration de docker avec PostgreSQL et utilisation de Express",
    image: "/images/code.jpg",
    date: "17 Mars 2023",
    video: "https://www.youtube.com/embed/PAm7YvLbfP4",
    category: { name: "Docker" },
    shortText:
      "Dans cette video, nous embarquons notre projet dans un conteneur Docker avec PostgreSQL.",
    readMoreLink: "https://www.youtube.com/watch?v=PAm7YvLbfP4",
  },
  {
    title: "Initialisation du projet de cours en ligne avec Typescript.",
    image: "/images/code.jpg",
    date: "15 Mars 2023",
    video: "https://www.youtube.com/embed/QKdxeHlbpHQ",
    category: { name: "Node.js" },
    shortText:
      "Dans cette video, nous utilisons Node.js et Typescript pour initier un projet backend.",
    readMoreLink: "https://www.youtube.com/watch?v=QKdxeHlbpHQ",
  },
]

export const getPosts = (start: number, postsPerPage: number) =>
  latestNewsData.slice(start, postsPerPage)

export const getLatestPosts = () => {
  return [
    ...getPosts(0, 3),
    {
      title:
        "Découvrez toute notre actualité et vidéos de formation sur notre blog",
      image: "/images/code.jpg",
      date: "01 Mars 2023",
      category: { name: "Blog" },
      shortText:
        "Toutes nos vidéos de formations et nos astuces pour apprendre à programmer comme de vrais professionnels.",
      readMoreLink: "/blog/",
    },
  ]
}

export const getPostsCount = () => latestNewsData.length
