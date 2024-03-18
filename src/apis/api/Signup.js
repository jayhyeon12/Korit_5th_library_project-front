import instance from "../utils/Instance"

export const signupRequest = async (data) => {
    try {
        const response = instance.post("/auth/signup", data);
        return response;
    } catch(error) {
        console.log(error);
        return error.reponse;
    }
}