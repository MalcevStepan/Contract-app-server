const Router = require('express');
const router = new Router();
const adminRouter = require('./adminRouter');
const cathedraRouter = require('./cathedraRouter');
const courseRouter = require('./courseRouter');
const customerRouter = require('./customerRouter');
const userRouter = require('./userRouter');
const announceRouter = require('./announceRouter');
const fileRouter = require('./fileRouter');
const file2Router = require('./file2Router');
const file3Router = require('./file3Router');
const allCourseRouter = require('./allCourseRouter');
const yearRouter = require('./yearRouter');
const contractRouter = require('./contractRouter');
const journalRouter = require('./journalRouter');
const docFile1Router = require('./docFile1Router');
const docFile2Router = require('./docFile2Router');
const docFile3Router = require('./docFile3Router');
const docFile4Router = require('./docFile4Router');
const docFile5Router = require('./docFile5Router');
const napravFile1Router = require('./napravFile1Router');
const napravFile2Router = require('./napravFile2Router');
const napravFile3Router = require('./napravFile3Router');

router.use('/user', userRouter);
router.use('/admin', adminRouter);
router.use('/cathedra', cathedraRouter);
router.use('/course', courseRouter);
router.use('/customer', customerRouter);
router.use('/announce', announceRouter);
router.use('/files', fileRouter);
router.use('/files2', file2Router);
router.use('/files3', file3Router);
router.use('/allCourses', allCourseRouter);
router.use('/year', yearRouter);
router.use('/contract', contractRouter);
router.use('/journal', journalRouter);
router.use('/docFile1', docFile1Router);
router.use('/docFile2', docFile2Router);
router.use('/docFile3', docFile3Router);
router.use('/docFile4', docFile4Router);
router.use('/docFile5', docFile5Router);
router.use('/naprav1', napravFile1Router);
router.use('/naprav2', napravFile2Router);
router.use('/naprav3', napravFile3Router);


module.exports = router;