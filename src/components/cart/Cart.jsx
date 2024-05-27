import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ item }) => {
    return (
        <>
            <div className="flex flex-col justify-between bg-header-bg rounded-[10px] ">
                <div className="w-[100%] h-[100%]">
                    <img
                        className=" w-full h-full rounded-t-[10px] object-cover"
                        src={item.image}
                        
                        alt="doktorsImage"
                    />
                </div>
                <div className="flex flex-col p-[15px] gap-[10px]">
                    <span>{item.title}</span>
                    <div className="flex gap-[5px] text-[14px]">
                        <span className=" text-gray-bg ">Должность:</span>
                        <span>{item.jobTitle}</span>
                    </div>
                    <div className="flex gap-[5px] text-[14px]">
                        <span className=" text-gray-bg ">Мед. учреждение:</span>
                        <span>{item.honeyInstitution}</span>
                    </div>
                    <div className="flex gap-[5px] text-[14px]">
                        <span className=" text-gray-bg ">Адрес:</span>
                        <span>{item.address}</span>
                    </div>
                    <div className="flex gap-[5px] text-[14px]">
                        <span className=" text-gray-bg ">Специальность:</span>
                        <span>{item.speciality}</span>
                    </div>
                    <Link className=" text-blue-bg mt-[15px]" to={`/about/${item.title}`}>
                        Записаться на прием -&gt;
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Cart;
