import './form-input.styles.scss';

const FormInput = ({ lable, inputOptions }) => {
  return (
    <div className='group'>
      <input className='form-input' {...inputOptions} />
      {lable && (
        <label
          className={`${
            inputOptions.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {lable}
        </label>
      )}
    </div>
  );
};

export default FormInput;
