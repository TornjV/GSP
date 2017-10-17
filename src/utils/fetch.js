export default args => {
  const { url, body, method } = args;

  if (body) {
    Object.keys(body).forEach(key => {
      if (body[key] === null) {
        delete body[key];
      }
    });
  }

  const newbody = JSON.stringify(body);
  const newargs = {
    body: newbody,
    method: method || 'GET',
    headers: {
      Accept: 'application/json',
    },
  };

  if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
    newargs.headers['Content-Type'] = 'application/json';
  }

  return window.fetch(url, newargs).then(response => {
    let promise = response.json();
    return promise.then(res => promise);
  });
};
