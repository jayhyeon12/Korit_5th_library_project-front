import instance from "../utils/Instance";

export const getPrincipalRequest = async () => {
    return await instance.get("/account/principal");
}