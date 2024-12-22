# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving an infinite loop caused by incorrect usage of the `useEffect` hook.  The `bug.js` file contains the faulty code, while `bugSolution.js` provides the corrected version.

The bug arises from including the state variable `count` in the dependency array of the `useEffect` hook. This creates a loop where the effect continuously updates the `count` state, triggering the effect again, and so on.

The solution demonstrates how to correctly manage the effect's dependencies. The solution uses a conditional effect.