/* eslint-disable */
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'type-empty': [0, 'never'],
      'subject-empty': [0, 'never'],
      'subject-case': [2, 'always', 'sentence-case'],
      'must-contain-jira-ticket-ref': [2, 'always'],
      'header-max-length': [0], // Disable header length constraint, as we only use that for our Changelog generation
    },
    ignores: [(message) => message.startsWith('chore(release):')],
    plugins: [
      {
        rules: {
          'must-contain-jira-ticket-ref':  (parsed) => {
            // The rejex for matching a JIRA ticket reference is the following:
            // 1. Match a '['
            // 2. Match 1 or more 'A-Z' (only capital letters)
            // 3. Match '-'
            // 4. Match 1 or more '0-9'
            // 5. Match a ']'
            const jiraTicketRegex = /^([\[][A-Z]+-[0-9]+\])/;
            const finalMessage = parsed.subject || parsed.header;
            return [
                jiraTicketRegex.exec(finalMessage) !== null,
              `Subject must start with a JIRA ticket ref like: [TTS-3222]`,
            ];
          },
        },
      },
    ],
  };
  