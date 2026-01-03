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

type FormWrapperProps = {
  children: ReactNode;
  onSubmit: FormHTMLAttributes<HTMLFormElement>['onSubmit'];
  id?: string;
};

type LoginProps ={
  phone_number?: string
  name?: string
}

type Size = {
  size_id?: number;
  size_name?: string;
  price?: number | null;
  status?: boolean;
};

type ColorVariation = {
  color_id?: number;
  color_name?: string;
  color_images?: string[];
  status?: boolean;
  sizes?: Size[];
};

type ProductImage = {
  product_image?: string;
};

type Product = {
  id?: string;
  name?: string;

  product_images?: ProductImage[];
  variation_colors?: ColorVariation[];

  sale_price?: number;
  mrp?: number;
  discount?: number;
};

type ProductResponse = {
  products: Product[];
};

type ProductResponseTwo = {
  product: {
    id?: string;
    name?: string;
    product_images?: ProductImage[];
    variation_colors?: ColorVariation[];
    sale_price?: number;
    mrp?: number;
    discount?: number;
    sizes?: Size[];
    colors?: ColorVariation[];
  };
};

type ShowToastOptions = Omit<ToastOptions, 'duration'> & {
  duration?: number;
};

 type OrderItem = {
  order_id: string;
  created_date: string; 
  product_name: string;
  product_price: number;
  product_mrp: number;
  product_amount: number;
  quantity: number;
  product_image: string;
};

type OrderResponse = {
  orders: {
    orders: OrderItem[]
  };
};