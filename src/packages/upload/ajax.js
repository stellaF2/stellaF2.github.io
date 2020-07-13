export default function ajax(options) {
    const xhr = new XMLHttpRequest();
    const { onProgress, onSuccess, onError, action, filename, file } = options;
    xhr.onerror = function(e) {
        onError(e);
    }
    xhr.onload = function() {
        const result = xhr.responseText || xhr.response;
        onSuccess(JSON.parse(result));
    }
    xhr.onprogress = function(e) {
        if (e.total) {
            e.percent = e.loaded / e.total * 100;
        }
        onProgress(e);
    }
    xhr.open('post', action, true);
    const fd = new FormData();
    fd.append(filename, file);
    xhr.send(fd);
}