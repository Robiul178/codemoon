import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional

const StringContent = () => (
    <Tippy content="Hello">
        <button>My button</button>
    </Tippy>
);

const PDF = () => {
    return (
        <Tippy content={<span>Tooltip</span>}>
            <button>My button</button>
        </Tippy>
    );
};

export default PDF;