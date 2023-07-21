export const sliceText = (str: string, length?: number) => {
  if (str?.length > (length || 10)) {
    return str?.slice(0, length || 10) + "...";
  } else {
    return str?.slice(0, length || 10);
  }
};


export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
) => {
  let timeout: ReturnType<typeof setTimeout>;

  return (...args: Parameters<T>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};