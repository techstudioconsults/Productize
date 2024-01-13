import { Box, Flex, Select } from "@chakra-ui/react";
// import NoDownload from "./empty-state/NoDownload";
import DownloadLists from "./active-state/DownloadLists";

export const Download = () => {
    return (
        <>
            {/* <NoDownload /> */}
            {/*  */}
            <Box>
                <Box my={10}>
                    <Flex justifyContent={`flex-start`}>
                        <Box>
                            <Select isDisabled fontWeight={`bold`} placeholder="All Download">
                                <option value="option1">Option 1</option>
                                <option value="option2">Option 2</option>
                                <option value="option3">Option 3</option>
                            </Select>
                        </Box>
                    </Flex>
                </Box>
                <DownloadLists />
            </Box>
        </>
    );
};
