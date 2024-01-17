import React from "react";

interface PostType {
    userId: number
    id: number
    title: string
}

interface ListType {
    offset: number;
    data: PostType[];
    size: number;
}

export default function List({ offset, data, size }: ListType) {
    return (
        <div className="list">
            {data.map((item: PostType) => {
                return <h1 key={item.id}>{item.id}.  {item.title}</h1>
            })}
        </div>
    )
}
