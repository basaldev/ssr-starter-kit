export default (req, res) => {
  try {
    res.status(200);
    res.renderStream();
  } catch (e) {
    res.status(500);
    throw e;
  }
};
