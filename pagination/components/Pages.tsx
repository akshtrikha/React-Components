import React from "react";

interface PageDetails {
    currentPage: number;
    offset: number;
    setOffset: any;
    size: number;
    totalSize: number;
}

export default function Pages({
    currentPage,
    offset,
    setOffset,
    size,
    totalSize,
}: PageDetails) {
    // return <h1> these are the pages </h1>
    const prevPage = () => {
        setOffset(offset - size);
    };

    const nextPage = () => {
        setOffset(offset + size);
    };

    return (
        <>
            <button
                style={{ marginRight: "5px", marginLeft: "10px" }}
                onClick={prevPage}
                disabled={offset == 0 ? true : false}
            >
                Previous
            </button>
            <span style={{ margin: "5px" }}>{currentPage}</span>
            <button style={{ marginLeft: "5px" }} onClick={nextPage} disabled={offset == totalSize - size ? true : false}>
                Next
            </button>
        </>
    );
}
