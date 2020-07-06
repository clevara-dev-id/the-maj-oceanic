import * as React from 'react';
import _ from 'lodash';

interface IconSearchProp {
    fill?: string;
    className?: string;
    size?: React.ReactText;
    onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
};
const IconSearch: React.FC<IconSearchProp> = (props) => {
    return (
        <svg width={props.size} height={props.size} viewBox="0 0 24 24" fill={props.fill} onClick={props.onClick} className={props.className} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M2.73828 10.2908C2.73828 14.4619 6.11965 17.8433 10.2908 17.8433C14.4619 17.8433 17.8433 14.4619 17.8433 10.2908C17.8433 6.11965 14.4619 2.73828 10.2908 2.73828C6.11965 2.73828 2.73828 6.11965 2.73828 10.2908ZM16.4183 10.2908C16.4183 13.6749 13.6749 16.4183 10.2908 16.4183C6.90666 16.4183 4.16328 13.6749 4.16328 10.2908C4.16328 6.90666 6.90666 4.16328 10.2908 4.16328C13.6749 4.16328 16.4183 6.90666 16.4183 10.2908ZM21.0546 20.047C21.3328 20.3252 21.3328 20.7763 21.0546 21.0546C20.7763 21.3328 20.3252 21.3328 20.047 21.0546L16.627 17.6346C16.3487 17.3563 16.3487 16.9052 16.627 16.627C16.9052 16.3487 17.3563 16.3487 17.6346 16.627L21.0546 20.047ZM6.30117 10.1942C6.56351 10.1942 6.77617 9.98155 6.77617 9.71922C6.77617 8.09274 8.09469 6.77422 9.72117 6.77422C9.98351 6.77422 10.1962 6.56155 10.1962 6.29922C10.1962 6.03688 9.98351 5.82422 9.72117 5.82422C7.57002 5.82422 5.82617 7.56807 5.82617 9.71922C5.82617 9.98155 6.03884 10.1942 6.30117 10.1942Z" fill={props.fill}/>
        </svg>
    );
};

IconSearch.defaultProps = {
    size: 24,
};

export default React.memo(IconSearch, (prev, next) => _.isEqual(prev, next));
