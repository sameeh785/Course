import React, { useState } from 'react';
import YouTube from 'react-youtube';

// import DateFnsUtils from '@date-io/date-fns';
// import {
//   MuiPickersUtilsProvider,
//   KeyboardTimePicker,
//   KeyboardDatePicker,
// } from '@material-ui/pickers';



export default function WatchComponent(props) {

    let [videoAvaiable, setAvaiablility] = useState(true);

    return <div>
     
        {videoAvaiable == false ? <img src="/videoNoyFOund.png" /> : <YouTube videoId={props.match.params.vidID} onError={() => {
            setAvaiablility(false)
        }} />
    }
        </div>


}