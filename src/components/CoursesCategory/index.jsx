import {useState} from "react";
import {
    CoursesList,
    CoursesListHeading, Ellipse,
} from "./style";
// images && icons
import CourseItemCategory from "../CourseItemCategory";
import ellipse from '../../assets/images/elipse.png';

import word from '../../assets/images/layers/Word.png';
import powerPoint from '../../assets/images/layers/Power Point.png';
import excel from '../../assets/images/layers/Exsel.png';
import oneC from '../../assets/images/layers/1c.png';
import corelDraw from '../../assets/images/layers/Coreldraw.png';
import html from '../../assets/images/layers/HTML-CSS.png';
import php from '../../assets/images/layers/PHP-.png';
import tgBot from '../../assets/images/layers/Tg.png';
import photoshop from '../../assets/images/layers/Photoshop.png';
import threeDMax from '../../assets/images/layers/3d max.png';
import bem from '../../assets/images/layers/BEM.png';
import telegram from '../../assets/images/layers/Tg-b.png'

const courses = [
    {
        id: 1,
        name: 'Office dasturlari',
        imgDetails:
            [
                {img: word, name: 'Office Word'},
                {img: excel, name: 'Office Excel'},
                {img: powerPoint, name: 'Office PowerPoint'}
            ],
    },
    {
        id: 2,
        name: 'Grafik Dizayn',
        imgDetails:
            [
                {img: photoshop, name: 'Adobe Photoshop'},
                {img: corelDraw, name: 'CorelDraw'}
            ],

    },
    {
        id: 3,
        name: 'IT kurslari',
        imgDetails:
            [
                {img: telegram, name: 'Telegram Business'},
                {img: html, name: 'HTML & CSS'},
                {img: php, name: 'PHP'},
                {img: tgBot, name: 'Telegram Bot'},
                {img: bem, name: 'BEM Metodi'}
            ]
    },
    {
        id: 4,
        name: 'Buxgalteriya',
        imgDetails:
            [
                {img: oneC, name: '1c'},
                {img: excel, name: 'Office Excel'}
            ],

    },
    {
        id: 5,
        name: '3d kurslari',
        imgDetails:
            [
                {img: threeDMax, name: '3d Max'},
            ],

    }
]


const CoursesCategory = () => {
    const [opened, setOpened] = useState(null);

    return (
        <CoursesList>
            <CoursesListHeading>
                Kurslar ro'yxati
            </CoursesListHeading>
            {courses.map((item, index) =>
                <CourseItemCategory img={item.imgDetails} open={opened} setOpen={setOpened} name={item.name}
                                    key={item.id} index={index}/>
            )}
            <Ellipse src={ellipse} alt="ellipse"/>
        </CoursesList>
    )
}

export default CoursesCategory;