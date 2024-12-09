```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []); // Empty dependency array ensures that the effect runs only once on mount and unmount

  return <div>Count: {count}</div>;
}
```