import toActionCreator from "./toActionCreator";

describe("toActionCreator", () => {

  it("should be able to directly compare using loosely comparison", () => {
    const type = "TEST";
    const action = toActionCreator(type);
    expect((action as unknown as String) == type).toBeTruthy();
  });

  it("should be identical with the api", () => {
    const type = "TEST";
    const action = toActionCreator(type);
    expect(action.test({ type })).toBeTruthy();
  })

});
