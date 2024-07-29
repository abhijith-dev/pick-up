import React from "react";

export const GameBoard = (props:any) => {
    const Component = React.lazy(()=>import('../Layouts/GameBoard'));
    return (
        <React.Suspense>
            <Component {...props} />
        </React.Suspense>
    )
};

export const Controllers = (props:any) => {
    const Component = React.lazy(()=>import('../Layouts/Controllers'));
    return (
        <React.Suspense>
            <Component {...props} />
        </React.Suspense>
    )
};