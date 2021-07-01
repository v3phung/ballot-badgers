import React, { memo } from 'react';

export const BallotHeader = memo(({ headerText }) => {

    console.log("rendered ballot header");

    return (
        <header className="header-block">
            <h1 className="page-header">{headerText}</h1>
        </header>
    );
});
