import React from 'react'
import ExamElement from './ExamElement';
import './Exams.css'

type Props = {}

const examsFakeData: any[] = [
    {
        name: "Frontend",
        date: "13-01-2024",
        points: "100.00",
    },
    {
        name: "Herkes İçin Kodlama 1A Değerlendirme Sınavı",
        date: "11-10-2023",
        points: "100.00",
    },
    {
        name: "Microsoft SQL Server",
        date: "05-09-2023",
        points: "68.00",
    },
    {
        name: "Masaüstü Programlama",
        date: "06-09-2023",
        points: "76.00",
    },
];

const Exams = (props: Props) => {
    return (
        <div className='exams'>
            {
                examsFakeData.map((exam, index) => (
                    <ExamElement key={index} name={exam.name} date={exam.date} points={exam.points} />
                ))
            }
        </div>
    )
}

export default Exams