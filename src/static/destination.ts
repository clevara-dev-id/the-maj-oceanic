import { SliderItem } from "../components/base/Slider/SliderAwesome";
import { CarouselCardTextItem } from "../components/base/Carousel/CarouselCardText";
import { CardTextImageSmallItem } from "../components/base/Card/CardTextImage/CardTextImageSmall";
import { TabItem } from "../components/base/Tab/Tabs";

interface TabsCardTextImageSmall extends CardTextImageSmallItem {
    label: string,
};

export type DestinationProps = {
    slider: SliderItem[],
    
    carousel_card_text: CarouselCardTextItem[],
    
    tabs_card_text_image_small: TabsCardTextImageSmall[],
};

const staticDestination: DestinationProps = {
    slider: [{
        id: 0,
        images: require('../assets/img/header/12.png'),
        text: 'destination'
    }],

    carousel_card_text: [{
        id: 0,
        caption: 'Flores Sea 1',
        heading: 'Title',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.\n\nLaboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
        images: require('../assets/img/CarouselCard/6.png'),
        linkTo: '#',
    },{
        id: 1,
        caption: 'Flores Sea 2',
        heading: 'Title',
        text: 'Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.\n\nLaboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis.',
        images: require('../assets/img/CarouselCard/5.png'),
        linkTo: '#',
    }],

    tabs_card_text_image_small: [{
        id: 0,
        label: "Flores Sea",
        heading: 'Lorem Ipsum Dolor',
        text: 'Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip.',
        image: require('../assets/img/CardTextImageSmall/1.png'),
        linkTo: "#",
    },{
        id: 1,
        label: "Raja Ampat",
        heading: 'Title 3',
        text: 'Sunt excepteur laborum reprehenderit duis sunt fugiat eu dolore. Laborum mollit nostrud quis proident esse cillum sint laboris in deserunt eu consectetur ad adipisicing. Mollit nulla in quis nisi elit occaecat eu dolore aliquip.',
        image: require('../assets/img/CardTextImageSmall/2.png'),
        linkTo: "#",
    }],
};

export default staticDestination;