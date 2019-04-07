export default async(req, res) => {
  try {
    res.status(200);
    res.devProxy();
  } catch (e) {
    res.status(500);
    throw e;
  }
};
