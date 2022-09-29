// This file contains the project-specific configuration for the sidekick.
(() => {
    window.hlx.initSidekick({
      hlx3: true,
      libraries: [
        {
          text: 'Blocks',
          paths: ['https://main--milo--adobecom.hlx.page/docs/library/blocks.json'],
        },
      ],
      plugins: [
        {
          id: 'tools',
          condition: (s) => s.isEditor(),
          button: {
            text: 'Directory',
            action: async (_, s) => {
                const dirHandle = await window.showDirectoryPicker(); 
                const file = await dirHandle.getFileHandle();
                const content = await file.text();
                console.log(content);
            },
          },
        },
      ],
    });
  })();