import { useEffect, useState } from 'react'
import { siteConfig } from '../../config/site'
import { Section } from '../ui/Section'
import { useReveal } from '../../hooks/useReveal'
import './GitHub.css'

type Profile = {
  public_repos: number
  followers: number
  html_url: string
  login: string
  avatar_url: string
}

type State =
  | { status: 'idle' | 'loading' }
  | { status: 'error'; message: string }
  | { status: 'success'; profile: Profile }

export function GitHubSection() {
  const reveal = useReveal(60)
  const [state, setState] = useState<State>({ status: 'idle' })
  const username = siteConfig.social.githubUsername

  useEffect(() => {
    if (!username) {
      setState({
        status: 'error',
        message: 'GitHub username is missing.',
      })
      return
    }

    const controller = new AbortController()
    let cancelled = false

    async function load() {
      setState({ status: 'loading' })
      try {
        const profileRes = await fetch(`https://api.github.com/users/${username}`, {
          signal: controller.signal,
          headers: { Accept: 'application/vnd.github+json' },
        })

        if (profileRes.status === 403) {
          throw new Error('GitHub API rate limit reached. Try again later.')
        }
        if (!profileRes.ok) {
          throw new Error('Could not load GitHub profile.')
        }

        const profile = (await profileRes.json()) as Profile
        if (!cancelled) {
          setState({ status: 'success', profile })
        }
      } catch (err) {
        if (cancelled || (err instanceof DOMException && err.name === 'AbortError')) {
          return
        }
        setState({
          status: 'error',
          message:
            err instanceof Error
              ? err.message
              : 'Something went wrong loading GitHub data.',
        })
      }
    }

    void load()
    return () => {
      cancelled = true
      controller.abort()
    }
  }, [username])

  return (
    <Section
      id="github"
      eyebrow="GitHub"
      title="Find me on GitHub"
      lead="Profile overview — link through to see more."
    >
      <div ref={reveal.ref} className={`gh ${reveal.className}`} style={reveal.style}>
        {state.status === 'loading' || state.status === 'idle' ? (
          <p className="gh__status" role="status">
            Loading GitHub data…
          </p>
        ) : null}

        {state.status === 'error' ? (
          <div className="gh__error" role="alert">
            <p>{state.message}</p>
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="gh__profile-link"
            >
              Visit GitHub profile
            </a>
          </div>
        ) : null}

        {state.status === 'success' ? (
          <div className="gh__stats">
            <a
              className="gh__identity"
              href={state.profile.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={state.profile.avatar_url}
                alt=""
                width={48}
                height={48}
                loading="lazy"
              />
              <span>@{state.profile.login}</span>
            </a>
            <div className="gh__stat">
              <strong>{state.profile.public_repos}</strong>
              <span>Public repos</span>
            </div>
            <div className="gh__stat">
              <strong>{state.profile.followers}</strong>
              <span>Followers</span>
            </div>
          </div>
        ) : null}
      </div>
    </Section>
  )
}
