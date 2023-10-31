import NotificationHelper from './notification-helper';
import CONFIG from '../globals/config';

const WebSocketInitiator = {
  init(url) {
    const webSocket = new WebSocket(url);
    webSocket.onmessage = this._onMessageHandler;
  },

  _onMessageHandler(message) {
    console.log(message.data);
    console.log(JSON.parse(message.data));

    NotificationHelper.sendNotification({
      title: `${resto.title} is on cinema!`,
      options: {
        body: resto.overview,
        image: `${CONFIG.BASE_IMAGE_URL + resto.poster_path}`,
      },
    });
  },
};
export default WebSocketInitiator;
