import indexView from 'server/views/index';

export default (req, res, next) => {
  try {
    const html = indexView(req.client);
    res.status(200).end(html);
  } catch (e) {
    next(e);
  }
};
