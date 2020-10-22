export const validateData = (format, value) => {
  if (!value) {
    return false;
  }
  if (format === 'PHONE') {
    const filteredValue = value
      .split('')
      .filter(i => i !== ' ' && i !== ')' && i !== '(' && i !== '-');
    const updatedValue = Number(filteredValue.join(''));
    const regexp = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
    // const regexp = /^(?:(\+))?(?:[0-9]{0,3}[\s.-]?)?(?:(?:\((?=\d{3}\)))?(\d{3})(?:(?!\(\d{3})\))?[\s.-]?)?(?:(?:\((?=\d{3}\)))?(\d{3})(?:(?!\(\d{3})\))?[\s.-]?)?(?:(?:\((?=\d{4}\)))?(\d{4})(?:(?!\(\d{4})\))?[\s.-]?)?$/;
    return regexp.test(updatedValue);
  }
  if (format === 'EMAIL') {
    const regexp = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
    return regexp.test(value);
  }
};
