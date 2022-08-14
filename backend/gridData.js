const { v4: uuid } = require("uuid");

const data = [
  {
    id: uuid(),
    name: "Jane Doe",
    email: "janeD@klas.com",
    role: "basic",
    date: "Mar 12 2012",
  },
  {
    id: uuid(),
    name: "John Doe",
    email: "jdoe@klas.com",
    role: "standard",
    date: "12/09/2019",
  },
  {
    id: uuid(),
    name: "Erik Yohansen",
    email: "yohanerik@klas.com",
    role: "basic",
    date: "13/06/1998",
  },
  {
    id: uuid(),
    name: "Mary Arthur Doe",
    email: "mDArth@klas.com",
    role: "premium",
    date: new Date().toLocaleDateString(),
  },
  {
    id: uuid(),
    name: "John Doe",
    email: "jdoe@klas.com",
    role: "basic",
    date: new Date().toLocaleDateString(),
  },
  {
    id: uuid(),
    name: "Philip Ebuka",
    email: "ebukaphil@klas.com",
    role: "basic",
    date: new Date().toLocaleDateString(),
  },
  {
    id: uuid(),
    name: "Kwame Mensah",
    email: "mkwame@klas.com",
    role: "standard",
    date: "27/11/2009",
  },
  {
    id: uuid(),
    name: "Yaw Barimah Doe",
    email: "doeB@klas.com",
    role: "basic",
    date: new Date().toLocaleDateString(),
  },
  {
    id: uuid(),
    name: "Elsie Rockstar",
    email: "rockErl@klas.com",
    role: "standard",
    date: "Mar 12 2012",
  },
  {
    id: uuid(),
    name: "Alex McEvans",
    email: "evansMc@klas.com",
    role: "basic",
    date: "Apr 12 2012",
  },
];

module.exports = data;
