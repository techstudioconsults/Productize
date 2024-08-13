import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectSingleComplaints, selectCurrentUser, useGetSingleComplaintsMutation } from '@productize/redux';

export const useComplaintDetails = () => {
    const [isLoading, setLoading] = useState(true);
    const { complaintID } = useParams();
    const [getSingleComplaint] = useGetSingleComplaintsMutation();
    const complaint = useSelector(selectSingleComplaints);
    const user = useSelector(selectCurrentUser);

    const fetchComplaintDetails = useCallback(async () => {
        try {
            const res = await getSingleComplaint({ complaintID }).unwrap();
            if (res) {
                setLoading(false);
            }
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    }, [getSingleComplaint, complaintID]);

    useEffect(() => {
        fetchComplaintDetails();
    }, [complaintID, fetchComplaintDetails]);

    return {
        complaint,
        user,
        isLoading,
        complaintID,
    };
};
