import React from "react";

const DoctorInfo = ({ infoData }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-[50px]">
            <div className="w-full md:w-1/2 max-w-sm h-auto">
                <img
                    className="w-full h-auto object-cover rounded-2xl"
                    src={infoData.image}
                    alt="doctor"
                />
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-[10px] justify-between ">
                <div>
                    <span className=" text-[32px] ">{infoData.title}</span>
                </div>
                <div className="flex flex-col gap-[5px]">
                    <span className=" text-gray-bg text-[14px]">
                        Должность:
                    </span>
                    <span className="text-[16px]">{infoData.jobTitle}</span>
                </div>
                <div className="flex flex-col gap-[5px]">
                    <span className=" text-gray-bg text-[14px]">
                        Мед. учреждение:
                    </span>
                    <span className="text-[16px]">
                        {infoData.honeyInstitution}
                    </span>
                </div>
                <div className="flex flex-col gap-[5px]">
                    <span className=" text-gray-bg text-[14px]">Адрес:</span>
                    <span className="text-[16px]">{infoData.address}</span>
                </div>
                <div className="flex flex-col gap-[5px]">
                    <span className=" text-gray-bg text-[14px]">
                        Специальность:
                    </span>
                    <span className="text-[16px]">{infoData.speciality}</span>
                </div>
            </div>
        </div>
    );
};

export default DoctorInfo;
