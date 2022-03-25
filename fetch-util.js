const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6bnNjZXFwa25zbnZ5dnJtZXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5NzEzOTksImV4cCI6MTk2MzU0NzM5OX0.0rQxsYTXfd8cbn-mlX01dpPccunID0HFXDu7koSZ5Ms';

const SUPABASE_URL = 'https://lznsceqpknsnvyvrmexq.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllPolls() {
  const data = await client
    .from('poll_tracker')
    .select('*');

  return data.body;
}

export async function createPoll(pastPoll) {
  const data = await client
    .from('poll_tracker')
    .insert(pastPoll);

    return data.body;
}

export async function signUp(someEmail, somePassword) {
  const data = await client.auth.signUp({
    email: someEmail,
    password: somePassword,
  });

  return data.user;
}

export async function signIn(someEmail, somePassword) {
  const data = await client.auth.signIn({
    email: someEmail,
    password: somePassword,
  });

  return data.user;
}

export async function getUser() {
  return client.auth.session();

}

export async function logout() {
  await client.auth.signOut();
}

export function redirectIfNotLoggedIn() {
  const user = getUser();

  if (!user) {
    window.location.href = '../';
  }
}