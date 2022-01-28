import express from 'express';
import controller from '../controllers/yup';
import { Schemas, ValidateYup } from '../middleware/yup';

const router = express.Router();

router.post('/', ValidateYup(Schemas.data), controller.yupSampleRoute);

export = router;
