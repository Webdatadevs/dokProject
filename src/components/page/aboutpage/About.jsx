import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DoctorInfo from "./DoctorInfo";
import Schedule from "./Schedule";
import SelectedTimeButton from "./SelectedTimeButton";

const About = () => {
    const state = useSelector((state) => state.doktorsData);
    const { title } = useParams();
    const [infoData, setInfoData] = useState({
        ...JSON.parse(localStorage.getItem("info-data")),
    });
    const [selectedTime, setSelectedTime] = useState(null);

    useEffect(() => {
        const setLocal = () => {
            if (state.doktors) {
                const data = state.doktors.find((item) => item.title === title);
                if (data) {
                    setInfoData(data);
                    localStorage.setItem("info-data", JSON.stringify(data));
                }
            }
        };
        setLocal();
    }, [title, state.doktors]);

    const handleTimeClick = (date, time) => {
        setSelectedTime({ date, time });
    };
    const [isModalOpen, setIsModalOpen] = useState(false)
    const showModal = () => {
        setIsModalOpen(true)
    }
    const handleOk = () => {
        setIsModalOpen(false)
    }
     const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="w-[100%] min-h-[100vh] bg-layout-bg pt-[20px]">
            <div className="w-4/5 mx-[auto]">
                <DoctorInfo infoData={infoData} />
                <Schedule
                    infoData={infoData}
                    selectedTime={selectedTime}
                    handleTimeClick={handleTimeClick}
                />
                <SelectedTimeButton 
                isModalOpen={isModalOpen}  
                showModal={showModal} 
                handleOk={handleOk}
                selectedTime={selectedTime}
                handleCancel={handleCancel} />
            </div>
        </div>
    );
};

export default About;
