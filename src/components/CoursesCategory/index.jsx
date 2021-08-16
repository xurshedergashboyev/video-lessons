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


const courses = [
    {
        id: 1,
        name: 'Office dasturlari',
        img: [
            {
                first: word,
                second: excel,
                third: powerPoint
            },
        ]
    },
    {
        id: 2,
        name: 'Grafik Dizayn',
        img: [
            {
                first: photoshop,
                second: corelDraw
            },
        ]
    },
    {
        id: 3,
        name: 'IT kurslari',
        img: [
            {
                first: html,
                second: php,
                third: tgBot,
            },
        ]
    },
    {
        id: 4,
        name: 'Buxgalteriya',
        img: [
            {
                first: oneC,
                second: excel
            },
        ]
    },
    {
        id: 5,
        name: '3d kurslari',
        img: [
            {
                first: threeDMax,
            },
        ]
    }
]


const CoursesCategory = () => {
    const [opened, setOpened] = useState(null);

    return (
        <CoursesList>
            <CoursesListHeading>
                Kurslar ro'yhati
            </CoursesListHeading>
            {courses.map((item, index) =>
                <CourseItemCategory open={opened} setOpen={setOpened} name={item.name} key={item.id} index={index}/>
            )}
            <Ellipse src={ellipse} alt="ellipse"/>
        </CoursesList>
    )
}

export default CoursesCategory;