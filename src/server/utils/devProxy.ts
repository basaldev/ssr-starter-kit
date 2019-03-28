import * as http from 'http';

const url = 'http://localhost:8080';

const isSourceMap = (url) => /\.\js\.map$/.test(url);

export default path => {
  if (isSourceMap(path)) {
    return Promise.resolve('');
  }
  return new Promise(resolve =>
    http.get(url + path, (res) => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => {
        body += chunk;
      });
      res.on('end', (res) => {
        resolve(body);
      });
    }));
};
