import React from "react";
import { useRouter } from "next/router";

function userOne({ user }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>CARGANDO...</div>;
  }

  return (
    <div className="card">
      <h3>User</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  // const paths = [
  //   { params: { id: '1' } },
  //   { params: { id: '2' } },
  // ];

  const paths = users.map((user) => {
    return {
      params: { id: `${user.id}` },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}

export default userOne;
