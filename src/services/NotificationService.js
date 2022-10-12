import PushNotification from 'react-native-push-notification';
import DemoNotificationHandler from './NotificationHandler';

export default class NotificationService {
  constructor(onTokenReceived, onNotificationReceived) {
    DemoNotificationHandler.attachTokenReceived(onTokenReceived);
    DemoNotificationHandler.attachNotificationReceived(onNotificationReceived);
    PushNotification.getApplicationIconBadgeNumber(function (number) {
      if (number > 0) {
        PushNotification.setApplicationIconBadgeNumber(0);
      }
    });
  }

  checkPermissions(cbk) {
    return PushNotification.checkPermissions(cbk);
  }

  requestPermissions() {
    return PushNotification.requestPermissions();
  }

  cancelNotifications() {
    PushNotification.cancelLocalNotifications();
  }

  cancelAll() {
    PushNotification.cancelAllLocalNotifications();
  }

  abandonPermissions() {
    PushNotification.abandonPermissions();
  }
}
