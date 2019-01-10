import React from 'react';

const CommentDetail = props => {
    return (
        <div className="comment">
            <a className="avatar" href="/">
                <img src={props.avatar} alt="avatar" /></a>
            <div className="content">
                <a className="author" href="/">{props.author}</a>
                <div className="metadata">
                    <span className="date">{props.date}</span>
                </div>
                <div className="text">{props.comment}</div>
                <div className="actions">
                    <a className="reply" href="/">Reply</a>
                </div>
            </div>
        </div>
    );
};

export default CommentDetail;