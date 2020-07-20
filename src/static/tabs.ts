export interface TabItem {
    id: number;
    label: string;
    images: any;
    text: string;
}

export type Tabs = Array<TabItem>;

const Tab: Tabs = [{
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
}]

export default Tab;