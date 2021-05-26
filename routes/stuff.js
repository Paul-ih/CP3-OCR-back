const express = require("express");
const router = express.Router();

// RENVOI VERS CONTROLLERS
const stuffCtrl = require("../controllers/stuff");

// CRÉER, MODIFIER, SUPPRIMER, LIRE 1, LIRE TOUS OBJETS

router.post("/", stuffCtrl.createThing);
router.put("/:id", stuffCtrl.modifyThing);
router.delete("/:id", stuffCtrl.deleteThing);
router.get("/:id", stuffCtrl.getOneThing);
router.get("/", stuffCtrl.getAllThings);

module.exports = router;
