/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Card, Flex, Image, Stack, Tag, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useDate, useTime } from '@productize/hooks';
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { useDeleteFunnel } from '../services/useDeleteFunnel';
import { useLocation, useNavigate } from 'react-router-dom'; // Fixed hook import
import { useUpdateFunnel } from '../premium/AllProducts/service';

export const FunnelCardII = ({ template }) => {
  const { deleteFunnel } = useDeleteFunnel();
  const { updateFunnel } = useUpdateFunnel();
  const navigate = useNavigate(); // Corrected hook
  const formatDate = useDate();
  const formatTime = useTime();

  const handleDelete = async () => {
    await deleteFunnel(template.id);
  };
  const handlePreview = () => {
    window.location.replace(template.url); // No need for async here
  };
  const handleEdit = () => {
    navigate(`/dashboard/funnels/editor?edit=${template.title}`, {
      state: { title: template.title, thumbnail: template.thumbnail, template: template.template }, // Pass as state
    });
  };

  const handleReturnToDraft = () => {
    updateFunnel();
  };

  const { title, thumbnail, created_at, status } = template;

  return (
    <Box maxW="419px" p="30px" border="1px solid lightgrey" borderRadius="8px">
      <Card variant="unstyled" bgColor="purple.200" width="100%" h="150px" borderRadius="6px" overflow="hidden">
        <Image objectFit="cover" w="100%" h="100%" src={thumbnail} alt="template" />
      </Card>
      <Flex fontWeight="bold" my="13px" justifyContent="space-between">
        <Stack>
          <Text>{title}</Text>
          <Flex alignItems="center" color="grey.400">
            <Text className="tiny-text">{formatDate(created_at)}</Text>
            <Icon className="large-text" icon="mdi:dot" />
            <Text className="tiny-text">{formatTime(created_at)}</Text>
          </Flex>
        </Stack>
        <Box>
          <DropdownActionDraft hasUrl={template.url} onReturn={handleReturnToDraft} onEdit={handleEdit} onPreview={handlePreview} onDelete={handleDelete} />
        </Box>
      </Flex>
      <Tag size="lg" colorScheme={status === 'draft' ? 'yellow' : 'green'}>
        {status}
      </Tag>
    </Box>
  );
};

const DropdownActionDraft = ({ hasUrl, onEdit, onPreview, onDelete, onReturn }) => {
  const { hash } = useLocation();

  const disable = (name) => {
    return hash === name;
  };

  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Options" icon={<Icon icon="mdi:dots-vertical" />} variant="ghost" />
      <MenuList>
        <MenuItem fontWeight={400} onClick={onEdit} icon={<Icon icon="mdi:pencil-outline" />}>
          <Text fontSize="sm">Edit</Text>
        </MenuItem>
        {hasUrl && (
          <MenuItem fontWeight={400} onClick={onPreview} icon={<Icon icon="mdi:eye-outline" />}>
            <Text fontSize="sm">Preview</Text>
          </MenuItem>
        )}
        {disable(`#deleted`) ? (
          <MenuItem fontWeight={400} onClick={onReturn} color="green.500" icon={<Icon icon="fluent:drafts-20-regular" />}>
            <Text fontSize="sm">Return To Draft</Text>
          </MenuItem>
        ) : (
          <MenuItem fontWeight={400} onClick={onDelete} icon={<Icon icon="mdi:delete-outline" />} color="red.500">
            <Text fontSize="sm">Delete</Text>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default FunnelCardII;
