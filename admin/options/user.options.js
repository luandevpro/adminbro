const { beforeHookPassword, afterHookPassword } = require('../../hooks/user.hooks');
const User = require('../../models/user');

const optionUser = {
  properties: {
    encryptedPassword: { isVisible: false },
    password: {
      type: 'password',
    },
  },
  actions: {
    new: {
      before: async (response, request, context) => {
        const modifiedRequest = await beforeHookPassword(response, request, context);
        return modifiedRequest;
      },
      after: async (response, request, context) => {
        const modifiedResponse = await afterHookPassword(response, request, context);
        return modifiedResponse;
      },
    },
  },
};

module.exports = {
  resource: User,
  options: optionUser,
};
