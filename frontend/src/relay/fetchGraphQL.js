async function fetchGraphQL(text, variables) {

  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  const json = await response.json();
  return Array.isArray(json.errors) ? json.errors : json;
}

export default fetchGraphQL;
