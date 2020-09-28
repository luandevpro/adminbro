const AdminBro = require('admin-bro');

const { beforeHookPassword, afterHookPassword } = require('../../hooks/user.hooks');
const { beforeHookUpload, afterHookUpload } = require('../../hooks/user.hooks');
const User = require('../../models/user');

const optionUser = {
  properties: {
    encryptedPassword: { isVisible: false },
    password: {
      type: 'password',
    },
    avatar: {
      components: {
        edit: AdminBro.bundle('../../components/User/Avatar.edit.jsx'),
        list: AdminBro.bundle('../../components/User/Avatar.list.jsx'),
        show: AdminBro.bundle('../../components/User/Avatar.list.jsx'),
      },
    },
  },
  actions: {
    new: {
      before: async (request, context) => {
        const modifiedRequest = await beforeHookPassword(request, context);

        return beforeHookUpload(request, context, modifiedRequest);
      },
      after: async (response, request, context) => {
        const modifiedResponse = await afterHookPassword(response, context);

        return afterHookUpload(response, context, modifiedResponse);
      },
    },
    edit: {
      before: async (request, context) => {
        const modifiedRequest = await beforeHookPassword(request, context);

        return beforeHookUpload(request, context, modifiedRequest);
      },
      after: async (response, request, context) => {
        const modifiedResponse = await afterHookPassword(response, context);

        return afterHookUpload(response, context, modifiedResponse);
      },
    },
  },
};

module.exports = {
  resource: User,
  options: optionUser,
};
