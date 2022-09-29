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
            action: (_, s) => {
                const pickerOpts = {
                    types: [
                        {
                        description: 'Directory',
                        accept: {
                            'image/*': ['.png', '.gif', '.jpeg', '.jpg']
                        }
                        },
                    ],
                    excludeAcceptAllOption: true,
                    multiple: false
                };
                window.showOpenFilePicker(pickerOpts);
            },
          },
        },
      ],
    });
  })();