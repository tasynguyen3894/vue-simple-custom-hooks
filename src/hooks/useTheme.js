export const useTheme = (key = 'theme') => {
  return (theme) => {
    document.documentElement.setAttribute(key, theme);
  }
}
