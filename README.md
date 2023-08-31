<h1 align="center" style="font-size: 120px">Test Interview</h1>


## Section 1: Animation and Three.js

<h1 style="font-size: 26px">1.Explain the concept of keyframes in animations. How are they used to create smooth transitions between different states?</h1>
- Keyframes in animations are specific frames that define the state of an object at certain time points. Keyframes represent crucial states in the animation process. When creating an animation, keyframes are defined to create smooth transitions between these states. The animation system generates intermediate frames based on the keyframes to achieve seamless transitions.
<h1 style="font-size: 26px">2.Provide an example of a CSS property that can be animated using CSS animations. Write a basic CSS animation code snippet for this property.</h1>
- An example of a CSS property that can be animated is transform, used to create rotation effects. Below is a basic CSS animation code snippet:

<img width="100%" alt="image" src="https://github.com/nqcthedev/test-interview-uxpon/assets/80628653/3b848af8-8bae-486d-b4c4-97ea031d5b4e">

# 3.What is the purpose of requestAnimationFrame in JavaScript animations? How does it differ from using setTimeout or setInterval?

<strong>requestAnimationFrame</strong> is a method in JavaScript used to perform animations more efficiently. It runs at the browser's refresh rate, typically around 60 frames per second, ensuring smooth and resource-efficient animations.

Unlike <strong>setTimeout</strong> and <strong>setInterval</strong, <strong>requestAnimationFrame</strong> synchronizes with the browser's display loop, avoiding flickering or performance issues. It also leverages 