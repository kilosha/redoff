import React, { useState } from 'react';

const UserProfile = () => {
    const [user, setUser] = useState({
        name: 'Masha',
        age: 25,
        isActive: true
    });

    const onChangeName = () => {
        setUser((prevUser) => ({ ...prevUser, name: 'Dasha' }));
    };

    const onIncreaseAge = () => {
        setUser((prevUser) => ({ ...prevUser, age: prevUser.age + 1 }));
    };

    const onToggleActiveState = () => {
        setUser((prevUser) => ({ ...prevUser, isActive: !prevUser.isActive }));
    };

    return (
        <div className="component">
            <h3>Профиль пользователя</h3>
            <div className="userProfileInfo">
                <div>Имя: {user.name}</div>
                <div>Возраст: {user.age}</div>
                <div>Активен: {user.isActive ? 'да' : 'нет'}</div>
            </div>
            <div>
                <button onClick={onChangeName}>Сменить имя</button>
                <button onClick={onIncreaseAge}>Увеличить возраст</button>
                <button onClick={onToggleActiveState}>Переключить активность</button>
            </div>
        </div>
    );
};

export default UserProfile;
