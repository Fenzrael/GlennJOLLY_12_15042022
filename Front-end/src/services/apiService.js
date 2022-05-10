import { useState, useEffect } from "react";
import axios from "axios";

/**
 * Custom Hook creation for requests BackEnd Datas
 * @param { Function } path Path getting by User Id
 * @returns {(Objects | data and Boolean)} data, isLoading, error
 */

export function useRequestDatas (path){
    // 3 variables d'etat (données, chargement, erreurs)
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        // Definition des endPoints fournit par le BackEnd
        const endPoints = [`http://localhost:3000/user/${path}`, 
                           `http://localhost:3000/user/${path}/activity`,
                           `http://localhost:3000/user/${path}/average-sessions`, 
                           `http://localhost:3000/user/${path}/performance`]; 
        
        // Fonction asynchrone call api BackEnd fournit
        async function getUserDatas(){
            // Chargement Vrai
            setIsLoading(true);
            // Attente données recupérées par appel axios
            // fonctionnalité all permettant de faire plusieurs call api
            // map permettant de faire les 4 get d'un coup
            // fonctionnalité spread permettant de redistribuer les multiples call api
            // definition des 4 reponses(ex: responseUser, et changement nom data recupérée )
            // la variable data du 1er State devenant un objet avec les 4 types de données fournit par les endpoints
            await axios.all(endPoints.map(endPoint => axios.get(endPoint)))
                       .then(axios.spread((responseUser,responseActivity,responseAverage,responsePerform) => {
                           setData({
                               user: responseUser.data.data,
                               activity: responseActivity.data.data,
                               average: responseAverage.data.data,
                               perform: responsePerform.data.data
                            });
                           setIsLoading(false);
                       }))
                       .catch(err => {
                           console.log(err)
                           setError(true);
                       });
        }
        // Appel fonction getUserDatas
        getUserDatas();
    }, [path]);
    
    // retour des variables d'etat
    return { data, isLoading, error };
}               



   
