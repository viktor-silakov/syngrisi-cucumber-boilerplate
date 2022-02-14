@visual
Feature: Simple Syngrisi Demo

    Scenario: Viewport
        When I open the url "https://ya.ru"
        When I pause for 1000ms
        When I set "123" to the inputfield "input#text"
        When I visually check viewport as "My page"

    Scenario: Element
        When I open the url "https://ya.ru"
        When I pause for 1000ms
        When I set "123" to the inputfield "input#text"
        When I pause for 3000ms
        When I visually check "form" element as "My form"
