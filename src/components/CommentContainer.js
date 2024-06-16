import React from "react";
import Comment from "./Comment";

const commentsData = [
    {
        name: "1Komal",
        text: "Lorem ipsum dolor sit, amet, consectetur adip",
        replies: [
            {
                name: "2Aksa",
                text: "Lorem ipsum dolor sit, amet, consectetur adip"
            },
            {
                name: "3Komal",
                text: "Lorem ipsum dolor sit, amet, consectetur adip",
                replies: [
                    {
                        name: "4Komal",
                        text: "Lorem ipsum dolor sit, amet, consectetur adip",
                        replies: [
                            {
                                name: "5Aksa",
                                text: "Lorem ipsum dolor sit, amet, consectetur adip"
                            }
                        ]
                    }
                ]
            },
            {
                name: "6Aksa",
                text: "Lorem ipsum dolor sit, amet, consectetur adip"
            }
        ]
    },
    {
        name: "7Komal",
        text: "Lorem ipsum dolor sit, amet, consectetur adip"
    },
    {
        name: "8Komal",
        text: "Lorem ipsum dolor sit, amet, consectetur adip"
    },
    {
        name: "9Komal",
        text: "Lorem ipsum dolor sit, amet, consectetur adip"
    },
    {
        name: "10Komal",
        text: "Lorem ipsum dolor sit, amet, consectetur adip"
    }
];

const CommentList = ({commentsData}) => {
    // Do not use index as keys
    return commentsData.map((comment, index) => (
    <div key={index}>
        <Comment data={comment}/>
        {comment.replies && <div className="pl-5 border-l-2">
            <CommentList commentsData={comment.replies}/>
        </div>}
    </div>))
}

const CommentContainer = () => {
    return (
        <div className="mx-5 px-5">
            <h1 className="text-2xl font-bold">Comments:</h1>
            <CommentList commentsData={commentsData}></CommentList>
        </div>
    )
}

export default CommentContainer;