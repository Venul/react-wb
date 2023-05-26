import React, { useState } from 'react'
import classes from './MainPage.module.scss'


function MainPage() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        debugger
        setInputValue(event.target.value);
    };

    const onSearchGoogs = () => {
        debugger
        console.log(`Input value: ${inputValue}`);
    };

    return (
        <div className={classes.mainPage}>
            <p>Вставьте ссылку на товар</p>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder='https://www.wildberries.ru/catalog/157876315/detail.aspx'
                />

                <button onClick={onSearchGoogs}>Искать!</button>
            </div>
        </div>
    );
}

export default MainPage