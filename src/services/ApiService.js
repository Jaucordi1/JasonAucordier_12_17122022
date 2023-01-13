import {mapper} from "./Mapper.js";
import {ApiMockService} from "./ApiMockService.js";

export class ApiService {

    /**
     * @param {Mapper} mapper
     */
    constructor(mapper) {
        console.debug("Using API production service!")
        this._baseUrl = "http://localhost:3000/";
        this._mapper = mapper;
    }

    /**
     * @param {string} endpoint
     * @returns {Promise<any>}
     * @private
     */
    async _endpoint(endpoint) {
        const response = await fetch(`${this._baseUrl}${endpoint}`);
        const json = await response.json();

        if (!response.ok) {
            throw new Error(json);
        }

        return json.data;
    }

    /**
     * @param {string} userID
     * @returns {Promise<User>}
     */
    async getUser(userID) {
        const data = await this._endpoint(`user/${userID}`);
        return this._mapper.mapUser(data);
    }

    /**
     * @param {string} userID
     * @returns {Promise<UserActivity>}
     */
    async getUserActivity(userID) {
        const data = await this._endpoint(`user/${userID}/activity`);
        return this._mapper.mapUserActivity(data);
    }

    /**
     * @param {string} userID
     * @returns {Promise<UserAverageSessions>}
     */
    async getUserAverageSessions(userID) {
        const data = await this._endpoint(`user/${userID}/average-sessions`);
        return this._mapper.mapUserAverageSessions(data);
    }

    /**
     * @param {string} userID
     * @returns {Promise<any>}
     */
    async getUserPerformance(userID) {
        return this._endpoint(`user/${userID}/performance`);
    }

}

/**
 * @type {ApiService | ApiMockService}
 */
let api;
if (import.meta.env.VITE_MOCK_API === "true") {
    api = new ApiMockService(mapper);
} else {
    api = new ApiService(mapper);
}

export {api};
