export const formatDateToSpanishLong = (isoString) => {
    const meses = [
      "enero", "febrero", "marzo", "abril", "mayo", "junio",
      "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
    ];
  
    const date = new Date(isoString);
    const day = date.getDate();
    const month = meses[date.getMonth()];
    const year = date.getFullYear();
  
    return `${day} de ${month}, ${year}`;
  };
  