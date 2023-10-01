import { useSetPaymentPlan } from '@productize/shared/hooks';
import { selectCurrentUser } from '@productize/shared/redux';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

interface link {
  id: number;
  name: string;
  path: string;
  type: boolean;
  icon: string;
}

export const useLinks = () => {
  const isPremium = useSetPaymentPlan();
  const user = useSelector(selectCurrentUser);

  const [links1, setLinks1] = useState<Array<link>>();
  const [links2] = useState([
    {
      id: 1,
      name: `Downloads`,
      path: `downloads`,
      type: `free`,
      icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696087433/productize/Productize-iconset/Property_2_Downloads-folder_zb8tdq.svg`,
    },
    {
      id: 2,
      name: `Explore`,
      path: `/explore`,
      type: `free`,
      icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696087384/productize/Productize-iconset/Property_2_Compass_jfe95t.svg`,
    },
  ]);
  const [links3] = useState([
    {
      id: 1,
      name: `Help`,
      path: `help`,
      type: `free`,
      icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696086859/productize/Productize-iconset/Property_2_Chat_6_qlrj4q.svg`,
    },
    {
      id: 2,
      name: `Settings`,
      path: `settings`,
      type: `free`,
      icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696088273/productize/Productize-iconset/Property_2_Settings_4_tm54pe.svg`,
    },
    {
      id: 3,
      name: `Profile`,
      path: `profile/${user?.id}`,
      type: `free`,
      icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696088480/productize/Productize-iconset/Property_2_User_iiqfxz.svg`,
    },
  ]);

  useEffect(() => {
    setLinks1([
      {
        id: 2,
        name: `Products`,
        path: `products`,
        type: isPremium,
        icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696088139/productize/Productize-iconset/Property_2_Price_2_ugwdhq.svg`,
      },
      {
        id: 3,
        name: `Orders`,
        path: `orders`,
        type: isPremium,
        icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696086838/productize/Productize-iconset/Property_2_Cart_1_ubt3so.svg`,
      },
      {
        id: 4,
        name: `Analytics`,
        path: `analytics`,
        type: isPremium,
        icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696086853/productize/Productize-iconset/Property_2_Chart-pie_bygfly.svg`,
      },
      {
        id: 5,
        name: `Customers`,
        path: `customers`,
        type: isPremium,
        icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696088479/productize/Productize-iconset/Property_2_User-folder_n4spfl.svg`,
      },
      {
        id: 6,
        name: `Payouts`,
        path: `payouts`,
        type: isPremium,
        icon: `https://res.cloudinary.com/dkszgtapy/image/upload/v1696088492/productize/Productize-iconset/Property_2_Wallet_3_teopvy.svg`,
      },
    ]);
  }, [isPremium]);

  return { links1, links2, links3 };
};
