import type { NextApiRequest, NextApiResponse } from 'next/types'

import { type StartHostedPathwaySessionPayload } from '@/types/generated/api.types'

const AWELL_API_ENDPOINT = process.env.GRAPHQL_API_URL || ''
const GRAPHQL_API_KEY = process.env.GRAPHQL_API_KEY || ''

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const { pathwayDefinitionId } = req.body

      const body = JSON.stringify({
        query: `
        mutation StartHostedPathwaySession(
          $input: StartHostedPathwaySessionInput!,
        ) {
          startHostedPathwaySession(input: $input) {
            session_id
            session_url
            stakeholder {
              type
              name
            }
            pathway_id
          }
        }`,
        variables: {
          input: {
            pathway_definition_id: pathwayDefinitionId,
            success_url: `https://customerwebsite.co.uk/success`,
            cancel_url: `https://customerwebsite.co.uk/cancel`,
          },
        },
      })

      const session = await fetch(AWELL_API_ENDPOINT, {
        method: 'POST',
        headers: {
          apiKey: GRAPHQL_API_KEY,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body,
        cache: 'default',
      })
        .then((response) => response.json())
        .then(
          (response) =>
            response.data
              .startHostedPathwaySession as StartHostedPathwaySessionPayload
        )

      res.status(200).send({ sessionUrl: session.session_url })
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      res.status(err.statusCode || 500).json(err.message)
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}
