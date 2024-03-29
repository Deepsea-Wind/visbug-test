import * as Icons from "./vis-bug.icons";

export const VisBugModel = {
  g: {
    tool: "guides",
    icon: Icons.guides,
    label: "标尺",
    description: "测量距离(g)",
  },
  i: {
    tool: 'inspector',
    icon: Icons.inspector,
    label: '信息面板',
    description: '样式信息面板(i)',
  },
  // m: {
  //   tool:        'margin',
  //   icon:        Icons.margin,
  //   label:       '',
  //   description: 'Add or subtract outer space from any or all sides of the selected element(s)',
  // },
  p: {
    tool:        'padding',
    icon:        Icons.padding,
    label:       '内边距',
    description: `padding(p)`,
  },
  c: {
    tool:        'compare',
    icon:        Icons.search,
    label:       'ui比照',
    description: '像素对比(s)',
  },
};
