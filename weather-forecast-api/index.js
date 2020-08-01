const server = require('./server')
const { HOST, PORT} = require('./config')

require('./models')

server.listen(PORT, HOST, (err) => {
  if(err) console.error(err)
  console.log(`REST API started on http://${HOST}:${PORT}/api`)
})