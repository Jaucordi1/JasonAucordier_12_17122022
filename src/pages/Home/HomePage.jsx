import Classes from "./HomePage.module.sass"
import {SessionsAverageDuration} from "../../components/charts/SessionsAverageDuration/SessionsAverageDuration.jsx";
import {UserPerformanceChart} from "../../components/charts/UserPerformance/UserPerformance.jsx";
import {DailyActivity} from "../../components/charts/DailyActivity/DailyActivity.jsx";
import {UserKeyDataCard} from "../../components/UserKeyDataCard/UserKeyDataCard.jsx";
import {UserScoreChart} from "../../components/charts/UserScore/UserScore.jsx";
import {Header} from "../../components/Header/Header.jsx";
import {api} from "../../services/ApiService.js";
import {useLoaderData} from "react-router-dom";
import {useEffect, useState} from "react";

const HomePage = () => {
    /**
     * @type {User}
     */
    const user = useLoaderData();

    const [/** @type {UserActivity | undefined} */userActivity, setUserActivity] = useState(undefined);
    const [/** @type {UserAverageSessions | undefined} */userAverageSessions, setUserAverageSessions] = useState(undefined);
    const [/** @type {UserPerformance | undefined} */userPerformance, setUserPerformance] = useState(undefined);

    useEffect(() => {
        api.getUserActivity(user.id).then(setUserActivity);
        api.getUserAverageSessions(user.id).then(setUserAverageSessions);
        api.getUserPerformance(user.id).then(setUserPerformance);
    }, [user.id]);

    return (
        <main className={Classes.container}>
            <Header user={user} className={Classes.header} />
            <section className={Classes.dashboard}>
                <div className={Classes.charts}>
                    {userActivity && (
                        <div className={Classes.daily}>
                            <DailyActivity data={userActivity} />
                        </div>
                    )}
                    <div className={Classes.row}>
                        {!!userAverageSessions && (
                            <div className={Classes.sessions}>
                                <SessionsAverageDuration data={userAverageSessions.sessions}
                                                         className={Classes.square} />
                            </div>
                        )}
                        {!!userPerformance && (
                            <div className={Classes.performance}>
                                <UserPerformanceChart data={userPerformance} className={Classes.square} />
                            </div>
                        )}
                        {!!user && (
                            <div className={Classes.score}>
                                <UserScoreChart data={user} className={Classes.square} />
                            </div>
                        )}
                    </div>
                </div>
                <div className={Classes.keyData}>
                    <UserKeyDataCard data={user.keyData} displayKey="calorieCount" unit="kCal" label="Calories" />
                    <UserKeyDataCard data={user.keyData} displayKey="proteinCount" unit="g" label="Proteines" />
                    <UserKeyDataCard data={user.keyData} displayKey="carbohydrateCount" unit="g" label="Glucides" />
                    <UserKeyDataCard data={user.keyData} displayKey="lipidCount" unit="g" label="Lipides" />
                </div>
            </section>
        </main>
    );
};
HomePage.propTypes = {};

export default HomePage;
