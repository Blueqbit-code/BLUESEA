const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Assicurati che esista il modello User
const router = express.Router();

// **REGISTRAZIONE**
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // **Controllo campi richiesti**
    if (!username || !email || !password) {
      return res.status(400).json({ error: "Tutti i campi sono obbligatori." });
    }

    // **Verifica se l'email esiste già**
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email già in uso." });
    }

    // **Cripta la password**
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // **Crea un nuovo utente**
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "Registrazione completata con successo!" });
  } catch (error) {
    console.error("Errore nella registrazione:", error);
    res.status(500).json({ error: "Errore del server" });
  }
});

// **LOGIN**
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // **Trova l'utente per email**
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Credenziali non valide." });
    }

    // **Verifica la password**
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Credenziali non valide." });
    }

    // **Genera il token JWT**
    const token = jwt.sign({ userId: user._id }, "YOUR_SECRET_KEY", {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login riuscito!", token });
  } catch (error) {
    console.error("Errore nel login:", error);
    res.status(500).json({ error: "Errore del server" });
  }
});

module.exports = router;
