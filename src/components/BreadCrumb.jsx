import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

const BreadCrumb = () => {
    const location = useLocation();
    const pathSnippets = location.pathname.split('/').filter(i => i);

    const breadcrumbItems = [
        {
            title: <Link to="/">Главная</Link>,
            key: "home"
        },
        {
            title: <Link to="/">Запись к врачу</Link>,
            key: "appointment"
        }
    ];

    if (pathSnippets[0] === 'about' && pathSnippets[1]) {
        breadcrumbItems.push({
            title: decodeURIComponent(pathSnippets[1]),
            key: "doctor"
        });
    }

    return (
        <div className="bg-layout-bg w-full">
            <div className="w-[80%] mx-[auto] py-[15px]">
                <Breadcrumb items={breadcrumbItems.map(item => ({ title: item.title, key: item.key }))} />
            </div>
        </div>
    );
};

export default BreadCrumb;
