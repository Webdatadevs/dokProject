import React from "react";
import footerConstEL from "./footerObj";

const Footer = () => {
    return (
        <>
            <div className="w-[100%] bg-blue-bg py-[15px]">
                <div className="w-[80%] mx-[auto]">
                    <div>
                        <ul className="flex items-center justify-between p-[20px]">
                            {footerConstEL.map((item) => (
                                <li key={item.id} className=" text-header-bg ">
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                        <div className="w-[100%] h-[2px] bg-header-bg my-[20px]"></div>
                        <div className="flex items-center justify-between mt-[15px]">
                            <div className=" text-[24px] font-[400] ">
                                <span className=" bg-header-bg py-[4px] pl-[10px] rounded-[4px] text-blue-bg ">
                                    Ло
                                </span>
                                <span className=" text-header-bg ">готип</span>
                            </div>
                            <span className=" text-header-bg ">© 2010-2023 Все права защищены</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
