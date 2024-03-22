import instance from "../utils/Instance"

export const oAuth2MergeRequest = async (data) => {
    return await instance.post("/auth/oauth2/merge", data);
}