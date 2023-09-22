import read from "./reader";
import json from "./parser";
import GameSaving from "./GameSaving";

// export default class GameSavingLoader {
//     static load() {
//         return new Promise((resolve, reject) => {
//             read().then((data) => {
//                 return json(data)
//             })
//                 .then((value) => {
//                     resolve(new GameSaving(JSON.parse(value)))
//                 }).catch(e => {
//                 throw new Error(e)
//             })
//         })
//     }
// }
export default class GameSavingLoader {
    static async load() {
        try {
            const data = await read();
            const value = await json(data)
            const gameSave = new GameSaving(JSON.parse(value))
            return gameSave;
        } catch (e) {
            throw new Error(e)
        }
    }
}