/**
 * @typedef {{day: number, sessionLength: number}} AverageSession
 */
export class UserAverageSessions {

    /**
     * @param {UserAverageSessions} data
     */
    constructor(data) {
        this._data = data;
    }

    /**
     * @returns {string}
     */
    get userId() {
        return this._data.userId;
    }

    /**
     * @returns {AverageSession[]}
     */
    get sessions() {
        return this._data.sessions;
    }

}
