import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./cart/Cart";
import { Select, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import getDoktorsFunction from "../fetch/getDoktors";

const Main = () => {
    const state = useSelector((state) => state.doktorsData);
    const dispatch = useDispatch();
    const [jobTitle, setJobTitle] = useState("Все");
    const [data, setData] = useState([]);

    const handleChange = (value) => {
        setJobTitle(value);
    };

    useEffect(() => {
        getDoktorsFunction(dispatch);
    }, [dispatch]);

    useEffect(() => {
        if (jobTitle && jobTitle !== "Все") {
            const filteredData = state.doktors?.filter(
                (item) => item.jobTitle === jobTitle
            );
            setData(filteredData);
        } else {
            setData(state.doktors);
        }
    }, [jobTitle, state.doktors]);

    return (
        <div className="bg-layout-bg w-full min-h-screen py-[15px]">
            <div className="w-4/5 mx-auto">
                <div className="flex items-center gap-4 mt-4">
                    <span className="text-4xl font-light">Врачи</span>
                    <Space wrap>
                        <Select
                            defaultValue="Все"
                            style={{
                                borderRadius: "50%",
                                width: 120,
                            }}
                            onChange={handleChange}
                            options={[
                                { value: "Все", label: "Все" },
                                ...Array.from(
                                    new Set(
                                        state.doktors?.map(
                                            (item) => item.jobTitle
                                        )
                                    )
                                ).map((jobTitle) => ({
                                    value: jobTitle,
                                    label: jobTitle,
                                })),
                            ]}
                        />
                    </Space>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                    {data?.map((item) => (
                        <Cart key={item.id} item={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Main;
