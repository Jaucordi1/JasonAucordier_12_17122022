export class UserActivitySession {

    /**
     * UserActivitySession model constructor
     * @param {UserActivitySession} data
     */
    constructor(data) {
        this._data = data;
    }

    /**
     * @returns {string}
     */
    get day() {
        return this._data.day;
    }

    /**
     * @returns {number}
     */
    get kilogram() {
        return this._data.kilogram;
    }

    /**
     * @returns {number}
     */
    get calories() {
        return this._data.calories;
    }

}
