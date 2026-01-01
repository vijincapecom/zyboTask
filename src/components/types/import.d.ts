type ChildrenLayoutProps = {
  children: ReactNode;
};

type ButtonWidgetProps = Buttonprop & {
  children: ReactNode;
  className?: string;
  disable?: string;
};


type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  rules?: Omit<RegisterOptions<T>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  error?: FieldError | string | null;
  defaultCountryVal?: string | undefined;
  icon?: ReactNode;
  required?: boolean;
  recommended?: boolean;
  onClick?: () => void;
  readOnly?: boolean;
  labelClassName?: string;
  errorClassName?: string;
  layoutClassName?: string;
  imageType?: string;
  imageClassName?: string;
  inputModeNew?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxWords?: number;
  wordClass?: string;
  star?: boolean;
  mainClassName?: string;
  defaultValue?: string;
  imageClassNameTwo?: string;
  labelUpload?: string;
  defaultImage?: string;
  wordCountClassName?: string;
  translations?: TranslationStructure;
};

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  rules?: Omit<RegisterOptions<T>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
  error?: FieldError | string | null;
  defaultCountryVal?: string | undefined;
  icon?: ReactNode;
  required?: boolean;
  recommended?: boolean;
  onClick?: () => void;
  readOnly?: boolean;
  labelClassName?: string;
  errorClassName?: string;
  layoutClassName?: string;
  imageType?: string;
  imageClassName?: string;
  inputModeNew?: string | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxWords?: number;
  wordClass?: string;
  star?: boolean;
  mainClassName?: string;
  defaultValue?: string;
  imageClassNameTwo?: string;
  labelUpload?: string;
  defaultImage?: string;
  wordCountClassName?: string;
  translations?: TranslationStructure;
};