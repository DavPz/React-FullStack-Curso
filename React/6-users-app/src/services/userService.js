import userApi from "../apis/userApi";

const BASE_URL = '';

// const config = () => {
//     return {
//         headers: {
//             "Authorization": sessionStorage.getItem("token"),
//             "Content-Type": "Application/json",
//         }
//     }
// }

export const finAll = async () => {

    try {
        const response = await userApi.get(BASE_URL);
        return response;
    } catch (error) {
        throw error;
    }

    return null;
}

export const save = async ({ userName, email, password, adminRole }) => {

    try {
        return await userApi.post(BASE_URL, {
            userName,
            email,
            password,
            adminRole,
        });
    } catch (error) {
        throw error;
    }
}

export const updateUser = async ({ id, userName, email, adminRole }) => {
    try {
        return await userApi.put(`${BASE_URL}/${id}`, {
            userName,
            email,
            password: 'placeholder',
            adminRole,
        });
    } catch (error) {
        throw error;
    }

}

export const deleteUser = async (id) => {
    try {
        await userApi.delete(`${BASE_URL}/${id}`);
    } catch (error) {
        throw error;
    }
}