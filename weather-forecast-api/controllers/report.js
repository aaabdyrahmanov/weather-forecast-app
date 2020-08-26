const ReportModel = require('../models/reports')
const crudControllers = require('../utils/crudByBody') 

module.exports = crudControllers(ReportModel)
