import React from "react";

const Post = (props) => {
    return (
        <div class="post-wrapper">
            <div
                class="avatar"
                style={{ backgroundImage: `url(${props.author.photo})` }}
            ></div>
            <div class="content-column">
                <div className="name-row">
                    <div className="name">{props.author.name}</div>
                    <img src="" alt="" className="confirm" />
                    <div className="nickname">{props.author.nickname}</div>
                    <div className="dot"></div>
                    <div className="date">{props.date}</div>
                    <div className="more-arrow"></div>
                </div>
                <div className="content">{props.content}</div>
                <div className="content-img">{props.image}</div>
            </div>
        </div>
    );
};

export default Post;
