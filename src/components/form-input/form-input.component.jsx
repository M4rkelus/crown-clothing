import { FormInputLabel, Input, Group } from './form-input.styles';

const FormInput = ({ lable, inputOptions }) => {
  return (
    <Group>
      <Input {...inputOptions} />
      {lable && (
        <FormInputLabel shrink={inputOptions.value.length}>
          {lable}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
