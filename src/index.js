import React from 'react';
import ReactDOM from 'react-dom'
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui comments">
            <h3 className="ui dividing header">Comments</h3>
            <ApprovalCard>
                <h4>Warning!</h4>
                <div>Are you sure you want to do this?</div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    comment="How artistic!"
                    date="Today at 5:42PM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Alex"
                    comment="It's amazing"
                    date="Yesterday at 12:30AM"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Jane"
                    comment="Good job"
                    date="Just now"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Sergio"
                    comment="Awesome"
                    date="5 days ago"
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard>
            <form className="ui reply form">
                <div className="field">
                    <textarea></textarea>
                </div>
                <div className="ui blue labeled submit icon button">
                    <i className="icon edit"></i> Add Reply
                </div>
            </form>
        </div >
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));