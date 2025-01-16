
export default function UserCard() {
  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img src="/user.png" alt="user" className="rounded-full object-cover w-full h-full" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <div className="flex items-center gap-2">
          <h3 className="text-3xl font-bold min-w-0 overflow-hidden">
            User Dev
          </h3>
        </div>
        <p className="opacity-40">Eu faço produtos para a internet</p>
      </div>
    </div>
  )
}
