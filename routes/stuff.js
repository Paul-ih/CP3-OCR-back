const express = require("express");
const router = express.Router();

// RENVOI VERS CONTROLLERS
const stuffCtrl = require("../controllers/stuff");

// MIDDLEWARE D'AUTHENTIFICATION
const auth = require("../middleware/auth");

// CRÉER, MODIFIER, SUPPRIMER, LIRE 1, LIRE TOUS OBJETS

router.post("/", auth, stuffCtrl.createThing);
router.put("/:id", auth, stuffCtrl.modifyThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);
// ! auth vérification aussi pour le get, pas nécessaire ?
router.get("/:id", stuffCtrl.getOneThing);
router.get("/", stuffCtrl.getAllThings);

module.exports = router;
