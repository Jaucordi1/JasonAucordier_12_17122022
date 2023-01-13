import {User} from "../models/user/User.js";
import {UserActivity} from "../models/userActivity/UserActivity.js";
import {UserAverageSessions} from "../models/userAverageSession/UserAverageSessions.js";
import {UserPerformance} from "../models/userPerformance/UserPerformance.js";

class Mapper {

    /**
     * @param {User} data
     * @returns {User}
     */
    mapUser(data) {
        return new User(data);
    }

    /**
     * @param {UserActivity} data
     * @returns {UserActivity}
     */
    mapUserActivity(data) {
        return new UserActivity(data);
    }

    /**
     * @param {UserAverageSessions} data
     * @returns {UserAverageSessions}
     */
    mapUserAverageSessions(data) {
        return new UserAverageSessions(data)
    }

    /**
     * @param {UserPerformance} data
     * @returns {UserPerformance}
     */
    mapUserPerformance(data) {
        return new UserPerformance(data);
    }

}

export const mapper = new Mapper();
