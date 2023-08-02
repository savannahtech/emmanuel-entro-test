const { faker } = require("@faker-js/faker");

let tasks = [];

for (let i = 1; i <= 50; i++) {
  tasks.push({
    id: i.toString(),
    title: `Task Title ${i}`,
    assignee: faker.person.fullName(),
    creationDate: faker.date.past(),
    status: faker.helpers.arrayElement([
      "Open",
      "Closed",
      "In Progress",
      "Completed",
    ]),
    avatar: faker.image.avatar(),
    description: faker.lorem.paragraph(),
  });
}

require("fs").writeFileSync(
  "./src/data/tasks.json",
  JSON.stringify({ tasks }, null, 2)
);
