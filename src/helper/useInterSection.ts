import * as React from 'react';

const useInterSection: (ref: any, rootMargin?: string) => boolean = 
    (ref, rootMargin='0px') => {
        // state and setter  for storing is visible
        const [isIntersecting, setIntersecting] = React.useState<boolean>(false);

        React.useEffect(() => {
            const { current: refCurrent } = ref;
            const _observer = new IntersectionObserver(
                ([entry]) => {
                    setIntersecting(entry.isIntersecting);
                },{
                    rootMargin
                }
            );
            
            if (refCurrent) 
                _observer.observe(refCurrent);
            
            return () => {
                _observer.unobserve(refCurrent);
            };
        }, [ref, rootMargin]);

        return isIntersecting;
    };

export default useInterSection;
