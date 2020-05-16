/*global expect*/
import { add } from '.';

describe ("add tests", () => {
    it("should return sum of two numbers",() => {
        expect(add(1,2)).toBe(3);
    });
})