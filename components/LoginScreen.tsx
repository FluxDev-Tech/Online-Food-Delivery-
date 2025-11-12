
import React, { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [isLoginView, setIsLoginView] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center h-full p-8 bg-gray-50">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">TacoDash</h1>
        <p className="text-gray-500 mt-2">Your favorite tacos, delivered.</p>
      </div>
      
      <div className="w-full max-w-xs">
        <div className="flex border border-gray-200 rounded-lg p-1 mb-6 bg-gray-200">
          <button
            onClick={() => setIsLoginView(true)}
            className={`w-1/2 py-2 text-sm font-semibold rounded-md transition-colors ${
              isLoginView ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-gray-500'
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsLoginView(false)}
            className={`w-1/2 py-2 text-sm font-semibold rounded-md transition-colors ${
              !isLoginView ? 'bg-white text-gray-800 shadow' : 'bg-transparent text-gray-500'
            }`}
          >
            Sign-up
          </button>
        </div>

        <form className="space-y-4">
          {!isLoginView && (
            <div>
              <label className="text-sm font-medium text-gray-700" htmlFor="name">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          )}
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            />
          </div>
          <div className="pt-2">
            <button
              type="button"
              onClick={onLogin}
              className="w-full bg-black text-white font-semibold py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isLoginView ? 'Login' : 'Create Account'}
            </button>
          </div>
          {isLoginView && (
            <div className="text-center">
              <a href="#" className="text-sm font-medium text-orange-600 hover:text-orange-500">
                Forgot password?
              </a>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
