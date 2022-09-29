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
                for await (const entry of dirHandle.values()) {
                    console.log(entry.kind, entry.name);
                }
            },
          },
        },
      ],
    });
  })();