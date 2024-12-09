# React useEffect Hook Dependency Error

This repository demonstrates a common error in React's `useEffect` hook related to dependencies. The example shows how an incorrectly specified dependency can lead to unexpected behavior, such as memory leaks or incorrect updates.

## Problem

The `useEffect` hook is used to perform side effects after a component renders. It takes two arguments: a function that performs the side effect, and an array of dependencies.

The dependency array specifies which values the `useEffect` hook should monitor. If any of these values change, the effect function will be re-run.

In this example, the dependency array is incorrectly specified. The `setInterval` function is not included in the dependency array, and only the timeout value is passed.  This means that the interval will never be cleared, leading to memory leaks.