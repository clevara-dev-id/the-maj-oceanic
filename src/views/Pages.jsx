import React, { Component, lazy } from 'react'


const TextHeadingComponent = lazy(() => import('../components/TextHeadingComponent'))
const SliderAwesome = lazy(() => import('../components/base_component/Slider/SliderAwesome/SliderAwesome'))
const TextLargeImageComponent = lazy(() => import('../components/TextLargeImageComponent'))
const CarouselCardTextComponent = lazy(() => import('../components/CarouselCardTextComponent'))
const TextTabComponent = lazy(() => import('../components/TextTabComponent'))
const DeviderComponent = lazy(() => import('../components/DeviderComponent'))
const CardTextImageComponent = lazy(() => import('../components/CardTextImageComponent'))
const SingleButtonComponent = lazy(() => import('../components/SingleButtonComponent'))
const CardTextImageSmallComponent = lazy(() => import('../components/CardTextImageSmallComponent'))
const CardThreeComponent = lazy(()=>import('../components/CardThreeComponent'))
const HeadingComponent = lazy(() => import('../components/HeadingComponent'))
const CarouselThreeComponent = lazy(()=>import('../components/CarouselThreeComponent'))
const CarouselTextComponent = lazy(()=>import('../components/CarouselTextComponent'))
const HeadBackground = lazy(() => import('../components/HeadBackground'))
const Breadcrumb = lazy(()=>import('../components/BreadcrumbComponent'))
const SpesificationComponent = lazy(() => import('../components/SpesificationComponent'))


class Pages extends Component {
    CommonComponent = (args, props, reverse = null, page) => {
        switch (args) {
            case "Breadcrumb":
                return <Breadcrumb page={page} />;
        
            case "SliderAwesome":
                return <SliderAwesome properties={props} reverse={reverse} />;
            
            case "TextLargeImageComponent":
                return <TextLargeImageComponent properties={props} reverse={reverse} />;
            
            case "CarouselCardTextComponent":
                return <CarouselCardTextComponent properties={props} reverse={reverse} />;
            
            case "TextTabComponent":
                return <TextTabComponent properties={props} reverse={reverse} />;
            
            case "TextHeadingComponent":
                return <TextHeadingComponent properties={props} reverse={reverse} />;
            
            case "DeviderComponent":
                return <DeviderComponent properties={props} reverse={reverse} />;
            
            case "CardTextImageComponent":
                return <CardTextImageComponent properties={props} reverse={reverse} />;

            case "SingleButtonComponent":
                return <SingleButtonComponent properties={props} reverse={reverse} />;

            case "CardTextImageSmallComponent":
                return <CardTextImageSmallComponent properties={props} reverse={reverse} />;
            
            case "CardThreeComponent":
                return <CardThreeComponent properties={props} reverse={reverse} />;
            
            case "HeadingComponent":
                return <HeadingComponent properties={props} reverse={reverse} />;
            
            case "CarouselThreeComponent":
                return <CarouselThreeComponent properties={props} reverse={reverse} />;
            
            case "CarouselTextComponent":
                return <CarouselTextComponent properties={props} reverse={reverse} />
            
            case "HeadBackground":
                return <HeadBackground properties={props} reverse={reverse} />

            case "SpesificationComponent":
                return <SpesificationComponent properties={props} reverse={reverse} />
                
            default:
                return console.log(`${args} not found`);
        };
    };

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.component !== this.props.component ||
            nextProps.page !== this.props.page;
    };

    renderComponent = (args, index) => {
        return (
            <div key={args.id || index}>
                {this.CommonComponent(
                    args.name,
                    args.properties,
                    args.reverse,
                    this.props.page
                )}
            </div>
        );
    };

    render() {
        return(
            <div id={this.props.id}>
                {this.props.component.map(this.renderComponent)}
            </div>
        )
    };
};

export default Pages;