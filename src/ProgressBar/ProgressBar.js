
import { useEffect, useState } from 'react';
import './ProgressBar.css';

const ProgressBar = (props) => {

    const [percentage, SetPercentage] = useState(0);
    const [width, setWidth] = useState(0);
    
    useEffect(()=> {

        setTimeout(() => {

            SetPercentage(percentage+1);
            setWidth(width+1);

            if (percentage === 99) {
                props.handleMessage();
            }

        }, 200);

    },[(percentage < 99) ? percentage : null])

    return (
        <div className='progress-bar'>
            <div className='progress' style={{width: width + "%"}}>
                <span>{percentage + "%"}</span>
            </div>
        </div>
    )
}

export default ProgressBar;
