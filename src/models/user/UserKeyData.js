export class UserKeyData {

    /**
     * UserKeyData model constructor
     * @param {UserKeyData} data
     */
    constructor(data) {
        this._data = data;
    }

    /**
     * @returns {number}
     */
    get calorieCount() {
        return this._data.calorieCount;
    }

    /**
     * @returns {number}
     */
    get proteinCount() {
        return this._data.proteinCount;
    }

    /**
     * @returns {number}
     */
    get carbohydrateCount() {
        return this._data.carbohydrateCount;
    }

    /**
     * @returns {number}
     */
    get lipidCount() {
        return this._data.lipidCount;
    }

}
