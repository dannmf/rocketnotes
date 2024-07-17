/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';
import { Container, Form, Avatar } from "./style";
import { Input } from '../../components/Input';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from '../../services/api';
import { ButtonText } from '../../components/ButtonText'



export function Profile() {

    const { user, updateProfile } = useAuth();
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setPasswordOld] = useState();
    const [passwordNew, setNewPasswordNew] = useState();
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1)
    }

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }
        await updateProfile({ user, avatarFile });
    }

    function handleChangeAvatar(e) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <header>
                <button onClick={handleBack} type="button">
                    <FiArrowLeft />
                </button>
            </header>

            <Form>
                <Avatar>
                    <img src={avatar} alt='Foto do Usuario' />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input id="avatar" type="file" onChange={handleChangeAvatar} />

                    </label>

                </Avatar>
                <Input
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Input
                    placeholder='Email'
                    type='text'
                    icon={FiMail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
                <Input
                    placeholder='Senha Atual'
                    type='password'
                    icon={FiLock}
                    onChange={(e) => setPasswordOld(e.target.value)}
                />
                <Input
                    placeholder='Nova Senha'
                    type='password'
                    icon={FiLock}
                    onChange={(e) => setNewPasswordNew(e.target.value)}
                />

                <Button title='Salvar' onClick={handleUpdate} />
            </Form>
        </Container>
    )
}