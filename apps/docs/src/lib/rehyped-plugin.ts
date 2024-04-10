export default function rehypeComponentParse(tree: any) { 
  const nodes = tree.children

  return Promise.all(nodes).then(() => tree);
};