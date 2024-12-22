```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldIncrement, setShouldIncrement] = useState(true);

  useEffect(() => {
    if (shouldIncrement) {
      setCount(prevCount => prevCount + 1);
      setShouldIncrement(false); //Only run once
    }
  }, [shouldIncrement]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setShouldIncrement(true)}>Increment</button>
    </div>
  );
}
```