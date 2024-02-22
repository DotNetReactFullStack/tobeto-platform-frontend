import React from "react";
import "./ActivityMap.css";

type DayData = {
  date: string;
  count: number;
};

interface Props {
  // data: DayData[];
}

const generateActivityData = () => {
  const today = new Date();

  //Son 7*53=371 gün için başlangıç tarihi;
  const StartDate = new Date(today);
  StartDate.setDate(today.getDate() - 370);

  const data: DayData[] = [];

  //Tarih ve o tarihe ait aktivite sayısı üretildi;
  while (StartDate <= today) {
    const dateStr = StartDate.toISOString().split("T")[0];
    const count = Math.floor(Math.random() * 40); //0-41 arası (4 dahil) bir tam sayı elde edildi.
    data.push({ date: dateStr, count });
    StartDate.setDate(StartDate.getDate() + 1);
  }

  return data;
};

// generateActivityData fonksiyonu ile rastgele veri oluşturduk.
const activityData = generateActivityData();

const ActivityMap: React.FC<Props> = () => {
  // Verileri haftalara göre gruplandırdık;
  const weeklyData: DayData[][] = [];
  for (let i = 0; i < activityData.length; i += 7) {
    weeklyData.push(activityData.slice(i, i + 7));
  }

  return (
    <div className="activity-map-container">
      <div className="activity-map-element">
        {weeklyData.map((week, weekIndex) => (
          <div key={weekIndex} className="activity-map-week">
            {week.map((day, dayIndex) => (
              <div
                key={dayIndex}
                className={
                  "activity-map-circle contribution-count-" + day.count
                }
                title={day.date + " - " + day.count + " contributions"}
              ></div>
            ))}
          </div>
        ))}
      </div>
      <div className="activity-map-element-footer">
        <div className="activity-map-footer-info">
          <div
            key={1}
            className="activity-map-footer-info-box contribution-level-0"
            title={"0 Aktivite"}
          ></div>
          <div
            key={2}
            className="activity-map-footer-info-box contribution-level-1"
            title={"1-9 Aktivite"}
          ></div>
          <div
            key={3}
            className="activity-map-footer-info-box
            contribution-level-2"
            title={"10-19 Aktivite"}
          ></div>
          <div
            key={4}
            className="activity-map-footer-info-box
            contribution-level-3"
            title={"20-29 Aktivite"}
          ></div>
          <div
            key={5}
            className="activity-map-footer-info-box
            contribution-level-4"
            title={"30+ Aktivite"}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ActivityMap;
