import { format } from "date-fns";
export const formatDate = (dateString) => {
  return format(new Date(dateString), "EEE d MMM");
};
export const formatTime = (dateString) => {
  if (!dateString || isNaN(new Date(dateString).getTime())) {
    return "Invalid time";
  }
  return format(new Date(dateString), "hh:mm a");
};
export const formatDateInYear = (dateString) => {
  if (!dateString || isNaN(new Date(dateString).getTime())) {
    return "Invalid date";
  }
  return format(new Date(dateString), "EEE, d MMM yyyy");
};
export const formatNumber = (number) => {
  if (number >= 1_000_000) {
    return `${(number / 1_000_000).toFixed(1)}M`;
  } else if (number >= 1_000) {
    return `${(number / 1_000).toFixed(1)}k`;
  } else {
    return number.toString();
  }
};
