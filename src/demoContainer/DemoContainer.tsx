import './Style.css';
import React  from 'react';

const DemoContainer: React.FC = (props) => {
    
    return (
        <>
            <div className='demo-area'>
               {props.children}
            </div>
        </>
    );
};

export default DemoContainer;
