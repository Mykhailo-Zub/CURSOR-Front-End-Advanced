import React from "react";
import confirmImg from "../img/confirm.svg";
import downArrowImg from "../img/down-arrow.svg";
import commentImg from "../img/comment.svg";
import shareImg from "../img/share.svg";
import likeImg from "../img/like.svg";
import uploadImg from "../img/upload.svg";

const Post = (props) => {
    return (
        <div className="post-wrapper">
            <div
                className="avatar"
                style={{ backgroundImage: `url(${props.author.photo})` }}
            ></div>
            <div className="content-column">
                <div className="name-row">
                    <div className="name">{props.author.name}</div>
                    <img src={confirmImg} alt="" className="confirm" />
                    <div className="nickname">{props.author.nickname}</div>
                    <div className="dot"></div>
                    <div className="date">{props.date}</div>
                    <img className="more-arrow" src={downArrowImg} alt="" />
                </div>
                <div className="content">{props.content}</div>
                <div className="content-img">
                    <img src={props.image} alt="" />
                </div>
                <div className="social-btns">
                    <div>
                        <img src={commentImg} alt="" />
                        <span>34</span>
                    </div>
                    <div>
                        <img src={shareImg} alt="" />
                        <span>8</span>
                    </div>
                    <div>
                        <img src={likeImg} alt="" />
                        <span>165</span>
                    </div>
                    <div>
                        <img src={uploadImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
