import commonAPI from "./commonAPI"

import { serverURL } from "./serverURL";



export const addLeadAPI = async (reqBody) => {

    return await commonAPI(
        "POST",
        `${serverURL}/api/leads`,
        reqBody,
        {}
    )

}



export const getLeadsAPI = async () => {

    return await commonAPI(
        "GET",
        `${serverURL}/getLeads`,
        {},
        {}
    )

}



export const updateLeadAPI = async (id, reqBody) => {

    return await commonAPI(
        "PUT",
        `${serverURL}/api/updateLead/${id}`,
        reqBody,
        {}
    )

}



export const deleteLeadAPI = async (id) => {

    return await commonAPI(
        "DELETE",
        `${serverURL}/api/deleteLead/${id}`,
        {},
        {}
    )

}

export const dashboardAPI = async () => {

    return await commonAPI(
        "GET",
        `${serverURL}/api/dashboard`,
        {},
        {}
    )

}