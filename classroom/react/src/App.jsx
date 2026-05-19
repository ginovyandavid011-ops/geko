import Counter from "./features/counter/Counter";

import { useGetPostsQuery } from "./services/api";

function App() {
  const {
    data,
    isLoading,
    error,
  } = useGetPostsQuery();

  return (
    <div>
      <Counter />

      <hr />

      <h2>Posts</h2>

      {isLoading && <p>Loading...</p>}

      {error && <p>Error...</p>}

      {data?.slice(0, 5).map((post) => (
        <p key={post.id}>
          {post.title}
        </p>
      ))}
    </div>
  );
}

export default App;    