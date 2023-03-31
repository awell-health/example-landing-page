/* eslint-disable @next/next/no-img-element */
import { ReactNode } from 'react'

export default function HostedPathwayStory() {
  const onStartSession = async (pathwayDefinitionId: string) => {
    const data = await fetch('/api/start-pathway-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pathwayDefinitionId,
      }),
    }).then((res) => res.json())

    window.location.href = data?.sessionUrl || ''
  }

  return (
    <form className="text-center">
      <div className={`flex-col justify-center gap-3`}>
        <div className="mx-auto text-center mb-12">
          <h2 className={`text-xl font-bold text-gray-900`}>
            Please click on the area you live in to complete an eligibility
            assessment to receive NHS funded therapy (either one-to-one therapy
            or a digital course).
          </h2>
        </div>
        {/* space buttons vertically with 8px gap */}
        <div className={`w-8/12 mx-auto`}>
          <div className={`flex flex-col gap-8 justify-center`}>
            <button
              type="button"
              onClick={() => onStartSession('PqG0lfaC7FhK')}
              className={`px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:cursor-not-allowed`}
            >
              Hertfordshire
            </button>
            <button
              type="button"
              onClick={() => onStartSession('DQMuzHekOxc5')}
              className={`px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 disabled:cursor-not-allowed`}
            >
              South Staffordshire
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

HostedPathwayStory.getLayout = function getLayout(page: ReactNode) {
  return (
    <div className={`flex items-center justify-center min-h-screen py-2`}>
      <div className="w-8/12">{page}</div>
    </div>
  )
}