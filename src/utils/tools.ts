export const bgColorDebug = (
  isDebugging: boolean = true,
  color: string,
): string => {
  return isDebugging ? color : 'rgba(0, 0, 0, 0)';
};

export const logIfDebugging = (
  isDebugging: boolean = true,
  target: any,
  header: string = '',
) => {
  if (isDebugging) {
    console.log(header);
    console.log(target);
  }
};
