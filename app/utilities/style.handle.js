import "construct-style-sheets-polyfill"
import { default as light_css } from "../styles/_variables_light.css"
import { default as visbug_light_css } from '../styles/vis-bug.element_light.css'
import { default as dark_css } from "../styles/_variables_dark.css"
import { default as visbug_dark_css } from '../styles/vis-bug.element_dark.css'
import { default as visBugStyle } from '../styles/vis-bug.element.css'

import { default as handle_css } from '../styles/handle.element.css'
import { default as handles_css } from '../styles/handles.element.css'
import { default as label_css } from '../styles/label.element.css'
import { default as distance_css } from '../styles/distance.element.css'
import { default as hover_css } from '../styles/hover.element.css'
import { default as gridline_css }   from '../styles/gridlines.element.css'
import { default as boxmodel_css }   from '../styles/box-model.element.css'
import { default as metatip_css }    from '../styles/metatip.element.css'
import { default as metatip_light_css }    from '../styles/metatip.element_light.css'
import { default as metatip_dark_css }     from '../styles/metatip.element_dark.css'
import { default as compareStyles } from "../styles/compare.element.css";


const constructStylesheet = (styles, stylesheet = new CSSStyleSheet()) => {
  stylesheet.replaceSync(styles);
  return stylesheet;
}

export const LightTheme = constructStylesheet(light_css);
export const VisBugLightStyles = constructStylesheet(visbug_light_css)
export const DarkTheme = constructStylesheet(dark_css);
export const VisBugDarkStyles = constructStylesheet(visbug_dark_css)
export const VisBugStyle = constructStylesheet(visBugStyle)

export const HandleStyles = constructStylesheet(handle_css)
export const HandlesStyles = constructStylesheet(handles_css)
export const LabelStyles = constructStylesheet(label_css)
export const DistanceStyles = constructStylesheet(distance_css)
export const HoverStyles = constructStylesheet(hover_css)
export const GridlineStyles = constructStylesheet(gridline_css)
export const BoxModelStyles = constructStylesheet(boxmodel_css)
export const MetatipStyles        = constructStylesheet(metatip_css)
export const MetatipLightStyles   = constructStylesheet(metatip_light_css)
export const MetatipDarkStyles    = constructStylesheet(metatip_dark_css)
export const CompareStyles = constructStylesheet(compareStyles)

