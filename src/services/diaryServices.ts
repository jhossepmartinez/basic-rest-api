import { DiaryEntry, DiaryEntryWithoutComment, NewDiaryEntry } from "../types"
import diaryData from "./diaryEntries.json"

const diaries: Array<DiaryEntry> = diaryData as Array<DiaryEntry>

export const getEntries = (): Array<DiaryEntry> => diaries

// Since we can end up not finding an entry with a given id,
// its necessary to include the undefined type for such case.
export const getEntryById = (id: number): DiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    return entry
}

export const getEntriesWithoutComment = (): Array<DiaryEntryWithoutComment> => {
    return diaries.map(({id, date, weather, visibility}) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }

    diaries.push(newDiary)
    return newDiary
}  

