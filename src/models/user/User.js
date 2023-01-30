import {UserInformation} from "./UserInformation.js";
import {UserKeyData} from "./UserKeyData.js";

export class User {

    /**
     * User model constructor
     * @param {User} data
     */
    constructor(data) {
        this._data = data;
        this._userInfos = new UserInformation(data.userInfos);
        this._keyData = new UserKeyData(data.keyData);
    }

    /**
     * @returns {string}
     */
    get id() {
        return this._data.id;
    }

    /**
     * @returns {UserInformation}
     */
    get userInfos() {
        return this._userInfos;
    }

    /**
     * @returns {number}
     */
    get todayScore() {
        return this._data.todayScore;
    }

    /**
     * @returns {UserKeyData}
     */
    get keyData() {
        return this._keyData;
    }

}
