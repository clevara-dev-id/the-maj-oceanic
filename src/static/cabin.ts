import { CarouselCardTextItem } from '../components/base/Carousel/CarouselCardText';
import { CarouselTextItem } from '../components/base/Carousel/CarouselText';
import { CarouselThreeItem } from '../components/base/Carousel/CarouselThree';
import { SliderItem } from '../components/base/Slider/SliderAwesome';


export type CabinProps = {
    /**
     * @typedef `SliderItem[]`
     * @description
     * ```js
     * [{
     *    id?: string | number | undefined;
     *    images: string;
     *    text: string;
     * }];
     * ```
     */
    slider: Array<SliderItem>,
    /**
     * @typedef `CarouselCardTextItem[]`
     * @description
     * ```js
     * [{
     *    id?: string | number | undefined;
     *    images: string;
     *    caption?: string | undefined;
     *    heading: string;
     *    text?: string | undefined;
     *    list?: string[] | undefined;
     *    linkTo?: string | undefined;
     * }]
     * ```
     */
    carousel_card_text: Array<CarouselCardTextItem>,
    /**
     * @typedef `CarouselTextItem[]`
     * @description
     * ```js
     * [{
     *    id?: string | number | undefined;
     *    caption?: string | null | undefined;
     *    heading?: string | null | undefined;
     *    text?: string | null | undefined;
     *    list?: string[] | null | undefined;
     *    image: string;
     *    linkTo?: string | undefined;
     * }]
     * ```
     */
    carousel_text: Array<CarouselTextItem>,
    /**
     * @typedef `CarouselThreeItem[]`
     * @description
     * ```js
     * [{
     *    id?: string | number | undefined;
     *    caption?: string | null | undefined;
     *    caption?: string | null | undefined;
     *    text?: string | null | undefined;
     *    text?: string | null | undefined;
     *    linkTo?: string | undefined;
     * }]
     * ```
     */
    carousel_three: {
        caption?: string | null,
        heading: string,
        data: Array<CarouselThreeItem>,
    }
};

const staticCabin: CabinProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/2.png'),
        text: 'the cabins', 
    }],

    carousel_card_text: [{
        id: 0,
        caption: 'presidential suite 1',
        heading: 'Zheng He',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
        list: [
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
        ],
        images: require('../assets/img/CarouselCard/2.png')
    },{
        id: 1,
        caption: 'presidential suite 2',
        heading: 'Zheng He',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
        list: [
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
            'Lorem ipsum dolor sit amet',
            'Laboris lar aliquip',
        ],
        images: require('../assets/img/CarouselCard/1.png')
    }],

    carousel_text: [{
        id: 1,
        image: require('../assets/img/home/carousel-text/1.png'),
        caption: "vip suite 1",
        heading: "Christopher Columbus",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. Proident irure proident eiusmod voluptate velit aliquip velit est minim cillum consequat excepteur aliquip esse. Quis adipisicing commodo voluptate esse culpa.",
        list: [
            "Lorem ipsum dolor sit amet",
            "Laboris lar aliquip",
            "Lorem ipsum dolor sit amet",
            "Laboris lar aliquip",
        ],
        linkTo: '#',
    },{
        id: 2,
        image: require('../assets/img/home/carousel-text/1.png'),
        caption: "vip suite 2",
        heading: "Christopher Columbus",
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi. Proident irure proident eiusmod voluptate velit aliquip velit est minim cillum consequat excepteur aliquip esse. Quis adipisicing commodo voluptate esse culpa.",
        linkTo: '#',
    }],
    
    carousel_three: {
        caption: 'Delux Suite',
        heading: 'Lorem ipsum dolor',
        data: [{
            id: 0,
            heading: 'Ibn Battuta',
            text: 'Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit',
            image: require('../assets/img/CardThreeImage/1.png'),
            buttonTitle: 'Discover More',
            linkTo: '#',
        },{
            id: 1,
            heading: 'Marco Polo',
            text: 'Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit',
            image: require('../assets/img/CardThreeImage/2.png'),
            buttonTitle: 'Discover More',
            linkTo: '#',
        },{
            id: 2,
            heading: 'James Cook',
            text: 'Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit',
            image: require('../assets/img/CardThreeImage/3.png'),
            buttonTitle: 'discover more',
            linkTo: '#',
        },{
            id: 3,
            heading: 'James Cook',
            text: 'Hemmed by jungle and lulled by the lap of the Indian Ocean, the hotel is rich in island spirit',
            image: require('../assets/img/CardThreeImage/4.png'),
            buttonTitle: 'discover more',
            linkTo: '#',
        }]
    }
};

export default staticCabin;
