import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

interface dropProp {
  icon: string;
}

export const DropdownAction = ({ icon }: dropProp) => {
  return (
    <Menu>
      <MenuButton
        onClick={(e) => e.stopPropagation()}
        border={`none`}
        as={IconButton}
        aria-label="Options"
        icon={<Icon icon={icon} />}
        variant="outlined"
      />
      <MenuList zIndex={999}>
        <MenuItem justifyContent={`flex-start`}>Export data as</MenuItem>
        <MenuItem justifyContent={`flex-start`}>CSV</MenuItem>
        <MenuItem justifyContent={`flex-start`}>PDF</MenuItem>
      </MenuList>
    </Menu>
  );
};

export const DropdownActionDraft = ({ icon }: dropProp) => {
  return (
    <Menu>
      <MenuButton
        onClick={(e) => e.stopPropagation()}
        border={`none`}
        as={IconButton}
        aria-label="Options"
        icon={<Icon icon={icon} />}
        variant="outlined"
      />
      <MenuList zIndex={999}>
        <MenuItem justifyContent={`flex-start`}>Edit</MenuItem>
        <MenuItem justifyContent={`flex-start`}>Delete</MenuItem>
        <MenuItem justifyContent={`flex-start`}>Preview</MenuItem>
      </MenuList>
    </Menu>
  );
};

export const DropdownActionLive = ({ icon }: dropProp) => {
  return (
    <Menu>
      <MenuButton
        onClick={(e) => e.stopPropagation()}
        border={`none`}
        as={IconButton}
        aria-label="Options"
        icon={<Icon icon={icon} />}
        variant="outlined"
      />
      <MenuList zIndex={999}>
        <MenuItem justifyContent={`flex-start`}>Unpublish to drafts</MenuItem>
        <MenuItem justifyContent={`flex-start`}>Edit</MenuItem>
        <MenuItem justifyContent={`flex-start`}>Delete</MenuItem>
        <MenuItem justifyContent={`flex-start`}>Preview</MenuItem>
      </MenuList>
    </Menu>
  );
};

export const DropdownActionDelete = ({ icon }: dropProp) => {
  return (
    <Menu>
      <MenuButton
        onClick={(e) => e.stopPropagation()}
        border={`none`}
        as={IconButton}
        aria-label="Options"
        icon={<Icon icon={icon} />}
        variant="outlined"
      />
      <MenuList zIndex={999}>
        <MenuItem justifyContent={`flex-start`}>Recover to draft</MenuItem>
        <MenuItem justifyContent={`flex-start`}>Delete permanently</MenuItem>
        <MenuItem justifyContent={`flex-start`}>Preview</MenuItem>
      </MenuList>
    </Menu>
  );
};
