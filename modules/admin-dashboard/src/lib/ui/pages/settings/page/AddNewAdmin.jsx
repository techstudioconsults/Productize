// import { Box, Text } from '@chakra-ui/react'
// const AddNewAdmin = () => {
//   return (
//    <Box>
//     <Text> Add New Admin</Text>
//    </Box>
//   )
// }
// export default AddNewAdmin

import { Box, Text } from "@chakra-ui/react"
import { AdminUsersTable } from "../component/AdminUsersTable"
import { AddAdminModal } from "../component/AddAdminModal"


export const AddNewAdmin =()=>{
  return(
    <Box>
      <AdminUsersTable/>
      <AddAdminModal/>
    </Box>
  )
}





