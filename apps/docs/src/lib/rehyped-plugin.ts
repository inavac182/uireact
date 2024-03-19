export default function rehypeComponentParse(tree: any) { 
  console.log(tree);

  const nodes = tree.children

  console.log(nodes);

  return Promise.all(nodes).then(() => tree);
};