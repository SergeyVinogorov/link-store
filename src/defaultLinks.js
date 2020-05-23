import { uuid } from "./util";

export default {
  links: {
    name: "storeLink",
    categories: [
      {
        name: "Frontend",
        links: [
          {
            id: uuid(),
            title: "React",
            currentLink: "https://reactjs.org/",
          },
          {
            id: uuid(),
            title: "Vue",
            currentLink: "https://vuejs.org/",
          },
          {
            id: uuid(),
            title: "Angular",
            currentLink: "https://angular.io/",
          },
        ],
      },
      {
        name: "Backend",
        links: [
          {
            id: uuid(),
            title: "Oracle",
            currentLink: "https://www.oracle.com/index.html",
          },
          {
            id: uuid(),
            title: "PHP",
            currentLink: "https://www.php.net/",
          },
        ],
      },
      {
        name: "Design",
        links: [
          {
            id: uuid(),
            title: "Dribbble",
            currentLink: "https://dribbble.com/",
          },
          {
            id: uuid(),
            title: "Behance",
            currentLink: "https://www.behance.net/",
          },
        ],
      },
    ],
  },
};
