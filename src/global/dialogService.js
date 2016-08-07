class DialogService {
  constructor () {
    this.component = undefined;
  }

  confirm = (message, details = "Are you sure?", confirmMsg = "Yes", denyMsg = "No") => {
    if (typeof this.component === 'undefined') return Promise.reject(false);
    let promise = new Promise((resolve, reject) => {
      this.component.update(
        { message, details, confirmMsg, denyMsg },
        resolve, reject
      );
    });
    return promise;
  }

  __registerDialogComponent = (component) => {
    this.component = component;
  }
}

let instance = new DialogService();
export default instance;