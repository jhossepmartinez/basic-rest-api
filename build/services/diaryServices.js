"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntriesWithoutComment = exports.getEntryById = exports.getEntries = void 0;
const diaryEntries_json_1 = __importDefault(require("./diaryEntries.json"));
const diaries = diaryEntries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
// Since we can end up not finding an entry with a given id,
// its necessary to include the undefined type for such case.
const getEntryById = (id) => {
    const entry = diaries.find(d => d.id === id);
    return entry;
};
exports.getEntryById = getEntryById;
const getEntriesWithoutComment = () => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        };
    });
};
exports.getEntriesWithoutComment = getEntriesWithoutComment;
const addEntry = () => undefined;
exports.addEntry = addEntry;
