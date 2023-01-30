export class ApiMockService {

    /**
     * [MOCK] ApiService
     * @param {Mapper} mapper
     */
    constructor(mapper) {
        console.debug("Using API mock service!")
        this._baseUrl = "../mocks/api";
        this._mapper = mapper;
    }

    /**
     * @param {string} endpoint
     * @returns {Promise<{data: User[], activities: UserActivity[], averageSessions: UserAverageSessions[], performances: any[]}>}
     * @private
     */
    async _endpoint(endpoint) {
        const module = await import("../mocks/api");
        return {
            data: module.USER_MAIN_DATA,
            activities: module.USER_ACTIVITY,
            averageSessions: module.USER_AVERAGE_SESSIONS,
            performances: module.USER_PERFORMANCE,
        };
    }

    /**
     * @param {string} userID
     * @returns {Promise<User>}
     */
    async getUser(userID) {
        const data = (
            await this._endpoint()
        ).data.find(user => user.id === userID);
        return this._mapper.mapUser(data);
    }

    /**
     * @param {string} userID
     * @returns {Promise<UserActivity>}
     */
    async getUserActivity(userID) {
        const data = (
            await this._endpoint()
        ).activities.find(activity => activity.userId === userID);
        return this._mapper.mapUserActivity(data);
    }

    /**
     * @param {string} userID
     * @returns {Promise<UserAverageSessions>}
     */
    async getUserAverageSessions(userID) {
        const data = (
            await this._endpoint()
        ).averageSessions.find(averageSessions => averageSessions.userId === userID);
        return this._mapper.mapUserAverageSessions(data);
    }

    /**
     * @param {string} userID
     * @returns {Promise<UserPerformance>}
     */
    async getUserPerformance(userID) {
        const data = (
            await this._endpoint()
        ).performances.find(performances => performances.userId === userID);
        return this._mapper.mapUserPerformance(data);
    }

}
