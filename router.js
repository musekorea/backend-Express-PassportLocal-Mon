import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
  console.log(`Request path=`, req.path);
  res.render('home.pug');
});
router.post('/login', (req, res) => {
  req.session.isLogined = '모르겠어요';
  console.log(req.session, req.body);
});

export default router;
