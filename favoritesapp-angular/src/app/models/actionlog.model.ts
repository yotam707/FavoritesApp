// ../src/app/models/actionlog.model.ts

class Log {
    _id: string;
    websiteName: string;
    websiteURL: string;
    action: string;
    date: Date;

    constructor() {
        this.websiteName = '';
        this.websiteURL = '';
        this.action = '';
        this.date = new Date();
    }
}

export default Log;
