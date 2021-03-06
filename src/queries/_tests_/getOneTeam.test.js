const getOneTeam = require("../getOneTeam");
const { refresh } = require("../../db/build.js");
const { team, error } = require("./test_fixtures");

describe("testing getOneTeam", () => {
  test(`getOneTeam returns the data in the team with the id of 1`, async () => {
    await refresh();
    expect(getOneTeam(1)).resolves.toEqual(team);
    await expect(getOneTeam("tea")).rejects.toThrow(
      "invalid input syntax for integer"
    );
  });
});
