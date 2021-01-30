
import Axios from 'axios';
import { toast } from 'react-toastify';
import $ from 'jquery';

export const fetchVideoLinks = (content) => {

  return content.split(' ').filter((item) => {
    let expectedLink = item.match(/youtube.com\/watch\?/);
    return expectedLink;
  }).map((item) => {

    let index = item.indexOf('htt');
    if (index != -1) {
      item = item.slice(index).split('\n')[0];
    }

    return item;
  });

}

export const removeLinksExternal = (content) => {

  let $content = $('<div>' + content + '</div>');
  $content.find('a').attr('target', '_blank');
  let serializer = new XMLSerializer();

  return $content[0] ? serializer.serializeToString($content[0]) : content;

}

export const recordAudio = () => {
  return new Promise(resolve => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        mediaRecorder.addEventListener("dataavailable", event => {
          audioChunks.push(event.data);
        });

        const start = () => {
          mediaRecorder.start();
        };

        const stop = () => {
          return new Promise(resolve => {
            mediaRecorder.addEventListener("stop", () => {
              const audioBlob = new Blob(audioChunks);
              const audioUrl = URL.createObjectURL(audioBlob);
              const audio = new Audio(audioUrl);
              const play = () => {
                audio.play();
              };

              resolve({ audioBlob, audioUrl, play });
            });

            mediaRecorder.stop();
          });
        };

        resolve({ start, stop });
      });
  });
};

export const sendMessage = async (payload) => {

  let res = {};

  let data = payload.callback;

  delete payload.callback;

  try {

    let res = await Axios.post('/api/users/sendmessage', payload);

    if (res.data.success) {

      data();
      toast.success(res.data.message);
    }


  } catch (e) {

    toast.warn(res.response ? res.response.data.error : "Oops, We cannot receive your message right now!");

  }

}

export const sendInvites = async (payload) => {

  try {

    let res = await Axios.post('/api/project/updateInvites', payload);

    toast.success('Project invites updated successfully');

  } catch (e) {

    toast.error(e.response.data.error);

  }

}

export const searchItems = (searchText, ) => {


  return Axios.get('/api/users/search?query=' + searchText);

}