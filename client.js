const net = require('net');
const connect = function() {
  const conn = net.createConnection({ 
    host: '192.168.88.151',
    port: 50541
  });
  conn.setEncoding('utf8'); 
  conn.on('connect',()=>{
    console.log('Successfully connected to game server')
  })
  conn.on('connect', () => {
  conn.write("Name: TSN");
});
  conn.on('data',(data)=>{
    console.log('Server says: ', data);
  })
  // conn.on('connect', () => {
  //   console.log('Im moving up')
  //   conn.write("Move: up");
  //   setInterval(()=>{
  //     conn.write("Move: up");
  //   },50)
    
  // })
  return conn;
}
module.exports={
  connect
}