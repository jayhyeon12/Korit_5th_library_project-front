import instance from "../utils/Instance"

export const editPasswordRequest = async (data) => {
    return await instance.put("/account/password", data);
}