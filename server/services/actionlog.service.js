var Log = require('../models/actionlog.model');

// Saving the context of this module inside the _the variable
_this = this

// Async function to get the action logs  List
exports.getActionLogs = async function(){
    
      
        // Try Catch the awaited promise to handle the error 
        
        try {
            var logs = await Log.find();
            
            // Return the action logs list that was returned by the mongoose promise
            return logs;
    
        } catch (e) {
    
            // return a Error message describing the reason 
            throw Error('Error while getActionLogs')
        }
}

exports.createLog = async function(log){
    
    // Creating a new Mongoose Object by using the new keyword
    var newLog = new Log({
        websiteName: log.websiteName,
        websiteURL: log.websiteURL,
        action: log.action,
        date: new Date()
    })

    try{

        // Saving the log 
        var savedLog = await newLog.save()

        return savedLog;
    }catch(e){
      
        // return a Error message describing the reason     
        throw Error("Error while Creating Log")
    }
}