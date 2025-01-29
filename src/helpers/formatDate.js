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
  
  export const formatDateToDDMMYYYY = (isoString) => {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
  
    return `${day}/${month}/${year}`;
  };
  