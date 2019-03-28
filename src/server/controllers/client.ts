import devProxy from 'server/utils/devProxy';

export default async(req, res, next) => {
  try {
    const html = await devProxy(req.url);
    res.status(200).end(html);
  } catch (e) {
    next(e);
  }
};
