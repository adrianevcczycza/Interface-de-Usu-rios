export async function getUsers() {
  const response = await fetch("https://randomuser.me/api/?results=10", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar usuários da API.");
  }

  const data = await response.json();

  return data.results.map((user) => ({
    id: user.login.uuid,
    fullName: `${user.name.first} ${user.name.last}`,
    email: user.email,
    phone: user.phone,
    cell: user.cell,
    city: user.location.city,
    state: user.location.state,
    country: user.location.country,
    nationality: user.nat,
    age: user.dob.age,
    imageLarge: user.picture.large,
    imageMedium: user.picture.medium,
    imageThumb: user.picture.thumbnail,
  }));
}