import React from "react";

const Schedule = ({ infoData, selectedTime, handleTimeClick }) => {
    return (
        <>
            {infoData.schedule?.map((item, index) => (
                <div key={index} className="mt-[10px]">
                    <span>
                        {new Date(item.date).toLocaleDateString("ru-RU", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                        })}
                    </span>
                    <div className="mt-[10px] flex items-center gap-[10px]">
                        {item.times.map((el, idx) => (
                            <button
                                onClick={() => handleTimeClick(item.date, el)}
                                key={idx}
                                className={`p-[10px] text-gray-bg ${
                                    selectedTime?.date === item.date &&
                                    selectedTime?.time === el
                                        ? " bg-blue-bg text-header-bg  "
                                        : "bg-blue-btn"
                                }`}
                            >
                                {el}
                            </button>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
};

export default Schedule;
