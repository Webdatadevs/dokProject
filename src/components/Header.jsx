import React from "react";

const Header = () => {
    return (
        <>
            <header className="w-[100%] py-[20px]">
                <div className="w-[80%] mx-[auto] flex items-center justify-between ">
                    <div className=" text-[24px] font-[400] ">
                        <span className=" bg-blue-bg py-[4px] pl-[10px] rounded-[4px] text-header-bg ">
                            Ло
                        </span>
                        <span>готип</span>
                    </div>
                    <div className="flex items-center justify-between gap-[80px]">
                        <ul className="flex items-center gap-[25px]">
                            <li>Главная</li>
                            <li>Как пользоваться?</li>
                            <li className=" text-blue-bg ">Запись к врачу</li>
                            <li>Контакты</li>
                        </ul>
                        <div className="flex  items-center gap-[20px] text-blue-bg ">
                            <span>Войти</span>
                            <div className="flex border-[2px] border-blue-bg py-[15px] px-[25px] rounded-[8px]">
                                <span>Регистрация</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
