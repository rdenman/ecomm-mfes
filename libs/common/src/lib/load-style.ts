export function loadStyle(id: string, href: string): Promise<void> {
  if (document.getElementById(id)) {
    return Promise.resolve();
  }

  return new Promise(function (resolve, reject) {
    const style = document.createElement('link');
    style.id = id;
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = href;
    style.onload = function () {
      resolve();
    };
    style.onerror = function (e) {
      reject(`Error loading stylesheet ${id}: ${e}`);
    };

    const head = document.querySelector('head');
    if (!head) {
      return reject('Unable to locate head element');
    }
    head.appendChild(style);
  });
}
