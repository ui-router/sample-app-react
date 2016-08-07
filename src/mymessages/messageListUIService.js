import AppConfig from '../global/appConfig';

export function orderBy (predicate) {
  let descending = 1;
  if (predicate.charAt(0) === '+' || predicate.charAt(0) === '-') {
    descending = predicate.charAt(0) === '-' ? -1 : 1;
    predicate = predicate.substring(1);
  }
  return (a, b) => {
    let result = 0;
    let valA = a[predicate], valB = b[predicate];
    if (valA < valB) result = -1;
    if (valA > valB) result = 1;
    return result * descending;
  }
}

class MessageListUI {
  proximalMessageId (messages, messageId) {
    let sorted = messages.sort(orderBy(AppConfig.sort));
    let idx = sorted.findIndex(msg => msg._id === messageId);
    var proximalIdx = sorted.length > idx + 1 ? idx + 1 : idx - 1;
    return proximalIdx >= 0 ? sorted[proximalIdx]._id : undefined;
  }
}

let instance = new MessageListUI();
export default instance;