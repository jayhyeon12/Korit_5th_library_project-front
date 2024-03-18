import instance from "../utils/Instance";

export const signinRequest = async (data) => {
    const response = await instance.post("/auth/signin", data);
    return response;
    
}