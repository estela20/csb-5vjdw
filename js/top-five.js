/*const project_1 = {
  title: "Project 1",
  description: "This is my first project",
  image_url: "URL1",
  link: {
    text: "Link to the project",
    url: "URL2"
  }
};


console.log(project_1.link.url);
*/

const projects = [
  {
    title: "Project 1",
    description: "This is my first project",
    image_url: "URL1",
    link: {
      /*text: "Link to the project",
      url: "URL2" */
    }
  },
  {
    title: "Project 2",
    description: "This is my second project",
    image_url: "URL1",
    link: {
      text: "Link to the project",
      url: "URL2"
    }
  },
  {
    title: "Project 3",
    description: "This is my third project",
    image_url: "URL1",
    link: {
      text: "Link to the project",
      url: "URL2"
    }
  }
];

for (let i = 0; i < projects.length; i++) {
  console.log("Name = " + projects[i].title);
  if (projects[i].link !== true) {
    console.log("Link not provided");
  } else {
    console.log(projects[i].link);
  }
}
