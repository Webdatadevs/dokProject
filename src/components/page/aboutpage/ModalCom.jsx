import React, { useState } from "react";
import { Button, Checkbox, Input, Modal } from "antd";
import TextArea from "antd/es/input/TextArea";
const ModalCom = ({
    showModal,
    isModalOpen,
    handleOk,
    handleCancel,
    selectedTime,
}) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const showModal = () => {
    //     setIsModalOpen(true);
    // };
    // const handleOk = () => {
    //     setIsModalOpen(false);
    // };
    // const handleCancel = () => {
    //     setIsModalOpen(false);
    // };
    const data = JSON.parse(localStorage.getItem("info-data"));
    return (
        <>
            <Modal
                title="Запись к врачу"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                {[data]?.map((item) => (
                    <div key={item.id}>
                        <div className="mt-[10px] flex items-center gap-[5px]">
                            <span className=" text-gray-bg ">Врач:</span>
                            <span className="text-text-bg">{item.title}</span>
                        </div>
                        <div className=" flex items-center gap-[5px] mt-[10px]">
                            <span className=" text-gray-bg ">Дата:</span>
                            <span className="text-text-bg">
                                {selectedTime && selectedTime.date
                                    ? new Date(
                                          selectedTime.date
                                      ).toLocaleDateString("ru-RU", {
                                          year: "numeric",
                                          month: "long",
                                          day: "numeric",
                                      })
                                    : "Дата не выбрана"}
                                ,
                                {selectedTime && selectedTime.time
                                    ? selectedTime.time
                                    : "Дата не выбрана"}
                            </span>
                        </div>
                    </div>
                ))}
                <form className="flex flex-col gap-[15px] mt-[10px]">
                    <label htmlFor="surname">
                        Ваше фамилия *
                        <Input
                            required
                            className=" bg-input-bg "
                            id="surname"
                        />
                    </label>
                    <label htmlFor="name">
                        Ваше имя *
                        <Input required className=" bg-input-bg " id="name" />
                    </label>
                    <div className="flex items-center  gap-[10px]">
                        <label htmlFor="iphone">
                            Номер телефона *
                            <Input
                                required
                                id="iphone"
                                className=" bg-input-bg "
                                size="large"
                                prefix={"+998"}
                            />
                        </label>
                        <label htmlFor="ak">
                            Серия и номер паспорта *
                            <Input
                                required
                                className=" bg-input-bg "
                                id="ak"
                                size="large"
                            />
                        </label>
                    </div>
                    <label htmlFor="textarea">
                        Что вас беспокоит?
                        <TextArea
                            required
                            className=" bg-input-bg "
                            id="textarea"
                            style={{
                                resize: "none",
                            }}
                        />
                    </label>
                    <label htmlFor="chek">
                        <Checkbox id="chek" /> Я согласен(а) с правилами пользования
                    </label>
                    <button className="w-[100%] p-[10px] rounded-[10px] bg-blue-bg text-header-bg ">
                        Записаться
                    </button>
                </form>
            </Modal>
        </>
    );
};
export default ModalCom;
