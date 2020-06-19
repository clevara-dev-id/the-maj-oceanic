import React, { lazy, Fragment } from 'react'
import Breadcrumb from '../components/BreadcrumbComponent'
import TextLargeImageComponent from '../components/TextLargeImageComponent'
import CardTextImageSmallComponent from '../components/CardTextImageSmallComponent'
import { BaseUrlImage } from '../helper/axios';
import AwesomeSlider from 'react-awesome-slider';
import CarouselThreeComponent from '../components/CarouselThreeComponent';

const CoreStyles = require('react-awesome-slider/src/core/styles.scss');
const AnimationStyles = require('react-awesome-slider/src/styled/fold-out-animation/fold-out-animation.scss');

type T = {
    imageItemClassName?: string | null;

    isStaticImage?: boolean;

    awesome_sliders: Array<awesome_slider>;
};

const DefaultProps = {
    awesome_sliders: [{
        id: 1,
        cabin_name: "Zheng He Cabin",
        slug: "Zheng-He-Cabin",
        cabin_header_image: "cabins/April2020/zhGBRF0Mk1NMLiduTgSS.png",
        caption: "Presidential Suite",
        heading: "Lorem Dulur sit Amit",
        text: "Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.",
        images: "cabins/April2020/E944ScEZVpvCbOoozYWz.png",
        created_at: "2020-04-28 21:57:51",
        updated_at: "2020-04-28 21:57:51"
    }],
    // isStaticImage: false
};

export default class Cabin extends React.Component<T, {}> {
    readonly state: any;
    private image?: string;

    static defaultProps: T = DefaultProps;

    _renderItemSlider = (data: awesome_slider, index: number): JSX.Element => {
        let image = this.props.isStaticImage
            ? data.images : BaseUrlImage + data.cabin_header_image;
        return (
            <div key={index}
                className={`${this.props.imageItemClassName} z10`}
                data-src={image}>
                    <h1 className="
                        text-white
                        text-center
                        max-w-2xl
                        capitalize
                    ">
                        {data.cabin_name}
                    </h1>
            </div>
        );
    };
    
    render(): JSX.Element {

        // const componentFirst = [props.components[0]]
        // const componentSecond = [props.components[1]]
        return (
            <div id="cabin">
                <AwesomeSlider 
                    animation="foldOutAnimation"
                    bullets={false}
                    cssModule={[CoreStyles, AnimationStyles]}
                    infinite={false}
                    className="lg:h-screen awesome-slider aws-btn">
                    {this.props.awesome_sliders.map(this._renderItemSlider)}
                </AwesomeSlider>

                {/* <Breadcrumb page={props.properties[0].slug} />
                <TextLargeImageComponent properties={props.properties} />
                <CardTextImageSmallComponent properties={componentFirst} />
                <CardTextImageSmallComponent properties={componentSecond} />
                <CarouselThreeComponent properties={props.carThree} /> */}
            </div>
        )
    };
};

// Cabin.defaultProps = {
//     awesome_sliders: [{
//         id: 1,
//         cabin_name: "Zheng He Cabin",
//         slug: "Zheng-He-Cabin",
//         cabin_header_image: "cabins/April2020/zhGBRF0Mk1NMLiduTgSS.png",
//         caption: "Presidential Suite",
//         heading: "Lorem Dulur sit Amit",
//         text: "Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.",
//         images: "cabins/April2020/E944ScEZVpvCbOoozYWz.png",
//         created_at: "2020-04-28 21:57:51",
//         updated_at: "2020-04-28 21:57:51"
//     }],
//     isStaticImage: true
// };


interface awesome_slider {
    id: number;

    cabin_name: string;

    slug: string;

    cabin_header_image: string;

    caption?: string;
    
    heading: string;

    text?: string;

    images: string;

    created_at?: string;

    updated_at?: string;
};

// Cabin.defaultProps = {
//     properties: [
//         {
//             id: 1,
//             cabin_name: "Zheng He Cabin",
//             slug: "Zheng-He-Cabin",
//             cabin_header_image: "cabins/April2020/zhGBRF0Mk1NMLiduTgSS.png",
//             caption: "Presidential Suite",
//             heading: "Lorem Dulur sit Amit",
//             center: 1,
//             text: "Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.",
//             images: "cabins/April2020/E944ScEZVpvCbOoozYWz.png",
//             created_at: "2020-04-28 21:57:51",
//             updated_at: "2020-04-28 21:57:51"
//         }
//     ],
//     components: [
//         {
//             id: 1,
//             cabin_id: 1,
//             heading: "Duis commodo",
//             text: "Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.",
//             images: "cabin-components/April2020/1TGlefVPxVRYfmAK7Lwk.png",
//             reverse: 0,
//             created_at: "2020-04-28 22:18:02",
//             updated_at: "2020-04-28 22:18:02"
//         },
//         {
//             id: 2,
//             cabin_id: 1,
//             heading: "Aute culpa",
//             text: "Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip.",
//             images: "cabin-components/April2020/U4CCdwCXCUSYH80Em4H1.png",
//             reverse: 1,
//             created_at: "2020-04-28 22:18:38",
//             updated_at: "2020-04-28 22:18:38"
//         }
//     ],
//     carThree: [
//         {
//             id: 28,
//             component_id: 22,
//             caption: null,
//             heading: "Lorem Text",
//             text: "Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.",
//             center: 1,
//             reverse: 0,
//             position: "left",
//             images: "properties\\April2020\\RbQeqVxmKKo2ydUJkBRI.png",
//             button_title: null,
//             link: null,
//             list: null,
//             created_at: null,
//             updated_at: "2020-04-20 16:30:17"
//         },
//         {
//             id: 29,
//             component_id: 22,
//             caption: null,
//             heading: "Lorem Text",
//             text: "Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.",
//             center: 1,
//             reverse: 0,
//             position: "left",
//             images: "properties\\April2020\\vJQLe1bfHVoJxGb6LAMG.png",
//             button_title: null,
//             link: null,
//             list: null,
//             created_at: null,
//             updated_at: "2020-04-20 16:30:41"
//         },
//         {
//             id: 30,
//             component_id: 22,
//             caption: null,
//             heading: "Lorem Text",
//             text: "Exercitation cupidatat laboris ea pariatur irure tempor consectetur duis. Id excepteur nisi consequat labore aliqua pariatur ad dolor. Exercitation proident Lorem non proident incididunt sit.",
//             center: 1,
//             reverse: 0,
//             position: "left",
//             images: "properties\\April2020\\b56aOOBPoGBatuOF7bZs.png",
//             button_title: null,
//             link: null,
//             list: null,
//             created_at: null,
//             updated_at: "2020-04-20 16:31:02"
//         }
//     ]
// }