import { useSetPaymentPlan } from "@productize-v1.0.0/modules/shared/hooks";
import { selectCurrentUser } from "@productize-v1.0.0/modules/shared/redux";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import download from "@icons/Property_2_Downloads-folder_zb8tdq.svg";
import compass from "@icons/Property_2_Compass_jfe95t.svg";
import help from "@icons/Property_2_Chat_6_qlrj4q.svg";
import setting from "@icons/Property_2_Settings_4_tm54pe.svg";
import profile from "@icons/Property_2_User_iiqfxz.svg";
import product from "@icons/Property_2_Price_2_ugwdhq.svg";
import order from "@icons/Property_2_Cart_1_ubt3so.svg";
import analysis from "@icons/Property_2_Chart-pie_bygfly.svg";
import consumer from "@icons/Property_2_User-folder_n4spfl.svg";
import payment from "@icons/Property_2_Wallet_3_teopvy.svg";

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
            icon: download,
        },
        {
            id: 2,
            name: `Explore`,
            path: `/explore`,
            type: `free`,
            icon: compass,
        },
    ]);
    const [links3] = useState([
        {
            id: 1,
            name: `Help`,
            path: `help`,
            type: `free`,
            icon: help,
        },
        {
            id: 2,
            name: `Settings`,
            path: `settings`,
            type: `free`,
            icon: setting,
        },
        {
            id: 3,
            name: `Profile`,
            path: `profile/${user?.id}`,
            type: `free`,
            icon: profile,
        },
    ]);

    useEffect(() => {
        setLinks1([
            {
                id: 2,
                name: `Products`,
                path: `products#all-products`,
                type: isPremium,
                icon: product,
            },
            {
                id: 3,
                name: `Orders`,
                path: `orders`,
                type: isPremium,
                icon: order,
            },
            {
                id: 4,
                name: `Analytics`,
                path: `analytics`,
                type: isPremium,
                icon: analysis
            },
            {
                id: 5,
                name: `Customers`,
                path: `customers`,
                type: isPremium,
                icon: consumer,
            },
            {
                id: 6,
                name: `Payouts`,
                path: `payouts`,
                type: isPremium,
                icon: payment,
            },
        ]);
    }, [isPremium]);

    return { links1, links2, links3 };
};
