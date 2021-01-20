import toType from "./toType";

describe("toType", () => {
    test("returns correct pattern", () => {
        const prefix = "TEST";
        const actionType = "SAY_SOMETHING";
        const type = toType(prefix);
        expect(type(actionType)).toBe(`${prefix}::${actionType}`);
    });
});
