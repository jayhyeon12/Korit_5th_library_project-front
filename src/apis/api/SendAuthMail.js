import instance from "../utils/Instance"

export const sendAuthMailRequest = async () => {
    return await instance.post("/mali/send");
}