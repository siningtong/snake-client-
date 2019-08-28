const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.151',
    port: 50541
  });
  conn.setEncoding('utf8'); 
  conn.on('data',(data)=>{
    console.log('Server says: ', data);
  })

  return conn;
}
module.exports={
  connect
}