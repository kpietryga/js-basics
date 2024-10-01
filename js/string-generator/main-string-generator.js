import {textService} from "./text-service";

/**
 * The main function of the program that initializes the text service,
 * generates random text, and displays various statistics and transformations on that text.
 */
export const mainStringGenerator = () => {
    const service = textService()
    const m = service.getRandomNumber(1, 3);
    const n = service.getRandomNumber(10, 40);
    const t = service.generateRandomText(m, n);

    console.log("===== Generated Word =====")
    console.log(t.word);
    console.log("===== 1 =====")
    console.log(t.positions);
    console.log(t.findMaxDistanceChar());
    console.log("===== 2 =====")
    console.log("number of shifts", t.minShiftsToFront('A') || 0)
    console.log("===== 3 =====")
    console.log(t.generateSymmetricWords());

}
