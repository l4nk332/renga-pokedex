export function flex(dir, wrap, align, justify, isInline) {
  return `
    display: ${isInline ? 'inline-flex' : 'flex'};
    flex-flow: ${dir} ${wrap};
    align-items: ${align};
    justify-content: ${justify};
  `
}

