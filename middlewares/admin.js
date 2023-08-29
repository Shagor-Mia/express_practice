module.exports = function(req,res,next){
    if(req.user.role !== "admin") return res.status(400).send('forbidden!')
    next();
}


// soyeb=> eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGM3ODBlYWY0MzJhYzdlZmI0YzRhZTIiLCJyb2xlIjoidXNlciIsImlhdCI6MTY5MDc5NjI2Nn0.tFPITaCruTEcpF2nouCgr-dt3ePSk05OvnfetHU7xSk

// faisal => eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGM3ODFjNGY0MzJhYzdlZmI0YzRhZTUiLCJyb2xlIjoidXNlciIsImlhdCI6MTY5MDc5NjQ4NX0.-kWHF47CaM_lnGJkQCiR6NH_H2zwHwfLMQGXqADfQaY