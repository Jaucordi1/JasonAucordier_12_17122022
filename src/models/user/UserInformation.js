export class UserInformation {

    /**
     * UserInformation model constructor
     * @param {UserInformation} data
     */
    constructor(data) {
        this._data = data;
    }

    /**
     * @returns {string}
     */
    get firstName() {
        return this._data.firstName;
    }

    /**
     * @returns {string}
     */
    get lastName() {
        return this._data.lastName;
    }

    /**
     * @returns {number}
     */
    get age() {
        return this._data.age;
    }

}
