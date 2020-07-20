import { SliderItem } from '../components/base/Slider/SliderAwesome';

type slider_awesome = {
    slider: Array<SliderItem>;
};

export interface ContactProps extends slider_awesome {
    title: string;
    text?: string;
    list: Array<{id: number; title: string; value: string}>;
};

const staticDataContact: ContactProps = {
    slider: [{
        id: 0,
        text: "CONTACT US",
        images: require("../assets/img/contact/2.png"),
    }],
    title: "Contact Us",
    text: "For more information, enquiries or bookings, contact The Maj Oceanic here",
    list: [{
        id: 0,
        title: "call center",
        value: "+62 5126 83129",
    },{
        id: 1,
        title: "email",
        value: "oceanic@mail.com",
    },{
        id: 2,
        title: "booking",
        value: "themajoceanic@mail.com",
    },{
        id: 3,
        title: "press",
        value: "pr@oceanic.com",
    }]
};

export default staticDataContact;
