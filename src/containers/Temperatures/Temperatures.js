import React, { useMemo } from "react";
import { Chart } from "react-charts";

import tempData from "./data.json";

const padZeros = (number) => {
    return `${number}`.padStart(2, 0);
};

function Temperatures(props) {
    console.log({ tempData });
    const parsedData = useMemo(
        () =>
            tempData
                .map((temp) => {
                    const { year, month, day, hour } = temp.group;
                    const dateTime = Date.parse(`${year}-${padZeros(month)}-${padZeros(day)}T${padZeros(hour)}:00`);
                    return { ...temp, dateTime };
                })
                .sort((a, b) => a.dateTime - b.dateTime)
                .reduce((result, temp) => {
                    const { dateTime } = temp;
                    return {
                        ...result,
                        dates: [...(result.dates || []), dateTime],
                        avgTemp: [...(result.avgTemp || []), [dateTime, temp.avg.temperature]],
                        avgHumidity: [...(result.avgHumidity || []), [dateTime, temp.avg.humidity]],
                        minTemp: [...(result.minTemp || []), [dateTime, temp.min.temperature]],
                        minHumidity: [...(result.minHumidity || []), [dateTime, temp.min.humidity]],
                        maxTemp: [...(result.maxTemp || []), [dateTime, temp.max.temperature]],
                        maxHumidity: [...(result.maxHumidity || []), [dateTime, temp.max.humidity]],
                    };
                }, {}),
        [tempData],
    );
    console.log({ parsedData });
    const data = React.useMemo(
        () => [
            {
                label: "Avg. Temperature",
                data: parsedData.avgTemp,
            },
            {
                label: "Min. Temperature",
                data: parsedData.minTemp,
            },
            {
                label: "Max. Temperature",
                data: parsedData.maxTemp,
            },
        ],
        [],
    );

    const axes = React.useMemo(
        () => [
            { primary: true, type: "time", position: "bottom" },
            { type: "linear", position: "left" },
        ],
        [],
    );

    return (
        <div
            style={{
                width: "400px",
                height: "300px",
            }}
        >
            <Chart data={data} axes={axes} />
        </div>
    );
}

export default Temperatures;
