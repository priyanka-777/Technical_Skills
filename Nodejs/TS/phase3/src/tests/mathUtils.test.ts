import { add, subtract, multiply, divide } from "../jest";
import { describe, it, expect } from "@jest/globals";

describe("Math Utils", () => {
    describe("Addition", () => {
    it("should add two numbers correctly", () => {
        expect(add(2, 3)).toBe(5);
        expect(add(0, 0)).toBe(0);
        expect(add(-1, -1)).toBe(-2);
        expect(add(100, -100)).toBe(0);
    });
});
    describe("Subtraction", () => {
        it("should subtract two numbers correctly", () => {
            expect(subtract(5, 2)).toBe(3);
            expect(subtract(0, 0)).toBe(0);
            expect(subtract(-1, 1)).toBe(-2);
            expect(subtract(100, -100)).toBe(200);
        });
    });
    describe("Multiplication", () => {
        it("should multiply two numbers correctly", () => {
            expect(multiply(4, 6)).toBe(24);    
            expect(multiply(0, 0)).toBe(0);
            expect(multiply(-1, 1)).toBe(-1);
            expect(multiply(100, -100)).toBe(-10000);
        });
    });
    describe("Division", () => {
        it("should divide two numbers correctly", () => {
            expect(divide(10, 2)).toBe(5);
            expect(divide(0, 1)).toBe(0);
            expect(divide(-1, 1)).toBe(-1);
            expect(divide(100, -100)).toBe(-1);
        });

    it("should throw an error when dividing by zero", () => {
        expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
    });
});

