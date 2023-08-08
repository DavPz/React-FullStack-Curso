import axios from "axios";

const BASE_URL = 'http://localhost:8080/users';

const config = () => {
    return {
        headers: {
            "Authorization": sessionStorage.getItem("token"),
            "Content-Type": "Application/json",
        }
    }
}

export const finAll = async () => {

    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.error(error);
    }

    return null;
}

export const save = async ({ userName, email, password }) => {

    try {
        return await axios.post(BASE_URL, {
            userName,
            email,
            password,
        },
            config());
    } catch (error) {
        throw error;
    }
}

export const updateUser = async ({ id, userName, email }) => {
    try {
        return await axios.put(`${BASE_URL}/${id}`, {
            userName,
            email,
            password: 'placeholder'
        }, config());
    } catch (error) {
        throw error;
    }

}

export const deleteUser = async (id) => {
    try {
        await axios.delete(`${BASE_URL}/${id}`, config());
    } catch (error) {
        throw error;
    }
}