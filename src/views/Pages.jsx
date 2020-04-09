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
const  HeadBackground = lazy(() => import('../components/HeadBackground'))


class Pages extends Component {
    CommonComponent(args, props, reverse){
        if(args === 'SliderAwesome'){
            return(
                <SliderAwesome properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'TextLargeImageComponent'){
            return(
                <TextLargeImageComponent properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'CarouselCardTextComponent'){
            return(
                <CarouselCardTextComponent properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'TextTabComponent'){
            return(
                <TextTabComponent properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'TextHeadingComponent'){
            return(
                <TextHeadingComponent properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'DeviderComponent'){
            return(
                <DeviderComponent properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'CardTextImageComponent'){
            return(
                <CardTextImageComponent properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'SingleButtonComponent'){
            return(
                <SingleButtonComponent properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'CardTextImageSmallComponent'){
            return(
                <CardTextImageSmallComponent properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'CardThreeComponent'){
            return(
                <CardThreeComponent properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'HeadingComponent'){
            return(
                <HeadingComponent properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'CarouselThreeComponent'){
            return(
                <CarouselThreeComponent properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'CarouselTextComponent'){
            return(
                <CarouselTextComponent properties={props} reverse={reverse||null} />
            )
        }
        if(args === 'HeadBackground'){
            return(
                <HeadBackground {...props} />
            )
        }
    }
    render(){
        return(
            <div id={this.props.id}>
                {this.props.component.map((data, i) => {
                    return(
                        <div key={data.id || i}>
                            {this.CommonComponent(data.name, data.properties, data.reverse)}
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Pages