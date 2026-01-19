# Four-Function-Calculator

A compact browser calculator designed with a strong emphasis on visual craft. The script that powers the arithmetic is intentionally lean, leaving the interface to be shaped almost entirely by CSS. The result is a small, elegant tool where the styling isn’t decoration—it’s the core experience. The project blends glass-like surfaces, neon accents, soft shadows, and animated borders to create a lively yet balanced UI. Every piece of motion, from slow floating to subtle hue rotation, contributes to an interface that feels more like a refined widget than a simple calculator.

# Highlights

## Minimal Logic, Expressive Presentation

The JavaScript performs only the essential operations: addition, subtraction, multiplication, and division. Everything else—from atmosphere to tactility—is driven by CSS.

## Animated Environment

The background shifts hue over time, giving the page a quiet sense of motion. The calculator itself floats gently on the screen, maintaining a modern, polished look without dominating attention.

## Crystal-Glass Container

A translucent panel forms the main shell, softened with blur, saturation, and deep shadows. A slow-rotating conic border wraps the container, producing a subtle futuristic glow.

## Luminous Display

The input field uses gradients, inset shadows, and glowing accent text to give the readout a crisp, holographic character. Rounded corners and spacious padding keep it readable and comfortable.

## Tactile Buttons

The grid of buttons forms the interactive heart of the calculator:

* Soft beveled edges
* Responsive shadows
* Ripple effects using CSS variables
* Distinctive palettes for operators, clear, and equals

Hover animations shift color and light, while presses trigger scale changes and inner shadows for a convincing physical feel.

# Technical Notes

## Color & Lighting System

Core variables define gradients, glow levels, shadows, and transition timing. This makes the theme coherent and customizable through a single palette.

## Motion

Three key animations define the atmosphere:

* Background hue rotation
* Floating effect for the container
* A rotating conic border sweep

Each loop is slow and smooth to avoid distraction.

## Layout

A four-column grid arranges the buttons evenly while preserving breathing space. The equals key spans two columns to keep the layout familiar and ergonomic.

# File Structure

| File       | Description                                                       |
| ---------- | ----------------------------------------------------------------- |
| index.html | Markup container with display field and button grid               |
| style.css  | Main design: color system, gradients, shadows, animations, layout |
| script.js  | Tiny logic engine for arithmetic and button input                 |


# Personal Note

This project grew out of my interest in mathematics, much like several of my earlier projects. It’s a straightforward four-function calculator, which allows the JavaScript to remain very short compared to the rest of the code. The main focus was to explore how much CSS could be layered onto something this simple. In a way, the calculator serves more as a canvas for the styling than for the scripting. Since there are so many kinds of calculators out there, I’m interested in creating more projects based on different, more advanced types beyond the basic four-function design.
