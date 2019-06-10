import Img from 'gatsby-image'
import React from 'react'
import { theme } from '../theme'
import { Card } from './Card'
import { LinkAreaAnchor } from './LinkAreaAnchor'
import { responsiveSpace } from './HorizontalList'

export const SpotifyCard = ({
  artist: { name, spotifyUrl, imagePath, fixed },
}) => (
  <div css={{ paddingTop: 10, paddingBottom: 70 }}>
    <Card
      css={[
        {
          position: 'relative',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)',
        },
        theme.mq({
          width: [`calc(100vw - 2 * ${responsiveSpace[0]})`, 320, 320, 320],
        }),
      ]}
    >
      <div
        css={[
          {
            height: 0,
            marginBottom: '100%',
          },
        ]}
      />
      <Img
        fixed={fixed}
        style={{
          position: 'absolute',
          zIndex: -1,
          width: '100%',
          height: '100%',
        }}
      />
      <div
        css={{
          position: 'absolute',
          background: 'linear-gradient(rgba(0,0,0,0) 61%, rgba(0,0,0, .83))',
          height: '100%',
          width: '100%',
        }}
      />
      <div
        css={{ position: 'absolute', bottom: 0, padding: theme.space.small }}
      >
        <LinkAreaAnchor
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          css={{
            fontSize: theme.fontSize.large,
            textDecoration: 'none',
            ':hover': {
              textDecoration: 'underline',
            },
            color: theme.color.white,
            wordBreak: 'break-word',
            fontWeight: 500,
          }}
        >
          {name}
        </LinkAreaAnchor>
      </div>
    </Card>
  </div>
)
