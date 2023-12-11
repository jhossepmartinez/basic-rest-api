import express from "express"
import * as diaryServices from "../services/diaryServices"

const router = express.Router()

router.get("/", (_req, res) => {
    res.send(diaryServices.getEntries())
})

router.get("/:id", (req, res) => {
    const diary = diaryServices.getEntryById(+req.params.id)
    res.send(diary)
})

router.post("/", (req, res) => {
    try {
        const { date, weather, visibility, comment } = req.body // este req.body entrega datos sin tipado, ignora los tipos que ya se han definido.

        const newDiaryEntry = diaryServices.addDiary({
            date,
            weather,
            visibility,
            comment
        })

        res.json(newDiaryEntry)
    } catch (error: any) {
        res.status(400).send(error.message)
    }
})

export default router
