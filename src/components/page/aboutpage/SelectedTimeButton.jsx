import React from "react";
import ModalCom from "./ModalCom";

const SelectedTimeButton = ({
    selectedTime,
    showModal,
    isModalOpen,
    handleOk,
    handleCancel
}) => {
    return (
        <>
            <button
                onClick={showModal}
                disabled={!selectedTime}
                className="mt-[15px] bg-blue-bg p-[10px] text-header-bg rounded-[10px]"
            >
                {selectedTime ? (
                    <>
                        <span>
                            Выбрать {selectedTime.date}, {selectedTime.time}
                        </span>
                    </>
                ) : (
                    <span>Выберите время приема</span>
                )}
            </button>
            <ModalCom showModal={showModal} selectedTime={selectedTime} handleCancel={handleCancel} isModalOpen={isModalOpen} handleOk={handleOk}/>
        </>
    );
};

export default SelectedTimeButton;
