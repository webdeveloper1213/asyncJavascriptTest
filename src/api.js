const persons = {
  123: {
    id: 123,
    name: "janice"
  },
  234: {
    id: 234,
    name: "jonathan"
  },
  345: {
    id: 345,
    name: "janie"
  },
  456: {
    id: 456,
    name: "johanna"
  }
};

const isomorphicFetch = (url) => {
  let value;

  if (url.endsWith("person")) {
    value = Object.keys(persons);
  } else {
    value = persons[url.split("/").pop()];
  }

  const json = () => new Promise((resolve) => resolve(value));

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ json: json, status: 200 });
    }, 300);
  });
};

export const getPersonIds = () => {
  return isomorphicFetch("https://some-mock-server.com/person");
};

export const getPerson = (id) => {
  return isomorphicFetch(`https://some-mock-server.com/person/${id}`);
};
