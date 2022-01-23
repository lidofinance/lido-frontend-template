import { toast } from 'react-toastify';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default (message: string, type?: string) => {
  toast.configure();
  switch (type) {
    case 'error':
      toast.error(message, {
        position: toast.POSITION.TOP_LEFT,
      });
      break;
    default:
      toast.success(message, {
        position: toast.POSITION.TOP_LEFT,
      });
      break;
  }
};
