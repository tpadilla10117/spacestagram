import React , {useState, useEffect} from 'react';
import './Progressbar.scss';

function ProgressBar() {

    const [progress, setProgress] = useState(0);

    let progressInterval = null;

/* Interval on load: */
    useEffect( () => {
        progressInterval = setInterval( () => {
            setProgress(previous => previous + 1)
        }, 100);
    }, []);

/* Stop the counter at 100%: */
    useEffect( () => {
        if (progress >= 100) {
            clearInterval(progressInterval);
        }
    }, [progress]);



    return (
        <div className="progress" style={{ height: 30 }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
    );
};

export default ProgressBar;
