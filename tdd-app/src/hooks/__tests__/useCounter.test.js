// src/hooks/__tests__/useCounter.test.js
import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../useCounter';

test('should initialize counter and update count correctly', () => {
  const { result } = renderHook(() => useCounter(10));
  
  // დასტური საწყისი მნიშვნელობის
  expect(result.current.count).toBe(10);

  // ინკრემენტის შემოწმება
  act(() => result.current.increment());
  expect(result.current.count).toBe(11);

  // დეკრემენტის შემოწმება
  act(() => result.current.decrement());
  expect(result.current.count).toBe(10);
});