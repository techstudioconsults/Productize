import { useSubscribeMutation } from '@productize/shared/redux';

export const usePlanUpgrade = () => {
  // mutations
  const [subscribe] = useSubscribeMutation();

  const upgrade = async () => {
    try {
      await subscribe(null).unwrap();
    } catch (error: any) {
      console.log(error);
    }
  };

  return upgrade;
};
