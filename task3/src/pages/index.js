export default function Home({ posts }) {
  console.log({ posts });
  return (
    <section className="bg-white ">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-10 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">Our Blog</h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {
            posts.map((post) => {
              return (
                <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md ">
                  <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{post.title}</h2>
                  <p className="font-light text-gray-500 ">{post.body}</p>
                </article>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_limit=40`)
  const posts = await res.json()

  return { props: { posts } }
}

