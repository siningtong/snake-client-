const { connect } = require('./client');
const { setupInput } = require('./input');

console.log('Connecting ...');
const client  = connect();
setupInput(client);