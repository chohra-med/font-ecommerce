export const maxCharFormatter = (text, MAX_LENGTH) => {
    if (!text) {
        return '';
    }
    if (text.length > MAX_LENGTH) {
        return `${text.substring(0, MAX_LENGTH - 3)}...`;
    }
    return text;
};

export const phoneFormatter = (phone) => {
    if (!phone) {
        return '';
    }
    return phone.replace(/\+(\d{3})(\d{2})(\d{2})(\d{2})(\d{2,})/, "+($2) $3 $4 $5 $6");
};

export const dateFormatter = (date) => {
    const d = new Date(date);
    return d.toLocaleString('qa-QA');
};
