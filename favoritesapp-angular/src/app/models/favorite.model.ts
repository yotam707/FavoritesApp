// ../src/app/models/favorite.model.ts

class Favorite {
    _id: string;
    websiteName: string;
    websiteURL: string;
    date: Date;

    constructor() {
        this.websiteName = '';
        this.websiteURL = '';
        this.date = new Date();
    }
}

export default Favorite;
