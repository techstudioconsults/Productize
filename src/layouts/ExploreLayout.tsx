import React from 'react';
import { ExploreNavBar } from '../components/navbar/ExploreNavBar';
import { useTokenExists } from '@productize/hooks';

type ExploreProps = {
    children: React.ReactNode; // type children
};

export const ExploreLayout = (props: ExploreProps) => {
    return (
        <>
            <ExploreNavBar isAuth={useTokenExists()} />
            {props.children}
        </>
    );
};

// export default ExploreLayout;
