/** @jsx jsx */
import Prism from '@theme-ui/prism'

const theme = {
    pre: (props) => props.children,
    code: Prism
}

export default theme