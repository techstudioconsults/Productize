// // types/customer.ts
// export interface Customer {
//     id: string;
//     name: string;
//     email: string;
//     joined: string | number;
//     total_order: number;
//     total_transactions: number;
// }

// export interface Order {
//     id: string;
//     product: string;
//     date: string;
//     amount: number;
//     status: string;
// }

// export interface CustomerInfoProps {
//     // singleCustomer: Customer;
//     isLoading: boolean;
//     copyTextToClipBoard: () => void;
// }

export interface CopyTextFeedbackProps {
    textToCopy: string;
}