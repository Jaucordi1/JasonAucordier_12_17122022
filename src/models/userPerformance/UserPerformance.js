/**
 * @typedef {{ [key: number]: string }} UserPerformanceKind
 * @typedef {{kind: keyof UserPerformanceKind, value: number}} UserPerformanceData
 */
export class UserPerformance {
    /**
     * UserPerformance model constructor
     * @param {UserPerformance} data
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
     * @returns {UserPerformanceKind}
     */
    get kind() {
        return this._data.kind;
    }

    /**
     * @returns {UserPerformanceData[]}
     */
    get data() {
        return this._data.data.map(item => (
            {
                kind: item.kind,
                value: item.value,
            }
        ))
    }
}
