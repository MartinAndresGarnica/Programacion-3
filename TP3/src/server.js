const  express = require('express');
const  dotenv = require('dotenv');
const methodOverride = require('method-override');

const rutaTurnos = require('./routes/turnos.routes.js')
const rutaPacientes = require('./routes/pacientes.route.js')
const rutaTurnosViews = require('./routes/turnos.views.routes.js')
const rutaPacientesViews = require('./routes/pacientes.views.routes.js')
const home = require('./routes/home.routes.js');
const morgan = require('morgan');
dotenv.config()

class Server {
  constructor (template=process.env.TEMPLATE || 'ejs') {
    this.app = express()
    this.port = process.env.PORT || 3001
    this.middleware()
    //this.cors()
    this.engine(template)
    this.rutas()
    
  }

/*   cors () {
    this.app.use(cors())
  } */

  engine (template) {
      try{
        require.resolve(template);
          
        this.app.set('view engine', template)
        this.app.set('views', './src/views/'+template)
      }catch (error) {
          console.log('Error al configurar el motor de plantillas:',template)
        
      }

  }
  middleware () {
    // this.app.use('/', express.static('public'))
    this.app.use(express.json())
    this.app.use(morgan('dev'))
    this.app.use(express.static('src/public'))
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(methodOverride('_method'))
  }

  rutas () {
    this.app.use('/api/v1/pacientes', rutaPacientes)
    this.app.use('/api/v1/turnos', rutaTurnos)
    this.app.use('/turnos', rutaTurnosViews)
    this.app.use('/pacientes', rutaPacientesViews)
    this.app.use('/', home)

    // aca van las otras rutas

  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(
        `Server running on port ${this.port}, host: ${process.env.HOST}:${this.port}`
      )
    })
  }
}

module.exports = Server