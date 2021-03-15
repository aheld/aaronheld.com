import Container from './container'

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with Next.js, can't wait to see what I can do once I read the docs.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/aheld/aaronheld.com`}
              className="mx-3 font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
        Photo Credits: https://unsplash.com/photos/NalJfNwE59I
      </Container>
    </footer>
  )
}
