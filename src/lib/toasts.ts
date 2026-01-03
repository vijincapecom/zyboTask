
import { AxiosError } from 'axios';
import { toast } from 'sonner';

type ToastType = 'success' | 'error' | 'warning' | 'info' | 'loading';

const DEFAULT_DURATIONS = {
  success: 4000,
  error: 5000,
  warning: 4500,
  info: 4000,
  loading: Infinity,
};

export interface ToastOptions {
  duration?: number;
  [key: string]: unknown;
}

export const showToast = (type: ToastType, message: string, options?: ToastOptions) => {
  const duration = typeof options?.duration === 'number' ? options.duration : DEFAULT_DURATIONS[type];
  const toastOptions = { ...options, duration };

  switch (type) {
    case 'success':
      return toast.success(message, toastOptions);
    case 'error':
      return toast.error(message, toastOptions);
    case 'warning':
      return toast.warning(message, toastOptions);
    case 'info':
      return toast.info(message, toastOptions);
    case 'loading':
      return toast.loading(message, toastOptions);
    default:
      return toast(message, toastOptions);
  }
}


export const showSuccessToast = (message: string, options?: Record<string, unknown>) => showToast('success', message, options);

export const showErrorToasts = (messageOrError: string | unknown, errorData?: unknown, options?: Record<string, unknown>) => {
  let finalMessage = '';
  let errorObj: unknown = {};

  if (typeof messageOrError === 'string') {
    finalMessage = messageOrError;
    errorObj = errorData;
  } else {
    errorObj = messageOrError;
  }

  if (errorObj instanceof AxiosError) {
    const status = errorObj.response?.status;
    const backendError = errorObj.response?.data?.error;

    const backendMessage = errorObj.response?.data?.error || errorObj.response?.data?.message || errorObj.message;

    if (backendError && typeof backendError === 'object') {
      const collectedErrors: string[] = [];

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      Object.entries(backendError).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          collectedErrors.push(...value);
        } else if (typeof value === 'string') {
          collectedErrors.push(value);
        }
      });

      if (collectedErrors.length > 0) {
        finalMessage += ` ${collectedErrors.join(', ')}`;
      }
    } else if (backendMessage) {
      finalMessage += ` ${backendMessage}`;
    } else if (status) {
      finalMessage += ` (Error ${status})`;
    }
  }

  showToast('error', finalMessage.trim(), options);
};