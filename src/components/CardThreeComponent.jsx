import React, {lazy, memo} from 'react';

const CardThree = lazy(() => import('./base/Card/CardImage/CardImageThree/CardThree'));

const CardThreeComponent = props => {
    return(
        <div className="container mx-auto px-4 pt-16 pb-8">
            <CardThree {...props} />
        </div>
    );
};

export default memo(CardThreeComponent);