const getInputValidation = (labelName) => {
    switch (labelName) {
      case 'Pan Number':
        return {
          value: /^[A-Z]{5}[0-9]{4}[A-Z]$/,
          message: 'PAN Number must be in the format AZCPN3435R'
        };
      case 'GSTN Number':
        return {
          value: /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/,
          message: 'GSTN Number must be in the format 12ABCDE1234F1Z1'
        };
      case 'FSAII Number':
        return {
          value: /^FSA\d{7}$/,
          message: 'FSAII Number must start with FSA followed by 7 digits'
      };
      // Add more cases for other input fields
      default:
        return null;
    }
  };

  export default getInputValidation;