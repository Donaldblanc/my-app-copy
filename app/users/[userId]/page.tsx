// routes with params example,

import { notFound } from "next/navigation";

const fetchUser = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`,
  );

  if (!response.ok) {
    return null;
  }

  const user = await response.json();
  return user;
};

const UserPage = async ({
  params,
}: {
  params: Promise<{ userId: string }>;
}) => {
  const { userId } = await params;
  const user = await fetchUser(userId);

  if (!user) {
    notFound();
  }

  return (
    <div>
      <h1>
        {" "}
        UserId: {userId} : {user.name}{" "}
      </h1>
      <p>
        {" "}
        <strong>EMAIl </strong> {user.email}
      </p>
    </div>
  );
};

export default UserPage;
