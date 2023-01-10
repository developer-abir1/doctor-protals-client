import React from 'react';

const Login = () => {
  return (
    <div class="bg-gray-200 min-h-screen flex justify-center items-center">
      <form class="bg-white p-6 rounded-lg">
        <h1 class="text-lg font-medium mb-4">Login</h1>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for="email">
            Email
          </label>
          <input
            class="bg-gray-200 p-2 rounded-lg w-full"
            type="email"
            id="email"
            name="email"
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 font-medium mb-2" for="password">
            Password
          </label>
          <input
            class="bg-gray-200 p-2 rounded-lg w-full"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <button class="bg-indigo-500 text-white p-2 rounded-lg hover:bg-indigo-600">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
