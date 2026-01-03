
const FormWrapper = ({ children, onSubmit, id }: FormWrapperProps) => {
  return (
    <form onSubmit={onSubmit} noValidate id={id}>
      {children}
    </form>
  );
};

export default FormWrapper;
