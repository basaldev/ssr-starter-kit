import * as http from 'http';

const url = 'http://localhost:8080';

const isSourceMap = (url) => /\.\js\.map$/.test(url);

export default (req, res, next) => {
  res.devProxy = () => {
    if (isSourceMap(req.url)) return res.send('');
    return http.get(url + req.url, response => response.pipe(res));
  };
  next();
};
