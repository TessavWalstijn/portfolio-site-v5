import React from 'react'
import P from 'shared-ui/components/Typography/Paragraph'
import H from 'shared-ui/components/Typography/Header'
import A from 'shared-ui/components/Typography/Link'
import Hr from 'shared-ui/components/Typography/BreakLine'
import { Markdown } from './styled-markdown.styled'

export interface StyledMarkdownProps {
  text: string
}

const StyledMarkdown: React.FC<StyledMarkdownProps> = ({ text }) => {
  return (
    <Markdown
      escapeHtml={false}
      source={text}
      renderers={{
        paragraph: props => (
          <P mt={0} mb={2} ml={3} mr={3} {...props} />
        ),
        heading: props => (
          <H mt={1} mb={2} variant={`h${props.level}`} {...props} />
        ),
        link: props => (
          <A tabIndex={0} {...props} />
        ),
        thematicBreak: props => (
          <Hr {...props} />
        )
      }}
    />
  )
}

export default StyledMarkdown
