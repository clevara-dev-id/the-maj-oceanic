import React from 'react'
import SliderAwesome from './base_component/Slider/SliderAwesome/SliderAwesome'

import './style.scss'
import Breadcrumb from './BreadcrumbComponent'
import HeadingComponent from './HeadingComponent'
import SingleButtonComponent from './SingleButtonComponent'
import CardThreeComponent from './CardThreeComponent'

import ImgBlog from '../assets/img/blog/content.png'
import ImgCard from '../assets/img/home/card-image/1.png'
import ImgCard2 from '../assets/img/home/card-image/2.png'
import ImgCard3 from '../assets/img/home/card-image/3.png'
import ImgHeading from '../assets/img/blog/header.png'


const BlogComponent = props => {
    return(
        <div className="blogs">
            {/* <SliderAwesome properties={props.sliderAwesome} /> */}
            {/* <Breadcrumb page="Explore Raja Ampat" /> */}
            <div className="mt-20 container mx-auto p-32">
                {/* <HeadingComponent properties={props.HeadingComponent} /> */}
                <div className="flex flex-row-reverse border-b border-gray-300 py-5 text-blue-300">
                    <i className="fa fa-twitter ml-5"></i>
                    <i className="fa fa-facebook"></i>
                </div>
                <div className="text-primary-300 py-5">
                    <i className="fa fa-user mr-5"></i>
                    Wisnu Bagus Prasetyo / WBP
                    <i className="fa fa-calendar mx-5"></i>
                    November 29, 2019 | 13:06 WIB
                    <a className="text-blue-300 float-right" href="#"><i className="fa fa-chain"></i></a>
                </div>
                <div>
                    <img className="w-full" src={ImgBlog} alt="blog title" />
                    <div className="text-primary-300 py-5">Caption Text</div>
                    <p className="text-justify text-base">
                        {props.text}
                    </p>
                </div>
            </div>
            <div className="container mx-auto px-4 py-32">
                {/* <HeadingComponent properties={props.HeadingComponentSecond} />
                <CardThreeComponent properties={props.cardThree} />
                <SingleButtonComponent properties={props.buttons} /> */}
            </div>
        </div>
    )
}
export default BlogComponent

BlogComponent.defaultProps = {
    text:"Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id. Amet pariatur veniam non Lorem sunt aliquip. Aute ipsum adipisicing sint proident ad nostrud minim labore ex adipisicing voluptate occaecat aliqua. Dolor ea reprehenderit occaecat dolore sunt. Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum \r\n\r\n Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id. \r\n\r\n Amet pariatur veniam non Lorem sunt aliquip. Aute ipsum adipisicing sint proident ad nostrud minim labore ex adipisicing voluptate occaecat aliqua. Dolor ea reprehenderit occaecat dolore sunt. Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. \r\n\r\n Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. Culpa incididunt veniam sint ex. Deserunt et id anim culpa ullamco nostrud laborum ea consequat est et pariatur eu. Non Lorem sint nulla Lorem dolor et occaecat pariatur magna proident aliqua ut proident id. \r\n\r\n Amet pariatur veniam non Lorem sunt aliquip. Aute ipsum adipisicing sint proident ad nostrud minim labore ex adipisicing voluptate occaecat aliqua. Dolor ea reprehenderit occaecat dolore sunt. Sint anim sunt incididunt aute labore. Cupidatat incididunt aliquip cillum minim sunt reprehenderit nostrud elit qui minim laboris. Aliquip pariatur laborum officia mollit mollit cillum esse. ",
    sliderAwesome:[
        {
            images:{ImgHeading},
            text:"Explore Raja Ampat"
        }
    ],
    HeadingComponent:[
        {
            caption:"THE DESTINATION",
            heading:"Lorem Ipsum Dolor",
            center: 1,
        }
    ],
    HeadingComponentSecond:[
        {
            caption:"THE DESTINATION",
            heading:"Lorem Ipsum Dolor"
        }
    ],
    cardThree:[
        {
            images:{ImgCard},
            heading:"Title 1",
            text:"Dolor cupidatat et minim fugiat voluptate irure. Quis dolore aute sit exercitation aliqua minim quis non qui. Deserunt adipisicing minim nisi adipisicing nisi."
        },
        {
            images:{ImgCard2},
            heading:"Title 2",
            text:"Dolor cupidatat et minim fugiat voluptate irure. Quis dolore aute sit exercitation aliqua minim quis non qui. Deserunt adipisicing minim nisi adipisicing nisi."
        },
        {
            images:{ImgCard3},
            heading:"Title 3",
            text:"Dolor cupidatat et minim fugiat voluptate irure. Quis dolore aute sit exercitation aliqua minim quis non qui. Deserunt adipisicing minim nisi adipisicing nisi."
        },
    ],
    buttons:"Read More"

}