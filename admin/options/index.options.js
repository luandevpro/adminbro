const AdminBro = require('admin-bro');
const mongoose = require('mongoose');
const AdminBroMongoose = require('@admin-bro/mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

const optionUser = require('./user.options');
const optionPost = require('./post.options');

const options = {
  databases: [mongoose],
  rootPath: '/admin',
  resources: [optionUser, optionPost],
  branding: {
    companyName: 'luandev.blog',
  },
};

module.exports = options;
