const Post = require('../../models/Post');

const optionPost = {
  properties: {
    description: { type: 'richtext' },
  },
};

module.exports = {
  resource: Post,
  options: optionPost,
};
