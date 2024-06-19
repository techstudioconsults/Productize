// hooks/useCustomerDetails.ts
import { useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectSingleCustomer, selectSingleCustomerOrders, useGetCustomerOrdersMutation, useGetSingleCustomerDetailsMutation } from '@productize/redux';
// import { Customer, Order } from './customers.types';

export const useCustomerDetails = () => {
    const { customerID } = useParams<{ customerID: string }>();
    const [getSingleCustomerDetails, { isLoading: isLoadingCustomerDetails }] = useGetSingleCustomerDetailsMutation();
    const [getCustomerOrders, { isLoading: isLoadingCustomerOrders }] = useGetCustomerOrdersMutation();
    const singleCustomer = useSelector(selectSingleCustomer);
    const singleCustomerOrders = useSelector(selectSingleCustomerOrders);

    const fetchCustomerDetails = useCallback(async () => {
        try {
            await getSingleCustomerDetails({ customerID }).unwrap();
            await getCustomerOrders({ customerID }).unwrap();
        } catch (error) {
            console.error(error);
        }
    }, [customerID, getCustomerOrders, getSingleCustomerDetails]);

    useEffect(() => {
        fetchCustomerDetails();
    }, [fetchCustomerDetails]);

    return { singleCustomer, singleCustomerOrders, isLoading: isLoadingCustomerDetails || isLoadingCustomerOrders };
};
