import { Grid, GridItem } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";

export interface TwoColumnLayoutProps {
    C1: React.ReactNode;
    C2: React.ReactNode;
}

export const TwoColumnLayout = ({ C1, C2 }: TwoColumnLayoutProps) => {
    const { pathname } = useLocation();
    const { productID } = useParams();

    return (
        <Grid templateRows="repeat(1, 1fr)" templateColumns="repeat(12, 1fr)" gap={4}>
            <GridItem colSpan={{ base: 12, xl: pathname === `/explore/product/details/${productID}` ? 8 : 12 }}>{C1}</GridItem>
            <GridItem colSpan={{ base: 12, xl: 4 }}>{C2}</GridItem>
        </Grid>
    );
};
