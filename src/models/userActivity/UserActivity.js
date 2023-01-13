import {UserActivitySession} from "./UserActivitySession.js";

export class UserActivity {

    /**
     * @param {UserActivity} data
     */
    constructor(data) {
        this._data = data;
        this._sessions = data.sessions.map(session => new UserActivitySession(session));
    }

    /**
     * @returns {string}
     */
    get userId() {
        return this._data.userId;
    }

    /**
     * @returns {UserActivitySession[]}
     */
    get sessions() {
        return this._sessions;
    }

}
