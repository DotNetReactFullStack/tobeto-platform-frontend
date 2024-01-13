import React from 'react'
import ExamElement from './ExamElement';
import './Exams.css'

type Props = {
    data: any[];
}


const Exams = (props: Props) => {
    return (
        <div className='exams'>
            {
                props.data.map((exam, index) => (
                    <ExamElement key={index} name={exam.name} date={exam.date} points={exam.points} />
                ))
            }
        </div>
    )
}

export default Exams