/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { api } from '../services/api';


export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});
    async function signIn({ email, password }) {
        try {
            const response = await api.post('/sessions', { email, password });
            const { user, token } = response.data;
            localStorage.setItem('@rocketNotes:token', token);
            localStorage.setItem('@rocketNotes:user', JSON.stringify(user));
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ user, token });
        } catch (e) {
            if (e.response) {
                return alert(e.response.data.message);
            }
            return alert('Erro ao realizar login.');
        }
    }

    function signOut() {
        localStorage.removeItem('@rocketNotes:token');
        localStorage.removeItem('@rocketNotes:user');
        setData({});

    }

    async function updateProfile({ user, avatarFile }) {
        try {
            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append('avatar', avatarFile);

                const response = await api.patch('/users/avatar', fileUploadForm);
                user.avatar = response.data.avatar;
            }
            await api.put('/users', user);
            localStorage.setItem('@rocketNotes:user', JSON.stringify(user));
            setData({ user, token: data.token });
            alert('Perfil atualizado com sucesso!');
        } catch (e) {
            if (e.response) {
                return alert(e.response.data.message);
            }
            return alert('Erro ao atualizar o perfil.');
        }
    }

    useEffect(() => {
        const token = localStorage.getItem('@rocketNotes:token',);
        const user = localStorage.getItem('@rocketNotes:user');

        if (token && user) {
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    } ,[]);



    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateProfile,
            user: data.user,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);
    return context;
}


export { AuthProvider, useAuth };