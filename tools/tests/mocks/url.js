class URLSearchParams {
    constructor() {
        this.url = {};
    }
    get() {
        return this.url;
    }
}

global.URLSearchParams = URLSearchParams;
