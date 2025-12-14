export const getInitials = (username) => {
  if (!username) return "";
  return username.trim().charAt(0).toUpperCase();
};
