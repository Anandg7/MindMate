const express = require('express');
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const Journal = require("../models/Journaling");
const natural = require('natural');
// const aposToLexForm = require("apos-to-lex-form");
// const { WordTokenizer, SentimentAnalyzer, PorterStemmer } = require("natural");
// const SpellCorrector = require("spelling-corrector");
// const stopword = require("stopword");

// const tokenizer = new WordTokenizer();
// const spellCorrector = new SpellCorrector();
// spellCorrector.loadDictionary();

// const analyzer = new SentimentAnalyzer("English", PorterStemmer, "afinn");
// const { pipeline } = require("@xenova/transformers");

// Route 1: Get all the notes using GET request, login required
router.get('/fetchalljournal', fetchuser, async (req, res) => {
    try {
        const journals = await Journal.find({ user: req.user.id });
        res.json(journals);
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Internal server error");
    }
});

// Route 2: Add the journal entries using POST request, login required
router.post('/addjournal', fetchuser, [
    body('text', 'Enter some more about you').isLength({ min: 5 })
], async (req, res) => {
    try {
        const { text } = req.body;
        console.log(text);

        // Perform sentiment analysis to analyze emotions
        const emotion = await analyzeEmotions(text);

        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Create a new journal entry
        const jour = new Journal({
            text,
            emotion: emotion,
            user: req.user.id
        });

        // Save the journal entry
        const savedjour = await jour.save();
        res.json(savedjour);
    } catch (error) {
        console.error(error.message);
        res.status(500).json("Internal server error");
    }
});

// // Function to analyze emotions
// function analyzeEmotions(text){
//     if (!text.trim()) {
//       return 0;
//     }
  
//     const lexed = aposToLexForm(text)
//       .toLowerCase()
//       .replace(/[^a-zA-Z\s]+/g, "");
  
//     const tokenized = tokenizer.tokenize(lexed);
  
//     const fixedSpelling = tokenized.map((word) => spellCorrector.correct(word));
  
//     const stopWordsRemoved = stopword.removeStopwords(fixedSpelling);
  
//     const analyzed = analyzer.getSentiment(stopWordsRemoved);
  
//     if (analyzed >= 1) return 'positive'; // positive   
//     if (analyzed === 0) return 'neutral';
//     return 'negative';
//   }


async function analyzeEmotions(text) {
    try {
        const { pipeline } = await import("@xenova/transformers");
        const pipe = await pipeline('sentiment-analysis');
        const result = await pipe(text);
        const label = result[0].score;
        return label;
    } catch (error) {
        console.error('Error analyzing sentiment:', error);
        return null;
    }
}

// Example usage





module.exports = router;
