const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

const index = (req, res) => {
  res.render('index', { title: 'Messages', messages: messages });
};

const newMessage = (req, res) => {
  res.render('form', { title: 'New Message' });
};

const create = (req, res) => {
  messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  });
  res.redirect('/');
};

module.exports = {
  index,
  newMessage,
  create
};
