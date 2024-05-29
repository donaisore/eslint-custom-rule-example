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
      unexpected: "{{ name }} を使わないで！",
    },
  },
  create(context) {
    const sourceCode = context.sourceCode;

    return {
      VariableDeclarator(node) {
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
    // const { hoge, fuga } = { hoge: 1, fuga: 2 };
    // ↓のようにシンプルに書くと、↑のパターンに対応できない
    // VariableDeclarator(node) {
    //   if (node.id.name === "hoge") {
    //     context.report({
    //       node,
    //       messageId: "unexpected",
    //       data: { name: "hoge" },
    //     });
    //   }
    // },
  },
};
