const LoadingPagination: React.FC = () => {
  return (
    <nav>
      <ul className="list-style-none flex animate-pulse">
        <li>
          <div
            className={`relative block rounded px-3 py-1.5 mr-1.5 text-sm cursor-not-allowed
              bg-neutral-100 text-primary-700 animate-pulse
              dark:text-white dark:bg-neutral-700 dark:focus:bg-neutral-700
              dark:focus:text-primary-500`}
          >
            {'<<'}
          </div>
        </li>

        <li>
          <div
            className={`relative block rounded px-3 py-1.5 mr-1.5 text-sm cursor-not-allowed
                      bg-neutral-100 text-primary-700 animate-pulse
                      dark:text-white dark:bg-neutral-700 dark:focus:bg-neutral-700
                      dark:focus:text-primary-500`}
          >
            <span className=" text-gray-500">...</span>
          </div>
        </li>
        <li>
          <div
            className={`relative block rounded px-3 py-1.5 mr-1.5 cursor-not-allowed
                      bg-neutral-100 text-sm text-primary-700 animate-pulse
                      dark:text-white dark:bg-neutral-700 dark:focus:bg-neutral-700
                      dark:focus:text-primary-500`}
          >
            {'>>'}
          </div>
        </li>
      </ul>
    </nav>
  )
}

export default LoadingPagination
