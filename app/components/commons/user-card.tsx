
export default function UserCard() {
  return (
    <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#121212] rounded-3xl text-white">
      <div className="size-48">
        <img src="/user.png" alt="user" className="rounded-full object-cover w-full h-full" />
      </div>
    </div>
  )
}
