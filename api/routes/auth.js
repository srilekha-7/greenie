import express from "express";
import { db } from "../db.js";
const router = express.Router();

router.post("/account", (req, res) => {
  const q = "SELECT * FROM auth WHERE `email`=? and `password`=?";
  db.query(q, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      return res.json("error");
    }
    if (data.length) {
      return res.json("user already exists!!!");
    }

    const q =
      "INSERT INTO auth (`username`,`email`,`phone`,`date`,`password`) VALUES(?)";
    const values = [
      req.body.username,
      req.body.email,
      req.body.phone,
      req.body.date,
      req.body.password,
    ];
    db.query(q, [values], (err, data) => {
      if (err) {
        return res.json("ERROR OCCURRED");
      }
      return res.json(data);
    });
  });
});

router.get("/get", (req, res) => {
  const q = "SELECT * FROM auth";
  db.query(q, (err, data) => {
    if (err) {
      return res.json("error in server");
    }
    return res.json(data);
  });
});
export default router;
