var LogsService = require('../services/actionlog.service')

// Saving the context of this module inside the _the variable

_this = this

// Async Controller function to get the Favorite website list 

exports.getLogs = async function(req, res){

        try{
        
            var logs = await LogsService.getActionLogs();
            
            // Return the logs list with the appropriate HTTP Status Code and Message.
            
            return res.status(200).json({status: 200, data: logs, message: " Successfully received action logs for websites "});
            
        }catch(e){
            
            //Return an Error Response Message with Code and the Error Message.
            
            return res.status(400).json({status: 400, message: e.message});
            
        }
}

exports.createLog = async function(req, res, next){
    
        // Req.Body contains the form submit values.
    
        var log = {
            websiteName: req.body.websiteName,
            websiteURL: req.body.websiteURL,
            action: req.body.action
        }
    
        try{
            
            // Calling the Service function with the new object from the Request Body
        
            var createdLog = await LogsService.createLog(log)
            return res.status(201).json({status: 201, data: createdLog, message: "Successfully created log"})
        }catch(e){
            
            //Return an Error Response Message with Code and the Error Message.
            
            return res.status(400).json({status: 400, message: "log creation was unsuccessful"})
        }
    }
    
    
