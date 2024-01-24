import Calendar from '../../components/Calendar/Calendar';
import CalendarFilter from '../../components/Calendar/CalendarFilter';

type Props = {};

const CalendarPage = (props: Props) => {
    return (

        <>
            <div className="container main-section">
                <CalendarFilter />
                <Calendar />
            </div>
        </>
    );
};

export default CalendarPage;