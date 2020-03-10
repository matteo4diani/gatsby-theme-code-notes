/** @jsx jsx */
import { FunctionComponent } from 'react'
import { TagList } from '../TagList'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Heading, Flex, Box, Link } from 'theme-ui'
import { DateModified } from '../DateModified'

interface NoteListItemProps {
  name: string
  title: string
  emoji?: string
  dateModified: string
  tags: string[]
}

export const NoteListItem: FunctionComponent<NoteListItemProps> = ({
  name,
  title,
  dateModified,
  tags,
  emoji,
}) => {
  return (
    <Box as="article">
      <Link as={GatsbyLink} to={`/${name}`} variant="noteListItem">
        <Flex sx={{ justifyContent: 'space-between' }}>
          <Heading as="h3" variant="noteListItem">
            {emoji} {title}
          </Heading>
          <Flex sx={{ alignItems: 'center', flexShrink: 0 }}>
            {tags && <TagList tags={tags} asLinks={false} />}
            {dateModified && (
              <Box ml={2}>
                <DateModified>{dateModified}</DateModified>
              </Box>
            )}
          </Flex>
        </Flex>
      </Link>
    </Box>
  )
}
