export default function debounce<F extends Function>(
  callback: F,
  wait: number,
  immediate = false,
) {
  let timeout: any;
  const callable = (...args: any) => {
      const later = () => {
          timeout = null;
          if (!immediate) callback.apply(callable, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) callback.apply(callable, args);
  };

  return callable;
}
