import React, { lazy } from 'react'
import { Route } from 'react-router-dom'

// dummy data
import img1 from './assets/img/header/1.png'
import img2 from './assets/img/header/2.png'
import img3 from './assets/img/home/slick/1.svg'
import Img4 from './assets/img/home/carousel-text/1.png'

const Pages = lazy(() => import('./views/Pages'))

const BaseRoute = (props) => {
    return (
        <>
            {props.pages.map((data) => {
                return (
                    <Route key={data.id} exact path={data.path} render={(routeProps) => (<Pages key={data.id} {...routeProps} component={data.components} id={data.page} />)} />
                )
            })}
        </>
    )
}

BaseRoute.defaultProps = {
    pages: [
        {
            id: 1,
            page: "home",
            path: "/",
            components: [
                {
                    id: 1,
                    ordering:1,
                    name: "SliderAwesome",
                    properties:[
                        {
                            id:1,
                            images: `${img1}`,
                            text:"Lorem Ipsum Dolor Sit Amet"
                        },
                        {
                            id:2,
                            images: `${img2}`,
                            text:"Lorem Ipsum Dolor Sit Amet"
                        }
                    ]
                },
                {
                    id: 2,
                    ordering:2,
                    name: "TextLargeImageComponent",
                    properties:[
                        {
                            id:1,
                            caption:false,
                            center:true,
                            text:"Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.",
                            heading:"Lorem Text",
                            images: `${img1}`,
                        }
                    ]
                },
                {
                    id: 3,
                    ordering:3,
                    name: "CarouselCardTextComponent",
                    properties:[
                        {
                            id: 1,
                            images: `${img3}`,
                            caption: "spesification 1",
                            heading: "Text Ipsum 1",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        },
                        {
                            id: 2,
                            images: `${img3}`,
                            caption: "spesification 2",
                            heading: "Lorem Text 2",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        }
                    ]
                },
                {
                    id: 4,
                    ordering:4,
                    name: "TextHeadingComponent",
                    properties:[
                        {
                            id: 1,
                            caption: false,
                            center:true,
                            heading: "VOYAGES",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        }
                    ]
                },
                {
                    id: 5,
                    ordering:5,
                    name: "TextTabComponent",
                    properties:[
                        {
                            id: 1,
                            caption: false,
                            heading: "Tabs 1",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            button_title: "Read More",
                        },
                        {
                            id: 2,
                            caption: false,
                            heading: "Tabs 2",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            button_title: "Read More",
                        }
                    ]
                },
                {
                    id: 6,
                    ordering:6,
                    name: "CardTextImageComponent",
                    properties:[
                        {
                            id: 1,
                            caption: "DINING",
                            heading: "Lorem Ipsum",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            reverse:true,
                            button_title: "Read More",
                        },
                    ]
                },
                {
                    id: 7,
                    ordering:7,
                    name: "DeviderComponent",
                    properties:[
                        {
                            id: 1,
                            caption: "Occasion & Offers",
                            position: "left",
                        },
                    ]
                },
                {
                    id: 8,
                    ordering:8,
                    name: "CardTextImageComponent",
                    properties:[
                        {
                            id: 1,
                            caption: "DINING",
                            heading: "Lorem Ipsum",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            reverse:false,
                            button_title: "Read More",
                            list:[
                                {
                                    text:"lorem ipsum dolor"
                                },
                                {
                                    text:"lorem ipsum dolor sit amet"
                                },
                            ]
                        },
                    ]
                },
                {
                    id: 9,
                    ordering:9,
                    name: "CardTextImageComponent",
                    properties:[
                        {
                            id: 1,
                            caption: "DINING",
                            heading: "Lorem Ipsum",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            reverse:true,
                            button_title: "Read More",
                            list:null,
                        },
                    ]
                },
                {
                    id: 10,
                    ordering:10,
                    name: "DeviderComponent",
                    properties:[
                        {
                            id: 1,
                            caption: "The Destinations",
                            position: "left",
                        },
                    ]
                },
                {
                    id: 11,
                    ordering:11,
                    name: "CardTextImageSmallComponent",
                    properties:[
                        {
                            id: 1,
                            caption: false,
                            heading: "Flores Sea",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            reverse:false,
                            button_title: "Read More",
                            list:null,
                        },
                    ]
                },
                {
                    id: 12,
                    ordering:12,
                    name: "CardTextImageSmallComponent",
                    properties:[
                        {
                            id: 1,
                            caption: false,
                            heading: "Raja Ampat",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            reverse:true,
                            button_title: "Read More",
                            list:null,
                        },
                    ]
                },
                {
                    id: 13,
                    ordering:13,
                    name: "SingleButtonComponent",
                    properties:[
                        {
                            id: 1,
                            text: "Read More",
                        },
                    ]
                },

            ]
        },




        {
            id: 2,
            page: "vessel",
            path: "/vessel",
            components: [
                {
                    id: 1,
                    ordering:1,
                    name: "SliderAwesome",
                    properties:[
                        {
                            id:1,
                            images: `${img1}`,
                            text:"Lorem Ipsum Dolor Sit Amet"
                        },
                        {
                            id:2,
                            images: `${img2}`,
                            text:"Lorem Ipsum Dolor Sit Amet"
                        }
                    ]
                },
                {
                    id: 2,
                    ordering:2,
                    name: "TextLargeImageComponent",
                    properties:[
                        {
                            id:1,
                            caption:false,
                            center:true,
                            text:"Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.",
                            heading:"Lorem Text",
                            images: `${img1}`,
                        }
                    ]
                },
                {
                    id: 2,
                    ordering:2,
                    name: "HeadingComponent",
                    properties:[
                        {
                            id:1,
                            caption:"THE CABIN",
                            center:true,
                            text:"Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.",
                            heading:"Lorem Text",
                            images: `${img1}`,
                        }
                    ]
                },
                {
                    id: 4,
                    ordering:4,
                    name: "CardThreeComponent",
                    properties:[
                        {
                            id: 1,
                            images: `${img3}`,
                            heading: "Text Ipsum 1",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        },
                        {
                            id: 2,
                            images: `${img3}`,
                            heading: "Lorem Text 2",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        },
                        {
                            id: 2,
                            images: `${img3}`,
                            heading: "Lorem Text 3",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        }
                    ]
                },
                {
                    id: 5,
                    ordering:5,
                    name: "SingleButtonComponent",
                    properties:[
                        {
                            id: 1,
                            text: "Read More",
                        },
                    ]
                },
                {
                    id: 6,
                    ordering:6,
                    name: "CarouselCardTextComponent",
                    properties:[
                        {
                            id: 1,
                            images: `${img3}`,
                            caption: "spesification 1",
                            heading: "Text Ipsum 1",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        },
                        {
                            id: 2,
                            images: `${img3}`,
                            caption: "spesification 2",
                            heading: "Lorem Text 2",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        }
                    ]
                },
                {
                    id: 7,
                    ordering:7,
                    name: "HeadingComponent",
                    properties:[
                        {
                            id:1,
                            caption:"THE CABIN",
                            center:true,
                            text:"Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.",
                            heading:"Lorem Text",
                            images: `${img1}`,
                        }
                    ]
                },
                {
                    id: 8,
                    ordering:8,
                    name: "CarouselThreeComponent",
                    properties:[
                        {
                            id: 1,
                            images: `${img3}`,
                            center:true,
                            heading: "Text Ipsum 1",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        },
                        {
                            id: 2,
                            images: `${img3}`,
                            center:true,
                            heading: "Lorem Text 2",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        },
                        {
                            id: 2,
                            images: `${img3}`,
                            center:true,
                            heading: "Lorem Text 3",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        }
                    ]
                },
                {
                    id: 9,
                    ordering:9,
                    name: "CardTextImageComponent",
                    properties:[
                        {
                            id: 1,
                            caption: "DINING",
                            heading: "Lorem Ipsum",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            reverse:true,
                            button_title: "Read More",
                            list:[
                                {
                                    text:"lorem ipsum dolor"
                                },
                                {
                                    text:"lorem ipsum dolor sit amet"
                                },
                            ]
                        },
                    ]
                },

            ]
        },




        {
            id: 2,
            page: "cabin",
            path: "/cabin",
            components: [
                {
                    id: 1,
                    ordering:1,
                    name: "SliderAwesome",
                    properties:[
                        {
                            id:1,
                            images: `${img1}`,
                            text:"Lorem Ipsum Dolor Sit Amet"
                        },
                        {
                            id:2,
                            images: `${img2}`,
                            text:"Lorem Ipsum Dolor Sit Amet"
                        }
                    ]
                },
                {
                    id: 2,
                    ordering:2,
                    name: "CarouselCardTextComponent",
                    properties:[
                        {
                            id: 1,
                            images: `${img3}`,
                            caption: "spesification 1",
                            heading: "Text Ipsum 1",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        },
                        {
                            id: 2,
                            images: `${img3}`,
                            caption: "spesification 2",
                            heading: "Lorem Text 2",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                        }
                    ]
                },
                {
                    id: 3,
                    ordering:3,
                    name: "CarouselTextComponent",
                    reverse:true,
                    properties:[
                        {
                            id: 1,
                            images: `${Img4}`,
                            caption: "VIP Suite",
                            heading: "Text Ipsum 1",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            button_title:"read more",
                        },
                        {
                            id: 2,
                            images: `${Img4}`,
                            caption: "VIP Suite",
                            heading: "Lorem Text 2",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            button_title:"read more",
                        }
                    ]
                },
                {
                    id: 4,
                    ordering:4,
                    name: "HeadingComponent",
                    properties:[
                        {
                            id:1,
                            caption:"DELUXE SUITE",
                            center:true,
                            text:null,
                            heading:"Lorem Ipsum Text",
                            images: `${img1}`,
                        }
                    ]
                },
                {
                    id: 5,
                    ordering:5,
                    name: "CarouselThreeComponent",
                    properties:[
                        {
                            id: 1,
                            images: `${img3}`,
                            center:true,
                            heading: "Text Ipsum 1",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            button_title:"discover more"
                        },
                        {
                            id: 2,
                            images: `${img3}`,
                            center:true,
                            heading: "Lorem Text 2",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            button_title:"discover more"
                        },
                        {
                            id: 3,
                            images: `${img3}`,
                            center:true,
                            heading: "Lorem Text 3",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            button_title:"discover more"
                        },
                        {
                            id: 4,
                            images: `${img3}`,
                            center:true,
                            heading: "Lorem Text 4",
                            text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.",
                            button_title:"discover more"
                        }
                    ]
                },

            ]
        }
    ]
}

export default BaseRoute
