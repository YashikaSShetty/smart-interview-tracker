import express from 'express';
import Role from '../models/Role.js'; 

const router = express.Router();

// GET /api/roles
router.get('/', async (req, res) => {
  try {
    const roles = await Role.find({}, 'name'); 
    const roleNames = roles.map(role => role.name);
    res.json({ roles: roleNames });
  } catch (err) {
    console.error("Error fetching roles:", err);
    res.status(500).json({ error: 'Server error while fetching roles' });
  }
});

export default router;