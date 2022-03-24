const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6bnNjZXFwa25zbnZ5dnJtZXhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDc5NzEzOTksImV4cCI6MTk2MzU0NzM5OX0.0rQxsYTXfd8cbn-mlX01dpPccunID0HFXDu7koSZ5Ms'//eslint-disable-line

const SUPABASE_URL = "https://lznsceqpknsnvyvrmexq.supabase.co" //eslint-disable-line

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllPolls() {
  const data = await client
    .from('poll_tracker')
    .select('*');

  return data.data;
}

export async function createPoll() {
  const data = await client
    .from('poll_tracker')
    .insert({ question: 'question', option_1:'Some Value', option_2:'Some Value', score_1: 0, score_2: 0 });

  return data.data;
}

export async function signup(email, password) {
  const data = await client.auth.signup({
    email: email,
    password: password,
  });

  return data.user;
}

export async function singIn(someEmail, somePassword) {
  const data = await client.auth.signIn({
    email: someEmail,
    password: somePassword,
  });

  return data.user;
}

export async function getUser() {
  return client.auth.user();

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