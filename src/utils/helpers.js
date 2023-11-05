export function minutesToHoursAndMinutes(minutes) {
  if (isNaN(minutes)) {
    return "Пожалуйста, введите числовое значение минут";
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes}м`;
  } else if (remainingMinutes === 0) {
    return `${hours}ч`;
  } else {
    return `${hours}ч ${remainingMinutes}м`;
  }
}

export function getCardsToAdd(screenWidth) {
  if (screenWidth < 500) {
    return 1;
  } else if (screenWidth >= 500 && screenWidth <= 768) {
    return 2;
  } else {
    return 4;
  }
}
