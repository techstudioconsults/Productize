import { useUpgradePlanMutation } from "@productize-v1.0.0/modules/shared/redux";


export const usePlanUpgrade = () => {
  // mutations
  const [upgradePlan, upgradeStatus] = useUpgradePlanMutation();

  const upgrade = async () => {
    try {
      await upgradePlan(null).unwrap();
    } catch (error: any) {
      console.log(error);
    }
  };

  return { upgrade, upgradeStatus };
};
