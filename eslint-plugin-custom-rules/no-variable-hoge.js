export default {
  meta: {
    type: "suggestion",
    docs: {
      description: "Description of the rule",
      recommended: false,
      url: "https://eslint.org",
    },
    fixable: "code",
    schema: [], // no options
    messages: {
      unexpected: "Unexpected hoge.",
    },
  },
  create(context) {
    const sourceCode = context.sourceCode;

    return {
      VariableDeclaration(node) {
        const variables = sourceCode.getDeclaredVariables(node);
        variables.forEach((variable) => {
          const name = variable.name;

          if (name.includes("hoge")) {
            context.report({
              node,
              messageId: "unexpected",
              data: { name },
            });
          }
        });
      },
    };
  },
};
