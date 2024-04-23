import React from "react";
import  ReactDOM  from "react-dom";

const AppLayout = () => {
    return (
    <div className="app">
        Rendered Correctly
    </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />); 