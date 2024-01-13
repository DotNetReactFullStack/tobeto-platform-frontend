import React from 'react'
import './ExamElement.css'

type Props = {
    name: string;
    date: string;
    points: string;
}

const ExamElement = ({ name, date, points }: Props) => {
    return (
        <div className="profile-exam-element">
            <div className="profile-exam-element-header">
                <div className="exam-element-name number-of-lines-2 text-length-20ch">
                    {name}
                </div>
                <div className="exam-element-date">
                    {date}
                </div>
            </div>
            <div className="exam-element-body">
                <div className="exam-element-points">
                    {points}
                </div>
            </div>
        </div>
    )
}

export default ExamElement