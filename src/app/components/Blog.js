import React from 'react';

export class Blog extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="jumbotron">
                    <h5>Blog!</h5>
                </div>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Tutorial Heading</h5>
                            <small>3 days ago</small>
                        </div>
                        <p className="mb-1">Tutorial Content...</p>
                        <small className="text-muted">References:....</small>
                        <small className="text-muted">GitHub</small>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Tutorial Heading</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Tutorial Content...</p>
                        <small className="text-muted">References:....</small>
                        <small className="text-muted">GitHub</small>
                    </a>
                    <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="mb-1">Tutorial Heading</h5>
                            <small className="text-muted">3 days ago</small>
                        </div>
                        <p className="mb-1">Tutorial Content...</p>
                        <small className="text-muted">References:....</small>
                        <small className="text-muted">GitHub</small>
                    </a>
                </div>
            </div>
        );
    }
}