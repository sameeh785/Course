import axios from 'axios';
import { toast } from 'react-toastify';


export const sendMessageToActivity = payload => async (dispatch) => {

    let callback = payload.callback;
    delete payload.callback;

    try {

        let res = await axios.post('/api/task/sendMessageToActivity', payload);

        if (res.data.success) {

            //Push only if its a new messge, new message new message will not have an ID
            if (!payload.message._id) {

                dispatch({
                    type: "MESSAGE_ADDD_TO_ACTIVITY",
                    payload: {
                        // cardID:payload.cardID,
                        laneID: payload.lane,
                        activityID: payload.activityID,
                        message: res.data.message
                    }
                });
            }
            callback(payload);

        }

    } catch (e) {

        callback(payload);
        toast.error(e.response ? e.response.data.error : 'Comment could not be saved!');

    }

}

export const deleteLane = (payload) => async dispatch => {

    let callback = payload.callback;
    delete payload.callback;

    try {
        const res = await axios.post('/api/task/deletelane', payload);

        if (res.data.success) {
            dispatch({
                type: "LANE_DELETED",
                payload: payload.laneID
            });
        }
        // toast.success("Section added!");
        callback(true);

    } catch (err) {
        toast.error("Oops, this lane could not be deleted!");
        callback(false);
    }
}

export const updateCardPosition = (payload) => async dispatch => {

    let callback = payload.callback;
    delete payload.callback;

    try {
        const res = await axios.post('/api/task/updateCardPosition/', payload);

        dispatch({
            type: "CARD_MOVED",
            payload: res.data
        })
        // toast.success("Section added!");
        callback(true);

    } catch (err) {
        toast.error("This card could not be moved!");
        callback(false);
    }
}

export const updateActivity = payload => async (dispatch) => {

    let callback = payload.callback;
    delete payload.callback;
    try {


        let res = await axios.post('/api/task/updateactivity', payload);

        if (res.data.success) {


            dispatch({
                type: "CARD_ACTIVITY_UPDATED",
                payload: payload
            });
            callback(payload);
        }

    } catch (e) {
        callback(payload);
        toast.error(e.response ? e.response.data.error : 'Card activity could not be updated!');

    }

}