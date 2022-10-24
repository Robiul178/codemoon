import React from 'react';

const AnotherPage = () => {
    return (
        <div>
            <h1>This is Another page!</h1>
            <div>
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 90 }}>90%</div>
            </div>
            <div>
                <div className="stack">
                    <div className="text-center border border-base-content card w-36 bg-base-100">
                        <div className="card-body">R</div>
                    </div>
                    <div className="text-center border border-base-content card w-36 bg-base-100">
                        <div className="card-body">B</div>
                    </div>
                    <div className="text-center border border-base-content card w-36 bg-base-100">
                        <div className="card-body">C</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnotherPage;