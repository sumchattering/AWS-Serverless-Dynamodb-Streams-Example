'use strict';

const Task = require('../models/task')

test('test-badkeys', () => {
    try {
        var task = new Task({
            badkey: "badvalue"
        })
    } catch(e) {
        expect(e.name == "ValidationError")
        expect(e.isJoi == true)
    }
});

test('test-incompletekeys', () => {
    try {
        var task = new Task({
            name: "Sample Task"
        })
    } catch (e) {
        expect(e.name == "ValidationError")
        expect(e.isJoi == true)
    }
});

test('test-validkeys', () => {
    var task = new Task({
        id: "id100",
        name: "Sample Task"
    })
    expect(task)
});

test('test-invalid-slug', () => {
    try {
        var task = new Task({
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
    var task = new Task({
        id: "id100",
        name: "Sample Task",
        slug: "Sample-Task"
    })
    expect(task)
});