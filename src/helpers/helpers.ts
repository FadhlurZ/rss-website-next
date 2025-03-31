export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const formattedDate = new Intl.DateTimeFormat("nl-NL", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);

  return formattedDate
}
