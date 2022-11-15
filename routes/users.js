const express = require('express');

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/controller.js';
let users = [];
const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.get('/:id', getUser);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;