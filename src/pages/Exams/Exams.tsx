import React from 'react'
import './Exams.css'
import ExamElement from '../../components/Exam/ExamElement'
import Banner from '../../components/Banner/Banner';
import ExamDetailModal from '../../components/Exam/ExamDetailModal';
import Pagination from '../../components/Pagination/Pagination';

type Props = {}

const examFakeData: any[] = [
    {
        title: "Herkes için Kodlama 5A Değerlendirme Sınavı",
        examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
        subTitle: "Herkes İçin Kodlama - 1A",
        duration: "45 Dakika",
    },
    {
        title: "Herkes için Kodlama 5B Değerlendirme Sınavı",
        examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
        subTitle: "Herkes İçin Kodlama - 1B",
        duration: "45 Dakika",
    },
    {
        title: ".NET 1A Değerlendirme Sınavı",
        examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
        subTitle: ".Net 1A",
        duration: "60 Dakika",
    },
    {
        title: ".NET 1B Değerlendirme Sınavı",
        examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
        subTitle: ".Net - 1B",
        duration: "60 Dakika",
    },
    {
        title: "Java 1A Değerlendirme Sınavı",
        examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
        subTitle: "Java - 1A",
        duration: "60 Dakika",
    },
    {
        title: "Java 1B Değerlendirme Sınavı",
        examStatusImageUrl: "/assets/images/exam-status-completed-icon.svg",
        subTitle: "Java - 1B",
        duration: "60 Dakika",
    },
];

const Exams = (props: Props) => {
    return (
        <>
            <Banner bannerTitle='Sınavlarım' />
            <div className='exams-page container main-section'>
                {
                    examFakeData.map(({ title, examStatusImageUrl, subTitle, duration }, index) => (
                        <>
                            <ExamElement
                                key={index}
                                title={title}
                                examStatusImageUrl={examStatusImageUrl}
                                subTitle={subTitle}
                                duration={duration}
                            />
                            <ExamDetailModal />
                        </>
                    ))
                }
                <Pagination />
            </div>
        </>
    )
}

export default Exams