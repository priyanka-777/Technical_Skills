import { findUser, login } from "../jest";
import { describe, it, expect } from "@jest/globals";

describe("userAuthentication", () => {
    describe("findUser", () => {
        it("should return the user object for a valid username", () => {
            expect(findUser("gyan")).toEqual({ username: "gyan", password: "secure123" });
        });
        it("should return undefined for an invalid username", () => {
            expect(findUser("invalidUser")).toBeUndefined();
        });
    });
    describe("login", () => {
        it("should return true for valid credentials", () => {
            expect(login("gyan", "secure123")).toBe(true);
        });
        it("should return false for invalid credentials", () => {
            expect(login("gyan", "wrongPassword")).toBe(false);
        });
        it("should return false for a non-existent username", () => {
            expect(login("nonexistentUser", "password")).toBe(false);
        });
    });
});
