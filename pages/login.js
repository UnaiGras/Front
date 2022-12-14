

export default function Login() {
    return(
        <div class="bg-gray-900 h-screen max-w flex justify-center items-center">
  <form class="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-500 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="bg-gray-500 shadow appearance-none  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none " id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-500 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="bg-gray-500 shadow appearance-none rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-green-500 hover:text-green-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
  </div>
    )
}