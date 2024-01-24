import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import timeGridPlugin from '@fullcalendar/timegrid';
import trLocale from '@fullcalendar/core/locales/tr';
import { DateSelectArg } from '@fullcalendar/core/index.js';
import { useEffect, useState } from 'react';
import "./Calendar.css";
type Props = {};

const Calendar = (props: Props) => {
    const [events, setEvents] = useState<any>([
        { title: 'Meeting', start: new Date() },
    ]);

    function handleDateSelect(selectInfo: DateSelectArg) {
        let title = prompt('Please enter a new title for your event');
        if (!title) return;
        const calendarApi = selectInfo.view.calendar;
        calendarApi.unselect(); // seçilen tarihten seçimi kaldır
        setEvents([...events, { title: title, ...selectInfo }]);
    }

    useEffect(() => {
        console.log(events);
    }, [events]);

    return (

        <div className="container main-section mt-5">
            <div className="card p-5">
                <FullCalendar
                    locales={[trLocale]}
                    locale="tr"
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,timeGridDay',
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    weekends={true}
                    events={events}
                    select={(arg: any) => handleDateSelect(arg)} // tarihlerden herhangi birisi seçildiğinde tetiklenir.
                    eventContent={renderEventContent} // tarihlerin gösterileceği fonksiyon, aslında bir component
                    eventClick={(arg: any) => console.log(arg)} // tarihin içindeki eventlere tıklandığında tetiklenir
                    eventsSet={(arg: any) => console.log(arg)} // ay,hafta,gün gibi seçimlerde tetiklenir.
                />
            </div>

        </div>
    );
};

function renderEventContent(eventInfo: any) {
    return (
        <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
        </>
    );
}

export default Calendar;