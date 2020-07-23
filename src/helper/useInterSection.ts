import * as React from 'react';

const useInterSection: (ref: any, rootMargin?: string) => boolean = 
    (ref, rootMargin='0px') => {
        // state and setter  for storing is visible
        const [isIntersecting, setIntersecting] = React.useState<boolean>(false);

        React.useEffect(() => {
            const _observer = new IntersectionObserver(
                ([entry]) => {
                    setIntersecting(entry.isIntersecting);
                },{
                    rootMargin
                }
            );
            
            if (ref.current) 
                _observer.observe(ref.current);
            
            return () => {
                _observer.unobserve(ref.current);
            };
        }, []);

        return isIntersecting;
    };

export default useInterSection;
