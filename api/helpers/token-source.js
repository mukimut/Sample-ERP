module.exports = {


  friendlyName: 'Token source',


  description: '',


  inputs: {

  },


  exits: {

    success: {
      description: 'All done.',
    },

  },


  fn: async function (inputs, exits) {
    const hat = require('hat');
    return exits.success(hat());
  }


};

