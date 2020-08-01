const server = require('./server')

require('./models')

server.listen(3000, (err) => {
  if(err) console.error(err)
  console.log(`REST API started on http://localhost:3000/api`)
})