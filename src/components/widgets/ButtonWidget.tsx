

import { Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import { cn } from '../lib/utils';

const ButtonWidget = ({ className, children, disabled = false, isLoading = false, ...props }: ButtonWidgetProps) => {
  return (
    <Button className={cn('cursor-pointer', className)} {...props} disabled={disabled}>
      {children}
      {isLoading && <Loader2 className='animate-spin' />}
    </Button>
  );
};

export default ButtonWidget;
