import { SEO } from '../src/components/SEO'
import HostedPathwayStory from './mindler'

export default function Home() {
  return (
    <>
      <SEO
        title="Complete Your Free Assessment"
        description=""
        preventCrawling={true}
        url="/"
        canonicalUrl="/"
      />
      <div
        className={`flex items-center justify-center min-h-screen sm:py-2 py-1`}
      >
        <div className="sm:w-8/12 w-10/12">
          <HostedPathwayStory />
        </div>
      </div>
    </>
  )
}
