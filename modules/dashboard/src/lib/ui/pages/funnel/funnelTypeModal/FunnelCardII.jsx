/* eslint-disable @nx/enforce-module-boundaries */
import { Box, Card, Flex, Image, Stack, Tag, Text, Spinner } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useDate, useTime } from '@productize/hooks';
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { useDeleteFunnel } from '../services/useDeleteFunnel';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useUpdateFunnel } from '../premium/AllProducts/service';
import { ToastFeedback, useToastAction } from '@productize/ui';

export const FunnelCardII = ({ template }) => {
  const { deleteFunnel } = useDeleteFunnel();
  const { isLoading, error, updateFunnel } = useUpdateFunnel();
  const { toast, toastIdRef, close } = useToastAction();

  const navigate = useNavigate();
  const formatDate = useDate();
  const formatTime = useTime();

  const { title, thumbnail, created_at, status } = template;

  const handleDelete = async () => {
    try {
      await deleteFunnel(template.id);
    } catch (err) {
      toast({
        title: 'Error deleting funnel.',
        description: 'An error occurred while deleting the funnel.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handlePreview = () => {
    window.open(template.url, '_blank', 'noopener,noreferrer');
  };

  const handleEdit = () => {
    navigate(`/dashboard/funnels/editor/${template.id}`, {
      state: { title: template.title, thumbnail: template.thumbnail, template: template.template, id: template.id },
    });
  };

  const handleReturnToDraft = async () => {
    try {
      await updateFunnel('', template.title, 'draft', '', template.id);
      toastIdRef.current = toast({
        position: 'top',
        render: () => <ToastFeedback btnColor="purple.200" message={`Funnel has been moved to draft successfully`} title="Funnel Update" handleClose={close} />,
      });
    } catch (err) {
      toast({
        title: 'Error updating funnel.',
        description: 'Failed to update the funnel. Please try again.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
          <DropdownActionDraft
            hasUrl={template.url}
            onReturn={handleReturnToDraft}
            onEdit={handleEdit}
            onPreview={handlePreview}
            onDelete={handleDelete}
            isLoading={isLoading}
            template={template}
          />
        </Box>
      </Flex>
      <Tag size="lg" colorScheme={status === 'draft' ? 'yellow' : 'green'}>
        {status}
      </Tag>
      {isLoading && (
        <Flex justifyContent="center" alignItems="center" mt={4}>
          <Spinner size="sm" color="purple.200" />
          <Text fontSize={`12px`} ml={2}>
            Processing...
          </Text>
        </Flex>
      )}
      {error && (
        <Text color="red.500" mt={2} fontSize="sm">
          {error.message || 'An error occurred. Please try again.'}
        </Text>
      )}
    </Box>
  );
};

const DropdownActionDraft = ({ template, hasUrl, onEdit, onPreview, onDelete, onReturn, isLoading }) => {
  const { hash } = useLocation();

  const disable = (name) => hash === name || isLoading;

  return (
    <Menu>
      <MenuButton as={IconButton} aria-label="Options" icon={<Icon icon="mdi:dots-vertical" />} variant="ghost" />
      <MenuList>
        {!hasUrl && (
          <>
            <MenuItem fontWeight={400} onClick={onEdit} isDisabled={disable()} icon={<Icon icon="mdi:pencil-outline" />}>
              <Text fontSize="sm">Edit Funnel Template</Text>
            </MenuItem>
            <Link to={`/dashboard/funnels/settings`} state={{ template }}>
              <MenuItem fontWeight={400} icon={<Icon icon="mdi:settings-outline" />}>
                <Text fontSize="sm">Settings</Text>
              </MenuItem>
            </Link>
          </>
        )}
        {hasUrl && (
          <>
            <MenuItem fontWeight={400} onClick={onPreview} isDisabled={disable()} icon={<Icon icon="mdi:eye-outline" />}>
              <Text fontSize="sm">Preview</Text>
            </MenuItem>
            <MenuItem fontWeight={400} onClick={onReturn} isDisabled={isLoading} color="green.500" icon={<Icon icon="fluent:drafts-20-regular" />}>
              <Text fontSize="sm">Return To Draft</Text>
            </MenuItem>
          </>
        )}
        {disable(`#deleted`) ? (
          <MenuItem fontWeight={400} onClick={onReturn} isDisabled={isLoading} color="green.500" icon={<Icon icon="fluent:drafts-20-regular" />}>
            <Text fontSize="sm">Return To Draft</Text>
          </MenuItem>
        ) : (
          <MenuItem fontWeight={400} onClick={onDelete} isDisabled={isLoading} icon={<Icon icon="mdi:delete-outline" />} color="red.500">
            <Text fontSize="sm">Delete</Text>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default FunnelCardII;
