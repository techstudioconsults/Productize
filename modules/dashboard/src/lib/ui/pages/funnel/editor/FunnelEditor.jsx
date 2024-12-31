/* eslint-disable @nx/enforce-module-boundaries */
import { useState, useCallback } from 'react';
import GrapesJsStudio from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';
import { Box, Flex, Text, Spinner, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react';
import FunnelForm from '../form/FunnelForm';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { SharedButton, ToastFeedback, useToastAction } from '@productize/ui';
import { useUpdateFunnel } from '../premium/AllProducts/service';

export function FunnelEditor() {
  const [editor, setEditor] = useState(null);
  const { toast, toastIdRef, close } = useToastAction();

  const { funnelID } = useParams();
  const navigate = useNavigate();
  const {
    pathname,
    state: { title, template, thumbnail },
  } = useLocation();

  const { isLoading, error, updateFunnel } = useUpdateFunnel();

  const options = {
    licenseKey: 'a7a12ec76a304d27b4c0efff2a5903c92e618065ff5b469ea95fb4a68896911e',
    theme: 'light',
    pages: true,
  };

  const handleEditorReady = useCallback(
    (editorInstance) => {
      setEditor(editorInstance);

      if (template) {
        editorInstance.DomComponents.getWrapper().set('content', template);
        editorInstance.setComponents(template);
        navigate(pathname, { state: { title, thumbnail } });
      } else {
        console.warn('No project HTML provided in state.');
      }
    },
    [template, title, navigate, pathname, thumbnail]
  );

  const generateTemplateData = useCallback(() => {
    if (!editor) return null;

    const html = editor.getHtml();
    const css = editor.getCss();

    return {
      content: `<!DOCTYPE html>
                <html lang="en">
                <head><style>${css}</style></head>
                <body>${html}</body>
                </html>`,
    };
  }, [editor]);

  const saveFunnel = async (status) => {
    const templateContent = generateTemplateData()?.content;

    if (!templateContent) {
      console.error('Template content is empty. Cannot save the funnel.');
      return;
    }

    await updateFunnel(templateContent, title, status, undefined, funnelID);

    if (!error) {
      navigate(`/dashboard/funnels#all-funnels`);
      toastIdRef.current = toast({
        position: 'top',
        render: () => (
          <ToastFeedback
            btnColor="purple.200"
            message={status === `draft` ? `Funnel edited successfully` : `Funnel published successfully`}
            title="Funnel Update"
            handleClose={close}
          />
        ),
      });
    }
  };

  return (
    <Box position="relative" height="100vh">
      <Flex align="center" justify="space-between" px={8} py={5}>
        <Text as="h4" fontSize="24px">
          {title}
        </Text>
        {!isLoading ? (
          <Flex gap={10} hidden={!funnelID}>
            <SharedButton
              text="Save Edit & Continue"
              width="fit-content"
              height="40px"
              bgColor="transparent"
              textColor="purple.200"
              borderRadius="4px"
              btnExtras={{ onClick: () => saveFunnel('draft') }}
              isDisabled={isLoading}
            />
            <SharedButton
              text="Save Edit & Publish"
              width="fit-content"
              height="40px"
              bgColor="purple.200"
              textColor="white"
              borderRadius="4px"
              btnExtras={{ onClick: () => saveFunnel('published') }}
              isDisabled={isLoading}
            />
          </Flex>
        ) : (
          <p>...Saving Funnel</p>
        )}

        <Box hidden={!!funnelID}>
          <FunnelForm templateData={generateTemplateData} title={title} thumbnail={thumbnail} />
        </Box>
      </Flex>

      {isLoading && (
        <Box position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
          <Spinner size="xl" color="purple.200" />
        </Box>
      )}

      {error && (
        <Alert status="error" mt={4}>
          <AlertIcon />
          <AlertTitle>{error.message}</AlertTitle>
        </Alert>
      )}

      <GrapesJsStudio onReady={handleEditorReady} options={options} />
    </Box>
  );
}
