import React from 'react';

const types = {
  date: {
    regex: /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/,
    message: "Formato da data está incorreto"
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(null);

  function validate(value) {
    const itemType = types[type];
    
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    }else if(itemType && !itemType.regex.test(value)){
      setError(itemType.message);
      return false;
    }else {
      setError(null)
      return true;
    }
  }

  function onChange({ target }) {
    if (error) validate(target.value);
    setValue(target.value);
  }

  return {
    value,
    setValue,
    error,
    onChange,
    onBlur: () => validate(value),
    validate: () => validate(value),
    putValidate: (item) => validate(item),
  };
};

export default useForm;