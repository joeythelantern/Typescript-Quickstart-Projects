import express from 'express';
import controller from '../controllers/joi';
import { Schemas, ValidateJoi } from '../middleware/joi';

const router = express.Router();

router.post('/', ValidateJoi(Schemas.data), controller.joiSampleRoute);

export = router;
