import Task from '../models/task'

import dotenv from "dotenv"
dotenv.config({ path: ".env" });

test('test-badkeys', () => {
    try {
        const task = new Task({
            badkey: "badvalue"
        })
    } catch(e) {
        expect(e.name == "ValidationError")
        expect(e.isJoi == true)
    }
});

test('test-incompletekeys', () => {
    try {
        const task = new Task({
            name: "Sample Task"
        })
    } catch (e) {
        expect(e.name == "ValidationError")
        expect(e.isJoi == true)
    }
});

test('test-validkeys', () => {
    const task = new Task({
        id: "id100",
        name: "Sample Task"
    })
    expect(task)
});

test('test-invalid-slug', () => {
    try {
        const task = new Task({
            id: "id100",
            name: "Sample Task",
            slug: "Sample Task"
        })
    } catch (e) {
        expect(e.name == "ValidationError")
        expect(e.isJoi == true)
    }
});

test('test-valid-slug', () => {
    const task = new Task({
        id: "id100",
        name: "Sample Task",
        slug: "Sample-Task"
    })
    expect(task)
});