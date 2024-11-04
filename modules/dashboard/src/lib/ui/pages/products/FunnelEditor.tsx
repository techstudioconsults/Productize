import { useState } from 'react';
import type { Editor } from 'grapesjs';
import GrapesJsStudio from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';
import { Box } from '@chakra-ui/react';
import { template1 } from './templates';

export function FunnelEditor() {
    const [editor, setEditor] = useState<Editor>();

    const options = {
        licenseKey: 'a7a12ec76a304d27b4c0efff2a5903c92e618065ff5b469ea95fb4a68896911e',
        theme: `light`,
        project: {
            type: 'web',
            default: {
                pages: [
                    { name: 'Home', component: template1 },
                    { name: 'About', component: '<h1>About page</h1>' },
                    { name: 'Contact', component: '<h1>Contact page</h1>' },
                ],
            },
        },
    };

    const onReady = (editor: Editor) => {
        // console.log('Editor loaded', editor);
        setEditor(editor);
    };

    const getProjectData = () => {
        if (editor) {
            console.log({ projectData: editor?.getProjectData() });
        }
    };

    const getExportData = () => {
        if (editor) {
            console.log({ html: editor?.getHtml(), css: editor?.getCss() });
        }
    };

    return (
        <Box h={`100vh`}>
            <div className="p-1 flex gap-5">
                <button className="border rounded px-2" onClick={getProjectData}>
                    Log Project Data
                </button>
                <button className="border rounded px-2" onClick={getExportData}>
                    Log HTML/CSS
                </button>
            </div>

            <GrapesJsStudio onReady={onReady} options={options} />
        </Box>
    );
}
