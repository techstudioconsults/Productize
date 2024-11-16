import { useState, useCallback } from 'react';
import GrapesJsStudio from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';
import { Box, Flex, Text } from '@chakra-ui/react';
import FunnelForm from '../form/FunnelForm';
import { useLocation, useNavigate } from 'react-router-dom';

export function FunnelEditor() {
  const [editor, setEditor] = useState(null);
  const navigate = useNavigate();
  const {
    pathname,
    state: { title, template, thumbnail },
  } = useLocation();

  const options = {
    licenseKey: 'a7a12ec76a304d27b4c0efff2a5903c92e618065ff5b469ea95fb4a68896911e',
    theme: 'light',
    pages: false,
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
      content: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <style>${css}</style>
      </head>
      <body>${html}</body>
      </html>
    `,
    };
  }, [editor]);

  return (
    <Box position="relative" height="100vh">
      <Flex align="center" justify="space-between" px={8} py={5}>
        <Text as="h4" fontSize="24px">
          {title}
        </Text>
        <FunnelForm templateData={generateTemplateData} title={title} thumbnail={thumbnail} />
      </Flex>
      <GrapesJsStudio onReady={handleEditorReady} options={options} />
    </Box>
  );
}
