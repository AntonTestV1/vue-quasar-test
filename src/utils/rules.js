export function useRules() {
  function isEmail(value) {
    if (!value) {
      return true;
    }
    const emailPattern =
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    return emailPattern.test(value) || 'Enter a valid email address';
  }

  function isOnlyDigits(value) {
    if (!value) {
      return true;
    }
    // just digits
    const phonePattern = /^\d/;
    return phonePattern.test(value.toString()) || 'Only digits are allowed';
  }

  function isDateExpired(value) {
    const stripped = value.replace(/[^0-9]/g, '');

    const error = 'Enter a valid date';

    // Check if the input is a valid MM/YY format
    if (stripped.length !== 4) {
      return true;
    }
    const month = stripped.slice(0, 2);
    const year = stripped.slice(2, 4);
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth() + 1;
    if (parseInt(month, 10) < 1 || parseInt(month, 10) > 12) {
      return error;
    }
    if (parseInt(year, 10) < currentYear % 100) {
      return error;
    }
    if (parseInt(year, 10) === currentYear % 100 && parseInt(month, 10) < currentMonth) {
      return error;
    }
    return true;
  }

  return { isOnlyDigits, isEmail, isDateExpired };
}
