```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a non-function value as a dependency
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, 1000); // Only the 1000 is used as a dependency here

  return <div>Count: {count}</div>;
}
```