import axios from "axios";

export const loginUser = async ({ userName, password }) => {

    try {

        return await axios.post('http://localhost:8080/login', {
            userName,
            password,
        });

    } catch (error) {
        throw error;
    }

}
