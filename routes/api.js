const router = require("express").Router();
const db = require("..models/exercise");

// Get for all workouts
router.get("api/workouts", (req, res) => {
    db.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Get
router.get("/api/workouts/range", (req, res) => {
    db.find()
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Post for creating workout
router.post("/api/workouts", ({ body }, res) => {
    db.create(body)
        .then((data) => {
            res.json(data);
        })
        .catch((err) => {
            res.json(err);
        });
});

// Put to update workouts
router.put("/api/workouts/:id", ({ body, params }, res) => {
	db.findByIdAndUpdate(params.id, { $push: { exercises: body } })
		.then((data) => {
			res.json(data);
		})
		.catch((err) => {
			res.json(err);
		});
});

module.exports =router;