// hooks/useCustomerDetails.ts
import { useEffect, useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectSingleCustomer, selectSingleCustomerOrders, useGetCustomerOrdersMutation, useGetSingleCustomerDetailsMutation } from '@productize/redux';

export const useCustomerDetails = () => {
    const [isLoading, setLoading] = useState(true);
    const { customerID } = useParams<{ customerID: string }>();
    const [getSingleCustomerDetails] = useGetSingleCustomerDetailsMutation();
    const [getCustomerOrders] = useGetCustomerOrdersMutation();
    const singleCustomer = useSelector(selectSingleCustomer);
    const singleCustomerOrders = useSelector(selectSingleCustomerOrders);

    const fetchCustomerDetails = useCallback(async () => {
        try {
            const resA = await getSingleCustomerDetails({ customerID }).unwrap();
            const res = await getCustomerOrders({ customerID }).unwrap();
            if (resA.data) {
                setLoading(false);
            }
        } catch (error) {
            setLoading(false);
            console.error(error);
        }
    }, [customerID, getCustomerOrders, getSingleCustomerDetails]);

    useEffect(() => {
        fetchCustomerDetails();
    }, [fetchCustomerDetails]);

    return { singleCustomer, singleCustomerOrders, isLoading };
};
