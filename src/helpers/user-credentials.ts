import { UserType } from "../enums/user-types";
import { UserInterface } from "../interfaces/user-interface";
import { getToken } from "../routes/login-route";
import dotenv from 'dotenv';
dotenv.config();

export const getUserToken = async (userType: UserType) => {

    let credentials: UserInterface = {
        username: "",
        password: ""
    }

    switch (userType) {
        case "USER_VALID":
            credentials.username = process.env.USERNAME || "";
            credentials.password = process.env.PASSWORD || "";
            break;
        case "USER_INVALID":
            credentials.username = process.env.UINVALID || "";
            credentials.password = process.env.PINVALID || "";
            break;
    }
    
    return await getToken(credentials)
}