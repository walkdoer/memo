/**
 * memo language
 */

function init(monaco) {
  monaco.languages.register({ id: 'memo' });

  // Register a tokens provider for the language
  monaco.languages.setMonarchTokensProvider('memo', {
    // brackets: [
    //   ['(', ')', 'bracket.parenthesis'],
    //   ['{', '}', 'bracket.curly'],
    //   ['[', ']', 'bracket.square'],
    //   ['<', '>', 'bracket.angle'],
    // ],

    tokenizer: {
      // keywords: ['{', '}', '<', '>', '(', ')', '[', ']'],
      root: [
        [/\d{1,2}\s*:\s*\d{1,2}/, 'time'],
        // [/\d\s*~\s*\d/, ['time.spliter']],
        [/(\{)(.*?)(\})/, ['class', 'class.content', 'class']],
        [/(<)(.*?)(>)/, ['project', 'project.content', 'project']],
        [/(\$)(.*?)(\$)/, ['version', 'version.content', 'version']],
        [/(\()(.*?)(\))/, ['task', 'task.content', 'task']],
        [/(#)(.*?)(#)/, ['subtask', 'subtask.content', 'subtask']],
        [/\[/, {
          token: 'tags',
          bracket: '@open',
          next: '@tag_list'
        }],
        [/\]/, {
          token: 'tags',
          bracket: '@close',
        }],
        [/(@\()(.*?)(\))/, ['people', 'people.content', 'people']],
        [/(\*)(.*?)(\*)/, ['address', 'address.content', 'address']],
        [/(!\[)(.*?)(\])/, ['estimate', 'estimate.time', 'estimate']],
      ],
      tag_list: [
        [/[^,\]]+/, 'tag'],
        [/,/, 'tag.splitter'],
        [/\s*\]/, { token: '@rematch', next: '@pop' }],
      ]
    },

  });

  monaco.editor.defineTheme('memo-light', {
    base: 'vs',
    inherit: false,
    rules: [
      { token: 'class', foreground: '4D58B5', fontStyle: 'bold' },
      { token: 'class.content', foreground: '0C3D9E' },
      { token: 'tags', foreground: 'dc6900' },
      { token: 'tag', foreground: 'ff9d00' },
      { token: 'tag.splitter', foreground: 'dc6900' },
      { token: 'project', foreground: '336f00' },
      { token: 'project.content', foreground: '2d8c00' },
      { token: 'version', foreground: 'a91717' },
      { token: 'version.content', foreground: 'cc0b0b' },
      { token: 'task', foreground: '16137b' },
      { token: 'task.content', foreground: '0700d8' },
      { token: 'subtask', foreground: '184c90' },
      { token: 'subtask.content', foreground: '0057ca' },
      { token: 'people', foreground: '199a8a' },
      { token: 'people.content', foreground: '05d2b9' },
      { token: 'address', foreground: '3c5a75' },
      { token: 'address.content', foreground: '5588b5' },
      { token: 'estimate', foreground: '86114a' },
      { token: 'estimate.time', foreground: 'd40068' },
      { token: 'time', foreground: '0f7fce' },
      { token: 'time.splitter', foreground: '1769a2' },
    ]
  });
}

export default {
  init,
};
