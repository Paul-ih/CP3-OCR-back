const express = require("express");
const router = express.Router();

// RENVOI VERS CONTROLLERS
const stuffCtrl = require("../controllers/stuff");

// MIDDLEWARE D'AUTHENTIFICATION
const auth = require("../middleware/auth");

// MIDDLEWARE POUR UPLOAD IMAGE
const multer = require("../middleware/multer-config");

// CRÉER, MODIFIER, SUPPRIMER, LIRE 1, LIRE TOUS OBJETS
// ! pas d'auth vérification pour GET, pas nécessaire ?

router.get("/", stuffCtrl.getAllThings);
router.post("/", auth, multer, stuffCtrl.createThing);
router.put("/:id", auth, stuffCtrl.modifyThing);
router.delete("/:id", auth, stuffCtrl.deleteThing);
router.get("/:id", stuffCtrl.getOneThing);

module.exports = router;
