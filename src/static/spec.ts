import { SliderItem } from '../components/base/Slider/SliderAwesome';

/**
 * @property Spesification View
 * 
 * @param heading ` string `
 * 
 * @param text ` string `
 * 
 * @param images ` string `
 * 
 * @param slider ` Array<{id: number, text: string, images: string}> `
 * 
 * @param tabs ` Array<{id: number, label: string, images: string, width?: number | string, text: string}> `
 * 
 * @param table `{ head: string, data: Array<{id: number, title: string, value: string | Array<string>}>}`
 */

export type SpecProps = {
    slider: SliderItem[],

    heading: string,
    text: string,
    images: string,

    tabs: Array<{
        id: React.ReactText;
        label: string;
        images: string;
        width?: number | string;
        text?: string;
    }>,

    table: {
        head: string
        data: Array<{
            id: number;
            title: string;
            value: string;
        }>
    }
}

const staticSpecProps: SpecProps = {
    slider: [{
        id: 0,
        images: require("../assets/img/header/6.png"),
        text: "Spesification",
    }],

    heading: "The future of travel, on the traditions of the past",
    text: " One of our missions is to preserve and introduce to the world the glory of the Indonesian maritime history. The MAJ Oceanic is hand built and handcrafted in Bira, Sulawesi based on the heritage of ancestral knowledge.",

    images: require("../assets/img/spesification/1.png"),

    tabs: [{
        id: 0,
        label: "Main Deck",
        images: require("../assets/img/spesification/LayoutDeck-1.png"),
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi.",
    },{
        id: 1,
        label: "Lower Deck",
        images: require("../assets/img/spesification/LayoutDeck-2.png"),
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi.",
    },{
        id: 2,
        label: "Bridge Deck",
        images: require("../assets/img/spesification/LayoutDeck-3.png"),
        text: "Laboris laborum aliquip aliquip incididunt adipisicing consequat pariatur duis cupidatat incididunt excepteur dolore laborum sit. Amet duis incididunt voluptate nostrud qui sint labore non excepteur. Cillum anim labore irure consequat fugiat dolore duis culpa anim cupidatat elit irure. Nulla nostrud elit quis nostrud sit cupidatat aute sit excepteur nisi.",
    }],

    table: {
        head: "Table Of Sepesification",

        data: [{
            id: 1,

            title: "Build",

            value: "Bira, Sulawesi, Indonesia in 2019"
        },{
            id: 2,

            title: "Type",

            value: "Traditional gaft-rigged timber phinisi (ironwood & teak)"
        },{
            id: 3,

            title: "Length (Total)",

            value: "45 m / 147 ft"
        },{
            id: 4,

            title: "Beam",

            value: "10 m / 32 ft"
        },{
            id: 5,

            title: "Draf",

            value: ""
        },{
            id: 6,

            title: "Hull",

            value: ""
        },{
            id: 7,

            title: "Cabins | Guests | No Of Crew",

            value: "7| |"
        },{
            id: 8,

            title: "Max. Cruising Speed",

            value: "12 knots"
        },{
            id: 9,

            title: "Engine Model",
            
            value: "Yanmar marine diesel 6AYM-WST 659HP/1900RPM (sea water cooling) 5 blade bronze propellers"
        },{
            id: 10,

            title: "Generator",
            
            value: "Yanmar marine diesel 6AYM-WST 659HP/1900RPM (sea water cooling) 5 blade bronze propellers"
        },{
            id: 11,

            title: "Navigator",

            value: "Garmin Aquamap 1252"
        },{
            id: 12,

            title: "Sports Area / Platform",

            value: "35 m2"
        },{
            id: 13,

            title: "Watersports Equipment",

            value: "6 Paddle board\n6 Sea Kayaks\nFishing Gear\nComplete diving equipment\nComplete Snorkeling equipment"
        }]
    }
};

export default staticSpecProps;
