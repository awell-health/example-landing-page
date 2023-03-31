import { SEO } from '../src/components/SEO'
import HostedPathwayStory from './mindler'

export default function Home() {
  return (
    <>
      <SEO
        title="Complete Your Free NHS Assessment"
        description=""
        preventCrawling={true}
        url="/"
        canonicalUrl="/"
      />
      <div className={`flex items-center justify-center min-h-screen py-2`}>
        <div className="w-8/12">
          <HostedPathwayStory />
        </div>
      </div>
    </>
  )
}
