import React, { ImgHTMLAttributes } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { isEqual } from 'lodash';
import staticSailing, { SailingSoonProps } from '../static/sailing';

/** Component */
const HeadingText = React.lazy(() => import('../components/base/Heading/HeadingText'));

/**
 * ## Sailing Soon
 *
 * @param {SailingSoonProps} props
 * @see SailingSoonProps
 * @returns {JSX.Element}
 */
const SailingSoon = (props: SailingSoonProps): JSX.Element => {
    /**
     * Image Sailing Soon
     */
    const MemoImage = React.useMemo<(params: ImgHTMLAttributes<HTMLImageElement>) => JSX.Element>(
        () => (params) => (
            <img {...params} />
        ),
    [props]);

    /**
     * Heading Text
     */
    const MemoHeadingText = React.useMemo(
        () => (
            <HeadingText
                headingClassName="capitalize text-left"
                heading={props.head}
                textClassName="w-full text-left font-light"
                text={props.text}
            />
        ),
    [props.head, props.text]);

    /**
     * Button Link
     */
    const MemoButtonLink = React.useMemo<(params: LinkProps) => any>(
        () => (params) => (
            <Link {...params} />
        ),
    []);

    return (
        <div id="sailing-soons">
            <section className="flex flex-col lg:flex-row xl:flex-row md:flex-row justify-center md:justify-between items-center lg:px-20 py-40 xl:pt-64 lg:pt-64">
                <div className="container relative mx-auto w-4/5 sm:max-w-md md:max-w-sm lg:max-w-md xl:max-w-lg lg:mr-12 md:mr-6 md:px-4">
                    {MemoImage({
                        className: "bg-center h-full w-full",
                        src: props.images,
                        alt: "primary-sailing-soon"
                    })}
                    {MemoImage({
                        className: "bg-center absolute w-2/3 top-0 left-0 -ml-20 lg:-ml-24 xl:-ml-32",
                        src: require("../assets/img/sailing/2.png"),
                        alt: "secondary-sailing-soon"
                    })}
                </div>

                <div className="container mx-auto mt-20 w-4/5 max-w-full md:max-w-lg sm:max-w-md">
                    {MemoHeadingText}

                    <div className="mt-8 flex flex-col items-start xl:flex-row lg:flex-row md:flex-row">
                        {MemoButtonLink({
                            children: "Contact Us",
                            className: "body-1 font-light block lg:inline-block xl:inline-block mb-4",
                            to: "/contact-us",
                            replace: true,
                        })}

                        <span className="separator mx-8 hidden md:inline-block lg:inline-block xl:inline-block">|</span>

                        {MemoButtonLink({
                            children: "Return to the Homepage",
                            className: "body-1 font-light block lg:inline-block xl:inline-block",
                            to: "/",
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

SailingSoon.defaultProps = staticSailing;
export default React.memo(SailingSoon, (prevProps, nextProps) => isEqual(prevProps, nextProps));
